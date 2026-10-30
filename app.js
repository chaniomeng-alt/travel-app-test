
/* ---------- icons ---------- */
const IC = {
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  train: '<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16M12 3v8M8 19l-2 3M18 22l-2-3M8 15h.01M16 15h.01"/>',
  bus: '<path d="M8 6v6M16 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
  bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
  food: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/>',
  check: '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-4.9-4.5-9-10-9z"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
};
const ic = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24">${IC[n]}</svg>`;
document.querySelectorAll('[data-i]').forEach(e => e.innerHTML = IC[e.dataset.i]);
[['ic-plane1','plane'],['ic-plane2','plane'],['ic-plane3','plane'],['ic-bed1','bed'],['ic-palette','palette'],['ic-spark','spark'],['ic-spark2','spark']]
  .forEach(([id, n]) => { const e = document.getElementById(id); if (e) e.innerHTML = IC[n]; });

/* ---------- cat stickers (original drawings) ---------- */
let _cid = 0;
function manekiCat() {
  const id = 'mk' + (++_cid);
  const ink = '#6B5445', fur = '#FFFDF8', og = '#F4B67A', dk = '#8A7566', pk = '#F7B3B8';
  const sw = `stroke="${ink}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;
  const body = 'M32 100 Q30 72 60 70 Q90 72 88 100 Q88 114 60 114 Q32 114 32 100Z';
  let s = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs>
    <clipPath id="${id}b"><path d="${body}"/></clipPath>
    <clipPath id="${id}h"><ellipse cx="60" cy="50" rx="33" ry="27"/></clipPath></defs>`;
  // tail (calico orange), on the left
  s += `<path d="M36 104 Q6 106 10 76" fill="none" stroke="${ink}" stroke-width="12" stroke-linecap="round"/><path d="M36 104 Q6 106 10 76" fill="none" stroke="${og}" stroke-width="7.6" stroke-linecap="round"/>`;
  // body + patches + belly
  s += `<path d="${body}" fill="${fur}" ${sw}/>`;
  s += `<g clip-path="url(#${id}b)"><ellipse cx="78" cy="84" rx="13" ry="11" fill="${og}"/><ellipse cx="44" cy="90" rx="8" ry="6" fill="${dk}" opacity=".85"/><ellipse cx="60" cy="106" rx="17" ry="11" fill="#FFF1E2"/></g>`;
  s += `<path d="${body}" fill="none" ${sw}/>`;
  // feet
  s += `<ellipse cx="44" cy="113" rx="10" ry="5.2" fill="${fur}" ${sw}/><ellipse cx="76" cy="113" rx="10" ry="5.2" fill="${fur}" ${sw}/>`;
  s += `<path d="M41 114v-2.5M45 114.4v-3M49 114v-2.5M71 114v-2.5M75 114.4v-3M79 114v-2.5" stroke="${ink}" stroke-width="1.4" stroke-linecap="round"/>`;
  // ears
  s += `<polygon points="27,46 30,13 57,27" fill="${og}" ${sw}/><polygon points="93,46 90,13 63,27" fill="${fur}" ${sw}/>`;
  s += `<polygon points="33,35 35,21 47,28" fill="${pk}"/><polygon points="87,35 85,21 73,28" fill="${pk}"/>`;
  // head + calico patches
  s += `<ellipse cx="60" cy="50" rx="33" ry="27" fill="${fur}"/>`;
  s += `<g clip-path="url(#${id}h)"><ellipse cx="38" cy="33" rx="16" ry="12" fill="${og}"/><ellipse cx="84" cy="34" rx="10" ry="8" fill="${dk}" opacity=".85"/></g>`;
  s += `<ellipse cx="60" cy="50" rx="33" ry="27" fill="none" ${sw}/>`;
  // face: happy closed eyes, blush, nose, mouth
  s += `<path d="M38 55 Q44 46 50 55 M70 55 Q76 46 82 55" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`;
  s += `<ellipse cx="35" cy="62" rx="6.5" ry="3.8" fill="#F79EA6" opacity=".7"/><ellipse cx="85" cy="62" rx="6.5" ry="3.8" fill="#F79EA6" opacity=".7"/>`;
  s += `<path d="M57.5 58h5l-2.5 3z" fill="#E58C8C"/><path d="M60 61v2M60 63Q56.4 67 53 63.4M60 63Q63.6 67 67 63.4" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>`;
  // collar + bell
  s += `<path d="M37 76 Q60 88 83 76 L82 83 Q60 95 38 83Z" fill="#E4574F" ${sw}/>`;
  s += `<circle cx="60" cy="90" r="5.2" fill="#F7CF55" ${sw}/><path d="M55.6 90h8.8" stroke="${ink}" stroke-width="1.6"/><circle cx="60" cy="92.4" r="1.2" fill="${ink}"/>`;
  // koban coin held in left paw
  s += `<ellipse cx="62" cy="106" rx="9.5" ry="10.5" fill="#F7CF55" ${sw}/><path d="M56 101h12M55.5 106h13M56 111h12" stroke="#C99A2E" stroke-width="1.8" stroke-linecap="round"/>`;
  s += `<ellipse cx="50" cy="104" rx="7" ry="6.2" fill="${fur}" ${sw}/>`;
  // raised waving paw (right)
  s += `<path d="M80 92 Q102 88 104 60" fill="none" stroke="${ink}" stroke-width="14" stroke-linecap="round"/><path d="M80 92 Q102 88 104 60" fill="none" stroke="${fur}" stroke-width="9.6" stroke-linecap="round"/>`;
  s += `<circle cx="104" cy="53" r="9" fill="${fur}" ${sw}/><ellipse cx="104" cy="56" rx="3.6" ry="3" fill="${pk}"/><circle cx="99.6" cy="50.4" r="1.7" fill="${pk}"/><circle cx="104" cy="48.6" r="1.7" fill="${pk}"/><circle cx="108.4" cy="50.4" r="1.7" fill="${pk}"/>`;
  s += `<path d="M110 38l4-4M114 48h4M110 58l4 4" stroke="${ink}" stroke-width="2.2" stroke-linecap="round"/>`;
  return s + '</svg>';
}

