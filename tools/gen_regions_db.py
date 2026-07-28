# -*- coding: utf-8 -*-
import json
import sqlite3, re, os, sys
from collections import OrderedDict
"""
gen_regions v2 (DB 版): 读后台 Product_Master + Departure_Pricing
-> 重建 region-plans.js 中 china/asia/island/america/europe/other 六个受管块
保留 australia/nz (手写静态, 不动)

三级结构: 大区(Web_Category1) -> 标准类目(Product_Category) -> 板块/城市(Web_Category3 中国 / Web_Category2 其他) -> 产品
- 空类目/空板块自动隐藏
- 每板块导航末尾挂一个「私人订制」入口(CTA, 非产品)
- 仅上线产品(Online_Visible=1)进入网站

用法:
  cd D:/Hermes Agent/etrips-site
  python tools/gen_regions_db.py
  (半自动: 生成后人工确认, 再同步 C 盘源站 git push)
"""
import sqlite3, re, io, os

DB = r"D:/Hermes Agent/etrips-universal-db/etrips_product.db"
JS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets','js','region-plans.js')
MANAGED = ['china','asia','island','america','europe','other','australia','nz','special','cruise']

# 大区 key -> (中文标题, 英文副标, 图片池)
REGION_META = {
 'china':  (('中国 · 分区行程规划','China Tours'),                ['china.jpg','cn-westlake.jpg','cn-greatwall.jpg']),
 'asia':    (('亚洲 · 分区行程规划','Asia Tours'),                ['asia.jpg','cn-westlake.jpg','japan.jpg']),
 'island':  (('海岛假日 · 度假天堂','Island Holidays'),            ['island.jpg','bali.jpg','fiji.jpg']),
 'america': (('美国 · 加拿大 · 南美','America & Canada'),          ['america.jpg','canada.jpg','usa.jpg']),
 'europe':  (('欧洲 · 经典环游','Europe Tours'),                   ['europe.jpg','paris.jpg','greece.jpg']),
 'other':   (('其他 · 更多目的地','Other Destinations'),           ['other.jpg','custom.jpg']),
 'australia': (('澳大利亚 · 全景旅游','Australia Region Tours'),   ['hero-sydney.jpg','au-sydney.jpg','au-uluru.jpg','au-apostles.jpg']),
 'nz':      (('新西兰 · 纯净之旅','New Zealand Tours'),            ['nz.jpg','nz-queenstown.jpg','nz-lake.jpg']),
 'special': (('特别 · 特殊行程','Special Tours'),                 ['special.jpg','antarctica.jpg']),
 'cruise':  (('邮轮 · 环球航线','Cruise Tours'),                 ['cruise.jpg','cruise2.jpg']),
}
REGION_KEY = {'中国':'china','亚洲':'asia','海岛':'island','美加':'america','欧洲':'europe','其他':'other','澳洲':'australia','新西兰':'nz','特别':'special','邮轮':'cruise'}

# 标准类目固定顺序(全局统一); 空则隐藏
CAT_ORDER = ['超值特惠团','纯玩无购物团','含机票特别订制团','单门票·单项体验','全部行程','私人订制','签证·其他']

def norm(s): return re.sub(r'\s+','', str(s)).strip()
def slug(name): return re.sub(r'[^一-龥a-zA-Z0-9]','', str(name))[:18]
def fmt_price(v):
    try:
        f=float(v); return '待确认' if f==0 else (str(int(f)) if f==int(f) else str(f))
    except: return '待确认'
def days_from(d, name):
    if d: return str(d)+'天'
    m=re.search(r'(\d+)\s*日', str(name)); return (m.group(1)+'天') if m else '待确认'

def rid(region, name, code):
    # 幂等: route id 直接由 region前缀 + 产品code 决定 (code 唯一), 多次调用返回同一值
    # 避免 nav 与 pane 各算一次导致 data-route 不一致(右侧空白 bug)
    code = re.sub(r'[^a-z0-9]','', str(code or '').lower()) if code else re.sub(r'[^一-龥a-zA-Z0-9]','', str(name or ''))[:18]
    return region[:2] + '-' + code

def board_of(item):
    # 板块键: 区域(wc3) 优先, 其次 城市(wc2), 空白则其他
    # 这样大区下产品按 区域→城市 两级统一排序主导划分
    return item['wc3'] or item['wc2'] or ''

