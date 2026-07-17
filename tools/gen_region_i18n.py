"""Regenerate assets/js/region-i18n.js — EN dictionary for the managed region pages.

The client's Excel pipeline is Chinese-only; list.js swaps generated-DOM text
nodes to EN at render time using this dictionary. Rerun after gen_regions.py
whenever new routes/strings appear (unmatched strings simply stay Chinese).

Usage (from repo root, needs playwright + DEEPSEEK_API_KEY in ~/.secrets/existing.env):
    python3 -m http.server 8899 &            # serve the site
    python3 tools/gen_region_i18n.py 8899    # extract -> translate -> write

CURATED overrides pin the UI-critical terms; machine translation fills the rest.
Client should spot-check EN tour content (see HANDOVER).
"""

import json
import os
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESTS = [
    "australia",
    "nz",
    "china",
    "europe",
    "asia",
    "island",
    "america",
    "cruise",
    "other",
]

CURATED = {
    "待确认": "TBC",
    "行程安排": "Itinerary",
    "项目": "Item",
    "行程天数": "Duration",
    "离开城市": "Departs from",
    "日期和价格": "Dates & Prices",
    "抵达城市": "Arrives in",
    "彩页下载(澳洲)": "Brochure (AU)",
    "婴儿": "Infant",
    "大人": "Adult",
    "参团须知": "Booking Notes",
    "儿童": "Child",
    "价格 (AUD)": "Price (AUD)",
    "纯玩无购物": "No forced shopping",
    "详情稍后更新": "Details coming soon",
    "预订须知": "Booking Notes",
    "费用说明": "Pricing Notes",
    "行程介绍": "Itinerary",
    "产品简介": "Highlights",
    "请选择出发日期": "Select a departure date",
    "自选具体日期…": "Pick an exact date…",
    "提交预订申请": "Request Booking",
    "下载行程单": "Download Itinerary",
    "参考市场价：": "Reference market price:",
    "价格包含：": "Price includes:",
    "价格不含：": "Price excludes:",
    "出发日期": "Departure date",
    "中文导游": "Chinese-speaking guide",
    "中文司导": "Chinese-speaking driver-guide",
}

SYSTEM = (
    "You translate Chinese travel-product copy into natural, concise English for "
    "etrips.com.au, a Sydney-based bilingual travel agency. Rules: keep all numbers, "
    "prices (A$/AUD), times, and proper nouns accurate; use standard English names for "
    "places (悉尼=Sydney, 皇后镇=Queenstown, 基督城=Christchurch, 张家界=Zhangjiajie); "
    "day lines like 第3天 become Day 3; N天 as a duration becomes N Days, N天N晚 becomes "
    "N Days N Nights; dates like 7月12日 become 12 Jul; weekdays 周一..周日 become "
    "Mon..Sun; keep translations short enough for UI labels; never add information; "
    "no em dashes. Return ONLY a JSON array of translated strings, same length and "
    "order as the input array."
)


def api_key():
    for line in open(os.path.expanduser("~/.secrets/existing.env")):
        if line.startswith("DEEPSEEK_API_KEY="):
            return line.strip().split("=", 1)[1].strip('"')
    raise SystemExit("DEEPSEEK_API_KEY not found")


def extract(port):
    from playwright.sync_api import sync_playwright

    strings = {}
    with sync_playwright() as p:
        b = p.chromium.launch(headless=True)
        pg = b.new_page()
        for d in DESTS:
            pg.goto(f"http://localhost:{port}/list.html?d={d}")
            pg.wait_for_load_state("networkidle")
            pg.wait_for_timeout(600)
            got = pg.evaluate("""() => {
              const rp = document.getElementById('region-plan');
              if (!rp) return [];
              const out = [];
              const w = document.createTreeWalker(rp, NodeFilter.SHOW_TEXT);
              while (w.nextNode()) { const t = w.currentNode.nodeValue.trim(); if (t) out.push(t); }
              rp.querySelectorAll('[placeholder]').forEach(e => out.push(e.getAttribute('placeholder')));
              return out;
            }""")
            for s in got:
                strings[s] = 1
        b.close()
    return [s for s in strings if any("一" <= c <= "鿿" for c in s)]


def translate(batch, retries=3):
    body = json.dumps(
        {
            "model": "deepseek-v4-pro",
            "messages": [
                {"role": "system", "content": SYSTEM},
                {"role": "user", "content": json.dumps(batch, ensure_ascii=False)},
            ],
            "temperature": 0.2,
        }
    ).encode()
    for a in range(retries):
        try:
            req = urllib.request.Request(
                "https://api.deepseek.com/v1/chat/completions",
                data=body,
                headers={
                    "Authorization": "Bearer " + api_key(),
                    "Content-Type": "application/json",
                },
            )
            out = json.load(urllib.request.urlopen(req, timeout=300))
            txt = out["choices"][0]["message"]["content"].strip()
            if txt.startswith("```"):
                txt = txt[txt.index("[") : txt.rindex("]") + 1]
            arr = json.loads(txt)
            if len(arr) == len(batch) and all(isinstance(x, str) for x in arr):
                return arr
        except Exception as e:
            print(f"  err {e}, retry {a}")
            time.sleep(3)
    raise SystemExit("translation batch failed")


def emit(mapping):
    path = os.path.join(ROOT, "assets/js/region-i18n.js")
    with open(path, "w", encoding="utf-8") as f:
        f.write(
            "// 生成文件：目的地分区行程 EN 字典 — tools/gen_region_i18n.py 再生，勿手改\n"
        )
        f.write(
            "// list.js 在 EN 模式按本表替换 #region-plan 文本节点；未命中保持中文\n"
        )
        f.write("window.REGION_I18N = ")
        json.dump(mapping, f, ensure_ascii=False, indent=0)
        f.write(";\n")
    print(f"wrote {path} ({len(mapping)} entries)")


if __name__ == "__main__":
    port = sys.argv[1] if len(sys.argv) > 1 else "8899"
    keys = [k for k in extract(port) if k not in CURATED]
    print("extracted (excl. curated):", len(keys))
    result = dict(CURATED)
    B = 80
    for i in range(0, len(keys), B):
        result.update(dict(zip(keys[i : i + B], translate(keys[i : i + B]))))
        print(f"batch {i // B + 1}/{(len(keys) + B - 1) // B}")
    emit(result)