function cat(kind) {
  if (kind === 'maneki') return manekiCat();
  const ink = '#6B5445';
  const white = kind === 'maneki';
  const fur = white ? '#FFFDF8' : '#E9CDA4';
  const st = '#B98B5E';
  const sw = 'stroke="' + ink + '" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
  let s = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">`;
  // tail
  s += `<path d="M88 100 Q114 98 108 70" fill="none" stroke="${ink}" stroke-width="10" stroke-linecap="round"/><path d="M88 100 Q114 98 108 70" fill="none" stroke="${fur}" stroke-width="5.4" stroke-linecap="round"/>`;
  // body
  s += `<ellipse cx="60" cy="92" rx="27" ry="22" fill="${fur}" ${sw}/>`;
  // ears
  s += `<polygon points="30,40 33,12 56,27" fill="${fur}" ${sw}/><polygon points="90,40 87,12 64,27" fill="${fur}" ${sw}/>`;
  s += `<polygon points="35,32 37,19 48,27" fill="#F5B3B8"/><polygon points="85,32 83,19 72,27" fill="#F5B3B8"/>`;
  // head
  s += `<ellipse cx="60" cy="50" rx="33" ry="27" fill="${fur}" ${sw}/>`;
  if (white) {
    s += `<ellipse cx="42" cy="36" rx="9" ry="7" fill="#F2B77E" opacity=".9"/><ellipse cx="82" cy="60" rx="6" ry="5" fill="#F2B77E" opacity=".9"/>`;
  } else {
    s += `<path d="M52 27v9M60 25v10M68 27v9M30 52h7M30 58h6M90 52h-7M90 58h-6" stroke="${st}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`;
  }
  if (kind === 'ramen' || kind === 'sakura' || kind === 'bags') {
    s += `<path d="M28 42 Q60 28 92 42 L91 50 Q60 37 29 50Z" fill="#fff" ${sw}/><circle cx="60" cy="40" r="4.6" fill="#D9534F"/>`;
  }
  // face
  s += `<ellipse cx="46" cy="53" rx="3.4" ry="4" fill="${ink}"/><ellipse cx="74" cy="53" rx="3.4" ry="4" fill="${ink}"/>`;
  s += `<circle cx="47.2" cy="51.6" r="1.2" fill="#fff"/><circle cx="75.2" cy="51.6" r="1.2" fill="#fff"/>`;
  s += `<ellipse cx="38" cy="62" rx="6" ry="3.6" fill="#F7B7B7" opacity=".75"/><ellipse cx="82" cy="62" rx="6" ry="3.6" fill="#F7B7B7" opacity=".75"/>`;
  s += `<path d="M57 58h6l-3 3.4z" fill="#E58C8C"/><path d="M60 61.4v2.2M60 63.6Q56.5 67 53.5 63.6M60 63.6Q63.5 67 66.5 63.6" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>`;
  if (kind === 'ramen') {
    // bowl, noodles, chopsticks
    s += `<path d="M30 88 H90 Q88 114 60 114 Q32 114 30 88Z" fill="#fff" ${sw}/><path d="M30 88 H90" stroke="#D9534F" stroke-width="4"/>`;
    s += `<path d="M44 88 Q42 78 50 70 M54 88 Q52 76 58 68 M64 88 Q64 78 60 68" fill="none" stroke="#F3D98E" stroke-width="3.2" stroke-linecap="round"/>`;
    s += `<path d="M82 72 L62 90 M86 76 L66 92" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>`;
    s += `<ellipse cx="38" cy="90" rx="8" ry="6" fill="${fur}" ${sw}/><ellipse cx="82" cy="90" rx="8" ry="6" fill="${fur}" ${sw}/>`;
  } else if (kind === 'maneki') {
    s += `<circle cx="60" cy="77" r="4.5" fill="#F4C84E" ${sw}/><path d="M42 77 Q60 84 78 77" fill="none" stroke="#D9534F" stroke-width="3.5" stroke-linecap="round"/>`;
    s += `<path d="M82 90 Q98 80 96 58" fill="none" stroke="${ink}" stroke-width="13" stroke-linecap="round"/><path d="M82 90 Q98 80 96 58" fill="none" stroke="${fur}" stroke-width="9" stroke-linecap="round"/>`;
    s += `<circle cx="96" cy="54" r="7.5" fill="${fur}" ${sw}/><ellipse cx="42" cy="108" rx="9" ry="5.5" fill="${fur}" ${sw}/><ellipse cx="72" cy="108" rx="9" ry="5.5" fill="${fur}" ${sw}/>`;
  } else if (kind === 'bowl') {
    s += `<path d="M22 84 H98 Q95 116 60 116 Q25 116 22 84Z" fill="#F4F0E6" ${sw}/><path d="M22 84 H98" stroke="#8DB7D8" stroke-width="4"/>`;
    s += `<g transform="rotate(-8 60 100)"><rect x="40" y="88" width="40" height="24" rx="3" fill="#BFDDB2" ${sw}/><path d="M60 88v24M50 94l4 4M70 100l4 4" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/></g>`;
    s += `<ellipse cx="34" cy="88" rx="8" ry="5.5" fill="${fur}" ${sw}/><ellipse cx="86" cy="88" rx="8" ry="5.5" fill="${fur}" ${sw}/>`;
  } else if (kind === 'bags') {
    s += `<path d="M4 80 H32 L31 114 H5Z" fill="#E4574F" ${sw}/><path d="M12 80 Q12 69 18 69 Q24 69 24 80" fill="none" stroke="${ink}" stroke-width="2.4" stroke-linecap="round"/>`;
    s += `<path d="M88 76 H116 L115 114 H89Z" fill="#8FBFA6" ${sw}/><path d="M96 76 Q96 65 102 65 Q108 65 108 76" fill="none" stroke="${ink}" stroke-width="2.4" stroke-linecap="round"/>`;
    s += `<path d="M50 96 H70 L69 114 H51Z" fill="#F4C84E" ${sw}/>`;
    s += `<ellipse cx="32" cy="92" rx="8" ry="6" fill="${fur}" ${sw}/><ellipse cx="88" cy="90" rx="8" ry="6" fill="${fur}" ${sw}/>`;
  } else if (kind === 'shop') {
    s += `<path d="M36 84 H84 L82 115 H38Z" fill="#D9A56B" ${sw}/><path d="M50 84 Q50 72 60 72 Q70 72 70 84" fill="none" stroke="${ink}" stroke-width="2.4" stroke-linecap="round"/>`;
    s += `<circle cx="60" cy="100" r="7" fill="#fff" ${sw}/><circle cx="57.4" cy="98.6" r="1.1" fill="${ink}"/><circle cx="62.6" cy="98.6" r="1.1" fill="${ink}"/><path d="M58 102q2 2 4 0" fill="none" stroke="${ink}" stroke-width="1.4" stroke-linecap="round"/>`;
    s += `<ellipse cx="36" cy="86" rx="8" ry="6" fill="${fur}" ${sw}/><ellipse cx="84" cy="86" rx="8" ry="6" fill="${fur}" ${sw}/>`;
  } else if (kind === 'sakura') {
    s += `<path d="M2 28 Q40 20 70 6" fill="none" stroke="#8A6A55" stroke-width="5" stroke-linecap="round"/>`;
    [[14,26],[30,22],[48,15],[62,9],[22,36],[40,28]].forEach(([x,y]) => s += `<g transform="translate(${x} ${y})"><circle r="6.5" fill="#FFC9D6"/><circle r="2" fill="#F08FA6"/></g>`);
    s += `<ellipse cx="44" cy="108" rx="9" ry="5.5" fill="${fur}" ${sw}/><ellipse cx="74" cy="108" rx="9" ry="5.5" fill="${fur}" ${sw}/>`;
  }
  return s + '</svg>';
}

