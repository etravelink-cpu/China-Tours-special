# -*- coding: utf-8 -*-
"""Fetch licensed Pexels assets for the v2 redesign and emit responsive WebP.

Usage:
  PEXELS_API_KEY=... python3 tools/fetch_images.py manifest.json
Manifest entries: {"slot": "hero-sydney", "type": "photo"|"video", "id": 123456}
Photos -> assets/img/v2/<slot>-{480,960,1440,2048}.webp
Videos -> assets/video/<slot>.mp4 (smallest HD file) + poster webp.
"""

import json, os, sys, urllib.request

API = "https://api.pexels.com/v1"
KEY = (
    os.environ.get("PEXELS_API_KEY")
    or open(os.path.expanduser("~/.secrets/pexels_api_key"))
    .read()
    .split("=")[-1]
    .strip()
)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDTHS = [480, 960, 1440, 2048]


def get(url):
    req = urllib.request.Request(
        url,
        headers={
            "Authorization": KEY,
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) etrips-site-build",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def save_photo(slot, pid):
    from PIL import Image
    import io

    meta = json.loads(get(f"{API}/photos/{pid}"))
    raw = get(meta["src"]["original"])
    im = Image.open(io.BytesIO(raw)).convert("RGB")
    outdir = os.path.join(ROOT, "assets/img/v2")
    os.makedirs(outdir, exist_ok=True)
    for w in WIDTHS:
        if im.width < w and w != WIDTHS[0]:
            continue
        c = im.copy()
        c.thumbnail((w, w * 3))
        c.save(os.path.join(outdir, f"{slot}-{w}.webp"), "WEBP", quality=78, method=6)
    print("photo", slot, pid, im.size, "->", meta["photographer"])
    return {
        "slot": slot,
        "id": pid,
        "photographer": meta["photographer"],
        "url": meta["url"],
    }


def save_video(slot, vid):
    meta = json.loads(get(f"https://api.pexels.com/videos/videos/{vid}"))
    files = sorted(
        (f for f in meta["video_files"] if f["width"] and 1200 <= f["width"] <= 2100),
        key=lambda f: f["width"],
    )
    if not files:
        files = sorted(meta["video_files"], key=lambda f: f["width"] or 0)
    f = files[0]
    outdir = os.path.join(ROOT, "assets/video")
    os.makedirs(outdir, exist_ok=True)
    data = get(f["link"])
    path = os.path.join(outdir, f"{slot}.mp4")
    open(path, "wb").write(data)
    print("video", slot, vid, f["width"], "x", f["height"], len(data) // 1024, "KB")
    return {"slot": slot, "id": vid, "user": meta["user"]["name"], "url": meta["url"]}


def main(manifest_path):
    manifest = json.load(open(manifest_path))
    credits = []
    for e in manifest:
        try:
            credits.append(
                save_photo(e["slot"], e["id"])
                if e["type"] == "photo"
                else save_video(e["slot"], e["id"])
            )
        except Exception as ex:  # keep going; report at end
            print("FAIL", e["slot"], e.get("id"), ex)
    out = os.path.join(ROOT, "assets/img/v2/CREDITS.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    json.dump(credits, open(out, "w"), indent=1, ensure_ascii=False)
    print(f"{len(credits)}/{len(manifest)} assets fetched; credits -> {out}")


if __name__ == "__main__":
    main(sys.argv[1])
