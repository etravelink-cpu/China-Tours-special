# -*- coding: utf-8 -*-
"""
补产品行程/须知: 从来源站(au.echinatours.com/cp/html/?xxx.html)抓取行程安排+参团须知,
写入 DB 的 Product_Master.Itinerary / Participation_Notice。
用法:
  python tools/fetch_product_content.py <来源URL> <产品码>
例:
  python tools/fetch_product_content.py "https://au.echinatours.com/cp/html/?426.html" CM-0001
"""
import sys, sqlite3, re, os
from urllib.request import Request, urlopen
from html import unescape
try:
    import zhconv
    HAS_ZHCONV = True
except ImportError:
    HAS_ZHCONV = False

DB = r"D:\Hermes Agent\etrips-universal-db\etrips_product.db"

def fetch(url):
    req = Request(url, headers={"User-Agent":"Mozilla/5.0"})
    html = urlopen(req, timeout=30).read().decode("utf-8", "ignore")
    return html

def extract_section(html, which):
    # which: 'itinerary' -> id=tab-2 内容; 'notice' -> id=tab-3 内容
    src_id = 'tab-2' if which == 'itinerary' else 'tab-3'
    # 找起点
    m = re.search(r'id=["\']%s["\']' % src_id, html)
    if not m:
        return ""
    start = m.end()
    # 终点: 下一个 id="tab-N" 或明显的内容结束标记
    end_m = re.search(r'id=["\']tab-\d["\']', html[start:])
    end = start + end_m.start() if end_m else len(html)
    return html[start:end]

def clean(html_frag):
    # 去标签
    frag = re.sub(r"<script[\s\S]*?</script>", "", html_frag, flags=re.I)
    frag = re.sub(r"<style[\s\S]*?</style>", "", frag, flags=re.I)
    frag = re.sub(r"<!--[\s\S]*?-->", "", frag)
    frag = re.sub(r"<[^>]+>", "\n", frag)
    frag = unescape(frag)
    # 去 \r, 压缩多余空行
    frag = frag.replace("\r", "")
    frag = re.sub(r"\n[ \t]+\n", "\n\n", frag)
    frag = re.sub(r"\n{3,}", "\n\n", frag)
    frag = re.sub(r"[ \t]+\n", "\n", frag).strip()
    # 开头压缩多余空行
    frag = re.sub(r"^\n+", "", frag)
    frag = re.sub(r"^\n{2,}", "\n", frag)
    # 去掉开头残留标签噪声(如 class="tab-pane">)
    frag = re.sub(r'^[^>\n]*>\s*', '', frag) if (frag.startswith('>') or frag[:20].count('class=')>0) else frag
    return frag

def main():
    if len(sys.argv) < 3:
        print("用法: python fetch_product_content.py <来源URL> <产品码>"); sys.exit(1)
    url, code = sys.argv[1], sys.argv[2]
    print("抓取:", url)
    html = fetch(url)
    # 行程: tab-2 区块
    iti_raw = extract_section(html, "itinerary")
    # 须知: tab-3 区块
    notice_raw = extract_section(html, "notice")
    # 退化策略: 直接按 tab id 抓
    if not iti_raw:
        m = re.search(r'id=["\']tab-2["\'](.*?)(?:id=["\']tab-3["\']|id=["\']tab-4["\'])', html, re.S)
        iti_raw = m.group(1) if m else ""
    if not notice_raw:
        m = re.search(r'id=["\']tab-3["\'](.*?)(?:id=["\']tab-4["\']|</body>)', html, re.S)
        notice_raw = m.group(1) if m else ""
    iti = clean(iti_raw)
    notice = clean(notice_raw)
    # 繁->简: 统一网站展示简体(不同supplier来源繁简不一, 在此抹平)
    if HAS_ZHCONV:
        iti = zhconv.convert(iti, "zh-cn")
        notice = zhconv.convert(notice, "zh-cn")
    print(f"行程字数: {len(iti)} | 须知字数: {len(notice)}")
    if len(iti) < 30 and len(notice) < 30:
        print("⚠️ 两段都太短, 可能没抓到(页面结构变化). 原始片段预览:")
        print(iti_raw[:300]); print(notice_raw[:300])
        sys.exit(2)
    conn = sqlite3.connect(DB); c = conn.cursor()
    c.execute("SELECT Product_Name_CN FROM Product_Master WHERE Internal_Product_Code=?", (code,))
    r = c.fetchone()
    if not r:
        print("⚠️ 产品码不存在:", code); sys.exit(3)
    print("目标产品:", r[0])
    c.execute("UPDATE Product_Master SET Itinerary=?, Participation_Notice=? WHERE Internal_Product_Code=?",
              (iti, notice, code))
    conn.commit(); conn.close()
    print("✅ 已写入 DB:", code, "(行程 %d 字, 须知 %d 字)" % (len(iti), len(notice)))

if __name__ == "__main__":
    main()