/* ---------- data ---------- */
const gmap = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const mapLink = q => `<a class="map" href="${gmap(q)}" target="_blank" rel="noopener" aria-label="在 Google 地圖打開">${ic('pin')}</a>`;
const HQ_KUM = 'ドーミーイン熊本', HQ_NAG = 'ドーミーイン PREMIUM 長崎駅前', HQ_FUK = '西鉄ホテル クルーム博多';
const FUK_INT = '福岡空港 国際線ターミナル';
const store = {
  get(k, f) { try { const v = localStorage.getItem(k); return v === null ? f : JSON.parse(v); } catch (e) { return f; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};

let days = store.get('kz_days', null);
if (!Array.isArray(days) || !days.length) days = [
  { dow:'Sun', n:22, title:'抵達熊本', route:'香港 → 福岡 → 熊本', hotel:'ドーミーイン熊本', hq:HQ_KUM, temp:[18,12], place:'熊本', cat:'maneki', items:[
    { time:'早上', ic:'bus', text:'金巴：澳門 → 香港機場' },
    { time:'12:55', ic:'plane', text:'UO638 · HKG 客運大樓 2 起飛', q:'香港國際機場 客運大樓2' },
    { time:'17:00', ic:'plane', text:'抵達福岡機場國際線航廈', q:FUK_INT },
    { time:'傍晚', ic:'train', text:'新幹線：博多 → 熊本站', must:1, q:'熊本駅' },
    { time:'晚上', ic:'bed', text:'入住ドーミーイン熊本（20:00 後可入住）', q:HQ_KUM }
  ]},
  { dow:'Mon', n:23, title:'黑川溫泉日歸', route:'熊本 → 黑川溫泉 → 熊本', hotel:'ドーミーイン熊本', hq:HQ_KUM, temp:[15,8], place:'黑川', cat:'sakura', items:[
    { time:'早上', ic:'bus', text:'熊本出發 → 黑川溫泉（九州橫斷巴士）', must:1, q:'黒川温泉' },
    { time:'中午', ic:'pin', text:'入湯手形多湯巡禮，日歸溫泉', q:'黒川温泉 入湯手形' },
    { time:'下午', ic:'pin', text:'黑川溪谷散步，看秋色', q:'黒川温泉街' },
    { time:'傍晚', ic:'bus', text:'返回熊本（住ドーミーイン）', q:HQ_KUM }
  ]},
  { dow:'Tue', n:24, title:'前往長崎', route:'熊本 → 博多 → 長崎', hotel:'ドーミーイン PREMIUM 長崎駅前', hq:HQ_NAG, temp:[19,13], place:'長崎', cat:'ramen', items:[
    { time:'早上', ic:'train', text:'新幹線：熊本 → 博多 → 長崎（西九州新幹線）', must:1, q:'長崎駅' },
    { time:'中午', ic:'bed', text:'入住長崎住宿', q:HQ_NAG },
    { time:'下午', ic:'pin', text:'長崎原爆資料館', must:1, q:'長崎原爆資料館' },
    { time:'晚上', ic:'food', text:'中華街或出島附近晚餐', q:'長崎新地中華街' }
  ]},
  { dow:'Wed', n:25, title:'軍艦島・原爆', route:'長崎 → 軍艦島 → 長崎市區', hotel:'ドーミーイン PREMIUM 長崎駅前', hq:HQ_NAG, temp:[19,13], place:'長崎', cat:'bowl', items:[
    { time:'早上', ic:'bus', text:'前往軍艦島登島碼頭', must:1, q:'軍艦島クルーズ 乗り場 長崎' },
    { time:'上午', ic:'pin', text:'軍艦島巡禮（視天氣）', must:1, q:'軍艦島' },
    { time:'下午', ic:'pin', text:'長崎原爆資料館（如未看完）', must:1, q:'長崎原爆資料館' },
    { time:'晚上', ic:'food', text:'長崎市區散步或美食' }
  ]},
  { dow:'Thu', n:26, title:'長崎 → 福岡', route:'長崎 → 博多', hotel:'西鉄ホテル クルーム博多', hq:HQ_FUK, temp:[18,12], place:'福岡', cat:'maneki', items:[
    { time:'早上', ic:'train', text:'新幹線：長崎 → 博多', must:1, q:'博多駅' },
    { time:'中午', ic:'bed', text:'抵達福岡，入住', q:HQ_FUK },
    { time:'下午', ic:'pin', text:'福岡市區自由活動' },
    { time:'晚上', ic:'food', text:'福岡美食' }
  ]},
  { dow:'Fri', n:27, title:'貓島 或 大濠公園', route:'方案 A 相島 ／ 方案 B 大濠公園', hotel:'西鉄ホテル クルーム博多', hq:HQ_FUK, temp:[18,12], place:'福岡', cat:'sakura', items:[
    { time:'方案 A', ic:'train', text:'福岡 → 新宮港 → 渡輪去相島（貓島）', must:1, opt:'a', q:'相島渡船 新宮港' },
    { time:'方案 A', ic:'pin', text:'相島散步、與貓咪互動、看海', must:1, opt:'a', q:'相島 福岡' },
    { time:'方案 B', ic:'pin', text:'大濠公園散步、看秋景（市內輕鬆）', must:1, opt:'b', q:'大濠公園' },
    { time:'方案 B', ic:'pin', text:'天神・中洲・博多市內自由散步、購物、美食', opt:'b', q:'天神 福岡' },
    { time:'中午', ic:'food', text:'FILTER SUPPLY（フィルターサプライ）飲咖啡及買咖啡豆', must:1, q:'FILTER SUPPLY 福岡' },
    { time:'晚上', ic:'food', text:'福岡市區自由活動／休息' }
  ]},
  { dow:'Sat', n:28, title:'福岡自由・出發', route:'福岡 → 香港', hotel:'11:00 前退房（西鉄ホテル クルーム博多）', hq:HQ_FUK, temp:[18,12], place:'福岡', cat:'ramen', items:[
    { time:'09:45', ic:'bed', text:'退房（11:00 前），出發去機場', q:HQ_FUK },
    { time:'10:00', ic:'train', text:'地鐵：博多 → 福岡空港（約 5–6 分鐘）', must:1, q:'福岡空港駅' },
    { time:'10:50', ic:'plane', text:'辦理登機、退稅、買最後手信（起飛前 2 小時到）', must:1, q:FUK_INT },
    { time:'辦妥登機', ic:'food', text:'去竹乃屋食雞皮（福岡機場）', must:1, q:'竹乃屋 福岡空港' },
    { time:'12:50', ic:'plane', text:'UO601 · 福岡機場起飛 → HKG 15:50', q:FUK_INT },
    { time:'15:50', ic:'bus', text:'抵達香港，轉金巴返澳門', q:'香港國際機場' }
  ]}
];

/* ---------- itinerary ---------- */
const chipsEl = document.getElementById('chips');
days.forEach((d, i) => {
  const b = document.createElement('button');
  b.className = 'chip' + (i === 0 ? ' active' : '');
  b.innerHTML = `<small>${d.dow}</small><b>${d.n}</b>`;
  b.onclick = () => showDay(i);
  chipsEl.appendChild(b);
});
let currentDay = 0;
function saveDays() { store.set('kz_days', days); }
function showDay(i) {
  currentDay = i;
  const d = days[i];
  chipsEl.querySelectorAll('.chip').forEach((c, k) => c.classList.toggle('active', k === i));
  document.getElementById('weather').innerHTML = `
    <div class="w-ic">${ic('cloud')}</div>
    <div><div class="w-temp">${d.temp[0]}°C <i>/ ${d.temp[1]}°C</i></div><div class="w-note">11月季節參考</div></div>
    <div class="w-right">${d.place}<small>最高 / 最低</small></div>`;
  document.getElementById('dayCard').innerHTML = `
    <div class="day-head">
      <div>
        <div class="day-date"><span class="dow">${d.dow}</span><span class="num">${d.n}</span><span class="mon">Nov</span></div>
        <div class="day-title">Day ${i + 1} ${d.title}</div>
        <div class="day-route">✓ ${d.route}</div>
      </div>
      <div class="sticker bob" style="width:112px;height:112px;flex:none;margin-top:-6px">${cat(d.cat)}</div>
    </div>
    <a class="hotel" href="${gmap(d.hq)}" target="_blank" rel="noopener">${ic('bed')}<span>${d.hotel}</span>${ic('pin')}</a>
    <div class="sec-title">活動安排 <span style="font-size:.8rem;color:var(--soft);font-weight:500">（可添加／刪除）</span></div>
    <div id="actList"></div>
    <div class="add-row" style="margin-top:10px;flex-wrap:wrap">
      <input class="fld" id="newTime" placeholder="時間" style="width:80px;flex:none">
      <input class="fld" id="newText" placeholder="活動內容" style="flex:1;min-width:140px">
      <button class="btn" id="addAct" style="flex:none">新增</button>
    </div>
    <div class="add-row" style="margin-top:6px">
      <input class="fld" id="newMap" placeholder="地圖關鍵字（可選，例如：竹乃屋 福岡空港）" style="flex:1">
    </div>`;
  const list = document.getElementById('actList');
  d.items.forEach((it, idx) => {
    const r = document.createElement('div');
    r.className = 'act' + (it.opt === 'b' ? ' b' : '');
    r.innerHTML = `
      <div class="dot">${ic(it.ic || 'pin')}</div>
      <div style="flex:1;min-width:0">
        <div class="tm">${it.time}</div>
        <div class="tx">${it.text}${it.must ? '<span class="must">必去</span>' : ''}</div>
      </div>
      ${it.q ? mapLink(it.q) : ''}
      <div style="display:flex;flex-direction:column;gap:2px;margin-left:4px">
        <button class="up" style="font-size:.75rem;padding:1px 6px;border:1.5px solid var(--line);border-radius:8px;background:#fff" aria-label="上移">↑</button>
        <button class="down" style="font-size:.75rem;padding:1px 6px;border:1.5px solid var(--line);border-radius:8px;background:#fff" aria-label="下移">↓</button>
      </div>
      <button class="del" style="margin-left:2px" aria-label="刪除">×</button>`;
    r.querySelector('.del').onclick = () => {
      d.items.splice(idx, 1);
      saveDays();
      showDay(i);
    };
    r.querySelector('.up').onclick = () => {
      if (idx > 0) {
        [d.items[idx-1], d.items[idx]] = [d.items[idx], d.items[idx-1]];
        saveDays();
        showDay(i);
      }
    };
    r.querySelector('.down').onclick = () => {
      if (idx < d.items.length - 1) {
        [d.items[idx], d.items[idx+1]] = [d.items[idx+1], d.items[idx]];
        saveDays();
        showDay(i);
      }
    };
    list.appendChild(r);
  });
  document.getElementById('addAct').onclick = () => {
    const t = document.getElementById('newTime').value.trim() || '自由';
    const txt = document.getElementById('newText').value.trim();
    if (!txt) return;
    const q = document.getElementById('newMap').value.trim();
    const item = { time: t, ic: 'pin', text: txt };
    if (q) item.q = q;
    d.items.push(item);
    document.getElementById('newTime').value = '';
    document.getElementById('newText').value = '';
    document.getElementById('newMap').value = '';
    saveDays();
    showDay(i);
  };
  document.getElementById('newText').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('addAct').click();
  });
}
showDay(0);

