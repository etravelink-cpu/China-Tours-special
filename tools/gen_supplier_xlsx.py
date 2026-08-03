# -*- coding: utf-8 -*-
import sqlite3, os
import openpyxl

DB = r"D:\Hermes Agent\etrips-universal-db\etrips_product.db"
OUTDIR = r"D:\Hermes Agent\etrips-assets\suppliers"
os.makedirs(OUTDIR, exist_ok=True)

conn = sqlite3.connect(DB); c = conn.cursor()
c.execute("PRAGMA table_info(Supplier_Master)")
cols = [r[1] for r in c.fetchall()]
c.execute("SELECT * FROM Supplier_Master")
rows = c.fetchall()
conn.close()

# 字段中文说明(方便你填写)
FIELD_HELP = {
    "Supplier_ID": "供应商代码(勿改)",
    "Supplier_Name": "供应商名称",
    "Contact_Name": "联系人",
    "Email": "邮箱",
    "Outbound_Email": "对外邮箱",
    "Outbound_Tel": "对外电话",
    "Commission_AUD": "佣金(AUD, 数字)",
    "Cancellation_Policy": "取消政策",
    "Wechat_QR": "微信二维码图片路径(如 assets/xxx.png, 留空=无)",
    "Wechat_Personal_QR": "个人微信二维码路径",
    "Supplier_Website": "供应商官网",
    "Supplier_Login_URL": "供应商登录后台URL",
    "Notes": "备注",
    "Status": "状态(Active/Inactive)",
    "Brochure_URL": "彩页文件名(留空=无)",
}

for row in rows:
    d = dict(zip(cols, row))
    sid = d["Supplier_ID"]
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Supplier"
    # 表头两行: 字段名 + 中文说明
    ws.append(cols)
    ws.append([FIELD_HELP.get(col, "") for col in cols])
    # 数据行(现有值)
    ws.append([d[col] if d[col] is not None else "" for col in cols])
    # 加宽
    for i, col in enumerate(cols, 1):
        ws.column_dimensions[openpyxl.utils.get_column_letter(i)].width = max(14, len(str(col))+2)
    # 冻结首行
    ws.freeze_panes = "A3"
    out = os.path.join(OUTDIR, f"supplier_{sid}.xlsx")
    wb.save(out)
    print("生成:", out, "(字段数:", len(cols), ")")
print("完成. 目录:", OUTDIR)
