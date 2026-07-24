# -*- coding: utf-8 -*-
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
MANAGED = ['china','asia','island','america','europe','other']

# 大区 key -> (中文标题, 英文副标, 图片池)
REGION_META = {
 'china':  (('中国 · 分区行程规划','China Tours'),                ['china.jpg','cn-westlake.jpg','cn-greatwall.jpg']),
 'asia':    (('亚洲 · 分区行程规划','Asia Tours'),                ['asia.jpg','cn-westlake.jpg','japan.jpg']),
 'island':  (('海岛假日 · 度假天堂','Island Holidays'),            ['island.jpg','bali.jpg','fiji.jpg']),
 'america': (('美国 · 加拿大 · 南美','America & Canada'),          ['america.jpg','canada.jpg','usa.jpg']),
 'europe':  (('欧洲 · 经典环游','Europe Tours'),                   ['europe.jpg','paris.jpg','greece.jpg']),
 'other':   (('其他 · 更多目的地','Other Destinations'),           ['other.jpg','custom.jpg']),
}
REGION_KEY = {'中国':'china','亚洲':'asia','海岛':'island','美加':'america','欧洲':'europe','其他':'other'}

# 标准类目固定顺序(全局统一); 空则隐藏
CAT_ORDER = ['超值特惠团','纯玩无购物团','含机票特别订制团','单门票·单项体验','私人订制','签证·其他']

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
    base = region[:2] + '-' + (slug(name) if not code else re.sub(r'[^a-z0-9]','', str(code).lower()))
    r=base; i=1
    while r in rid.seen: i+=1; r=base+str(i)
    rid.seen[r]=True; return r
rid.seen={}

def board_of(item):
    # 中国用 Web_Category3(板块); 其他大区用 Web_Category2(城市/区域)
    if item['wc1']=='中国':
        return item['wc3'] or ''
    return item['wc2'] or ''

def price_for(code):
    conn=sqlite3.connect(DB); c=conn.cursor()
    c.execute("SELECT Adult_Price_AUD,Child_No_Bed_AUD,Child_With_Bed_AUD,Single_Supplement_AUD,Mandatory_Tips_AUD FROM Departure_Pricing WHERE Internal_Product_Code=? LIMIT 1",(code,))
    r=c.fetchone(); conn.close()
    if not r: return (0,0,0,None,None)
    return r

def pane(region, item, idx):
    name=item['name'] or ''
    code=item['code'] or ''
    days=days_from(item['days'], name)
    pa,pc,cw,single,tips = price_for(code)
    ridv=rid(region,name,code)
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
    iti=item['itin'] or '【行程安排】\n请在此处粘贴行程安排内容...'
    notes=item['notice'] or '【参团须知】\n请在此处粘贴参团须知内容...'
    return (
    '    <div class="rp-route-pane" data-route="'+ridv+'" data-p-adult="'+str(int(pa) if pa else 0)+'" data-p-child="'+str(int(pc) if pc else 0)+'" data-p-infant="0">\n'
    '      <div class="rp-detail-hero" style="background-image:url(\''+img+'\')">\n'
    '        <span class="rp-badge">'+item['cat']+'</span>\n'
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

def build_block(region, items):
    # 按 类目 -> 板块 两级分组
    cats=OrderedDict()
    for it in items:
        cat=it['cat'] or '超值特惠团'
        if cat not in CAT_ORDER: cat='超值特惠团'
        cats.setdefault(cat, OrderedDict())
        b=board_of(it) or '其他'
        cats[cat].setdefault(b, []).append(it)
    nav=''; panes=''; idx=0
    for cat in CAT_ORDER:
        if cat not in cats: continue
        cat_routes=''
        for b, its in cats[cat].items():
            routes=''.join('        <div class="rp-route" data-route="'+rid(region,(x['name'] or ''),x['code'] or '')+'">'+(x['name'] or '')+'</div>\n' for x in its)
            # 每板块末尾挂私人订制入口(不挂 rp-route 类, 避免点击触发空白; 后续可接 contact 跳转)
            custom='        <div class="rp-custom" data-custom="1" data-board="'+b+'">✨ 私人订制（'+b+'）</div>\n'
            cat_routes+=('        <div class="rp-group" data-group="'+b+'">\n          <div class="rp-group-title">'+b+' <span class="rp-arrow">▶</span></div>\n          <div class="rp-group-list">\n'+routes+custom+'          </div>\n        </div>\n')
        nav+=('      <div class="rp-cat" data-cat="'+cat+'">\n        <div class="rp-cat-title">'+cat+' <span class="rp-arrow">▶</span></div>\n'+cat_routes+'      </div>\n')
        for b, its in cats[cat].items():
            for x in its: panes+=pane(region,x,idx); idx+=1
    (t,sub)=REGION_META[region][0]
    slides=''.join('    <div class="rp-slide'+((' active' if i==0 else '')+'\" style="background-image:url(\'assets/img/destinations/'+b+'\')"></div>\n') for i,b in enumerate(REGION_META[region][1]))
    return ('  window.REGION_PLANS.'+region+' = `\n'
    '<div class="rp-banner">\n  <div class="rp-slides">\n'+slides+'  </div>\n'
    '  <div class="rp-banner-in">\n    <h1>'+t+'</h1>\n    <div class="rp-sub">'+sub+'</div>\n'
    '    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>\n  </div>\n</div>\n'
    '<div class="rp-layout">\n  <nav class="rp-nav2" aria-label="'+region+' 目的地">\n'+nav+'  </nav>\n'
    '  <div class="rp-detail-area">\n'+panes+'  </div>\n</div>\n\n'
    '  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;')

from collections import OrderedDict
# --- 读 DB ---
conn=sqlite3.connect(DB); c=conn.cursor()
c.execute("""SELECT Internal_Product_Code,Product_Name_CN,Product_Category,Web_Category1,Web_Category2,Web_Category3,Duration_Days,Itinerary,Participation_Notice,Online_Visible,Status
FROM Product_Master WHERE (Online_Visible=1 OR Status='Active')""")
rows=c.fetchall(); conn.close()
items=[]
for r in rows:
    code,name,cat,wc1,wc2,wc3,days,itin,notice,ov,st=r
    rk=REGION_KEY.get(wc1)
    if not rk: continue
    items.append({'code':code,'name':name,'cat':cat,'wc1':wc1,'wc2':wc2,'wc3':wc3,'days':days,'itin':itin,'notice':notice})

by_region=OrderedDict()
for it in items:
    by_region.setdefault(REGION_KEY[it['wc1']],[]).append(it)

blocks={rg:build_block(rg, its) for rg,its in by_region.items()}

# --- 替换 region-plans.js 中受管块 ---
s=io.open(JS,encoding='utf-8').read()
for k in MANAGED:
    if k not in blocks: continue
    marker='window.REGION_PLANS.'+k+' = `'
    st=s.index(marker)
    i=s.index('`', st)+1; depth=1
    while i<len(s) and depth>0:
        if s[i]=='`': depth-=1
        i+=1
    end=i
    s=s[:st]+blocks[k]+s[end:]
io.open(JS,'w',encoding='utf-8').write(s)

# 验证
for k in MANAGED:
    assert ('window.REGION_PLANS.'+k+' = `') in s, k
print("region-plans.js 已重建(DB版). 受管板块产品数:", {k:len(by_region.get(k,[])) for k in MANAGED})
import subprocess
r=subprocess.run(['node','-e',"new Function(require('fs').readFileSync(process.argv[1],'utf8'))",JS],capture_output=True,text=True)
print("node 语法:", 'OK' if r.returncode==0 else r.stderr[:120])
