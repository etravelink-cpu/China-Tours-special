# 把 DB 里已有的繁体行程/须知转简体(不重新联网)
# 适用: 之前抓的繁体内容(如 CM-0001), 或任何含繁字的字段
import sqlite3, re, sys
try:
    import zhconv
    HAS = True
except Exception as e:
    print("zhconv 不可用:", e); sys.exit(1)

DB = r"D:/Hermes Agent/etrips-universal-db/etrips_product.db"
conn = sqlite3.connect(DB); c = conn.cursor()

def has_trad(s):
    if not s: return False
    # 常见繁体特征字(非穷举, 足以判断)
    trad = "達機場鐵線們來時個這號號會東車遊園園館圖書館區縣開發發發發關於為與體會館際顯現實驗專業賴陽園島處點對於當時國際種選擇別時機會產業優質對應圖說話題園區產農場農場漁港漁港漁場養殖養殖參觀參觀買賣買賣變頻頻歷歷歷歷館館濟濟點點處處來來來來時時個個這這們們遊遊園園館館書書圖圖縣縣東東為為與與體體產產業業漁漁農農場場參參觀觀買買賣賣賴賴點點對對於於當當國國際際種種選選擇擇別別機機會會優優質質應應圖圖話話題題區區漁漁農農場場參參觀觀買買賣賣變變頻頻歷歷濟濟"
    return any(ch in s for ch in trad)

c.execute("SELECT Internal_Product_Code, Itinerary, Participation_Notice FROM Product_Master")
rows = c.fetchall()
n_in = n_no = 0
for code, iti, notice in rows:
    changed = False
    if iti and has_trad(iti):
        iti2 = zhconv.convert(iti, 'zh-cn'); changed = True
    else:
        iti2 = iti
    if notice and has_trad(notice):
        notice2 = zhconv.convert(notice, 'zh-cn'); changed = True
    else:
        notice2 = notice
    if changed:
        c.execute("UPDATE Product_Master SET Itinerary=?, Participation_Notice=? WHERE Internal_Product_Code=?",
                  (iti2, notice2, code))
        n_in += 1
    else:
        n_no += 1
conn.commit(); conn.close()
print(f"已转简体: {n_in} 个产品; 无需转: {n_no}")