def price_for(code):
    conn=sqlite3.connect(DB); c=conn.cursor()
    c.execute("SELECT Adult_Price_AUD,Child_No_Bed_AUD,Child_With_Bed_AUD,Single_Supplement_AUD,Mandatory_Tips_AUD FROM Departure_Pricing WHERE Internal_Product_Code=? LIMIT 1",(code,))
    r=c.fetchone(); conn.close()
    if not r: return (0,0,0,None,None)
    return r

def clean_name(n):
    # 去掉 SUP-CM 产品名写死的类目前缀:
    #  - 中国块: "中国超值特惠团 · " / "中国纯玩无购物团 · " (圆点)
    #  - 欧洲块: "【澳洲包机票】" / "【包机票】" (方括号)
    # 注意: 欧洲【红线】/【黄线】等线路标签不含"包机票", 不误删
    n = n or ''
    n = re.sub(r'^中国[^·]*·\s*', '', n)
    n = re.sub(r'^【[^】]*包机票】', '', n)
    return n

def pane(region, item, idx):
    def esc(t):
        # 转义会破坏外层模板字符串(反引号)与模板插值(${)的字符
        return (t or '').replace('`', "'").replace('${', '\\${')
    name=esc(clean_name(item['name'] or ''))
    code=item['code'] or ''
    days=days_from(item['days'], name)
    pa,pc,cw,single,tips = price_for(code)
    ridv=rid(region,name,code)
    # hero 图: SUP-CM 中国产品按类目用专属 banner; 其余用大区 banner 池
    if item.get('sup')=='SUP-CM' and region=='china':
        if item['cat']=='超值特惠团':
            img='assets/img/sup-cm/chaozhi_%02d.jpg'%(idx%5+1)
        elif item['cat']=='纯玩无购物团':
            img='assets/img/sup-cm/chunwan_%02d.jpg'%(idx%5+1)
        else:
            img='assets/img/sup-cm/chunwan_%02d.jpg'%(idx%5+1)
    else:
        img='assets/img/destinations/'+ REGION_META[region][1][idx%len(REGION_META[region][1])]
    pax=('A$ '+str(int(pa))) if pa else '待确认'
    pcx=('A$ '+str(int(pc))) if pc else '待确认'
    # 仅展示有值的价格项
    price_rows=[]
    price_rows.append(('成人报名费 Tour Fee','Adult',pa))
    price_rows.append(('儿童不占床 Child no bed','Child no bed',pc))
    price_rows.append(('儿童占床 Child with bed','Child with bed',cw))
    if single: price_rows.append(('单房差 Single suppl.','Single',single))
    if tips: price_rows.append(('综合服务费 Service fee','Service',tips))
    body=''.join('<tr><td class="item">%s<span class="en">%s</span></td><td class="price">%s</td></tr>'%(z,en,fmt_price(p)) for z,en,p in price_rows if p is not None)
    price_html='<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody>%s</tbody></table>'%body
    iti=esc(item['itin'] or '【行程安排】\n请在此处粘贴行程安排内容...')
    notes=esc(item['notice'] or '【参团须知】\n请在此处粘贴参团须知内容...')
    return (
    '    <div class="rp-route-pane" data-route="'+ridv+'" data-p-adult="'+str(int(pa) if pa else 0)+'" data-p-child="'+str(int(pc) if pc else 0)+'" data-p-infant="0">\n'
    '      <div class="rp-detail-hero" style="background-image:url(\''+img+'\')">\n'
    '        <span class="rp-badge">'+item['cat']+'</span>\n'\
    '        <div class="rp-detail-hero-in"><h3>'+name+'</h3>\n'
    '          <div class="rp-price-row">\n'
    '            <span class="rp-price-item"><b>大人</b> '+pax+'</span>\n'
    '            <span class="rp-price-item"><b>儿童</b> '+pcx+'</span>\n'
    '            <span class="rp-price-item"><b>婴儿</b> 待确认</span>\n'
    '          </div>\n'
    '        </div>\n'
    '      </div>\n'
    '      <div class="rp-tabs">\n'
    '        <div class="rp-tab active" data-tab="price">日期和价格</div>\n'
    '        <div class="rp-tab" data-tab="itinerary">行程安排</div>\n'
    '        <div class="rp-tab" data-tab="notes">参团须知</div>\n'
    '        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>\n'
    '      </div>\n'
    '      <div class="rp-tab-panel active" data-tab="price">\n'
    '        <div class="rp-summary"><div><b>行程天数</b>'+days+'</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>\n'
    + price_html +
    '        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>\n'
    '      </div>\n'
    '      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">\n'+iti+'\n</pre></div>\n'
    '      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">\n'+notes+'\n</pre></div>\n'
    '      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>\n'
    '    </div>')

