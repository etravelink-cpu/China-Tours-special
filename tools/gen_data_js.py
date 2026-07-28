# -*- coding: utf-8 -*-
"""
gen_data_js.py — 从 etrips_product.db 生成 assets/js/data.js (window.TOURS)
供 list.html 卡片网格 + detail.html 详情页使用。
这是前端产品展示的"单一真相"数据源（替代旧的 sample data.js）。

字段映射(DB -> window.TOURS):
  Internal_Product_Code -> id
  Product_Name_CN       -> nameZh (已加注[纯玩]/[超值]/...)
  Web_Category1         -> dest/destZh (经 DEST_KEY 映射)
  Departure_Pricing.MIN(Adult_Price_AUD) -> price ('A$N' 或 '待确认')
  Duration_Days         -> days
  Product_Category      -> tags (短名) / tagsEn (英文)
  Itinerary 文本        -> itinerary[] (按行拆, 详情页展示)
  Cost_Info 文本        -> includes/excludes/notes (按行拆或空)
图片: 按 dest 取 IMG_POOL 默认图(暂无产品级图, Product_Images 空表)
英文: nameEn/tagsEn 暂用占位(后续补), 保证结构完整不报错。
"""
import sqlite3, io, os, re, json

HERE = os.path.dirname(os.path.abspath(__file__))
DB = os.path.join(HERE, "..", "..", "etrips-universal-db", "etrips_product.db")
DB = r"D:/Hermes Agent/etrips-universal-db/etrips_product.db"
JS = os.path.join(HERE, "..", "assets", "js", "data.js")

DEST_KEY = {'中国':'china','亚洲':'asia','澳洲':'australia','新西兰':'nz','欧洲':'europe',
            '美加':'america','特别':'special','海岛':'island','其他':'other','邮轮':'cruise'}
IMG_POOL = {'china':['china.jpg','cn-westlake.jpg','cn-greatwall.jpg'],
            'asia':['asia.jpg','japan.jpg','bali.jpg'],
            'australia':['hero-sydney.jpg','au-sydney.jpg','au-uluru.jpg'],
            'nz':['nz.jpg','nz-queenstown.jpg'],
            'europe':['europe.jpg','paris.jpg','greece.jpg'],
            'america':['america.jpg','canada.jpg','usa.jpg'],
            'special':['special.jpg','antarctica.jpg'],
            'island':['island.jpg','fiji.jpg'],'other':['other.jpg'],'cruise':['cruise.jpg']}
CAT_ZH = {'超值特惠团':'超值','纯玩无购物团':'纯玩','含机票特别订制团':'含机票',
          '单门票·单项体验':'单门票','签证·其他':'签证'}
CAT_EN = {'超值特惠团':'Value','纯玩无购物团':'No-shopping','含机票特别订制团':'Flight-incl',
          '单门票·单项体验':'Ticket','签证·其他':'Visa'}

conn = sqlite3.connect(DB); c = conn.cursor()

# 取全部在线可见 + Active 的产品 (与网站前台一致过滤)
rows = c.execute("""
    SELECT p.Internal_Product_Code, p.Product_Name_CN, p.Web_Category1, p.Web_Category2,
           p.Duration_Days, p.Product_Category, p.Itinerary, p.Cost_Info, p.Status, p.Online_Visible,
           (SELECT COALESCE(MIN(Adult_Price_AUD),0) FROM Departure_Pricing WHERE Internal_Product_Code=p.Internal_Product_Code) as ad
    FROM Product_Master p
    WHERE p.Online_Visible=1 AND p.Status='Active'
""").fetchall()

def split_lines(txt):
    if not txt: return []
    return [x.strip() for x in re.split(r'[\n\r]+', txt) if x.strip()]

def to_itinerary(txt):
    """Itinerary 文本 -> [{titleZh, descZh}] 简单按行拆"""
    out = []
    for i, line in enumerate(split_lines(txt), 1):
        out.append({"titleZh": "第%d天" % i, "titleEn": "Day %d" % i,
                    "descZh": line, "descEn": line})
    return out

tours = []
for (code, name, wc1, wc2, days, cat, itin, cost, status, ov, ad) in rows:
    dk = DEST_KEY.get(wc1, 'other')
    img = 'assets/img/destinations/' + IMG_POOL.get(dk, ['other.jpg'])[0]
    price = ('A$%d' % int(ad)) if ad and int(ad) > 0 else '待确认'
    cat_zh = CAT_ZH.get(cat, cat or '')
    cat_en = CAT_EN.get(cat, cat or '')
    tags = [cat_zh] if cat_zh else []
    tagsEn = [cat_en] if cat_en else []
    itinerary = to_itinerary(itin)
    # Cost_Info 拆 includes/excludes/notes(简单按行, 详情页展示)
    cost_lines = split_lines(cost)
    tours.append({
        "id": code,
        "nameZh": name or '',
        "nameEn": name or '',   # 占位: 暂无英文, 后续补
        "dest": dk,
        "destZh": wc1 or '',
        "destEn": dk,
        "price": price,
        "priceEn": price,
        "days": days or 0,
        "tags": tags,
        "tagsEn": tagsEn,
        "img": img,
        "itinerary": itinerary,
        "hotels": [],
        "includes": cost_lines[:6] if cost_lines else [],
        "includesEn": cost_lines[:6] if False else [],
        "excludes": [],
        "excludesEn": [],
        "notes": [],
        "notesEn": [],
    })

conn.close()

# 写出 data.js
header = "// Etrips 国安易游 — 产品数据 (由 gen_data_js.py 从 etrips_product.db 自动生成)\n"
header += "// 单一真相: DB 中 Online_Visible=1 AND Status='Active' 的产品。请勿手改, 重跑生成器。\n\n"
body = "window.TOURS = " + json.dumps(tours, ensure_ascii=False, indent=1) + ";\n"
io.open(JS, 'w', encoding='utf-8').write(header + body)
print("已生成 data.js: %d 个产品 (Online_Visible=1 AND Status='Active')" % len(tours))
print("输出:", os.path.abspath(JS))
