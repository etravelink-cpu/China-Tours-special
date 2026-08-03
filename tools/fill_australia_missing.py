# -*- coding: utf-8 -*-
"""补手写澳洲缺失的 40 个产品进 DB (AUS- 前缀, SUP-NOVA, 单门票·单项体验)。
先跑 preview=True 看将要插入的记录; 确认后改 preview=False 执行。
"""
import re, sqlite3, sys

JS = r"D:\Hermes Agent\etrips-site\assets\js\region-plans.js"
DB = r"D:\Hermes Agent\etrips-universal-db\etrips_product.db"
PREVIEW = (len(sys.argv) < 2 or sys.argv[1] != "exec")

CITY = {
    "sydney": "悉尼及周边",
    "melbourne": "墨尔本及周边",
    "qld": "昆士兰 黄金海岸&布里斯班",
    "cairns": "凯恩斯(大堡礁)",
    "whitsunday": "圣灵群岛(汉密尔顿/艾尔利海滩)",
    "multi": "跨地区多地联游",
    "perth": "珀斯/西澳",
    "tas": "塔斯马尼亚",
    "adelaide": "阿德莱德/南澳",
    "uluru": "乌鲁鲁/北领地",
}

def slug(n):
    import re as _re
    s = _re.sub(r"[^一-龥a-zA-Z0-9]", "", n)[:18]
    return s

def main():
    s = open(JS, encoding="utf-8", errors="ignore").read()
    m = re.search(r"window\.REGION_PLANS\.australia = ", s)
    start = m.end(); nxt = s.find("window.REGION_PLANS.", start)
    aus = s[start:nxt]
    conn = sqlite3.connect(DB); c = conn.cursor()
    c.execute("SELECT Product_Name_CN FROM Product_Master")
    have = set(r[0] for r in c.fetchall())
    # 现有 AUS- 最大序号
    c.execute("SELECT Internal_Product_Code FROM Product_Master WHERE Internal_Product_Code LIKE 'AUS-%'")
    used = set(r[0] for r in c.fetchall())
    conn.close()

    todo = []
    for gm in re.finditer(r'data-group="([^"]+)"[^>]*>(.*?)(?=data-group=|rp-custom|</nav>|\Z)', aus, re.S):
        g = gm.group(1); body = gm.group(2)
        for rm in re.finditer(r'class="rp-route"[^>]*>(.*?)</div>', body, re.S):
            name = rm.group(1).strip()
            if not name or "详情整理中" in name or "敬请期待" in name: continue
            if name in have: continue
            city = CITY.get(g, g)
            code = "AUS-" + slug(name)
            # 防重
            base = code; i = 1
            while code in used or any(t[0] == code for t in todo):
                code = f"{base}{i}"; i += 1
            todo.append((code, name, city))

    print(f"将补 {len(todo)} 个澳洲产品:")
    for code, name, city in todo:
        print(f"  {code:22} [{city}] {name}")

    if PREVIEW:
        print("\n[PREVIEW] 未写入。执行: python 本脚本 exec")
        return
    conn = sqlite3.connect(DB); cur = conn.cursor()
    for code, name, city in todo:
        cur.execute("""INSERT INTO Product_Master
            (Internal_Product_Code, Supplier_ID, Product_Name_CN, Product_Category,
             Web_Category1, Web_Category2, Status, Online_Visible)
            VALUES (?,?,?,?,?,?,?,?)""",
            (code, "SUP-NOVA", name, "单门票·单项体验", "澳洲", city, "Active", 1))
    conn.commit(); conn.close()
    print(f"\n[OK] 已写入 {len(todo)} 条")

if __name__ == "__main__":
    main()
