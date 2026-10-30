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

## PWA（第 6 站）

已加入 `manifest.webmanifest`、`sw.js`、App icon（`assets/icons/`）。Sortable 改為本機 `assets/vendor/`，方便離線。

### 點樣安裝到主畫面

1. 用 **HTTPS** 開：https://chaniomeng-alt.github.io/travel-app-test/
2. **iPhone Safari**：分享 → 「加至主畫面」
3. **Android Chrome**：選單 → 「安裝應用程式」／「加到主畫面」
4. 安裝後會用獨立圖示同全螢幕（standalone）開啟

### 點樣測試離線

1. 先用網絡開一次 App（等 service worker 安裝同快取殼層）
2. DevTools → Application → Service Workers，確認 activated
3. 開飛航模式／Offline，再重新載入
4. 首頁、行程殼、本地資料應仍可用；天氣同 Google 地圖連結需要網絡（刻意唔快取）

### 更新之後

改完程式會升 `sw.js` 入面嘅 `CACHE_VERSION`。開 App 見到頂部「有更新，撳此重新載入」就撳一下。

### 由 1024 icon 出各尺寸（本機）

需要 Pillow：`pip install pillow`

```bash
python3 - <<'PY'
from PIL import Image
src = Image.open('assets/icons/icon-1024.png')
for s, name in [(512,'icon-512.png'),(192,'icon-192.png'),(180,'apple-touch-icon.png')]:
    im = src.copy(); im.thumbnail((s,s))
    canvas = Image.new('RGBA', (s,s), (247,243,234,255))
    canvas.paste(im, ((s-im.width)//2,(s-im.height)//2), im if im.mode=='RGBA' else None)
    canvas.save('assets/icons/'+name)
print('done')
PY
```
