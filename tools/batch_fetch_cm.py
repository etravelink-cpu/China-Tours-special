# 批量抓 SUP-CM 中国产品行程/须知(仅抓空产品, 避免覆盖已审内容)
# 数据源: 中国美_Master_Database-2.xlsx 的 Product_URL 列
import sqlite3, openpyxl, subprocess, sys, os

DB = r"D:/Hermes Agent/etrips-universal-db/etrips_product.db"
XLSX = r"D:/Hermes Agent/对话备份/.hermes/desktop-attachments/中国美_Master_Database-2.xlsx"
FETCH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fetch_product_content.py")
PY = r"C:/Users/linda/AppData/Local/Programs/Python/Python311/python.exe"

# 1) 读 Excel URL 映射
wb = openpyxl.load_workbook(XLSX, data_only=True)
ws = wb.active
url_map = {}  # code -> url
for row in ws.iter_rows(min_row=2, values_only=True):
    code = row[2]; url = row[19]
    if code and url and str(url).strip() not in ('', 'None'):
        url_map[str(code).strip()] = str(url).strip()

# 2) 找 SUP-CM 中国 行程/须知空的产品
conn = sqlite3.connect(DB); c = conn.cursor()
c.execute("SELECT Internal_Product_Code FROM Product_Master "
           "WHERE Supplier_ID='SUP-CM' AND Web_Category1='中国' "
           "AND (Itinerary IS NULL OR Itinerary='' OR Participation_Notice IS NULL OR Participation_Notice='')")
codes = [r[0] for r in c.fetchall()]
conn.close()

todo = [code for code in codes if code in url_map]
print(f"需抓: {len(todo)} (Excel有URL的: {len(url_map)}, 空产品: {len(codes)})")

ok = fail = skip = 0
for i, code in enumerate(todo, 1):
    url = url_map[code]
    print(f"[{i}/{len(todo)}] {code} -> {url[:50]}")
    try:
        r = subprocess.run([PY, FETCH, url, code], capture_output=True, text=True, timeout=60)
        out = r.stdout + r.stderr
        if "已写入" in out:
            ok += 1
        else:
            fail += 1
            print("   ⚠️", out[-200:].replace("\n", " "))
    except Exception as e:
        fail += 1
        print("   ❌", e)
print(f"\n完成: 成功 {ok}, 失败 {fail}")