/* ---------- stickers on other tabs ---------- */
document.getElementById('stk-top').innerHTML = `<div style="position:absolute;left:0;top:6px;width:64px;height:64px">${cat('sakura')}</div><div style="position:absolute;right:0;top:0;width:70px;height:70px">${cat('maneki')}</div>`;
document.getElementById('stk-bowl').innerHTML = cat('bowl');
document.getElementById('stk-todo').innerHTML = cat('ramen');

/* ---------- countdown ---------- */
const target = new Date('2026-11-22T00:00:00+08:00').getTime();
function tick() {
  const now = Date.now(), diff = target - now;
  const cd = document.getElementById('cd'), bar = document.getElementById('bar'), plane = document.getElementById('plane');
  if (diff <= 0) { cd.textContent = '出發日到了！'; bar.style.width = '100%'; plane.style.left = '100%'; return; }
  const dd = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5), m = Math.floor(diff % 36e5 / 6e4), s = Math.floor(diff % 6e4 / 1e3);
  const p2 = n => String(n).padStart(2, '0');
  cd.innerHTML = `${dd}<span class="u">天</span>${p2(h)}<span class="c"> : </span>${p2(m)}<span class="c"> : </span>${p2(s)}`;
  const win = 30 * 864e5;
  const pct = Math.min(95, Math.max(3, (now - (target - win)) / win * 100));
  bar.style.width = pct + '%'; plane.style.left = pct + '%';
}
tick(); setInterval(tick, 1000);

/* ---------- tabs ---------- */
document.querySelectorAll('#nav button').forEach(b => b.onclick = () => {
  document.querySelectorAll('#nav button').forEach(x => x.classList.toggle('active', x === b));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === b.dataset.v));
  window.scrollTo({ top: 0 });
});

