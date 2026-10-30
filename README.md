# 我的旅程 App（測試版）

由「九州小旅」單檔演進嘅多旅程 PWA 測試 repo。

- `index.html` / `style.css` / `app.js`：現正版本
- `index-v1-backup.html`：原本單檔備份
- `travel-backup-20261030.json`：示範備份（九州＋曼谷；無預約編號）

## 手機點更新資料

本機資料存喺瀏覽器 localStorage。上線後用力重新整理一次，App 會自動：
1. 補齊九州購物／準備清單新增項目
2. 加入「曼谷小旅」（Outlook 機票酒店）

或者喺 **設定 → 備份同還原** 撳「載入示範資料」，又或者開：
`https://chaniomeng-alt.github.io/travel-app-test/?seed=1`

## 示範旅程摘要

| 旅程 | 日期 | 重點 |
|------|------|------|
| 九州小旅 | 2026-11-22～28 | UO638／UO601、3 間酒店；購物加咖啡豆等 |
| 曼谷小旅 | 2026-12-24～27 | NX936／NX935、曼谷柏悦酒店（住至 12/26；12/26 晚未見訂單） |

原本嘅 `kyushu-trip` repo 冇掂過。
