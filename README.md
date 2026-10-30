# 我的旅程 App（測試版）

一個用手機開嘅**多旅程旅遊規劃 PWA**。由原本「九州小旅」單檔頁，一步步做成可以加多個旅程、備份、加到主畫面嘅 App。

**正式網址（GitHub Pages）：**  
https://chaniomeng-alt.github.io/travel-app-test/

原本嘅 [`kyushu-trip`](https://github.com/chaniomeng-alt/kyushu-trip) repo **冇掂過**；呢個係獨立測試倉庫。

---

## App 做咩

- **我的旅程**首頁：多張旅程卡（封面、日期、倒數／進度），可新增、編輯、複製、刪除
- 入到旅程有 7 個分頁：行程、預約、預算、購物、準備、天氣、設定
- 行程：每日活動、拖拽排序、Google 地圖交通路線、出發倒數同飛機進度條、可拖動貼紙（九州＝貓、曼谷＝狗）
- 預約：機票／住宿卡、分攤人數、PDF／相片附件（存 IndexedDB）
- 預算：分類支出、匯率、超支提示；可將門票／預約金額自動併入
- 購物／準備清單、Open-Meteo 真天氣預報
- **設定 → 備份同還原**：一鍵匯出／匯入 JSON（含附件）
- 可安裝到主畫面、離線開殼層（第 6 站 PWA）

介面用**繁體中文**（口語粵語風格），奶油米白＋珊瑚色。

---

## 檔案結構

```
travel-app-test/
├── index.html              # 頁面結構
├── style.css               # 全部樣式
├── app.js                  # 全部邏輯同資料
├── sw.js                   # Service Worker（離線快取）
├── manifest.webmanifest    # PWA 安裝資訊
├── index-v1-backup.html    # 拆檔前嘅單檔備份（唔好改）
├── travel-backup-20261030.json  # 示範備份（九州＋曼谷；無預約編號）
├── README.md               # 呢份說明
├── .github/workflows/      # Actions：解碼 assets 用
└── assets/
    ├── icons/              # App icon（svg／png、apple-touch）
    ├── covers/             # 旅程封面圖
    ├── stickers/           # 貓／狗貼紙（含 pets/）
    ├── decor/              # 分頁裝飾圖
    ├── shop/               # 購物頁插圖
    ├── vendor/             # SortableJS 本機副本（離線用）
    └── _b64/               # 大圖 base64 來源（Actions 解碼用）
```

資料存在瀏覽器：`localStorage` key 叫 `travel_app_v1`；預約附件喺 **IndexedDB**。

---

## 點樣更新程式，再上載到 GitHub Pages

Pages 已經開咗：Settings → Pages → 用 **main** 分支、**根目錄（/）**。  
網址：https://chaniomeng-alt.github.io/travel-app-test/

### 每次改完嘅固定流程

1. **本機改好**（或叫 AI 改），只改今次要改嘅檔。
2. **本機測試**：用瀏覽器開 `index.html`，或者起一個簡單本機伺服器再試。
3. **如果改咗會影響快取嘅檔**（`index.html` / `style.css` / `app.js` / icons 等），記得升 `sw.js` 入面嘅 `CACHE_VERSION`（例如 `v6-2` → `v6-3`），否則手機可能繼續用舊快取。
4. **上載到 GitHub**（覆蓋 `main` 上對應檔案）：用 GitHub 網頁 Upload、或者 `git push`。
5. 等 1～2 分鐘，開正式網址。手機見到頂部「**有更新，撳此重新載入**」就撳一下。

### 用 GitHub 網頁改細檔（唔使裝 Git）

1. 開倉庫：https://github.com/chaniomeng-alt/travel-app-test  
2. 撳要改嘅檔 → 鉛筆圖示編輯 → Commit changes（commit 到 `main`）  
3. 等 Pages 部署完再喺手機重新載入

### 手機點更新「示範資料」

本機行程資料喺瀏覽器裏面，**唔會**因為你 push 程式碼就自動變。上線後用力重新整理一次，App 有時會自動補種子資料；或者：

- **設定 → 備份同還原** →「載入示範資料」  
- 又或者開：`https://chaniomeng-alt.github.io/travel-app-test/?seed=1`

---

## 出事點樣還原舊版本（GitHub History）

1. 開倉庫 → 撳出問題嗰個檔（例如 `app.js`）  
2. 撳 **History**（歷史）  
3. 揀你想返轉頭嗰個 commit → 開嗰版檔案內容  
4. 用 **⋯** 選單揀 **View file** / **Raw**，複製內容；或者撳該 commit 嘅 **Browse files**，再喺嗰個版本撳檔案右邊 **⋯ → Edit file** 再 commit 返 `main`（等於用舊內容覆蓋）  
5. 更簡單：喺 History 入面某個 commit，撳 **⋯ → Revert**（如果介面有），會開一個還原 commit  
6. 手機開 App，撳「有更新，重新載入」；必要時 DevTools → Application → Clear storage 清舊 service worker（只清快取，唔好亂清 localStorage，否則行程會冇）

**提示：** 還原程式碼 **唔會** 自動還原你手機入面已經改過嘅行程；行程要用下面「備份」先保得住。

---

## 點樣備份資料（第 5 站）

換機、清網站資料、或者 iPhone「加至主畫面」後儲存空間同 Safari **分開**，都會令行程消失。所以要自己定期匯出。

### 匯出

1. 開 App → **設定** → **備份同還原**  
2. 撳 **匯出**  
3. 會下載 `travel-backup-YYYYMMDD.json`（包埋 `travel_app_v1` 同預約附件 base64）  
4. 將檔案存去雲端硬碟，或者寄畀自己

超過約 14 日冇匯出，頂部會出一條可關閉嘅提醒。

### 匯入

1. **設定 → 備份同還原** → 選你嘅 JSON  
2. App 會提示「會覆蓋現有資料」——確認先會寫入  
3. 壞咗／版本唔啱嘅 JSON 會被拒絕，唔會覆蓋

倉庫入面有示範檔：`travel-backup-20261030.json`（九州＋曼谷；**冇**預約編號）。

---

## 已知限制

| 項目 | 說明 |
|------|------|
| **localStorage 唔係保險箱** | 清除網站資料、換瀏覽器、換手機會冇晒資料。一定要自己匯出備份。 |
| **iPhone PWA vs Safari** | 「加至主畫面」之後嘅 App，儲存通常同 Safari **分開**。建議裝好 PWA **之後**先輸入正式資料，並定期匯出。 |
| **容量** | localStorage 大約幾 MB；大 PDF／相片放 IndexedDB。寫入失敗會有提示，唔好當一定成功。 |
| **Service Worker 快取** | 改完程式要升 `CACHE_VERSION`，否則可能一直見到舊版。天氣 API、Google 地圖連結**唔會**快取，離線時要網絡先用到。 |
| **天氣預報範圍** | Open-Meteo 通常只覆蓋未來約 1～2 星期；超出範圍會顯示「未有預報」，唔會造假數字。 |
| **公開倉庫＝行程公開** | 航班、酒店可以放示範資料，但**預約確認編號／PNR 唔好寫入公開程式碼**；私人編號只存你手機（或自己嘅備份檔，唔好 commit 上 GitHub）。 |
| **匯率／外部 API** | 依賴第三方；失敗時可手動改匯率。條款同額度可能變。 |
| **第 8a 站（本機成員）已做** | 底欄「成員」：頭像／名稱／角色、增刪改、預約分攤勾選、記帳付款人、簡易結算。**8b 雲端同步未做**。 |

---

## 示範旅程摘要

| 旅程 | 日期 | 重點 |
|------|------|------|
| 九州小旅 | 2026-11-22～28 | UO638／UO601、3 間酒店；購物加咖啡豆等 |
| 曼谷小旅 | 2026-12-24～27 | NX936／NX935、曼谷柏悦酒店（住至 12/26；12/26 晚未見訂單） |

---

## PWA：加到主畫面同離線（第 6 站）

已有 `manifest.webmanifest`、`sw.js`、`assets/icons/`（svg；iOS apple-touch 用現有貼紙圖）。Sortable 用本機 `assets/vendor/`，方便離線。

### 安裝

1. 用 **HTTPS** 開：https://chaniomeng-alt.github.io/travel-app-test/  
2. **iPhone Safari**：分享 →「加至主畫面」  
3. **Android Chrome**：選單 →「安裝應用程式」／「加到主畫面」  
4. 之後會用獨立圖示同全螢幕（standalone）開啟

### 測試離線

1. 先用網絡開一次（等 service worker 安裝）  
2. 開飛航模式／Offline，再重新載入  
3. 首頁、行程殼、本地資料應仍可用；天氣同地圖要網絡

### 由 1024 icon 出各尺寸（本機，選用）

需要 Pillow：`pip install pillow`

用下面 Python 由 `assets/icons/icon-1024.png` 產生 512、192、同 apple-touch 180：

- 開 `icon-1024.png`
- 縮圖到目標邊長，貼上奶油底 `#F7F3EA` 嘅正方形 canvas
- 存做 `icon-512.png`、`icon-192.png`、`apple-touch-icon.png`

（完整腳本可問 AI 再生成；而家 repo 已有現成 icon。）

---

## 路線圖進度（簡要）

| 站 | 內容 | 狀態 |
|----|------|------|
| 1～5 | 拆檔、多旅程、首頁貼紙、分頁、備份 | 已完成（第 4 站部分 polish 已跳過） |
| 6 | PWA | 已完成 |
| 7 | 上線＋呢份 README | 已完成（Pages 已開） |
| 8a | 本機成員分頁 | 完成 |
| 8b | 雲端同步（選做） | 未開始 |

有問題可以喺 GitHub Issues 開，或者將錯誤訊息／截圖貼畀 AI 幫手。