/* ---------- storage helpers ---------- */

/* ---------- todo ---------- */
let todos = store.get('kz_todos', [
  { t: '買北九州 5 日券（官網最平）', d: 0 },
  { t: '確認 11/22 傍晚新幹線班次', d: 0 },
  { t: '黑川溫泉巴士預約', d: 0 },
  { t: '軍艦島登島票', d: 0 },
  { t: '貓島渡輪 或 大濠公園計劃', d: 0 },
  { t: '換日圓 / 交通卡', d: 0 }
]);
function renderTodos() {
  const box = document.getElementById('todoList');
  box.innerHTML = '';
  todos.forEach((o, i) => {
    const r = document.createElement('div');
    r.className = 'todo' + (o.d ? ' done' : '');
    r.innerHTML = `<input type="checkbox" id="td${i}" ${o.d ? 'checked' : ''}><label for="td${i}"></label><button class="del" aria-label="刪除">×</button>`;
    r.querySelector('label').textContent = o.t;
    r.querySelector('input').onchange = e => { o.d = e.target.checked ? 1 : 0; save(); };
    r.querySelector('.del').onclick = () => { todos.splice(i, 1); save(); };
    box.appendChild(r);
  });
  const done = todos.filter(o => o.d).length, pct = todos.length ? Math.round(done / todos.length * 100) : 0;
  document.getElementById('todoPct').textContent = `${done}/${todos.length} · ${pct}%`;
  document.getElementById('todoBar').style.width = pct + '%';
}
function save() { store.set('kz_todos', todos); renderTodos(); }
document.getElementById('todoAdd').onclick = () => {
  const inp = document.getElementById('todoNew'), v = inp.value.trim();
  if (!v) return; todos.push({ t: v, d: 0 }); inp.value = ''; save();
};
document.getElementById('todoNew').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('todoAdd').click(); });
renderTodos();

/* ---------- settings ---------- */
const themes = [['#D49A62','#B87D46'],['#7B8FC4','#5F74AA'],['#93C3A4','#76A788'],['#E89F9F','#CE8080'],['#B5A5D6','#9A89BE'],['#E8C86A','#CCAA48'],['#C8442F','#A43220']];
const themeNames = ['琥珀','藍','綠','櫻花粉','紫','黃','楓葉紅'];
function applyTheme(i) {
  const [a, b] = themes[i];
  const root = document.documentElement.style;
  root.setProperty('--pri', a); root.setProperty('--pri-d', b);
  root.setProperty('--tint', `color-mix(in srgb, ${a} 14%, #FFFBF0)`);
  document.querySelectorAll('.sw').forEach((e, k) => e.classList.toggle('on', k === i));
  document.getElementById('themeName').textContent = '目前：' + themeNames[i];
  store.set('kz_theme', i);
}
const swBox = document.getElementById('swatches');
themes.forEach((t, i) => { const b = document.createElement('button'); b.className = 'sw'; b.style.background = t[0]; b.setAttribute('aria-label', themeNames[i]); b.onclick = () => applyTheme(i); swBox.appendChild(b); });
applyTheme(store.get('kz_theme', 6));

const fs = document.getElementById('fs');
function applyFs(v) { document.documentElement.style.fontSize = v + 'px'; document.getElementById('fsVal').textContent = v + 'px'; fs.value = v; store.set('kz_fs', v); }
fs.oninput = () => applyFs(+fs.value);
applyFs(store.get('kz_fs', 16));