def board_order(region, b):
    # 板块键现为 区域(wc3), 各区域固定排序(其余按原样)
    if region == 'nz':
        order = ['北岛', '南岛', '南北岛']
        return order.index(b) if b in order else 99
    if region == 'australia':
        # 州/区域固定顺序, 跨地区多地联游排最后
        order = ['新南威尔士州', '维多利亚州', '昆士兰', '西澳', '南澳', '北领地', '塔斯马尼亚', '跨地区多地']
        return order.index(b) if b in order else 50
    if region == 'china':
        # 区域顺序: 江南上海→北京西安→华南→西南→长江三峡→西北→华北中原
        order = ['江南上海', '北京西安', '华南', '西南', '长江三峡', '西北', '华北中原']
        return order.index(b) if b in order else 50
    # 美加/欧洲/亚洲: 区域单一, 顺序无关
    return 0

def build_block(region, items):
    # 按 类目 -> 板块 两级分组
    # 这些大区左侧导航隐藏"超值特惠团"和"单门票·单项体验"(产品未按类目区分, 统一归入"全部行程"按城市合并, 避免城市重复)
    HIDE_SUPER = {'australia','nz','europe','america','cruise','special'}
    cats=OrderedDict()
    for it in items:
        cat=it['cat'] or '纯玩无购物团'  # 空白(未选类别)默认纯玩无购物团
        if region in HIDE_SUPER:
            if cat in ('超值特惠团','单门票·单项体验'):
                cat = '全部行程'
            elif cat == '含机票特别团':
                cat = '含机票特别订制团'
            elif cat not in CAT_ORDER:
                cat = '全部行程'
        cats.setdefault(cat, OrderedDict())
        # 含机票特别订制团: 不按区域板块分, 全部平列到一个组
        if cat == '含机票特别订制团':
            b = '全部行程'
        else:
            b = board_of(it) or '其他'
        cats[cat].setdefault(b, []).append(it)
    nav=''; panes=''; idx=0
    for cat in CAT_ORDER:
        if cat not in cats: continue
        cat_routes=''
        # 板块按 board_order 固定排序
        boards = sorted(cats[cat].items(), key=lambda kv: board_order(region, kv[0]))
        for b, its in boards:
            b_display = '全部行程' if b == cat else b
            routes=''.join('        <div class="rp-route" data-route="'+rid(region,clean_name(x['name'] or ''),x['code'] or '')+'">'+clean_name(x['name'] or '')+'</div>\n' for x in its)
            cat_routes+=('        <div class="rp-group" data-group="'+b+'">\n          <div class="rp-group-title">'+b_display+' <span class="rp-arrow">▶</span></div>\n          <div class="rp-group-list">\n'+routes+'          </div>\n        </div>\n')
        nav+=('      <div class="rp-cat" data-cat="'+cat+'">\n        <div class="rp-cat-title">'+cat+' <span class="rp-arrow">▶</span></div>\n'+cat_routes+'      </div>\n')
        for b, its in boards:
            for x in its: panes+=pane(region,x,idx); idx+=1
    # 分区最下方统一咨询表单(所有指向表单集中于此, 不再散在每个分组); 复用全站 form-card/form-row/btn-gold 样式
    t = REGION_META[region][0][0]
    form_block = (
      '  <div class="rp-enquiry">\n'
      '    <div class="form-card" style="max-width:680px;margin:24px auto 0;">\n'
      '      <h3 style="font-family:var(--font-display);font-size:22px;margin:0 0 14px;">✨ 计划你的'+t.split(' · ')[0]+'？立即咨询</h3>\n'
      '      <form class="rp-enquiry-form" action="contact.html" method="get">\n'
      '        <input type="hidden" name="dest" value="'+region+'">\n'
      '        <div class="form-row" style="display:flex;gap:14px;flex-wrap:wrap;">\n'
      '          <input type="text" name="name" placeholder="您的称呼" required style="flex:1;min-width:160px;">\n'
      '          <input type="tel" name="phone" placeholder="联系电话" required style="flex:1;min-width:160px;">\n'
      '        </div>\n'
      '        <div class="form-row" style="display:flex;gap:14px;flex-wrap:wrap;">\n'
      '          <input type="date" name="depart" placeholder="出发日期" style="flex:1;min-width:160px;">\n'
      '          <input type="number" name="pax" placeholder="出行人数" min="1" style="flex:1;min-width:160px;">\n'
      '        </div>\n'
      '        <div class="form-row">\n'
      '          <textarea name="msg" placeholder="留言（想去的城市/偏好/预算等）" style="min-height:90px;"></textarea>\n'
      '        </div>\n'
      '        <button type="submit" class="btn-gold" style="border:none;cursor:pointer;padding:12px 28px;">提交咨询</button>\n'
      '      </form>\n'
      '    </div>\n'
      '  </div>\n'
    )
    (t,sub)=REGION_META[region][0]
    slides=''.join('    <div class="rp-slide'+(' active' if i==0 else '')+'" style="background-image:url(\'assets/img/destinations/'+b+'\')"></div>\n' for i,b in enumerate(REGION_META[region][1]))
    block = ('<div class="rp-banner">\n  <div class="rp-slides">\n'+slides+'  </div>\n'
    '  <div class="rp-banner-in">\n    <h1>'+t+'</h1>\n    <div class="rp-sub">'+sub+'</div>\n'
    '    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>\n  </div>\n</div>\n'
    '<div class="rp-layout">\n  <nav class="rp-nav2" aria-label="'+region+' 目的地">\n'+nav+'  </nav>\n'
    '  <div class="rp-detail-area">\n'+panes+'  </div>\n</div>\n\n'
    + form_block +
    '  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>')
    # 分块输出: 避免单一超大模板字符串被浏览器解析截断(中国块约970KB会触发该问题)
    CHUNK=40000
    chunks=[block[i:i+CHUNK] for i in range(0,len(block),CHUNK)]
    chunk_str=',\n'.join(json.dumps(c, ensure_ascii=False) for c in chunks)
    return '  window.REGION_PLANS.'+region+' = [\n'+chunk_str+'\n].join(\'\');'

