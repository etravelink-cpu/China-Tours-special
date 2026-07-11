# Etrips 国安易游 | 多国旅行社官网

澳洲本地双语旅行社官网（静态多页站，可直接部署到 GitHub Pages / Netlify / 任意虚拟主机）。

## 风格
- 深蓝（#1b3a5b）+ 白底 + 轻奢金点缀，极简商务
- 移动端优先、中英双语一键切换
- 首页 8 板块 · 列表页（智能筛选）· 长图文子页（行程详情）· 定制/团期/FAQ/关于/联系

## 目录
```
index.html        首页
list.html         线路列表（筛选）
subpage.html      数据驱动行程子页
detail.html       四Tab紧凑详情（备用）
tours/            统一风格子页（adora-magic-city.html 等）
assets/           css / js / img（logo、favicon）
```

## 本地预览
```bash
python -m http.server 8765
# 打开 http://127.0.0.1:8765/
```

## 部署（GitHub Pages）
推送 main 分支后，在仓库 Settings → Pages 选择 `main` 分支根目录即可。
访问地址：`https://etravelink-cpu.github.io/China-Tours-special/`

> 注意：子页面 `tours/` 使用相对路径 `../assets/`，需保持目录结构不变。