/* ---------- falling effects ---------- */
const FX = [['none', '✕', '無'], ['sakura', '🌸', '櫻花'], ['leaf', '🍁', '秋葉']];
const LEAF_COLORS = ['#E2762F', '#C9442B', '#E8A93A', '#B0522A', '#D98B2B'];
const LEAF_PATH = 'M12 1.5 L14.2 6.5 L17.5 4.5 L16.8 9.5 L22 8.5 L18.6 12.6 L20.5 15 L14.6 15 L13 21.5 H11 L9.4 15 L3.5 15 L5.4 12.6 L2 8.5 L7.2 9.5 L6.5 4.5 L9.8 6.5 Z';
const pBox = document.getElementById('petals');
function buildFx(type) {
  pBox.innerHTML = '';
  if (type === 'none') return;
  const leaf = type === 'leaf', n = leaf ? 14 : 16;
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div'), s = leaf ? 16 + Math.random() * 12 : 8 + Math.random() * 9;
    el.className = leaf ? 'leaf' : 'petal';
    el.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${(leaf ? 11 : 9) + Math.random() * 9}s;animation-delay:${-Math.random() * 16}s`;
    if (leaf) el.innerHTML = `<svg viewBox="0 0 24 24"><path d="${LEAF_PATH}" fill="${LEAF_COLORS[i % LEAF_COLORS.length]}"/><path d="M12 20V8M12 14L8 11M12 14L16 11" stroke="rgba(255,255,255,.4)" stroke-width=".8" stroke-linecap="round" fill="none"/></svg>`;
    pBox.appendChild(el);
  }
}
let curFx = 'sakura';
const fxGrid = document.getElementById('fxGrid');
FX.forEach(([k, e, t]) => {
  const b = document.createElement('button');
  b.className = 'fx'; b.dataset.k = k; b.innerHTML = `<span>${e}</span>${t}`;
  b.onclick = () => setFx(k);
  fxGrid.appendChild(b);
});
function setFx(k) {
  curFx = k; buildFx(k);
  fxGrid.querySelectorAll('.fx').forEach(b => b.classList.toggle('on', b.dataset.k === k));
  store.set('kz_fx', k);
}
document.getElementById('fab').onclick = () => setFx(FX[(FX.findIndex(f => f[0] === curFx) + 1) % FX.length][0]);
const savedFx = store.get('kz_fx', 'leaf');
setFx(FX.some(f => f[0] === savedFx) ? savedFx : 'leaf');

/* ---------- budget & currency ---------- */
const $ = id => document.getElementById(id);
$('stk-bud').innerHTML = cat('shop');
const CATS = [['food','餐飲','food'],['transport','交通','train'],['stay','住宿','bed'],['sight','觀光','pin'],['shop','購物','bag'],['other','其他','box']];
let budget = +store.get('kz_budget', 0) || 0;
let rate = +store.get('kz_rate', 0.052) || 0.052;
let exps = store.get('kz_exp', []);
if (!Array.isArray(exps)) exps = [];
const money = n => '$' + Math.round(n).toLocaleString('en-US');
const fmt = n => (isFinite(n) && n) ? String(Math.round(n * 100) / 100) : '';

$('expFilter').innerHTML = '<option value="all">全部</option>' + CATS.map(c => `<option value="${c[0]}">${c[1]}</option>`).join('');
$('expCat').innerHTML = CATS.map(c => `<option value="${c[0]}">${c[1]}</option>`).join('');
$('expFilter').onchange = () => renderBudget();

const jpy = $('jpy'), hkd = $('hkd'), rateIn = $('rateIn');
rateIn.value = rate.toFixed(4);
jpy.oninput = () => { hkd.value = jpy.value === '' ? '' : fmt(+jpy.value * rate); };
hkd.oninput = () => { jpy.value = hkd.value === '' ? '' : fmt(+hkd.value / rate); };
rateIn.onchange = () => {
  const v = +rateIn.value;
  if (v > 0) { rate = v; store.set('kz_rate', v); if (jpy.value !== '') jpy.oninput(); }
  rateIn.value = rate.toFixed(4);
};
$('rateUpd').onclick = async () => {
  const note = $('rateNote'); note.textContent = '更新中…';
  const urls = ['https://api.frankfurter.app/latest?from=JPY&to=HKD', 'https://open.er-api.com/v6/latest/JPY'];
  for (const u of urls) {
    try {
      const d = await (await fetch(u)).json();
      const v = d.rates && d.rates.HKD;
      if (v > 0) {
        rate = v; store.set('kz_rate', v); rateIn.value = v.toFixed(4);
        if (jpy.value !== '') jpy.oninput();
        note.textContent = '已更新（' + new Date().toLocaleDateString('zh-HK') + '）';
        return;
      }
    } catch (e) {}
  }
  note.textContent = '未能連線，沿用 ' + rate.toFixed(4) + '，可手動輸入';
};

$('setBudBtn').onclick = () => {
  const p = $('budPanel'); p.hidden = !p.hidden;
  if (!p.hidden) { $('budIn').value = budget || ''; $('budIn').focus(); }
};
$('budSave').onclick = () => { budget = Math.max(0, +$('budIn').value || 0); store.set('kz_budget', budget); $('budPanel').hidden = true; renderBudget(); };
$('expToggle').onclick = () => { $('expPanel').hidden = !$('expPanel').hidden; };
$('expAdd').onclick = () => {
  const a = +$('expAmt').value, cur = $('expCur').value, cat = $('expCat').value;
  if (!(a > 0)) { $('expAmt').focus(); return; }
  const n = $('expName').value.trim() || CATS.find(c => c[0] === cat)[1];
  exps.unshift({ id: Date.now(), n, a, cur, hkd: cur === 'JPY' ? a * rate : a, cat });
  store.set('kz_exp', exps);
  $('expName').value = ''; $('expAmt').value = ''; $('expPanel').hidden = true;
  renderBudget();
};

function renderBudget() {
  const spent = exps.reduce((s, e) => s + e.hkd, 0), left = budget - spent;
  const over = budget > 0 && left < 0;
  $('sumTotal').textContent = money(budget);
  $('sumSpent').textContent = money(spent);
  $('sumBar').style.width = (budget > 0 ? Math.min(100, spent / budget * 100) : 0) + '%';
  $('sumCard').classList.toggle('over', over);
  $('sumLeftLab').textContent = over ? '已超支' : '剩餘額度';
  $('sumLeft').textContent = budget > 0 ? money(Math.abs(left)) : '請先設置預算';

  $('catList').innerHTML = CATS.map(([k, n, i]) => {
    const v = exps.filter(e => e.cat === k).reduce((s, e) => s + e.hkd, 0);
    if (!v) return '';
    const p = Math.round(v / (spent || 1) * 100);
    return `<div class="cat-row"><div class="cat-ic">${ic(i)}</div><div class="cat-main"><div class="cat-top"><b>${n}</b><span>${money(v)} · ${p}%</span></div><div class="cat-bar"><i style="width:${p}%"></i></div></div></div>`;
  }).join('') || '<div class="empty">未有支出記錄</div>';

  const f = $('expFilter').value, box = $('expList');
  box.innerHTML = '';
  const list = exps.filter(e => f === 'all' || e.cat === f);
  if (!list.length) { box.innerHTML = '<div class="empty">暫時未有支出，撳「新增」記一筆</div>'; return; }
  list.forEach(e => {
    const c = CATS.find(x => x[0] === e.cat) || CATS[5];
    const r = document.createElement('div');
    r.className = 'exp';
    r.innerHTML = `<div class="cat-ic">${ic(c[2])}</div><div class="exp-m"><div class="exp-n"></div><div class="exp-s">${c[1]}</div></div><div class="exp-a"><b>${money(e.hkd)}</b><small>${e.cur === 'JPY' ? '¥' + Math.round(e.a).toLocaleString('en-US') : 'HKD'}</small></div><button class="del" aria-label="刪除">×</button>`;
    r.querySelector('.exp-n').textContent = e.n;
    r.querySelector('.del').onclick = () => { exps = exps.filter(x => x.id !== e.id); store.set('kz_exp', exps); renderBudget(); };
    box.appendChild(r);
  });
}
renderBudget();

/* ---------- shopping list ---------- */
function person(kind) {
  const ink = '#5A4638', skin = '#FFE3CC', blush = '#F79EA6';
  const sw = `stroke="${ink}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
  let s = '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">';
  s += '<ellipse cx="60" cy="117" rx="40" ry="3.6" fill="#000" opacity=".08"/>';
  if (kind === 'girl') {
    const hair = '#4B3226', hl = '#7A5640', top = '#F2A7AE', skirt = '#6F86B8';
    // cart (behind the girl's arms)
    s += `<path d="M86 100 L80 106 M104 100 L106 106" ${sw} fill="none"/>`;
    s += `<circle cx="80" cy="108" r="4.6" fill="#8A7566" ${sw}/><circle cx="106" cy="108" r="4.6" fill="#8A7566" ${sw}/>`;
    // goods sticking out of the cart
    s += `<path d="M78 52 H94 L92 72 H80Z" fill="#E4574F" ${sw}/><path d="M82 52 Q82 44 86 44 Q90 44 90 52" fill="none" ${sw}/><rect x="82" y="60" width="8" height="5" rx="1.5" fill="#fff" opacity=".85"/>`;
    s += `<path d="M96 58 H112 V72 H96Z" fill="#F4C84E" ${sw}/><path d="M96 63 H112" stroke="${ink}" stroke-width="1.6"/>`;
    s += `<path d="M99 58 Q101 48 104 52 Q106 46 109 58" fill="#8FBFA6" ${sw}/>`;
    // basket
    s += `<path d="M72 68 H116 L108 98 H80Z" fill="#FFF8EA" ${sw}/>`;
    s += `<path d="M76 79 H112 M78 89 H110 M86 68 L88 98 M97 68 L98 98 M107 68 L106 98" stroke="#BDB39C" stroke-width="1.6" fill="none"/>`;
    s += `<path d="M72 68 H116 L108 98 H80Z" fill="none" ${sw}/>`;
    // braids
    s += `<path d="M20 52 Q12 70 20 90" fill="none" stroke="${ink}" stroke-width="11" stroke-linecap="round"/><path d="M20 52 Q12 70 20 90" fill="none" stroke="${hair}" stroke-width="7.4" stroke-linecap="round"/>`;
    s += `<path d="M64 52 Q72 70 64 90" fill="none" stroke="${ink}" stroke-width="11" stroke-linecap="round"/><path d="M64 52 Q72 70 64 90" fill="none" stroke="${hair}" stroke-width="7.4" stroke-linecap="round"/>`;
    s += `<circle cx="20" cy="90" r="3.4" fill="#E4574F" ${sw}/><circle cx="64" cy="90" r="3.4" fill="#E4574F" ${sw}/>`;
    // legs + shoes
    s += `<rect x="33" y="96" width="9" height="12" fill="${skin}" ${sw}/><rect x="45" y="96" width="9" height="12" fill="${skin}" ${sw}/>`;
    s += `<path d="M30 110 Q30 106 36 106 H42 V112 H30Z" fill="#7A4B3A" ${sw}/><path d="M42 110 Q42 106 48 106 H54 V112 H42Z" fill="#7A4B3A" ${sw}/>`;
    // skirt + top
    s += `<path d="M29 92 Q42 88 55 92 L60 104 Q42 109 24 104Z" fill="${skirt}" ${sw}/><path d="M33 98 L32 104 M42 99 V106 M51 98 L52 104" stroke="#566A9A" stroke-width="1.6" stroke-linecap="round"/>`;
    s += `<path d="M30 68 Q28 86 31 94 H53 Q56 86 54 68 Q42 62 30 68Z" fill="${top}" ${sw}/><path d="M42 66 V93" stroke="#D98890" stroke-width="1.8"/>`;
    s += `<circle cx="38" cy="82" r="1.5" fill="#fff"/><circle cx="46" cy="82" r="1.5" fill="#fff"/>`;
    // arm to cart handle
    s += `<path d="M54 72 Q64 78 72 73" fill="none" stroke="${ink}" stroke-width="10.5" stroke-linecap="round"/><path d="M54 72 Q64 78 72 73" fill="none" stroke="${top}" stroke-width="6.8" stroke-linecap="round"/>`;
    s += `<circle cx="73" cy="72" r="4.6" fill="${skin}" ${sw}/>`;
    s += `<path d="M70 66 H80" stroke="${ink}" stroke-width="3.2" stroke-linecap="round"/>`;
    // neck + head
    s += `<rect x="37" y="58" width="10" height="10" rx="3" fill="${skin}" ${sw}/>`;
    s += `<circle cx="42" cy="40" r="22" fill="${skin}" ${sw}/>`;
    s += `<circle cx="20" cy="44" r="3.4" fill="${skin}" ${sw}/><circle cx="64" cy="44" r="3.4" fill="${skin}" ${sw}/>`;
    // hair top + bangs
    s += `<path d="M19 42 Q16 14 42 14 Q68 14 65 42 Q62 28 52 27 Q47 33 38 28 Q28 30 19 42Z" fill="${hair}" ${sw}/>`;
    s += `<path d="M28 20 Q36 15 46 17" fill="none" stroke="${hl}" stroke-width="2.4" stroke-linecap="round"/>`;
    // face
    s += `<ellipse cx="33" cy="43" rx="3" ry="4" fill="${ink}"/><ellipse cx="51" cy="43" rx="3" ry="4" fill="${ink}"/><circle cx="34" cy="41.6" r="1.2" fill="#fff"/><circle cx="52" cy="41.6" r="1.2" fill="#fff"/>`;
    s += `<ellipse cx="27" cy="50" rx="4.6" ry="2.8" fill="${blush}" opacity=".75"/><ellipse cx="57" cy="50" rx="4.6" ry="2.8" fill="${blush}" opacity=".75"/>`;
    s += `<path d="M38.5 50 Q42 54 45.5 50" fill="none" stroke="${ink}" stroke-width="1.9" stroke-linecap="round"/>`;
  } else {
    const hair = '#2F2622', hl = '#5A4A42', sweater = '#F2C14E', pants = '#5C6B8A';
    // legs + shoes
    s += `<rect x="47" y="92" width="11" height="17" fill="${pants}" ${sw}/><rect x="62" y="92" width="11" height="17" fill="${pants}" ${sw}/>`;
    s += `<path d="M44 112 Q44 107 50 107 H58 V113 H44Z" fill="#fff" ${sw}/><path d="M62 113 V107 H70 Q76 107 76 112 V113Z" fill="#fff" ${sw}/>`;
    // back bag (green) + hand-held bags
    s += `<path d="M97 84 H117 L116 106 H98Z" fill="#8FBFA6" ${sw}/><path d="M102 85 Q102 77 107 77 Q112 77 112 85" fill="none" ${sw}/><circle cx="107" cy="95" r="3.4" fill="#fff" opacity=".85"/>`;
    s += `<path d="M77 98 H101 L99 118 H79Z" fill="#8DB7D8" ${sw}/><rect x="83" y="106" width="12" height="5" rx="1.6" fill="#fff" opacity=".85"/>`;
    s += `<path d="M18 98 H42 L40 118 H20Z" fill="#E4574F" ${sw}/><rect x="24" y="106" width="12" height="5" rx="1.6" fill="#fff" opacity=".85"/>`;
    // torso
    s += `<rect x="53" y="55" width="14" height="12" rx="3" fill="${skin}" ${sw}/>`;
    s += `<path d="M43 68 Q41 90 45 96 H75 Q79 90 77 68 Q60 60 43 68Z" fill="${sweater}" ${sw}/>`;
    s += `<path d="M52 63 Q60 72 68 63" fill="none" ${sw}/><path d="M46 90 H74" stroke="#D9A22E" stroke-width="2"/>`;
    // arms holding bags
    s += `<path d="M44 70 Q31 80 33 93" fill="none" stroke="${ink}" stroke-width="11" stroke-linecap="round"/><path d="M44 70 Q31 80 33 93" fill="none" stroke="${sweater}" stroke-width="7.4" stroke-linecap="round"/>`;
    s += `<path d="M76 70 Q89 80 87 93" fill="none" stroke="${ink}" stroke-width="11" stroke-linecap="round"/><path d="M76 70 Q89 80 87 93" fill="none" stroke="${sweater}" stroke-width="7.4" stroke-linecap="round"/>`;
    s += `<path d="M24 99 Q24 91 31 91 Q38 91 37 99" fill="none" ${sw}/><path d="M81 99 Q81 91 88 91 Q95 91 95 99" fill="none" ${sw}/>`;
    s += `<circle cx="33" cy="93" r="4.6" fill="${skin}" ${sw}/><circle cx="87" cy="93" r="4.6" fill="${skin}" ${sw}/>`;
    // head
    s += `<circle cx="38.5" cy="40" r="3.6" fill="${skin}" ${sw}/><circle cx="81.5" cy="40" r="3.6" fill="${skin}" ${sw}/>`;
    s += `<circle cx="60" cy="37" r="22" fill="${skin}" ${sw}/>`;
    s += `<path d="M38 34 Q35 12 60 12 Q85 12 82 34 Q80 24 70 23 Q64 28 54 24 Q44 24 38 34Z" fill="${hair}" ${sw}/>`;
    s += `<path d="M46 17 Q54 12 63 14" fill="none" stroke="${hl}" stroke-width="2.4" stroke-linecap="round"/>`;
    // glasses
    s += `<circle cx="51" cy="40" r="7.2" fill="#fff" fill-opacity=".5" ${sw}/><circle cx="69" cy="40" r="7.2" fill="#fff" fill-opacity=".5" ${sw}/><path d="M58.2 40 H61.8 M43.8 39 L40.5 38.5 M76.2 39 L79.5 38.5" fill="none" ${sw}/>`;
    s += `<circle cx="51" cy="41" r="2" fill="${ink}"/><circle cx="69" cy="41" r="2" fill="${ink}"/><circle cx="51.7" cy="40.2" r=".8" fill="#fff"/><circle cx="69.7" cy="40.2" r=".8" fill="#fff"/>`;
    s += `<ellipse cx="44" cy="49" rx="4.2" ry="2.6" fill="${blush}" opacity=".7"/><ellipse cx="76" cy="49" rx="4.2" ry="2.6" fill="${blush}" opacity=".7"/>`;
    s += `<path d="M55 49.5 Q60 54.5 65 49.5" fill="none" stroke="${ink}" stroke-width="1.9" stroke-linecap="round"/>`;
  }
  return s + '</svg>';
}
$('stk-shop').innerHTML = cat('bags');
$('pgirl').innerHTML = person('girl');
$('pboy').innerHTML = person('boy');