from collections import OrderedDict
# --- 读 DB ---
conn=sqlite3.connect(DB); c=conn.cursor()
c.execute("""SELECT Internal_Product_Code,Product_Name_CN,Product_Category,Web_Category1,Web_Category2,Web_Category3,Duration_Days,Itinerary,Participation_Notice,Online_Visible,Status,Supplier_ID
FROM Product_Master WHERE (Online_Visible=1 AND Status='Active')""")
rows=c.fetchall(); conn.close()
items=[]
for r in rows:
    code,name,cat,wc1,wc2,wc3,days,itin,notice,ov,st,sid=r
    rk=REGION_KEY.get(wc1)
    if not rk: continue
    items.append({'code':code,'name':name,'cat':cat,'wc1':wc1,'wc2':wc2,'wc3':wc3,
                  'days':days,'itin':itin,'notice':notice,'sup':sid})

by_region=OrderedDict()
for it in items:
    # 含机票特别订制团(包机票行程)保留在各自大区板块(按类目分tab显示),
    # 同时复制一份到 special 板块作集中汇总(两处都显示, 不丢数据)
    rk = REGION_KEY[it['wc1']]
    by_region.setdefault(rk, []).append(it)
    if it['cat'] == '含机票特别订制团':
        by_region.setdefault('special', []).append(it)

blocks={rg:build_block(rg, its) for rg,its in by_region.items()}
# 预置所有 MANAGED 大区(即使无显示产品也生成空块, 确保隐藏大区被清空)
for _k in MANAGED:
    if _k not in blocks:
        blocks[_k]=build_block(_k, [])

# 仅含"有显示产品"的大区(供前端导航联动隐藏空大区)
VISIBLE = list(by_region.keys())
vis_line = "window.REGION_VISIBLE = " + str(VISIBLE) + ";\n"

