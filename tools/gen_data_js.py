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
           p.Is_Featured, p.Product_Intro, p.Participation_Notice,
           (SELECT COALESCE(MIN(Adult_Price_AUD),0) FROM Departure_Pricing WHERE Internal_Product_Code=p.Internal_Product_Code) as ad
    FROM Product_Master p
    WHERE p.Online_Visible=1 AND p.Status='Active'
""").fetchall()

def split_lines(txt):
    if not txt: return []
    return [x.strip() for x in re.split(r'[\n\r]+', txt) if x.strip()]

def to_itinerary(txt):
    """Itinerary 文本 -> detail.js 期望的 [{d, titleZh, titleEn, descZh, descEn,
    spotsZh, spotsEn, transportZh, transportEn, mealZh, mealEn, hotelZh, hotelEn}]
    DB 的 Itinerary 是纯文本(按行/按天)，没有结构化的景点/交通/餐饮/住宿，
    所以这些字段给空列表/空串兜底，detail.js 渲染时自动跳过。
    d 用 'D{n}' 格式(与 detail.js 的 .d 显示一致)。
    DB 的 Itinerary 纯文本按天分段: 数字行(如 1/2)是天数标记, 其后到下一个数字行前为该天描述。
    识别纯数字行作为分天符, 合并后续行作为当天 descZh; 非数字开头的首段归为第1天。"""
    lines = split_lines(txt)
    out = []
    cur = None
    day_idx = 0
    for line in lines:
        if re.fullmatch(r'\d{1,3}', line.strip()):
            day_idx += 1
            cur = {"d": "D%d" % day_idx, "titleZh": "第%d天" % day_idx, "titleEn": "Day %d" % day_idx,
                   "descZh": "", "descEn": "", "spotsZh": [], "spotsEn": [], "transportZh": "", "transportEn": "",
                   "mealZh": "", "mealEn": "", "hotelZh": "", "hotelEn": ""}
            out.append(cur)
        else:
            if cur is None:
                day_idx += 1
                cur = {"d": "D%d" % day_idx, "titleZh": "第%d天" % day_idx, "titleEn": "Day %d" % day_idx,
                       "descZh": "", "descEn": "", "spotsZh": [], "spotsEn": [], "transportZh": "", "transportEn": "",
                       "mealZh": "", "mealEn": "", "hotelZh": "", "hotelEn": ""}
                out.append(cur)
            cur["descZh"] = (cur["descZh"] + "\n" + line).strip()
            cur["descEn"] = cur["descZh"]
    return out

tours = []
for (code, name, wc1, wc2, days, cat, itin, cost, status, ov, is_feat, intro, notice, ad) in rows:
    dk = DEST_KEY.get(wc1, 'other')
    img = 'assets/img/destinations/' + IMG_POOL.get(dk, ['other.jpg'])[0]
    price = ('A$%d' % int(ad)) if ad and int(ad) > 0 else '待确认'
    cat_zh = CAT_ZH.get(cat, cat or '')
    cat_en = CAT_EN.get(cat, cat or '')
    tags = [cat_zh] if cat_zh else []
    tagsEn = [cat_en] if cat_en else []
    itinerary = to_itinerary(itin)
    introZh = (intro or '').strip()
    introEn = introZh  # 暂无英文, 复用中文
    participationNotice = (notice or '').strip()
    # Cost_Info 拆 includes/excludes/notes(简单按行, 详情页展示)
    cost_lines = split_lines(cost)
    # 彩页(从 Supplier_Brochures; 与后台彩页下载一致)
    bro_rows = c.execute("SELECT Supplier_ID, File_Name FROM Supplier_Brochures WHERE Product_Code=?", (code,)).fetchall()
    brochures = []
    for sup, fn in bro_rows:
        if fn:
            brochures.append({"supplier": sup or '', "file": fn, "url": "/assets/suppliers/%s/%s" % (sup or '', fn)})
    # 出发日期 + 价格明细 (从 Departure_Pricing; 与后台预览页同源)
    dep_rows = c.execute("""SELECT Departure_Date, Departure_Status, Departure_City, Adult_Price_AUD,
        Child_With_Bed_AUD, Child_No_Bed_AUD, Infant_Price_AUD, Single_Supplement_AUD,
        Airport_Transfer_AUD, Mandatory_Tips_AUD, Comprehensive_Service_Fee_AUD
        FROM Departure_Pricing WHERE Internal_Product_Code=? ORDER BY Departure_Date""", (code,)).fetchall()
    departureDates = []
    for d, st, city, adult, cb, cnb, inf, single, trans, tip, svc in dep_rows:
        if d:
            departureDates.append({"date": d, "status": st or "available"})
    priceTable = []
    for d, st, city, adult, cb, cnb, inf, single, trans, tip, svc in dep_rows:
        priceTable.append({
            "city": city or '', "adult": adult if adult is not None else '',
            "childbed": cb if cb is not None else '', "childnobed": cnb if cnb is not None else '',
            "infant": inf if inf is not None else '', "single": single if single is not None else '',
            "transfer": trans if trans is not None else '', "tip": tip if tip is not None else '',
            "service": svc if svc is not None else '',
        })
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
        "introZh": introZh,
        "introEn": introEn,
        "participationNotice": participationNotice,
        "departureDates": departureDates,
        "priceTable": priceTable,
        "brochures": brochures,
        "itinerary": itinerary,
        "hotels": [],
        "includes": cost_lines[:6] if cost_lines else [],
        "includesEn": cost_lines[:6] if False else [],
        "excludes": [],
        "excludesEn": [],
        "notes": [],
        "notesEn": [],
        "featured": bool(is_feat),
    })

conn.close()

# 写出 data.js
header = "// Etrips 国安易游 — 产品数据 (由 gen_data_js.py 从 etrips_product.db 自动生成)\n"
header += "// 单一真相: DB 中 Online_Visible=1 AND Status='Active' 的产品。请勿手改, 重跑生成器。\n\n"
body = "window.TOURS = " + json.dumps(tours, ensure_ascii=False, indent=1) + ";\n"
io.open(JS, 'w', encoding='utf-8').write(header + body)
print("已生成 data.js: %d 个产品 (Online_Visible=1 AND Status='Active')" % len(tours))
print("输出:", os.path.abspath(JS))
