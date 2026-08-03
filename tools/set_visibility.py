# -*- coding: utf-8 -*-
"""按可见性规则预览/执行: 设 Online_Visible (前台显示)。
规则:
 1. 单门票·单项体验 -> 全部隐藏(0)
 2. 超值特惠团/纯玩无购物团/含机票特别订制团 -> 仅中国、亚洲显示(1); 其他大区隐藏(0)
 3. 中国产品 -> 仅 SUP-CM 显示; SUP-FUNT(及其他)中国产品隐藏(0)
 生成器查询已改为 Online_Visible=1 AND Status='Active' (两者皆满足才进网站)
预览模式: python 本脚本   ; 执行: python 本脚本 exec
"""
import sqlite3, sys
DB = r"D:\Hermes Agent\etrips-universal-db\etrips_product.db"
PREVIEW = (len(sys.argv) < 2 or sys.argv[1] != "exec")

SHOW_REGIONS = {"中国", "亚洲"}          # 这些大区的标准类目可显示
STD_CATS = {"超值特惠团", "纯玩无购物团", "含机票特别订制团"}
HIDE_CATS = {"单门票·单项体验", "签证·其他"}

def compute(rows):
    """返回 {code: new_visible}"""
    res = {}
    for code, wc1, cat, sid in rows:
        # 规则1: 单门票全隐藏
        if cat in HIDE_CATS:
            res[code] = 0; continue
        # 规则2: 标准类目仅中国/亚洲显示
        if cat in STD_CATS:
            res[code] = 1 if wc1 in SHOW_REGIONS else 0
            # 规则3: 中国/亚洲 仅 SUP-CM 显示; 其他 supplier 隐藏
            if wc1 in ("中国", "亚洲") and sid != "SUP-CM":
                res[code] = 0
            continue
        # 其他类目(私人订制等) 默认隐藏
        res[code] = 0
    return res

def main():
    conn = sqlite3.connect(DB); c = conn.cursor()
    c.execute("SELECT Internal_Product_Code, Web_Category1, Product_Category, Supplier_ID FROM Product_Master")
    rows = c.fetchall()
    plan = compute(rows)
    # 统计
    to_hide = [k for k,v in plan.items() if v == 0]
    to_show = [k for k,v in plan.items() if v == 1]
    print(f"总产品 {len(rows)} | 将显示 {len(to_show)} | 将隐藏 {len(to_hide)}")
    # 按大区看显示数
    c.execute("SELECT Web_Category1, COUNT(*) FROM Product_Master GROUP BY 1")
    tot = dict(c.fetchall())
    show_by_region = {}
    for code, wc1, cat, sid in rows:
        if plan[code] == 1:
            show_by_region[wc1] = show_by_region.get(wc1, 0) + 1
    print("\n各大大区 显示/总数:")
    for rg in sorted(tot):
        print(f"  {rg:8} 显示{show_by_region.get(rg,0):4} / 总{tot[rg]:4}")
    # 中国 supplier 显示分布
    china_show = {}
    for code, wc1, cat, sid in rows:
        if wc1 == "中国" and plan[code] == 1:
            china_show[sid] = china_show.get(sid, 0) + 1
    print("\n中国 显示产品 supplier 分布:", china_show)

    if PREVIEW:
        print("\n[PREVIEW] 未写入。执行: python 本脚本 exec")
        conn.close(); return
    # 执行
    for code, vis in plan.items():
        c.execute("UPDATE Product_Master SET Online_Visible=? WHERE Internal_Product_Code=?", (vis, code))
    conn.commit(); conn.close()
    print("\n[OK] 已更新 Online_Visible")

if __name__ == "__main__":
    main()
