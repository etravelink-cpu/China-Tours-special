# Etrips v2 交付说明 · Handover Notes (2026-07)

## 本次升级内容 What changed

- 全站视觉系统重建：深蓝 · 金 · 白三色品牌体系（`DESIGN.md` 为设计法典），
  衬线标题字体（Cormorant Garamond + 思源宋体）、滚动渐显动效、全新首页 hero、
  目的地拼贴、行程卡片、导航、页脚。
- 转化优化：列表页吸底预订条（当前路线 + 起价 + 立即预订）、预订页安心承诺 +
  微信备选卡片、行程卡片天数徽章与起价标识、列表页服务承诺行。
- 全部图片更换为 **Pexels 授权图**（免费商用，无需署名），统一"蓝调时刻 + 金光"
  色调。图片来源记录在 `assets/img/v2/CREDITS.json`。
- 中英双语补齐：首页 hero、分区导语、咨询区块、预订页、联系页、页脚、信任条、
  吸底预订条全部随语言切换（生成的行程内容为中文，属数据层，见第 8 条）。
- 无障碍达标：键盘可操作侧栏/标签页/浮窗、表单标签关联、焦点环、ESC 关闭弹层、
  对比度全部按 WCAG AA 修正。
- 图片体系 2026-07-16 更新：14 个版位使用自产 AI 生成图（gpt-image），6 个版位
  使用 Pexels 授权图（免费商用），来源见 assets/img/v2/CREDITS.json。
- 数据管线 **零改动**：`tools/gen_regions.py` 与 Excel 工作流原样保留，
  `region-plans.js` 仅做了颜色值替换（下次重新生成六大区块不受影响）。

## 日常维护 How to maintain

1. 改产品/价格/行程：照旧编辑 Excel → `python tools/gen_regions.py` → git push。
2. 改设计：只改 `assets/css/style.css`（顶部 `:root` 是全部颜色令牌）。
   **不要**新增颜色（见 REGRESSIONS.md R-001）。
3. 新增图片：跑 `tools/fetch_images.py`（Pexels API）或放入 `assets/img/v2/`，
   保持蓝调黄昏色调；不要使用来源不明的网图（R-003）。

## 需要客户确认 Client follow-ups

1. `assets/img/hero-sydney-tmp/`（约 200MB，Marcus Kung Photography 水印摄影）与
   `Sydney Opera House*.jpg`（网络下载图）：**未在站点使用**。若客户拥有授权可
   启用，否则建议从仓库删除（可减 200MB+）。我们未删除任何客户文件。
2. `tours/index.html` 资料库页链接指向 gitignore 的 `_archive/`，线上 404
   （仅客户本机可用）——维持原状，如需上线归档页请提供文件。
3. 示例数据（`data.js` 9 条样例团）中中英价格原本不一致（如 AU-SYD-001:
   中文 A$12,800 / 英文 A$1,980，约 6.3 倍，疑似人民币价位误标 A$）。
   【v3 2026-07-17 已处理】已统一为贵司英文版的 AUD 价位（A$1,980 等），
   中英一致。**请客户务必核对这 8 条样例团价格**，如需调整直接改
   `data.js` 中 `budgetZh/budgetEn/price/priceEn` 与 `DEPARTURES` 即可。
4. 客户评价为客户提供的原文，未做改动；建议补充真实姓名缩写 + 出行月份提升可信度。
5. sydneytour.com.au 域名在售（约 $3.5K）：若想收购做 SEO 跳转，为可选商业决策。
6. 邮轮板块仍是旧版布局（无路线详情卡/预订按钮）——数据允许时建议照其他板块格式
   重做 Excel 数据并重新生成。
7. 下次用 gen_regions.py 重新生成六大区块时，生成内容里的旧灰色（#e0e0e0 等）会
   回来——CSS 已做兜底覆盖，但建议同步更新 Excel 模板里的内联颜色。
8. FAQ 与 关于我们 的英文版内容需客户提供（当前 EN 模式下这两块保留中文原文）。
9. 首页日历选择器（EtripsDatePicker）为历史遗留代码，页面上无入口——如需启用请
   告知，可接入预订页日期字段并高亮真实团期。
10. 【v3 2026-07-17】首页四段航拍视频（十二门徒/张家界/米尔福德/悉尼港）为 AI
    生成素材（各 3-4MB，自动静音循环播放，弱网下先显示海报图）。如客户有真实
    航拍素材可直接替换 `assets/video/` 内同名文件（1080p h264 ≤6MB 即可）。
11. 【v3】全站配色/字体已按 logo 重制（天空蓝 + 袋鼠橙）；目的地与线路图片全部
    为 AI 生成的明亮白天场景，版权无忧（`assets/img/v2/CREDITS.json` 有记录）。

## 部署 Deploy

GitHub Pages（main 分支根目录），域名 etrips.com.au（CNAME 已有）。
push 到 main 即上线。
