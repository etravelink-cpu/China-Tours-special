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
DK_ZH = {'china':'中国','asia':'亚洲','australia':'澳洲','nz':'新西兰','europe':'欧洲',
         'america':'美加','special':'特别','island':'海岛','other':'其他','cruise':'邮轮'}
IMG_POOL = {'china':['china.jpg','cn-westlake.jpg','cn-greatwall.jpg'],
            'asia':['asia.jpg','japan.jpg','bali.jpg'],
            'australia':['hero-sydney.jpg','au-sydney.jpg','au-uluru.jpg'],
            'nz':['nz.jpg','nz-queenstown.jpg'],
            'europe':['europe.jpg','paris.jpg','greece.jpg'],
            'america':['america.jpg','canada.jpg','usa.jpg'],
            'special':['special.jpg','antarctica.jpg'],
            'island':['island.jpg','fiji.jpg'],'other':['other.jpg'],'cruise':['cruise.jpg']}
CAT_ZH = {'超值特惠团':'超值特价','超值精品':'超值特价','纯玩无购物团':'纯玩无购物','含机票特别订制团':'机票套餐',
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

def derive_subregion(name, dk, category):
    """从产品名关键词推导子区域(供左栏树末级分组)。地区 dk 决定分组表。"""
    s = name or ''
    # 中国: 长江游轮(长江新船王/揽月/极光/爱达魔都/邮轮) -> 邮轮; 否则按地域关键词
    if dk == 'china':
        # 多命中: 同一产品可按地名同时归入多个地区子类(如"北京 长江三峡"→北京西安+长江三峡)
        # 不单列邮轮: 邮轮产品靠地名自然命中(上海邮轮→江南上海, 长江游轮→长江三峡, 海上丝路→新疆丝绸之路)
        REGION_KW = [
            ('江南上海', ['江南', '上海', '苏州', '杭州', '无锡', '南京', '乌镇', '千岛湖', '西湖', '婺源', '黄山', '普陀', '九华', '庐山', '深坑', '爱达魔都', '爱达花城', '邮轮', '游轮']),
            ('北京西安', ['北京', '西安', '延安']),
            ('长江三峡', ['长江三峡', '三峡', '重庆', '宜昌', '瞿塘', '巫峡', '西陵']),
            ('九寨张家界云南贵州', ['九寨', '张家界', '云南', '贵州', '丽江', '大理', '昆明', '西双版纳', '黔']),
            ('广东广西福建海南', ['广东', '广西', '福建', '海南', '大湾区', '珠江', '潮汕', '香港', '深圳', '广州', '桂林', '阳朔', '厦门', '泉州', '武夷山', '土楼']),
            ('山东山西东北河南', ['山东', '山西', '东北', '河南', '哈尔滨', '沈阳', '大连', '青岛', '曲阜']),
            ('新疆甘肃西藏青海丝绸之路', ['新疆', '甘肃', '西藏', '青海', '丝绸之路', '丝路', '喀什', '喀纳斯', '阿勒泰', '胡杨', '南疆', '北疆']),
        ]
        hits = [name for name, kws in REGION_KW if any(k in s for k in kws)]
        return hits if hits else []  # 命中多个则都返回; 无命中则不归入任何子类(不要"其他中国")
    if dk == 'australia':
        # 跨地区联游: 含≥2个城市的团(悉尼墨尔本/悉尼凯恩斯墨尔本/环澳等)
        city_kw = ['悉尼', '墨尔本', '黄金海岸', '布里斯班', '凯恩斯', '西澳', '珀斯', '阿德莱德', '塔斯马尼亚', '乌鲁鲁', '圣灵']
        cnt = sum(1 for c in city_kw if c in s)
        if cnt >= 2: return '澳洲跨地区联游'
        if any(k in s for k in ['圣灵', '艾尔利', '汉密尔顿岛']) or 'Whitsunday' in s: return '圣灵群岛'
        if any(k in s for k in ['悉尼', '蓝山', '史蒂芬港', '猎人谷', '卧龙岗', '杰维斯湾', '蓝色海洋路', '中央海岸', '市区', '歌剧院']): return '悉尼及周边'
        if any(k in s for k in ['墨尔本', '企鹅岛', '菲利普岛', '大洋路', '蒸汽火车', '疏芬山', '莫宁顿', '企鹅', '彩虹小屋']): return '墨尔本及周边'
        if any(k in s for k in ['黄金海岸', '布里斯班', '可伦宾', '拜伦湾', '天宝林山', '翠儿河', '摩顿', '海豚岛', '大堡礁', '危险角', '热带水果', '观光塔', '鸭子船', '鹈鹕']): return '黄金海岸&布里斯班'
        if any(k in s for k in ['凯恩斯', '大堡礁', '白天堂', '绿岛', '道格拉斯港', '棕榈湾', '阿瑟顿', '热带雨林', '游船', '蜕变号', '大冒险号', '银梭', '太阳恋人', '梦幻丽礁']): return '凯恩斯（大堡礁）'
        if any(k in s for k in ['西澳', '珀斯', '粉红湖', '尖峰石阵', '玛格利特', '波浪岩', '天鹅河', '罗特尼斯', '巴内']): return '西澳/珀斯'
        if any(k in s for k in ['乌鲁鲁', '帝王谷', '卡塔丘塔', '红土', '原野星光', '寂静之声', '艾尔斯']): return '乌鲁鲁/北领地'
        if any(k in s for k in ['塔斯马', '亚瑟港', '酒杯湾', '霍巴特', '里奇蒙', '费尔德山', '菲尔德山', '玛丽亚岛', '塔斯曼', '布鲁尼']): return '塔斯马尼亚'
        if any(k in s for k in ['阿德莱德', '袋鼠岛', '巴罗莎', '菲尔半岛', '穆理河', '红酒之乡', '阿德雷德']): return '阿德莱德/南澳'
        if any(k in s for k in ['堪培拉', '雪山', '滑雪', '雪梨', '新州']): return '悉尼及周边'
        if any(k in s for k in ['玛格丽特', '葡萄酒', '天鹅', '罗特尼', '巴内']): return '西澳/珀斯'
        if any(k in s for k in ['仙人掌', '天堂农庄', '电影世界', '梦幻世界', '华纳']): return '黄金海岸&布里斯班'
        if any(k in s for k in ['卡米拉', '帆船', '游艇']): return '凯恩斯（大堡礁）'
        if any(k in s for k in ['赏雪', '温泉', '湖泊', '黄金平原']): return '悉尼及周边'
        return '澳洲其他'
    if dk == 'asia':
        if '日本' in s or '东京' in s or '大阪' in s or '北海道' in s or '富士' in s or 'JP' in s.upper(): return '日本'
        if '韩国' in s or '首尔' in s or '江原道' in s: return '韩国'
        if '台湾' in s or '台北' in s or '环岛' in s or 'TPE' in s.upper(): return '台湾'
        if '越南' in s or '下龙湾' in s or '河内' in s or '岘港' in s: return '越南'
        if '泰国' in s or '曼谷' in s or '芭提雅' in s: return '泰国'
        if '柬埔寨' in s or '吴哥' in s: return '柬埔寨'
        if '新加坡' in s or '马来西亚' in s or '吉隆坡' in s or '马六甲' in s: return '新加坡马来西亚'
        return '亚洲其他'
    if dk == 'europe':
        for line in ['红线', '黄线', '绿线', '蓝线', '棕线', '紫线', '橙线', '金线', '粉线']:
            if line in s: return line + '线路'
        if '任你行' in s: return '任你行'
        if any(k in s for k in ['巴尔干', '南欧', '西欧', '东欧', '北欧', '中欧', '多国', '八国', '七国', '六国', '九国', '十国', '河轮', '莱茵', '地中海']): return '多国连线'
        return '欧洲其他'
    if dk == 'america':
        if any(k in s for k in ['东海岸', '美国东', '加拿大东', '纽约', '华盛顿', '波士顿', '美东']): return '东岸'
        if any(k in s for k in ['西海岸', '美国西', '黄石', '洛杉矶', '旧金山', '拉斯维加斯', '美西', '加拿大西']): return '西岸'
        if any(k in s for k in ['东西海岸', '美国东', '美国西', '全景', '环美']): return '东西岸'
        if '南美' in s or '南极' in s or '秘鲁' in s or '巴西' in s: return '南美'
        return '美加其他'
    if dk == 'island':
        if '巴厘岛' in s or '科莫多' in s: return '巴厘岛'
        if '斐济' in s: return '斐济'
        return '海岛其他'
    if dk == 'nz':
        if '南北岛' in s or ('南岛' in s and '北岛' in s): return '南北岛连线'
        if '北岛' in s and '南岛' not in s: return '新西兰北岛'
        if '南岛' in s: return '新西兰南岛'
        return '新西兰其他'
    if dk == 'other':
        if '签证' in s: return '签证'
        if '南极' in s: return '南极'
        if '南美' in s: return '南美'
        if '非洲' in s or '肯尼' in s or '南非' in s or '摩洛哥' in s or '高加索' in s: return '非洲中东'
        if '不丹' in s or '尼泊尔' in s: return '不丹尼泊尔'
        if '土耳其' in s or '希腊' in s: return '土耳其希腊'
        if '冰岛' in s or '芬兰' in s or '挪威' in s: return '北欧'
        return '其他'
    return '其他'

tours = []
for (code, name, wc1, wc2, days, cat, itin, cost, status, ov, is_feat, intro, notice, ad) in rows:
    dk = DEST_KEY.get(wc1, 'other')
    # 内容层修正: 名称含新西兰/南北岛 或 Web_Category1 已标新西兰 的产品, 归回新西兰树(不改 DB, 可逆)
    if '新西兰' in (name or '') or '南北岛' in (name or '') or wc1 == '新西兰':
        dk = 'nz'
    img = 'assets/img/destinations/' + IMG_POOL.get(dk, ['other.jpg'])[0]
    price = ('A$%d' % int(ad)) if ad and int(ad) > 0 else '待确认'
    cat_zh = CAT_ZH.get(cat, cat or '')
    cat_en = CAT_EN.get(cat, cat or '')
    tags = [cat_zh] if cat_zh else []
    tagsEn = [cat_en] if cat_en else []
    # 结构化类目(category) + 子区域(subRegion), 供列表页左栏树分组(与后台 Product_Category 一致)
    category = cat or ''
    _sr = derive_subregion(name or '', dk, category)
    subRegions = _sr if isinstance(_sr, list) else [_sr]  # 多归属(中国可跨类目重复); 其余单值包成数组
    subRegion = subRegions[0] if subRegions else ''  # 主子类(向后兼容 detail 等单值消费)
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
    # 价格表: 仅取第一条(对齐后台预览页"仅显示第一行，不罗列所有日期"); 避免各班期重复行脏数据
    priceTable = []
    if dep_rows:
        d, st, city, adult, cb, cnb, inf, single, trans, tip, svc = dep_rows[0]
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
        "destZh": DK_ZH.get(dk, wc1 or ''),
        "destEn": dk,
        "category": category,
        "subRegion": subRegion,
        "subRegions": subRegions,
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

# 运营内容(非DB字段, 静态): 客户短评 + 出行小贴士
# 历史数据源: etrips-site-backups/etrips-site-deploy_20260725_0616.zip 的 data.js
REVIEWS_JS = '''window.REVIEWS = [
  {
    nameZh: "王女士（悉尼）",
    nameEn: "Ms. Wang (Sydney)",
    titleZh: "领队特别贴心",
    titleEn: "Our guide looked after everyone",
    textZh: "中文领队太贴心，全程无购物，老人孩子都轻松。",
    textEn:
      "Chinese guide was so caring, no shopping, easy for the whole family.",
    tourZh: "澳洲经典团",
    tourEn: "Australia Classic Tour",
    date: "2026-07",
    stars: 5,
  },
  {
    nameZh: "张先生（布里斯班）",
    nameEn: "Mr. Zhang (Brisbane)",
    titleZh: "父母走得不累",
    titleEn: "Easy pace for my parents",
    textZh: "带爸妈去悉尼蓝山和黄金海岸，司机在机场举牌等我们，行李都帮忙搬上车。三姊妹岩那站停了很久，老人家慢慢拍照也不催。",
    textEn:
      "Took my parents to Sydney, the Blue Mountains and the Gold Coast. The driver was waiting at arrivals with a sign and helped load our bags. We had plenty of time at the Three Sisters lookout, no rushing while they took photos.",
    tourZh: "悉尼蓝山黄金海岸8日游",
    tourEn: "Sydney, Blue Mountains & Gold Coast 8D",
    date: "2026-07",
    stars: 5,
  },
  {
    nameZh: "李先生（墨尔本）",
    nameEn: "Mr. Li (Melbourne)",
    titleZh: "浪漫到心里",
    titleEn: "Still talking about the stargazing",
    textZh: "新西兰蜜月安排得超浪漫，星空那晚终生难忘。",
    textEn:
      "The whole NZ honeymoon was romantic, but the stargazing night is what we still talk about!",
    tourZh: "新西兰12日蜜月团",
    tourEn: "NZ 12D Honeymoon Tour",
    date: "2026-06",
    stars: 5,
  },
  {
    nameZh: "陈同学（留学生）",
    nameEn: "Chen (Student)",
    titleZh: "探亲路线很省心",
    titleEn: "Easy trip home",
    textZh: "返乡探亲路线很顺，机票酒店全包省心。",
    textEn: "Hometown visit route was smooth, flights and hotel all sorted.",
    tourZh: "回国探亲套餐",
    tourEn: "China Homeland Visit Package",
    date: "2026-06",
    stars: 5,
  },
  {
    nameZh: "周小姐（车士活）",
    nameEn: "Ms. Zhou (Chatswood)",
    titleZh: "小团很自在",
    titleEn: "Small group, easy going",
    textZh: "云南大理丽江七日团只有十二个人，导游带我们去了本地人开的米线店，比景区餐厅好吃太多。到玉龙雪山前特地提醒高反，还准备了氧气瓶，挺贴心的。",
    textEn:
      "Our Yunnan Dali and Lijiang 7 day tour only had twelve people. The guide took us to a local rice noodle place that was much better than the tourist restaurants. Before Jade Dragon Snow Mountain she warned us about altitude and had oxygen canisters ready.",
    tourZh: "云南大理丽江7日小团",
    tourEn: "Yunnan Dali & Lijiang 7D Small Group",
    date: "2026-05",
    stars: 5,
  },
  {
    nameZh: "刘先生（悉尼）",
    nameEn: "Mr. Liu (Sydney)",
    titleZh: "富士山温泉夜太治愈",
    titleEn: "Worth it for the onsen night alone",
    textZh: "一个人参加本州六日团，本来担心尴尬，结果大家都很聊得来。富士山那晚住的旅馆有露天温泉，晚饭是怀石料理，一道一道上，吃得很慢很舒服。",
    textEn:
      "Went on the Honshu 6 day tour solo and worried it might be awkward, but everyone got along well. The ryokan by Mt Fuji had an open-air onsen, and dinner was a kaiseki course served one dish at a time, slow and relaxing.",
    tourZh: "本州6日富士山温泉团",
    tourEn: "Honshu 6D Mt Fuji Ryokan Tour",
    date: "2026-04",
    stars: 5,
  },
  {
    nameZh: "黄太太（好市围）",
    nameEn: "Mrs. Huang (Hurstville)",
    titleZh: "孩子也照顾得很好",
    titleEn: "They looked after our kid too",
    textZh: "带十岁儿子去张家界深度游，他一开始不敢走玻璃桥，导游一直陪着他慢慢走，还帮忙背包。孩子挑食，每餐都特意问他要不要单独点，微信群里还发照片给在家的奶奶看，很用心。",
    textEn:
      "Took my ten year old son on the Zhangjiajie deep tour. He was scared to walk the glass bridge at first, so the guide stayed with him and carried his backpack. My son is a picky eater and they checked with him at every meal, and sent photos to the WeChat group so his grandma at home could see too. He still talks about the glass bridge.",
    tourZh: "张家界深度游",
    tourEn: "Zhangjiajie Deep China Tour",
    date: "2026-03",
    stars: 5,
  },
  {
    nameZh: "赵先生赵太太（阿德莱德）",
    nameEn: "Mr. & Mrs. Zhao (Adelaide)",
    titleZh: "航班延误也不慌",
    titleEn: "Flight delay, no stress",
    textZh: "南太平洋邮轮团出发那天飞机延误了三个多小时。还担心赶不上登船，旅行社直接帮我们改了接驳车时间，上船一切正常。船上晚上有表演，老两口每天散步看海，很放松。",
    textEn:
      "Our flight was delayed over three hours on the day the South Pacific cruise departed. We worried about missing boarding, but the agency rearranged our transfer and we made the ship with time to spare. There were shows in the evenings, but mostly the two of us walked the deck and watched the sea.",
    tourZh: "南太平洋邮轮团",
    tourEn: "South Pacific Cruise",
    date: "2026-02",
    stars: 5,
  },
  {
    nameZh: "孙先生（墨尔本）",
    nameEn: "Mr. Sun (Melbourne)",
    titleZh: "路途远但值得",
    titleEn: "Long road, worth it",
    textZh: "新疆长线团路上确实比较辛苦，天山那段山路开了快五个小时，不过司机开得很稳，风景也确实好。中途在一户维吾尔族人家吃了顿家常饭，是这趟印象最深的一顿。",
    textEn:
      "The Xinjiang tour is a lot of driving, no way around it, almost five hours on the mountain road through Tianshan. The driver was steady and the scenery made up for it. The home cooked meal at a Uyghur family's house was the best thing we ate all trip.",
    tourZh: "新疆长线团",
    tourEn: "Xinjiang Long Tour",
    date: "2026-01",
    stars: 4,
  },
];

window.TIPS = [
  {
    zh: "澳洲入境需提前填好 DPD 数字旅客声明。",
    en: "Complete the Digital Passenger Declaration (DPD) before entering Australia.",
  },
  {
    zh: "新西兰自驾需国际驾照，靠左行驶。",
    en: "International license required for self-drive in NZ; drive on the left.",
  },
  {
    zh: "中国长线建议提前办理签证与疫苗。",
    en: "Arrange visa and vaccinations ahead for China long tours.",
  },
  {
    zh: "海岛游注意防晒与浮潜安全。",
    en: "Island trips: sun protection and snorkel safety matter.",
  },
];
'''

CONTACT_BLOCK = '''window.CONTACT = {
  hotline: "+61 2 9764 6862",
  hotline2: "+61 2 9764 2911",
  wechat: "E_travelink",
  wechatName: "小易",
  wechatNameEn: "Advisor Xiaoyi",
  wechatQr: "assets/img/qr/wechat-xiaoyi.png",
  wechat2: "E-travelink",
  wechat2Name: "小游",
  wechat2NameEn: "Advisor Xiaoyou",
  wechat2Qr: "assets/img/qr/wechat-xiaoyou.png",
  wechatOfficial: "etrips_au",
  wechatOfficialQr: "assets/img/qr/wechat-official.png",
  email: "info@etravelink.com.au",
  addressZh: "2 HENLEY ROAD, HOMEBUSH WEST, NSW, 2140, AU",
  addressEn: "2 HENLEY ROAD, HOMEBUSH WEST, NSW, 2140, AU",
  hoursZh: "周一至周五 10:00-18:00",
  hoursEn: "Mon–Fri 10:00-18:00",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=2+HENLEY+ROAD+HOMEBUSH+WEST+NSW+2140+AU",
};

'''

io.open(JS, 'w', encoding='utf-8').write(header + body + REVIEWS_JS + "\n\n" + CONTACT_BLOCK)
print("已生成 data.js: %d 个产品 (Online_Visible=1 AND Status='Active')" % len(tours))
print("输出:", os.path.abspath(JS))