# --- 热门线路(Is_Featured, 最多9, 按 Featured_Order) -> 供首页"最受欢迎线路" ---
fconn = sqlite3.connect(DB); fc = fconn.cursor()
fc.execute("""SELECT Internal_Product_Code,Product_Name_CN,Web_Category1,Web_Category2,Duration_Days,
                    (SELECT COALESCE(MIN(Adult_Price_AUD),0) FROM Departure_Pricing WHERE Internal_Product_Code=Product_Master.Internal_Product_Code) as ad
             FROM Product_Master WHERE Is_Featured=1 AND Online_Visible=1 AND Status='Active'
             ORDER BY Featured_Order ASC, Internal_Product_Code ASC LIMIT 9""")
DEST_KEY = {'中国':'china','亚洲':'asia','澳洲':'australia','新西兰':'nz','欧洲':'europe','美加':'america','特别':'special','海岛':'island','其他':'other','邮轮':'cruise'}
IMG_POOL = {'china':['china.jpg','cn-westlake.jpg','cn-greatwall.jpg'],'asia':['asia.jpg','japan.jpg','bali.jpg'],
            'australia':['hero-sydney.jpg','au-sydney.jpg','au-uluru.jpg'],'nz':['nz.jpg','nz-queenstown.jpg'],
            'europe':['europe.jpg','paris.jpg','greece.jpg'],'america':['america.jpg','canada.jpg','usa.jpg'],
            'special':['special.jpg','antarctica.jpg'],'island':['island.jpg','fiji.jpg'],'other':['other.jpg'],'cruise':['cruise.jpg','cruise2.jpg']}
feat=[]
for code,name,wc1,wc2,days,ad in fc.fetchall():
    dk = DEST_KEY.get(wc1,'other')
    img = 'assets/img/destinations/' + IMG_POOL.get(dk,['other.jpg'])[0]
    price = ('A$%d'%int(ad)) if ad and int(ad)>0 else '待确认'
    feat.append({'id':code,'nameZh':(name or '').replace('中国超值特惠团 · ','')[:28],
                 'dest':dk,'destZh':wc1,'days':days or 0,'price':price,'img':img,
                 'blurbZh':(name or '')[:40]})
fconn.close()
feat_line = "window.FEATURED = " + str(feat).replace("'",'"') + ";\n"

# --- 拆分写出: 每个大区独立小文件 region-<k>.js(避免单一2.5MB大文件被浏览器分段解析滞后) ---
import os
OUTDIR = os.path.dirname(JS)
# 聚合文件 region-plans.js: 仅声明变量 + 可见大区 + 热门线路
agg = "window.REGION_PLANS = window.REGION_PLANS || {};\n" + vis_line + feat_line
io.open(JS,'w',encoding='utf-8').write(agg)
REGION_FILES = []
for k in MANAGED:
    if k not in blocks: continue
    fn = os.path.join(OUTDIR, 'region-%s.js'%k)
    io.open(fn,'w',encoding='utf-8').write(blocks[k] + '\n')
    REGION_FILES.append('region-%s.js'%k)
print("已拆出子文件:", REGION_FILES)

# 验证写入结果
_v=io.open(JS,encoding='utf-8').read()
for _k in ['australia','nz','china']:
    fn = os.path.join(OUTDIR, 'region-%s.js'%_k)
    _seg = io.open(fn,encoding='utf-8').read()
    print('写入核实 %s 产品数:'%_k, len(re.findall(r'class="rp-route" data-route=', _seg)))

# 验证
for k in MANAGED:
    fn = os.path.join(OUTDIR, 'region-%s.js'%k)
    assert os.path.exists(fn), k
print("region-plans.js 已重建(DB版, 多文件). 受管板块产品数:", {k:len(by_region.get(k,[])) for k in MANAGED})
import subprocess
for k in MANAGED:
    if k not in blocks: continue
    fn = os.path.join(OUTDIR, 'region-%s.js'%k)
    try:
        r=subprocess.run(['node','-e',"new Function(require('fs').readFileSync(process.argv[1],'utf8'))",fn],capture_output=True,text=True)
        if r.returncode!=0:
            print("node 语法错误 %s:"%k, r.stderr[:120])
    except Exception as e:
        # 环境无 node 时跳过语法校验(不影响文件生成)
        pass
