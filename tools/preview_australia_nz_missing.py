# -*- coding: utf-8 -*-
"""预览: 手写 australia/nz 块里有、但 DB 缺失的真产品(排除 coming-tip 占位)
输出将要补进 DB 的记录(不写库, 仅预览)。"""
import re, sqlite3, json

JS = r"D:\Hermes Agent\etrips-site\assets\js\region-plans.js"
DB = r"D:\Hermes Agent\etrips-universal-db\etrips_product.db"

# 手写城市板块 -> DB Web_Category2 映射
CITY_MAP_AU = {
    "悉尼及周边": "悉尼及周边",
    "墨尔本及周边": "墨尔本及周边",
    "黄金海岸&布里斯班": "昆士兰 黄金海岸&布里斯班",
    "凯恩斯 (大堡礁)": "凯恩斯(大堡礁)",
    "圣灵群岛": "圣灵群岛(汉密尔顿/艾尔利海滩)",
    "塔斯马尼亚": "塔斯马尼亚",
    "西澳/珀斯": "珀斯/西澳",
    "阿德莱德 / 南澳": "阿德莱德/南澳",
    "乌鲁鲁 / 北领地": "乌鲁鲁/北领地",
    "澳洲跨地区联游": "跨地区多地联游",
}
CITY_MAP_NZ = {
    "新西兰南岛": "新西兰南岛",
    "新西兰北岛": "新西兰北岛",
    "新西兰南北岛": "新西兰南北岛",
}

def parse_block(region_key, city_map):
    s = open(JS, encoding="utf-8", errors="ignore").read()
    m = re.search(r"window\.REGION_PLANS\." + region_key + r" = ", s)
    start = m.end(); nxt = s.find("window.REGION_PLANS.", start)
    seg = s[start:nxt]
    # 找每个 rp-group (城市) 下的 route
    out = []
    for gm in re.finditer(r'data-group="([^"]+)"[^>]*>(.*?)(?=data-group=|rp-custom|</nav>|\Z)', seg, re.S):
        city = gm.group(1)
        body = gm.group(2)
        for rm in re.finditer(r'class="rp-route"[^>]*>(.*?)</div>', body, re.S):
            name = rm.group(1).strip()
            if not name: continue
            if "详情整理中" in name or "敬请期待" in name or "rp-coming-tip" in name:
                continue
            db_city = city_map.get(city, city)
            out.append((name, db_city))
    return out

conn = sqlite3.connect(DB); c = conn.cursor()
c.execute("SELECT Product_Name_CN FROM Product_Master")
have = set(r[0] for r in c.fetchall())
conn.close()

def missing(region_key, city_map, prefix):
    rows = parse_block(region_key, city_map)
    miss = []
    for name, city in rows:
        if name not in have:
            miss.append((name, city))
    return miss

au_miss = missing("australia", CITY_MAP_AU, "AUS")
nz_miss = missing("nz", CITY_MAP_NZ, "NZ")
print(f"=== 澳洲需补进 DB 的真产品: {len(au_miss)} 个 ===")
for n, city in au_miss: print(f"  [{city}] {n}")
print(f"\n=== 新西兰需补进 DB 的真产品: {len(nz_miss)} 个 ===")
for n, city in nz_miss: print(f"  {n}  -> 城市待定(新西兰无Web_Category2细分)")
print(f"\n总计补: 澳洲{len(au_miss)} + 新西兰{len(nz_miss)} = {len(au_miss)+len(nz_miss)}")