const SCATS = ['零食', '藥妝', '服飾', '紀念品', '其他'];
let shop = store.get('kz_shop2', null);
if (!Array.isArray(shop)) shop = [
  { id: 1, n: '努努雞', note: '', cat: '零食', pri: 0, done: 0, img: '' },
  { id: 2, n: '明太子', note: '', cat: '零食', pri: 0, done: 0, img: '' },
  { id: 3, n: '鹽昆布', note: '', cat: '零食', pri: 0, done: 0, img: '' }
];
$('spCat').innerHTML = SCATS.map(c => `<option>${c}</option>`).join('');
$('spFilter').onchange = () => renderShop();
let spImgData = '';
const saveShop = () => store.set('kz_shop2', shop);

function readImg(file) {
  return new Promise(res => {
    const fr = new FileReader();
    fr.onerror = () => res('');
    fr.onload = () => {
      const im = new Image();
      im.onerror = () => res('');
      im.onload = () => {
        const k = Math.min(1, 160 / Math.max(im.width, im.height));
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(im.width * k)); c.height = Math.max(1, Math.round(im.height * k));
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
        res(c.toDataURL('image/jpeg', .7));
      };
      im.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}
$('spImg').onchange = async e => {
  const f = e.target.files[0];
  if (!f) return;
  spImgData = await readImg(f);
  $('spPrev').hidden = !spImgData; $('spPrev').src = spImgData;
  $('spImgNote').textContent = spImgData ? '已加相' : '讀取相片失敗';
};
$('spToggle').onclick = () => { $('spPanel').hidden = !$('spPanel').hidden; if (!$('spPanel').hidden) $('spName').focus(); };
$('spAdd').onclick = () => {
  const n = $('spName').value.trim();
  if (!n) { $('spName').focus(); return; }
  shop.unshift({ id: Date.now(), n, note: $('spNote').value.trim(), cat: $('spCat').value, pri: +$('spPri').value, done: 0, img: spImgData });
  saveShop();
  $('spName').value = ''; $('spNote').value = ''; $('spImg').value = ''; spImgData = '';
  $('spPrev').hidden = true; $('spImgNote').textContent = '可選，會自動縮細'; $('spPanel').hidden = true;
  renderShop();
};

function shopCard(it) {
  const d = document.createElement('div');
  d.className = 'card shop-item' + (it.done ? ' done' : '');
  d.innerHTML = `<input type="checkbox" class="chk" ${it.done ? 'checked' : ''} aria-label="已購買">${it.img ? '<img class="thumb" alt="">' : ''}<div class="si-main"><div class="si-name"></div><div class="si-note"></div><div class="tags"><span class="tag t-cat"></span><span class="tag p${it.pri}">${it.pri ? '重要' : '一般'}</span></div></div><button class="del" aria-label="刪除">×</button>`;
  d.querySelector('.si-name').textContent = it.n;
  const nt = d.querySelector('.si-note'); if (it.note) nt.textContent = it.note; else nt.remove();
  d.querySelector('.t-cat').textContent = it.cat;
  if (it.img) d.querySelector('.thumb').src = it.img;
  d.querySelector('.chk').onchange = e => { it.done = e.target.checked ? 1 : 0; saveShop(); renderShop(); };
  d.querySelector('.del').onclick = () => { shop = shop.filter(x => x.id !== it.id); saveShop(); renderShop(); };
  return d;
}
function renderShop() {
  const todo = shop.filter(x => !x.done), done = shop.filter(x => x.done);
  $('spTodo').textContent = todo.length; $('spDone').textContent = done.length;
  const cur = $('spFilter').value || 'all';
  $('spFilter').innerHTML = `<option value="all">全部 (${todo.length})</option>` + SCATS.map(c => `<option value="${c}">${c} (${todo.filter(x => x.cat === c).length})</option>`).join('');
  $('spFilter').value = [...$('spFilter').options].some(o => o.value === cur) ? cur : 'all';
  const f = $('spFilter').value;
  const L = $('spList'), D = $('spDoneList');
  L.innerHTML = ''; D.innerHTML = '';
  const shown = todo.filter(x => f === 'all' || x.cat === f);
  if (!shown.length) L.innerHTML = '<div class="empty">暫時冇待買嘅嘢，撳「新增」記低</div>';
  shown.forEach(x => L.appendChild(shopCard(x)));
  if (!done.length) D.innerHTML = '<div class="empty">買咗嘅嘢剔咗就會喺度出現</div>';
  done.forEach(x => D.appendChild(shopCard(x)));
}
renderShop();
