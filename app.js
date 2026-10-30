
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

const KZ_DEFAULT_DAYS = [
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


/* ---------- multi-trip data layer (travel_app_v1) ---------- */
const APP_KEY = 'travel_app_v1';
const TYPE_OF_IC = { food:'food', train:'transport', bus:'transport', plane:'transport', bed:'hotel', pin:'sight', bag:'shop' };
const TYPES = ['food', 'sight', 'transport', 'hotel', 'shop'];
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const pd = s => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, m - 1, d); };
const isoDate = dt => dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
const dowOf = d => WD[pd(d.date).getDay()];
const dayNum = d => pd(d.date).getDate();
const monOf = d => MON[pd(d.date).getMonth()];
const uid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
function normItem(it) {
  const o = Object.assign({}, it);
  if (!TYPES.includes(o.type)) o.type = TYPE_OF_IC[o.ic] || 'sight';
  if (typeof o.note !== 'string') o.note = '';
  if (!(+o.cost >= 0)) o.cost = 0; else o.cost = +o.cost;
  if (!(+o.ticket >= 0)) o.ticket = 0; else o.ticket = +o.ticket;
  if (typeof o.hours !== 'string') o.hours = '';
  if (typeof o.feat !== 'string') o.feat = '';
  if (!o.remind) o.remind = 0;
  if (!o.id) o.id = uid('a');
  return o;
}
function tripStatus(t, now) {
  const today = isoDate(now || new Date());
  if (today < t.startDate) return 'planning';
  if (today > t.endDate) return 'done';
  return 'ongoing';
}
const KZ_BOOKINGS = {
  flights: [
    { id:'f1', route:'香港 → 福岡', from:'HKG', to:'FUK', dep:'12:55', arr:'17:00', flightNo:'UO638', date:'2026-11-22', note:'香港國際機場 客運大樓 2 → 福岡國際機場 國際線航廈' },
    { id:'f2', route:'福岡 → 香港', from:'FUK', to:'HKG', dep:'12:50', arr:'15:50', flightNo:'UO601', date:'2026-11-28', note:'福岡國際機場 → 香港國際機場' }
  ],
  stays: [
    { id:'s1', name:'天然温泉 六花の湯 ドーミーイン熊本', dates:'11/22（入住 20:00 後）– 11/24（退房 11:00）', checkIn:'2026-11-22', checkOut:'2026-11-24', meta:'方便黑川日歸早班巴士', q:'ドーミーイン熊本' },
    { id:'s2', name:'天然温泉 鶴港の湯 ドーミーイン PREMIUM 長崎駅前', dates:'11/24（入住 15:00 後）– 11/26（退房 11:00 前）', checkIn:'2026-11-24', checkOut:'2026-11-26', meta:'2 晚 · 標準雙人房 · 含早餐 · 長崎站前，方便軍艦島碼頭', q:'ドーミーイン PREMIUM 長崎駅前' },
    { id:'s3', name:'西鉄ホテル クルーム博多', dates:'11/26（15:00 入住）– 11/28（11:00 前退房）', checkIn:'2026-11-26', checkOut:'2026-11-28', meta:'博多駅前 1-17-6 · 單人房禁煙 · 天然温泉博多駅前の湯 · 方便市內散策同機場', q:'西鉄ホテル クルーム博多', sticker:'bowl' }
  ]
};
const KZ_DEFAULT_TODOS = [
  { t: '買北九州 5 日券（官網最平）', d: 0, g: 'pre' },
  { t: '確認 11/22 傍晚新幹線班次', d: 0, g: 'pre' },
  { t: '黑川溫泉巴士預約', d: 0, g: 'pre' },
  { t: '軍艦島登島票', d: 0, g: 'pre' },
  { t: '貓島渡輪 或 大濠公園計劃', d: 0, g: 'pre' },
  { t: '換日圓 / 交通卡', d: 0, g: 'pre' },
  { t: '護照同證件', d: 0, g: 'pre' },
  { t: '手機網卡／eSIM', d: 0, g: 'pre' },
  { t: '旅行保險', d: 0, g: 'insurance' }
];
const KZ_DEFAULT_SHOP = [
  { id: 1, n: '努努雞', note: '福岡機場／市區手信', cat: '零食', pri: 1, done: 0, img: '' },
  { id: 2, n: '明太子', note: '博多名物', cat: '零食', pri: 1, done: 0, img: '' },
  { id: 3, n: '鹽昆布', note: '', cat: '零食', pri: 0, done: 0, img: '' },
  { id: 4, n: 'FILTER SUPPLY 咖啡豆', note: '11/27 必去', cat: '其他', pri: 1, done: 0, img: '' },
  { id: 5, n: '博多通りもん', note: '手信餅', cat: '零食', pri: 0, done: 0, img: '' },
  { id: 6, n: '黑川／溫泉手信', note: '黑川溫泉日歸', cat: '其他', pri: 0, done: 0, img: '' },
  { id: 7, n: '長崎蛋糕／卡斯特拉', note: '長崎手信', cat: '零食', pri: 0, done: 0, img: '' }
];
/* Thailand from Outlook (no 預約編號 in seed) */
const TH_BOOKINGS = {
  flights: [
    { id:'tf1', route:'澳門 → 曼谷', from:'MFM', to:'BKK', dep:'10:20', arr:'12:30', flightNo:'NX936', date:'2026-12-24', people:2, amount:0, note:'澳門航空 · 澳門國際機場 → 素萬那普機場 · 經濟艙 A320 · 2 位' },
    { id:'tf2', route:'曼谷 → 澳門', from:'BKK', to:'MFM', dep:'13:30', arr:'17:35', flightNo:'NX935', date:'2026-12-27', people:2, amount:0, note:'澳門航空 · 素萬那普機場 → 澳門國際機場 · 經濟艙 A320 · 2 位' }
  ],
  stays: [
    { id:'ts1', name:'曼谷柏悦酒店', dates:'12/24（15:00 後）– 12/26（12:00 前）', checkIn:'2026-12-24', checkOut:'2026-12-26', meta:'Central Embassy, 88 Witthayu Rd, Lumphini · 豪華房 · 特大雙人床 · 含早餐（25、26日）· 2 成人', q:'Park Hyatt Bangkok', people:2, amount:0 }
  ]
};
const TH_DEFAULT_TODOS = [
  { t: '護照同證件（2 位）', d: 0, g: 'pre' },
  { t: '換泰銖／準備現金', d: 0, g: 'pre' },
  { t: '確認 12/26 晚住宿（Outlook 未見訂單）', d: 0, g: 'pre' },
  { t: '手機網卡／eSIM', d: 0, g: 'pre' },
  { t: '轉接頭（泰國 Type A／B／C）', d: 0, g: 'pre' },
  { t: '防蚊／防曬', d: 0, g: 'pre' },
  { t: '網上預辦登機（澳門航空）', d: 0, g: 'pre' },
  { t: '旅行保險', d: 0, g: 'insurance' }
];
const TH_DEFAULT_SHOP = [
  { id: 101, n: '芒果乾', note: '機場／超市', cat: '零食', pri: 1, done: 0, img: '' },
  { id: 102, n: '泰式香料／咖喱醬', note: '', cat: '其他', pri: 0, done: 0, img: '' },
  { id: 103, n: '椰子油／護膚', note: '', cat: '其他', pri: 0, done: 0, img: '' },
  { id: 104, n: 'Chatuchak／夜市小物', note: '', cat: '其他', pri: 0, done: 0, img: '' },
  { id: 105, n: '泰式奶茶／手標茶', note: '', cat: '零食', pri: 0, done: 0, img: '' }
];
function buildThailandTrip() {
  return createTrip({
    id: 't-thai', title: '曼谷小旅', destination: '曼谷', startDate: '2026-12-24', endDate: '2026-12-27',
    currency: 'THB', cover: 'assets/covers/bangkok.png?v=4',
    bookings: JSON.parse(JSON.stringify(TH_BOOKINGS)),
    budget: { total: 0, rate: 0.22, expenses: [] },
    shop: TH_DEFAULT_SHOP.map(x => Object.assign({}, x)),
    todos: TH_DEFAULT_TODOS.map(x => Object.assign({}, x)),
    members: [], settings: defaultTripSettings('bangkok'), _kind: 'bangkok', _noAdd: true
  });
}
const COVER_KYUSHU = 'assets/covers/kyushu.png?v=4';
const COVER_BANGKOK = 'assets/covers/bangkok.png?v=4';
const SEED_VER = 5;
function ensureDefaultCovers() {
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!t) return;
    const blob = ((t.title || '') + ' ' + (t.destination || '')).trim();
    const cov = String(t.cover || '').trim();
    const isKz = t.id === 't1' || t.title === '九州小旅' || /九州/.test(blob);
    const isBk = t.id === 't-thai' || t.title === '曼谷小旅' || /曼谷|泰國|Bangkok|Thai/i.test(blob);
    if (isKz && (!cov || /^assets\/covers\/kyushu\.png(\?v=\d+)?$/.test(cov)) && cov !== COVER_KYUSHU) {
      t.cover = COVER_KYUSHU; changed = true;
    } else if (isBk && (!cov || /^assets\/covers\/bangkok\.png(\?v=\d+)?$/.test(cov)) && cov !== COVER_BANGKOK) {
      t.cover = COVER_BANGKOK; changed = true;
    } else if (!cov) {
      if (isKz) { t.cover = COVER_KYUSHU; changed = true; }
      else if (isBk) { t.cover = COVER_BANGKOK; changed = true; }
    }
  });
  return changed;
}
function migrateTripSettings() {
  const g = APP.settings || {};
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!t) return;
    if (!t.settings || typeof t.settings !== 'object') {
      if (isBangkokTrip(t)) t.settings = defaultTripSettings('bangkok');
      else if (isKyushuTrip(t)) {
        t.settings = {
          theme: g.theme != null ? g.theme : 6,
          fs: g.fs != null ? g.fs : 16,
          fx: g.fx != null ? g.fx : 'leaf',
          dark: !!g.dark
        };
      } else {
        t.settings = {
          theme: g.theme != null ? g.theme : 6,
          fs: g.fs != null ? g.fs : 16,
          fx: g.fx != null ? g.fx : 'none',
          dark: !!g.dark
        };
      }
      changed = true;
    } else {
      if (t.settings.theme == null) { t.settings.theme = isBangkokTrip(t) ? 2 : (g.theme ?? 6); changed = true; }
      if (t.settings.fs == null) { t.settings.fs = g.fs ?? 16; changed = true; }
      if (t.settings.fx == null) { t.settings.fx = isBangkokTrip(t) ? 'none' : (g.fx ?? 'leaf'); changed = true; }
      if (t.settings.dark == null) { t.settings.dark = !!g.dark; changed = true; }
    }
  });
  return changed;
}
function ensureSeed() {
  /* Always migrate per-trip settings if missing */
  let always = migrateTripSettings();
  if (ensureDefaultCovers()) always = true;
  if ((APP.seedVersion || 1) >= SEED_VER) {
    if (always) persist();
    return always;
  }
  let changed = false;
  const kz = APP.trips.find(t => t.id === 't1' || t.title === '九州小旅');
  if (kz) {
    if (!Array.isArray(kz.shop)) kz.shop = [];
    if (!Array.isArray(kz.todos)) kz.todos = [];
    const haveS = new Set(kz.shop.map(x => x.n));
    KZ_DEFAULT_SHOP.forEach(x => {
      if (!haveS.has(x.n)) { kz.shop.push(Object.assign({}, x, { id: Date.now() + Math.floor(Math.random()*999) })); changed = true; }
    });
    const haveT = new Set(kz.todos.map(x => x.t));
    KZ_DEFAULT_TODOS.forEach(x => {
      if (!haveT.has(x.t)) { kz.todos.push(Object.assign({}, x)); changed = true; }
    });
    kz.todos.forEach(o => { if (!o.g) o.g = 'pre'; });
    if (!kz.cover) { kz.cover = COVER_KYUSHU; changed = true; }
  }
  const hasThai = APP.trips.some(t => t.id === 't-thai' || /泰國|曼谷|Thai|Bangkok/i.test((t.title || '') + (t.destination || '')));
  if (!hasThai) { APP.trips.push(buildThailandTrip()); changed = true; }
  if (ensureDefaultCovers()) changed = true;
  APP.seedVersion = SEED_VER;
  persist();
  return changed;
}
function toDays(src, start) {
  const s0 = pd(start);
  return src.map((d, i) => {
    const o = Object.assign({}, d);
    let dt = new Date(s0); dt.setDate(s0.getDate() + i);
    if (typeof o.n === 'number') { const c = new Date(s0); c.setDate(o.n); if (c >= s0) dt = c; }
    if (!o.date) o.date = isoDate(dt);
    delete o.dow; delete o.n;
    o.items = (o.items || []).map(normItem);
    return o;
  });
}
function defaultTripSettings(kind) {
  /* kind: 'bangkok' | 'kyushu' | 'new' */
  if (kind === 'bangkok') return { theme: 2, fs: 16, fx: 'none', dark: false }; /* 綠 + 無特效 */
  if (kind === 'kyushu') return { theme: 6, fs: 16, fx: 'leaf', dark: false }; /* 楓葉紅 + 秋葉（沿用原預設） */
  return { theme: 6, fs: 16, fx: 'none', dark: false };
}
function isBangkokTrip(t) {
  if (!t) return false;
  const blob = ((t.title || '') + ' ' + (t.destination || '')).trim();
  return t.id === 't-thai' || t.title === '曼谷小旅' || /曼谷|泰國|Bangkok|Thai/i.test(blob);
}
function isKyushuTrip(t) {
  if (!t) return false;
  const blob = ((t.title || '') + ' ' + (t.destination || '')).trim();
  return t.id === 't1' || t.title === '九州小旅' || /九州/.test(blob);
}
function createTrip(opts) {
  opts = opts || {};
  const start = opts.startDate || isoDate(new Date()), end = opts.endDate || start;
  const kindHint = opts.settings ? null : (opts._kind || (isBangkokTrip(opts) ? 'bangkok' : (isKyushuTrip(opts) ? 'kyushu' : 'new')));
  const t = {
    id: opts.id || uid('t'), title: opts.title || '新旅程', destination: opts.destination || '',
    startDate: start, endDate: end, cover: opts.cover || '', currency: opts.currency || 'JPY',
    days: opts.days || [], bookings: opts.bookings || { flights: [], stays: [] },
    budget: opts.budget || { total: 0, rate: ({ JPY:0.052, THB:0.22, KRW:0.0056, TWD:0.24, USD:7.8, EUR:8.4, GBP:9.9 }[opts.currency || 'JPY'] || 0.052), expenses: [] },
    shop: opts.shop || [], todos: opts.todos || [], members: opts.members || [],
    settings: opts.settings || defaultTripSettings(kindHint || 'new')
  };
  if (!t.days.length) for (let d = pd(start); d <= pd(end); d.setDate(d.getDate() + 1)) t.days.push({ date: isoDate(d), title: '', items: [] });
  if (APP && !opts._noAdd) { APP.trips.push(t); persist(); }
  return t;
}
function migrate() {
  const old = k => store.get(k, undefined);
  const oldDays = old('kz_days');
  const exps = old('kz_exp');
  const settings = { theme: old('kz_theme') ?? 6, fs: old('kz_fs') ?? 16, fx: old('kz_fx') ?? 'leaf', dark: false, autoMerge: false };
  const shop = old('kz_shop2');
  const todos = old('kz_todos');
  const t1 = createTrip({
    id: 't1', title: '九州小旅', destination: '九州', startDate: '2026-11-22', endDate: '2026-11-28', currency: 'JPY', cover: 'assets/covers/kyushu.png?v=4',
    days: toDays(Array.isArray(oldDays) && oldDays.length ? oldDays : KZ_DEFAULT_DAYS, '2026-11-22'),
    bookings: JSON.parse(JSON.stringify(KZ_BOOKINGS)),
    budget: { total: +old('kz_budget') || 0, rate: +old('kz_rate') || 0.052, expenses: Array.isArray(exps) ? exps : [] },
    shop: Array.isArray(shop) ? shop : KZ_DEFAULT_SHOP.map(x => Object.assign({}, x)),
    todos: Array.isArray(todos) ? todos : KZ_DEFAULT_TODOS.map(x => Object.assign({}, x)),
    members: [], settings: { theme: settings.theme, fs: settings.fs, fx: settings.fx, dark: false }, _kind: 'kyushu', _noAdd: true
  });
  const tThai = buildThailandTrip();
  return { version: 1, seedVersion: SEED_VER, activeTripId: 't1', settings, trips: [t1, tThai] };
}
let APP = null;
function persist() { store.set(APP_KEY, APP); }
function loadApp() {
  const a = store.get(APP_KEY, null);
  if (a && a.version === 1 && Array.isArray(a.trips) && a.trips.length) {
    a.trips.forEach(t => (t.days || []).forEach(d => d.items = (d.items || []).map(normItem)));
    if (!a.trips.some(t => t.id === a.activeTripId)) a.activeTripId = a.trips[0].id;
    a.settings = a.settings || {};
    return a;
  }
  return migrate();
}
APP = loadApp(); persist();
ensureSeed();
/* ?seed=1 → 載入示範備份（覆蓋本機資料） */
(function(){
  try {
    const q = new URLSearchParams(location.search);
    if (q.get('seed') === '1') {
      fetch('travel-backup-20261030.json').then(r => r.json()).then(data => {
        if (!data || data.version !== 1 || !Array.isArray(data.trips)) return;
        APP = data; persist();
        location.replace(location.pathname);
      }).catch(() => {});
    }
  } catch (e) {}
})();
function getTrip(id) { return APP.trips.find(t => t.id === (id || APP.activeTripId)) || APP.trips[0]; }
function saveTrip(t) {
  if (t) { const i = APP.trips.findIndex(x => x.id === t.id); if (i >= 0) APP.trips[i] = t; else APP.trips.push(t); }
  persist();
}
function deleteTrip(id) {
  if (APP.trips.length <= 1) return false;
  APP.trips = APP.trips.filter(t => t.id !== id);
  if (APP.activeTripId === id) APP.activeTripId = APP.trips[0].id;
  persist(); return true;
}
function setActiveTrip(id) { if (APP.trips.some(t => t.id === id)) { APP.activeTripId = id; persist(); return true; } return false; }
function isInTripView() { return location.hash === '#trip'; }
/* 設定款式：每個旅程獨立（theme/fs/dark/fx）。首頁用中性預設；APP.settings 只做首頁／遷移 fallback。 */
const HOME_SETTINGS = { theme: 3, fs: 16, fx: 'none', dark: false }; /* 櫻花粉、無特效 */
function getSetting(k, f) {
  if (!isInTripView()) return HOME_SETTINGS[k] ?? (APP.settings && APP.settings[k]) ?? f;
  const t = getTrip();
  if (t && t.settings && t.settings[k] != null) return t.settings[k];
  return (APP.settings && APP.settings[k]) ?? f;
}
function setSetting(k, v) {
  if (!isInTripView()) {
    APP.settings = APP.settings || {};
    APP.settings[k] = v;
    persist();
    return;
  }
  const t = getTrip();
  if (!t.settings) t.settings = {};
  t.settings[k] = v;
  /* 唔再將 theme/fs/dark/fx 寫入 global */
  persist();
}
window.TripStore = { getTrip, saveTrip, createTrip, deleteTrip, setActiveTrip, tripStatus, get app() { return APP; } };

/* ---------- placeable stickers (swappable assets) ----------
   To swap in designer PNGs: set src, e.g. { name:'招財貓', src:'assets/stickers/maneki.png' }.
   Without src the built-in SVG drawing is used. */
const STICKERS = {
  /* designer PNG stickers (v4) — src preferred over canvas drawings */
  jp01: { name: '啡虎斑', src: 'assets/stickers/sticker-jp-01.png' },
  jp02: { name: '粉花', src: 'assets/stickers/sticker-jp-02.png' },
  jp03: { name: '黑貓', src: 'assets/stickers/sticker-jp-03.png' },
  jp04: { name: '三花', src: 'assets/stickers/sticker-jp-04.png' },
  jp05: { name: '灰英短', src: 'assets/stickers/sticker-jp-05.png' },
  jp06: { name: '橘貓', src: 'assets/stickers/sticker-jp-06.png' },
  jp07: { name: '白長毛', src: 'assets/stickers/sticker-jp-07.png' },
  jp08: { name: '暹羅', src: 'assets/stickers/sticker-jp-08.png' },
  th01: { name: '茉莉花環貓', src: 'assets/stickers/sticker-th-01.png' },
  th02: { name: '佛寺蓮花貓', src: 'assets/stickers/sticker-th-02.png' },
  th03: { name: '嘟嘟車貓', src: 'assets/stickers/sticker-th-03.png' },
  th04: { name: '芒果糯米飯貓', src: 'assets/stickers/sticker-th-04.png' },
  th05: { name: '潑水節貓', src: 'assets/stickers/sticker-th-05.png' },
  th06: { name: '雞蛋花象墜貓', src: 'assets/stickers/sticker-th-06.png' },
  /* designer dog stickers */
  dog01: { name: '柴犬', src: 'assets/stickers/sticker-dog-01.png' },
  dog02: { name: '哥基', src: 'assets/stickers/sticker-dog-02.png' },
  dog03: { name: '貴婦狗', src: 'assets/stickers/sticker-dog-03.png' },
  dog04: { name: '臘腸狗', src: 'assets/stickers/sticker-dog-04.png' },
  dog05: { name: '老虎狗', src: 'assets/stickers/sticker-dog-05.png' },
  dog06: { name: '㹴犬', src: 'assets/stickers/sticker-dog-06.png' },
  dog07: { name: '比格犬', src: 'assets/stickers/sticker-dog-07.png' },
  dog08: { name: '哈士奇', src: 'assets/stickers/sticker-dog-08.png' },
  dog09: { name: '比熊', src: 'assets/stickers/sticker-dog-09.png' },
  dog10: { name: '黑狗', src: 'assets/stickers/sticker-dog-10.png' },
  dog11: { name: '啡狗', src: 'assets/stickers/sticker-dog-11.png' },
  dog12: { name: '大麥町', src: 'assets/stickers/sticker-dog-12.png' },
  /* legacy canvas keys kept so old placements still render */
  maneki: { name: '招財貓' }, sakura: { name: '櫻花貓' }, ramen: { name: '拉麵貓' }, bowl: { name: '碗貓' },
  shop: { name: '購物貓' }, bags: { name: '手袋貓' }, girl: { name: '女仔' }
};
const stkHTML = k => { const a = STICKERS[k] || {}; return a.src ? `<img src="${a.src}" alt="${a.name || k}" draggable="false">` : cat(k); };
function renderStickers(d) {
  const layer = document.getElementById('stkLayer'); if (!layer) return;
  d.stickers = d.stickers || [];
  layer.innerHTML = '';
  d.stickers.forEach((s, idx) => {
    const el = document.createElement('div');
    el.className = 'placed sticker';
    el.style.left = s.x + '%'; el.style.top = s.y + 'px'; el.style.transform = `rotate(${s.r || 0}deg)`;
    el.innerHTML = stkHTML(s.k) + '<button class="x" aria-label="刪除貼紙">×</button>';
    el.querySelector('.x').onpointerdown = e => e.stopPropagation();
    el.querySelector('.x').onclick = e => { e.stopPropagation(); d.stickers.splice(idx, 1); saveDays(); renderStickers(d); };
    let sx, sy, ox, oy, moved = false, lastTap = 0;
    el.onpointerdown = e => {
      e.preventDefault(); el.setPointerCapture(e.pointerId);
      layer.querySelectorAll('.placed.sel').forEach(p => p !== el && p.classList.remove('sel'));
      el.classList.add('sel', 'dragging');
      sx = e.clientX; sy = e.clientY; ox = el.offsetLeft; oy = el.offsetTop; moved = false;
    };
    el.onpointermove = e => {
      if (sx === undefined) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      const W = layer.clientWidth, H = layer.clientHeight;
      el.style.left = Math.max(0, Math.min(W - el.offsetWidth, ox + dx)) / W * 100 + '%';
      el.style.top = Math.max(0, Math.min(H - el.offsetHeight, oy + dy)) + 'px';
    };
    el.onpointerup = () => {
      el.classList.remove('dragging'); sx = undefined;
      if (moved) { s.x = parseFloat(el.style.left); s.y = parseFloat(el.style.top); saveDays(); return; }
      const now = Date.now();
      if (now - lastTap < 320) { s.r = ((s.r || 0) + 360 + 45); el.style.transform = `rotate(${s.r}deg)`; s.r %= 360; saveDays(); lastTap = 0; }
      else lastTap = now;
    };
    layer.appendChild(el);
  });
}
function openStickerPicker() {
  const g = document.getElementById('stkGrid');
  g.innerHTML = Object.keys(STICKERS).map(k => `<button class="sticker" data-k="${k}" aria-label="${STICKERS[k].name}">${stkHTML(k)}</button>`).join('');
  g.querySelectorAll('button').forEach(b => b.onclick = () => {
    const d = days[currentDay]; d.stickers = d.stickers || [];
    d.stickers.push({ k: b.dataset.k, x: 35 + Math.random() * 20, y: 140 + Math.random() * 60, r: 0 });
    saveDays(); renderStickers(d);
  });
  document.getElementById('stkModal').hidden = false;
}
document.getElementById('stkClose').onclick = () => { document.getElementById('stkModal').hidden = true; };
document.getElementById('dayCard').addEventListener('click', e => { if (e.target.closest('#stkOpen')) openStickerPicker(); });

/* ---------- home: 我的旅程 ---------- */
const COVERS = ['#F4C7C3', '#BFE3D0', '#C9DDF2', '#F7DFA5', '#D9CCEF', '#F2C9A0'];
const IN_TRIP = location.hash === '#trip';
function enterTrip(id) { setActiveTrip(id); location.hash = 'trip'; location.reload(); }
document.getElementById('backHome').onclick = () => { history.replaceState(null, '', location.pathname + location.search); location.reload(); };
function daysBetween(a, b) { return Math.round((pd(b) - pd(a)) / 864e5) + 1; }
const escH = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const coverCSS = c => !c ? `background:${COVERS[0]}` : c.startsWith('#') ? `background:${c}` : `background-image:url('${c}')`;
function renderHome() {
  const L = document.getElementById('tripList'); L.innerHTML = '';
  const today = isoDate(new Date());
  APP.trips.forEach(t => {
    const st = tripStatus(t), n = daysBetween(t.startDate, t.endDate);
    let extra = '';
    if (st === 'planning') extra = `<span class="trip-badge">✈️ 仲有 ${daysBetween(today, t.startDate) - 1} 日出發</span>`;
    else if (st === 'ongoing') { const k = daysBetween(t.startDate, today); extra = `<span class="trip-badge">旅程進行中・Day ${k}/${n}</span><div class="track"><div class="bar" style="width:${k / n * 100}%"></div></div>`; }
    else extra = '<span class="trip-badge">已完成</span>';
    const c = document.createElement('div');
    c.className = 'card trip-card'; c.dataset.id = t.id;
    c.innerHTML = `<div class="trip-cover" style="${coverCSS(t.cover)}"></div>
      <div class="trip-body"><div class="trip-name">${escH(t.title)}</div>
      <div class="trip-meta">📍 ${escH(t.destination || '未填目的地')}</div>
      <div class="trip-meta">${t.startDate.replace(/-/g, '/')} – ${t.endDate.replace(/-/g, '/')}・${n} 日</div>${extra}</div>
      <button class="trip-more" aria-label="更多">⋯</button>`;
    c.onclick = e => { if (!e.target.closest('.trip-more,.trip-menu')) enterTrip(t.id); };
    c.querySelector('.trip-more').onclick = e => {
      e.stopPropagation();
      const open = c.querySelector('.trip-menu'); document.querySelectorAll('.trip-menu').forEach(m => m.remove());
      if (open) return;
      const m = document.createElement('div'); m.className = 'trip-menu';
      m.innerHTML = '<button data-a="edit">編輯</button><button data-a="dup">複製</button><button data-a="del" class="danger">刪除</button>';
      m.onclick = ev => {
        ev.stopPropagation(); const a = ev.target.dataset.a; m.remove();
        if (a === 'edit') openTripModal(t);
        if (a === 'dup') { const cp = JSON.parse(JSON.stringify(t)); cp.id = uid('t'); cp.title = t.title + '（副本）'; APP.trips.splice(APP.trips.indexOf(t) + 1, 0, cp); persist(); renderHome(); }
        if (a === 'del') askDelete(t);
      };
      c.appendChild(m);
    };
    L.appendChild(c);
  });
}
document.addEventListener('click', e => { if (!e.target.closest('.trip-menu,.trip-more')) document.querySelectorAll('.trip-menu').forEach(m => m.remove()); });
function askDelete(t) {
  const M = document.getElementById('confirmModal');
  document.getElementById('cfMsg').textContent = APP.trips.length <= 1 ? '至少要保留一個旅程，所以唔可以刪除。' : `「${t.title}」同入面所有行程、預算、清單都會刪除，冇得還原。`;
  document.getElementById('cfYes').hidden = APP.trips.length <= 1;
  document.getElementById('cfYes').onclick = () => { deleteTrip(t.id); M.hidden = true; renderHome(); };
  document.getElementById('cfNo').onclick = () => { M.hidden = true; };
  M.hidden = false;
}
let tmCover = '', tmEditing = null;
const $id = s => document.getElementById(s);
function tmUpdateDays() {
  const a = $id('tmStart').value, b = $id('tmEnd').value;
  $id('tmDays').textContent = a && b && b >= a ? `共 ${daysBetween(a, b)} 日` : '請揀開始同結束日期';
}
function tmRenderCovers() {
  $id('tmCovers').innerHTML = COVERS.map(c => `<button data-c="${c}" style="background:${c}" class="${tmCover === c ? 'on' : ''}" aria-label="顏色封面"></button>`).join('') +
    (tmCover && !tmCover.startsWith('#') ? `<button class="on" style="background-image:url('${tmCover}')" aria-label="已上載封面"></button>` : '');
  $id('tmCovers').querySelectorAll('[data-c]').forEach(b => b.onclick = () => { tmCover = b.dataset.c; tmRenderCovers(); });
}
function openTripModal(t) {
  tmEditing = t || null;
  $id('tmTitle').textContent = t ? '編輯旅程' : '新增旅程';
  const td = isoDate(new Date());
  $id('tmName').value = t ? t.title : ''; $id('tmDest').value = t ? t.destination : '';
  $id('tmStart').value = t ? t.startDate : td; $id('tmEnd').value = t ? t.endDate : td;
  $id('tmCur').value = t ? (t.currency || 'JPY') : 'JPY';
  tmCover = t ? (t.cover || COVERS[0]) : COVERS[APP.trips.length % COVERS.length];
  $id('tmErr').textContent = ''; $id('tmImgNote').textContent = '會自動縮細';
  tmUpdateDays(); tmRenderCovers();
  $id('tripModal').hidden = false;
}
$id('tmStart').onchange = () => { if ($id('tmEnd').value < $id('tmStart').value) $id('tmEnd').value = $id('tmStart').value; tmUpdateDays(); };
$id('tmEnd').onchange = tmUpdateDays;
$id('tmCancel').onclick = () => { $id('tripModal').hidden = true; };
$id('tmImg').onchange = e => {
  const f = e.target.files[0]; if (!f) return;
  const img = new Image(), url = URL.createObjectURL(f);
  img.onload = () => {
    const w = Math.min(800, img.width), h = Math.round(img.height * w / img.width);
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    cv.getContext('2d').drawImage(img, 0, 0, w, h);
    tmCover = cv.toDataURL('image/jpeg', 0.8); URL.revokeObjectURL(url);
    $id('tmImgNote').textContent = `已縮細至 ${w}×${h}`; tmRenderCovers();
  };
  img.onerror = () => { $id('tmImgNote').textContent = '讀唔到張相'; };
  img.src = url; e.target.value = '';
};
$id('tmSave').onclick = () => {
  const title = $id('tmName').value.trim(), a = $id('tmStart').value, b = $id('tmEnd').value;
  if (!title) return $id('tmErr').textContent = '請輸入旅程名稱';
  if (!a || !b || b < a) return $id('tmErr').textContent = '結束日期唔可以早過開始日期';
  if (daysBetween(a, b) > 60) return $id('tmErr').textContent = '旅程最多 60 日';
  const o = { title, destination: $id('tmDest').value.trim(), startDate: a, endDate: b, currency: $id('tmCur').value, cover: tmCover };
  if (tmEditing) {
    const t = tmEditing, byDate = {};
    (t.days || []).forEach(d => byDate[d.date] = d);
    Object.assign(t, o);
    t.days = [];
    for (let d = pd(a); d <= pd(b); d.setDate(d.getDate() + 1)) { const k = isoDate(d); t.days.push(byDate[k] || { date: k, title: '', items: [] }); }
    saveTrip(t);
  } else createTrip(o);
  $id('tripModal').hidden = true; renderHome();
};
$id('addTrip').onclick = () => openTripModal();
if (!IN_TRIP) { document.body.classList.add('at-home'); $id('home').hidden = false; renderHome(); }


/* ---------- shared helpers ---------- */
const $ = id => document.getElementById(id);
const TYPE_META = {
  food: { label:'餐飲', ic:'food', cls:'t-food' },
  sight: { label:'景點', ic:'pin', cls:'t-sight' },
  transport: { label:'交通', ic:'train', cls:'t-transport' },
  hotel: { label:'住宿', ic:'bed', cls:'t-hotel' },
  shop: { label:'購物', ic:'bag', cls:'t-shop' }
};
const TYPE_KEYS = Object.keys(TYPE_META);
function confirmAsk(msg, onYes) {
  const M = $('confirmModal');
  $('cfTitle').textContent = '確認';
  $('cfMsg').textContent = msg;
  $('cfYes').hidden = false;
  $('cfYes').onclick = () => { M.hidden = true; onYes(); };
  $('cfNo').onclick = () => { M.hidden = true; };
  M.hidden = false;
}
/* re-normalize after load */
APP.trips.forEach(t => (t.days || []).forEach(d => d.items = (d.items || []).map(normItem)));
APP.settings = APP.settings || {};
if (APP.settings.dark == null) APP.settings.dark = false;
if (APP.settings.autoMerge == null) APP.settings.autoMerge = false;
persist();

const trip = getTrip();
let days = trip.days;
if (!trip.budget) trip.budget = { total: 0, rate: 0.052, expenses: [] };
if (!trip.bookings) trip.bookings = { flights: [], stays: [] };
(trip.bookings.flights || []).forEach(f => { if (!f.id) f.id = uid('f'); if (f.people == null) f.people = 1; if (f.amount == null) f.amount = 0; if (!f.fileId) f.fileId = ''; });
(trip.bookings.stays || []).forEach(s => { if (!s.id) s.id = uid('s'); if (s.people == null) s.people = 1; if (s.amount == null) s.amount = 0; if (!s.fileId) s.fileId = ''; if (!s.q) s.q = s.name || ''; });

/* ---------- IndexedDB for booking files ---------- */
const IDB_NAME = 'travel_app_files', IDB_STORE = 'files';
function idbOpen() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(IDB_NAME, 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains(IDB_STORE)) r.result.createObjectStore(IDB_STORE); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function idbPut(key, blob) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(blob, key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function idbGet(key) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const rq = db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).get(key);
    rq.onsuccess = () => res(rq.result || null);
    rq.onerror = () => rej(rq.error);
  });
}
async function idbDel(key) {
  if (!key) return;
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}

/* ---------- itinerary (4a) ---------- */
const chipsEl = $('chips');
let currentDay = 0;
let actEdit = null; // { dayIdx, itemIdx } or null for add
let amType = 'sight';
let sortableInst = null;
function saveDays() { trip.days = days; saveTrip(trip); }
function rebuildChips() {
  chipsEl.innerHTML = '';
  days.forEach((d, i) => {
    const b = document.createElement('button');
    b.className = 'chip' + (i === currentDay ? ' active' : '');
    b.innerHTML = `<small>${dowOf(d)}</small><b>${dayNum(d)}</b>`;
    b.onclick = () => showDay(i);
    chipsEl.appendChild(b);
  });
}
function daySpend(d) {
  return (d.items || []).reduce((s, it) => s + (+it.cost || 0) + (+it.ticket || 0), 0);
}
function openActModal(edit) {
  actEdit = edit;
  amType = edit ? (days[edit.dayIdx].items[edit.itemIdx].type || 'sight') : 'sight';
  $('amTitle').textContent = edit ? '編輯活動' : '新增活動';
  $('amTypes').innerHTML = TYPE_KEYS.map(k => {
    const m = TYPE_META[k];
    return `<button type="button" class="type-btn ${amType===k?'on':''}" data-t="${k}"><span class="dot">${ic(m.ic)}</span>${m.label}</button>`;
  }).join('');
  $('amTypes').querySelectorAll('.type-btn').forEach(b => b.onclick = () => {
    amType = b.dataset.t;
    $('amTypes').querySelectorAll('.type-btn').forEach(x => x.classList.toggle('on', x.dataset.t === amType));
  });
  const it = edit ? days[edit.dayIdx].items[edit.itemIdx] : null;
  $('amRemind').setAttribute('aria-pressed', it && it.remind ? 'true' : 'false');
  $('amRemind').classList.toggle('on', !!(it && it.remind));
  $('amText').value = it ? (it.text || '') : '';
  $('amTime').value = it ? (it.time || '') : '';
  $('amTicket').value = it && it.ticket ? it.ticket : '';
  $('amHours').value = it ? (it.hours || '') : '';
  $('amCost').value = it && it.cost ? it.cost : '';
  $('amFeat').value = it ? (it.feat || '') : '';
  $('amNote').value = it ? (it.note || '') : '';
  $('amMap').value = it ? (it.q || '') : '';
  $('amErr').textContent = '';
  $('actModal').hidden = false;
}
$('amRemind').onclick = () => {
  const on = $('amRemind').getAttribute('aria-pressed') !== 'true';
  $('amRemind').setAttribute('aria-pressed', on ? 'true' : 'false');
  $('amRemind').classList.toggle('on', on);
};
$('amCancel').onclick = () => { $('actModal').hidden = true; };
$('amSave').onclick = () => {
  const text = $('amText').value.trim();
  if (!text) return $('amErr').textContent = '請輸入名稱／地點';
  const m = TYPE_META[amType] || TYPE_META.sight;
  const item = normItem({
    id: actEdit ? days[actEdit.dayIdx].items[actEdit.itemIdx].id : uid('a'),
    type: amType, ic: m.ic, text,
    time: $('amTime').value.trim() || '自由',
    ticket: +$('amTicket').value || 0,
    hours: $('amHours').value.trim(),
    cost: +$('amCost').value || 0,
    feat: $('amFeat').value.trim(),
    note: $('amNote').value.trim(),
    q: $('amMap').value.trim(),
    remind: $('amRemind').getAttribute('aria-pressed') === 'true' ? 1 : 0,
    must: actEdit ? days[actEdit.dayIdx].items[actEdit.itemIdx].must : 0,
    opt: actEdit ? days[actEdit.dayIdx].items[actEdit.itemIdx].opt : undefined
  });
  if (actEdit) days[actEdit.dayIdx].items[actEdit.itemIdx] = item;
  else days[currentDay].items.push(item);
  saveDays(); $('actModal').hidden = true; showDay(currentDay);
  if (typeof renderBudget === 'function') renderBudget();
};
function openDir(it) {
  const dest = it.q || it.text;
  $('dirFrom').textContent = '目前位置';
  $('dirTo').textContent = dest;
  $('dirGo').href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest) + '&travelmode=transit';
  $('dirModal').hidden = false;
}
$('dirClose').onclick = () => { $('dirModal').hidden = true; };

function showDay(i) {
  if (i < 0 || i >= days.length) return;
  currentDay = i;
  rebuildChips();
  const d = days[i];
  // weather slot filled by 4e
  renderDayWeather(d);
  const spend = daySpend(d);
  const cur = trip.currency || 'JPY';
  document.getElementById('dayCard').innerHTML = `
    <div class="day-head">
      <div>
        <div class="day-date"><span class="dow">${dowOf(d)}</span><span class="num">${dayNum(d)}</span><span class="mon">${monOf(d)}</span></div>
        <div class="day-title">Day ${i + 1} ${escH(d.title || '')}</div>
        ${d.route ? `<div class="day-route">✓ ${escH(d.route)}</div>` : ''}
      </div>
      <div class="sticker bob" style="width:112px;height:112px;flex:none;margin-top:-6px">${cat(d.cat || 'maneki')}</div>
    </div>
    <div class="day-spend"><span>今日預計花費</span><b>${spend ? spend.toLocaleString('en-US') + ' ' + cur : '—'}</b></div>
    ${d.hotel ? `<a class="hotel" href="${gmap(d.hq || d.hotel)}" target="_blank" rel="noopener">${ic('bed')}<span>${escH(d.hotel)}</span>${ic('pin')}</a>` : ''}
    <div class="sec-title">活動安排 <span style="font-size:.8rem;color:var(--soft);font-weight:500">（可新增／編輯／拖動）</span></div>
    <div id="actList"></div>
    <div class="add-row" style="margin-top:10px">
      <button class="btn" id="addActBtn" style="flex:1">＋ 新增活動</button>
    </div>
    <button class="ghost stk-btn" id="stkOpen">🐾 選擇貼紙</button>
    <div class="stk-layer" id="stkLayer"></div>`;
  renderStickers(d);
  const list = document.getElementById('actList');
  d.items.forEach((it, idx) => {
    const tm = TYPE_META[it.type] || TYPE_META.sight;
    const r = document.createElement('div');
    r.className = 'act ' + tm.cls + (it.opt === 'b' ? ' b' : '');
    r.dataset.idx = idx;
    const metaBits = [];
    if (it.hours) metaBits.push('營業 ' + it.hours);
    if (it.ticket) metaBits.push('門票 ' + it.ticket);
    if (it.cost) metaBits.push('花費 ' + it.cost);
    if (it.feat) metaBits.push(it.feat);
    if (it.note) metaBits.push(it.note);
    r.innerHTML = `
      <span class="handle" title="長按拖動">⠿</span>
      <div class="dot">${ic(tm.ic)}</div>
      <div style="flex:1;min-width:0">
        <div class="tm">${escH(it.time)}${it.remind ? '<span class="bell">🔔</span>' : ''}</div>
        <div class="tx">${escH(it.text)}${it.must ? '<span class="must">必去</span>' : ''}<span class="tag" style="margin-left:6px">${tm.label}</span></div>
        ${metaBits.length ? `<div class="meta">${escH(metaBits.join(' · '))}</div>` : ''}
      </div>
      ${it.q ? mapLink(it.q) : ''}
      <div style="display:flex;flex-direction:column;gap:2px;margin-left:4px">
        <button class="up" style="font-size:.75rem;padding:1px 6px;border:1.5px solid var(--line);border-radius:8px;background:#fff" aria-label="上移">↑</button>
        <button class="down" style="font-size:.75rem;padding:1px 6px;border:1.5px solid var(--line);border-radius:8px;background:#fff" aria-label="下移">↓</button>
      </div>
      <button class="del" style="margin-left:2px" aria-label="刪除">×</button>`;
    r.querySelector('.del').onclick = e => { e.stopPropagation(); confirmAsk('刪除呢個活動？', () => { d.items.splice(idx, 1); saveDays(); showDay(i); }); };
    r.querySelector('.up').onclick = e => { e.stopPropagation(); if (idx > 0) { [d.items[idx-1], d.items[idx]] = [d.items[idx], d.items[idx-1]]; saveDays(); showDay(i); } };
    r.querySelector('.down').onclick = e => { e.stopPropagation(); if (idx < d.items.length - 1) { [d.items[idx], d.items[idx+1]] = [d.items[idx+1], d.items[idx]]; saveDays(); showDay(i); } };
    r.onclick = e => {
      if (e.target.closest('.del,.up,.down,.map,.handle')) return;
      openDir(it);
    };
    r.ondblclick = e => { e.stopPropagation(); openActModal({ dayIdx: i, itemIdx: idx }); };
    // long-press edit via contextmenu
    r.oncontextmenu = e => { e.preventDefault(); openActModal({ dayIdx: i, itemIdx: idx }); };
    list.appendChild(r);
  });
  // SortableJS long-press drag
  if (sortableInst) { try { sortableInst.destroy(); } catch (_) {} }
  if (window.Sortable) {
    sortableInst = Sortable.create(list, {
      handle: '.handle',
      animation: 150,
      delay: 180,
      delayOnTouchOnly: true,
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      onEnd: evt => {
        const moved = d.items.splice(evt.oldIndex, 1)[0];
        d.items.splice(evt.newIndex, 0, moved);
        saveDays(); showDay(i);
      }
    });
  }
  $('addActBtn').onclick = () => openActModal(null);
  // tap activity once opens dir; edit via long-press or double-click — also add edit button on long tap alternative:
  list.querySelectorAll('.act').forEach((r, idx) => {
    let t0 = 0;
    r.addEventListener('pointerdown', () => { t0 = Date.now(); });
    r.addEventListener('pointerup', e => {
      if (e.target.closest('.del,.up,.down,.map,.handle')) return;
      if (Date.now() - t0 > 500) { openActModal({ dayIdx: i, itemIdx: idx }); }
    });
  });
}
rebuildChips();

$('addDayBtn').onclick = () => {
  const last = days[days.length - 1];
  const next = new Date(pd(last ? last.date : trip.startDate));
  next.setDate(next.getDate() + 1);
  const ds = isoDate(next);
  days.push({ date: ds, title: '', items: [], stickers: [] });
  if (ds > trip.endDate) trip.endDate = ds;
  saveDays(); currentDay = days.length - 1; showDay(currentDay);
};
$('delDayBtn').onclick = () => {
  if (days.length <= 1) return confirmAsk('至少要保留一日行程。', () => {});
  confirmAsk(`刪除 ${days[currentDay].date} 呢一日同入面所有活動？`, () => {
    days.splice(currentDay, 1);
    trip.startDate = days[0].date;
    trip.endDate = days[days.length - 1].date;
    saveDays();
    currentDay = Math.min(currentDay, days.length - 1);
    showDay(currentDay);
  });
};

/* ---------- countdown ---------- */
const target = new Date(trip.startDate + 'T00:00:00').getTime();
const tripEnd = new Date(trip.endDate + 'T23:59:59').getTime();
(function () {
  const d = pd(trip.startDate);
  $('cdFoot').innerHTML = `<span class="ft-lab">出發日</span><b>${d.getFullYear()}</b><i>年</i><b>${d.getMonth() + 1}</b><i>月</i><b>${d.getDate()}</b><i>日</i><span class="ft-dow">週${'日一二三四五六'[d.getDay()]}</span>`;
  document.title = `${trip.title}｜${trip.startDate.slice(5).replace('-', '/')}–${trip.endDate.slice(5).replace('-', '/')}`;
})();
function tick() {
  const now = Date.now(), diff = target - now;
  const cd = $('cd'), bar = $('bar'), plane = $('plane'), lab = $('cdLabel');
  if (diff <= 0) {
    if (now > tripEnd) { lab.textContent = trip.title; cd.textContent = '旅程已完成 🎉'; bar.style.width = '100%'; plane.style.left = '100%'; return; }
    const total = tripEnd - target, pct = Math.min(100, (now - target) / total * 100);
    lab.textContent = '旅程進行中'; cd.innerHTML = `Day ${Math.floor((now - target) / 864e5) + 1}<span class="u">/ ${days.length} 日</span>`;
    bar.style.width = pct + '%'; plane.style.left = pct + '%'; return;
  }
  lab.textContent = '距離出發';
  const dd = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5), m = Math.floor(diff % 36e5 / 6e4), s = Math.floor(diff % 6e4 / 1e3);
  const p2 = n => String(n).padStart(2, '0');
  cd.innerHTML = `${dd}<span class="u">天</span>${p2(h)}<span class="c"> : </span>${p2(m)}<span class="c"> : </span>${p2(s)}`;
  const win = 30 * 864e5;
  const pct = Math.min(95, Math.max(3, (now - (target - win)) / win * 100));
  bar.style.width = pct + '%'; plane.style.left = pct + '%';
}
tick(); setInterval(tick, 1000);

/* ---------- tabs / nav ---------- */
document.querySelectorAll('#nav button').forEach(b => b.onclick = () => {
  document.querySelectorAll('#nav button').forEach(x => x.classList.toggle('active', x === b));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === b.dataset.v));
  window.scrollTo({ top: 0 });
});
$('stk-top').innerHTML = `<div style="position:absolute;left:0;top:6px;width:64px;height:64px">${cat('sakura')}</div><div style="position:absolute;right:0;top:0;width:70px;height:70px">${cat('maneki')}</div>`;
const stkShop = $('stk-shop'); if (stkShop) stkShop.innerHTML = cat('bags');
const stkTodo = $('stk-todo'); if (stkTodo) stkTodo.innerHTML = cat('maneki');
const pgirl = $('pgirl'); if (pgirl) pgirl.innerHTML = '<img src="assets/shop/shop-girl.png" alt="">';
const pboy = $('pboy'); if (pboy) pboy.innerHTML = '<img src="assets/shop/shop-boy.png" alt="">';
$('stk-bud').innerHTML = cat('shop');

/* ---------- bookings CRUD (4b) ---------- */
let bkKind = 'flight', bkEdit = null, bkPendingFile = null, bkFilter = 'all';
function fmtBkDate(s) {
  if (!s) return '';
  const d = pd(s);
  return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')} 週${'日一二三四五六'[d.getDay()]}`;
}
function stayDatesLabel(s) {
  if (s.checkIn && s.checkOut) return `${s.checkIn.slice(5).replace('-','/')} – ${s.checkOut.slice(5).replace('-','/')}`;
  return s.dates || '';
}
function openBkModal(kind, edit) {
  bkKind = kind; bkEdit = edit; bkPendingFile = null;
  $('bkTitle').textContent = edit ? (kind === 'flight' ? '編輯機票' : '編輯住宿') : (kind === 'flight' ? '新增機票' : '新增住宿');
  $('bkFlightFields').hidden = kind !== 'flight';
  $('bkStayFields').hidden = kind !== 'stay';
  $('bkErr').textContent = '';
  $('bkFileNote').textContent = edit && edit.fileId ? '已上載 PDF／相片' : '未上載';
  $('bkNote').value = edit ? (edit.note || edit.meta || '') : '';
  $('bkAmt').value = edit && edit.amount ? edit.amount : '';
  $('bkPeople').value = edit && edit.people ? edit.people : 1;
  if (kind === 'flight') {
    $('bkFlightNo').value = edit ? (edit.flightNo || '') : '';
    $('bkFrom').value = edit ? (edit.from || '') : '';
    $('bkTo').value = edit ? (edit.to || '') : '';
    $('bkDep').value = edit ? (edit.dep || '') : '';
    $('bkArr').value = edit ? (edit.arr || '') : '';
    $('bkDate').value = edit ? (edit.date || trip.startDate) : trip.startDate;
  } else {
    $('bkName').value = edit ? (edit.name || '') : '';
    $('bkIn').value = edit ? (edit.checkIn || trip.startDate) : trip.startDate;
    $('bkOut').value = edit ? (edit.checkOut || trip.endDate) : trip.endDate;
    $('bkAddr').value = edit ? (edit.addr || edit.meta || '') : '';
    $('bkQ').value = edit ? (edit.q || edit.name || '') : '';
  }
  $('bkModal').hidden = false;
}
async function handleBkFile(file) {
  if (!file) return;
  bkPendingFile = file;
  $('bkFileNote').textContent = file.type.includes('pdf') ? '已選 PDF（儲存時寫入）' : '已選相片（儲存時寫入）';
}
$('bkFile').onchange = e => { handleBkFile(e.target.files[0]); e.target.value = ''; };
$('bkCam').onchange = e => { handleBkFile(e.target.files[0]); e.target.value = ''; };
$('bkCancel').onclick = () => { $('bkModal').hidden = true; };
$('bkSave').onclick = async () => {
  if (bkKind === 'flight') {
    const flightNo = $('bkFlightNo').value.trim(), from = $('bkFrom').value.trim().toUpperCase(), to = $('bkTo').value.trim().toUpperCase();
    if (!flightNo || !from || !to) return $('bkErr').textContent = '請填航班編號同機場';
    const o = {
      id: bkEdit ? bkEdit.id : uid('f'),
      flightNo, from, to,
      dep: $('bkDep').value.trim(), arr: $('bkArr').value.trim(),
      date: $('bkDate').value || trip.startDate,
      route: `${from} → ${to}`,
      note: $('bkNote').value.trim(),
      amount: +$('bkAmt').value || 0,
      people: Math.max(1, +$('bkPeople').value || 1),
      fileId: bkEdit ? (bkEdit.fileId || '') : ''
    };
    if (bkPendingFile) {
      o.fileId = o.id + '_file';
      await idbPut(o.fileId, bkPendingFile);
    }
    const arr = trip.bookings.flights;
    const ix = arr.findIndex(x => x.id === o.id);
    if (ix >= 0) arr[ix] = o; else arr.push(o);
  } else {
    const name = $('bkName').value.trim();
    if (!name) return $('bkErr').textContent = '請填酒店名稱';
    const o = {
      id: bkEdit ? bkEdit.id : uid('s'),
      name,
      checkIn: $('bkIn').value || trip.startDate,
      checkOut: $('bkOut').value || trip.endDate,
      addr: $('bkAddr').value.trim(),
      q: $('bkQ').value.trim() || name,
      note: $('bkNote').value.trim(),
      meta: $('bkAddr').value.trim() || $('bkNote').value.trim(),
      amount: +$('bkAmt').value || 0,
      people: Math.max(1, +$('bkPeople').value || 1),
      fileId: bkEdit ? (bkEdit.fileId || '') : ''
    };
    o.dates = stayDatesLabel(o);
    if (bkPendingFile) {
      o.fileId = o.id + '_file';
      await idbPut(o.fileId, bkPendingFile);
    }
    const arr = trip.bookings.stays;
    const ix = arr.findIndex(x => x.id === o.id);
    if (ix >= 0) arr[ix] = o; else arr.push(o);
  }
  saveTrip(trip); $('bkModal').hidden = true; renderBookings();
};
$('addFlight').onclick = () => openBkModal('flight', null);
$('addStay').onclick = () => openBkModal('stay', null);
document.querySelectorAll('#bkTabs .tab').forEach(b => b.onclick = () => {
  document.querySelectorAll('#bkTabs .tab').forEach(x => x.classList.toggle('on', x === b));
  bkFilter = b.dataset.bk; renderBookings();
});
async function openBkFile(fileId) {
  const blob = await idbGet(fileId);
  if (!blob) return alert('搵唔到上載檔案');
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
function renderBookings() {
  const b = trip.bookings;
  const box = $('bookAll');
  let html = '';
  const showF = bkFilter === 'all' || bkFilter === 'flight';
  const showS = bkFilter === 'all' || bkFilter === 'stay';
  if (showF) {
    if (!b.flights.length) html += '<div class="empty">未有機票，撳上面新增</div>';
    b.flights.forEach((f, i) => {
      html += `<div class="card pass" data-id="${escH(f.id)}">
        <div class="pass-top">
          <div class="lbl">BOARDING PASS</div>
          <div class="rt">${escH(f.route || (f.from + ' → ' + f.to))}</div>
          <div class="pass-main">
            <div><div class="code">${escH(f.from)}</div><small>出發</small><div class="tm">${escH(f.dep)}</div></div>
            <div class="mid"><svg class="ic" viewBox="0 0 24 24">${IC.plane}</svg></div>
            <div style="text-align:right"><div class="code">${escH(f.to)}</div><small>抵達</small><div class="tm">${escH(f.arr)}</div></div>
          </div>
        </div>
        <div class="pass-foot"><div>航班編號<b>${escH(f.flightNo)}</b></div><div style="text-align:right">日期<b>${fmtBkDate(f.date)}</b></div></div>
        ${f.note ? `<div class="pass-note">${escH(f.note)}</div>` : ''}
        ${f.amount ? `<div class="pass-note">金額 ${f.amount} · 分攤 ${f.people || 1} 人</div>` : ''}
        ${f.fileId ? `<span class="file-badge">已上載 PDF／相片</span>` : ''}
        <div class="bk-actions">
          <button class="ghost sm" data-a="edit">編輯</button>
          ${f.fileId ? `<button class="ghost sm" data-a="file">睇檔案</button>` : ''}
          <button class="ghost sm danger-text" data-a="del">刪除</button>
        </div>
      </div>`;
    });
  }
  if (showS) {
    if (!b.stays.length) html += '<div class="empty">未有住宿，撳上面新增</div>';
    b.stays.forEach(s => {
      html += `<div class="card" data-id="${escH(s.id)}" data-kind="stay">
        <div class="stay-name">${escH(s.name)}</div>
        <div class="stay-date">${escH(stayDatesLabel(s))}</div>
        <div class="stay-meta">${escH(s.addr || s.meta || s.note || '')}</div>
        <a class="maplink" href="${escH(gmap(s.q || s.name))}" target="_blank" rel="noopener">${ic('pin')}Google 地圖</a>
        ${s.amount ? `<div class="pass-note" style="margin-top:8px">金額 ${s.amount} · 分攤 ${s.people || 1} 人</div>` : ''}
        ${s.fileId ? `<span class="file-badge">已上載 PDF／相片</span>` : ''}
        <div class="bk-actions">
          <button class="ghost sm" data-a="edit">編輯</button>
          ${s.fileId ? `<button class="ghost sm" data-a="file">睇檔案</button>` : ''}
          <button class="ghost sm danger-text" data-a="del">刪除</button>
        </div>
      </div>`;
    });
  }
  box.innerHTML = html || '<div class="empty">未有預約</div>';
  box.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;
    const isStay = card.dataset.kind === 'stay';
    card.querySelectorAll('[data-a]').forEach(btn => btn.onclick = async e => {
      e.preventDefault(); e.stopPropagation();
      const a = btn.dataset.a;
      if (isStay) {
        const s = trip.bookings.stays.find(x => x.id === id);
        if (a === 'edit') openBkModal('stay', s);
        if (a === 'file') openBkFile(s.fileId);
        if (a === 'del') confirmAsk('刪除呢間住宿？', async () => {
          if (s.fileId) await idbDel(s.fileId);
          trip.bookings.stays = trip.bookings.stays.filter(x => x.id !== id);
          saveTrip(trip); renderBookings();
        });
      } else {
        const f = trip.bookings.flights.find(x => x.id === id);
        if (a === 'edit') openBkModal('flight', f);
        if (a === 'file') openBkFile(f.fileId);
        if (a === 'del') confirmAsk('刪除呢張機票？', async () => {
          if (f.fileId) await idbDel(f.fileId);
          trip.bookings.flights = trip.bookings.flights.filter(x => x.id !== id);
          saveTrip(trip); renderBookings();
        });
      }
    });
  });
}
renderBookings();

/* ---------- budget (4c) ---------- */
const CATS = [['food','餐飲','food'],['transport','交通','train'],['stay','住宿','bed'],['sight','觀光','pin'],['shop','購物','bag'],['other','其他','box']];
const TYPE_TO_CAT = { food:'food', transport:'transport', hotel:'stay', sight:'sight', shop:'shop' };
const DEF_RATES = { JPY:0.052, THB:0.22, KRW:0.0056, TWD:0.24, USD:7.8, EUR:8.4, GBP:9.9 };
let budget = +trip.budget.total || 0;
let rate = +trip.budget.rate || DEF_RATES[trip.currency] || 0.052;
if (!Array.isArray(trip.budget.expenses)) trip.budget.expenses = [];
let exps = trip.budget.expenses;
const curCode = () => trip.currency || 'JPY';
const saveBudget = () => { trip.budget.total = budget; trip.budget.rate = rate; trip.budget.expenses = exps; saveTrip(trip); };
const money = n => '$' + Math.round(n).toLocaleString('en-US');
const fmt = n => (isFinite(n) && n) ? String(Math.round(n * 100) / 100) : '';
function updateCurLabels() {
  const c = curCode();
  $('rateCur').textContent = c;
  $('curLeft').textContent = c;
  $('budCurLab').textContent = `總預算（HKD）`;
  $('jpy').placeholder = '0';
  document.querySelector('#sumCard .lab:last-of-type') || 0;
  const labs = $('sumCard').querySelectorAll('.lab');
  if (labs[1]) labs[1].textContent = '已花費 (HKD)';
}
updateCurLabels();
$('expFilter').innerHTML = '<option value="all">全部</option>' + CATS.map(c => `<option value="${c[0]}">${c[1]}</option>`).join('');
$('expCat').innerHTML = CATS.map(c => `<option value="${c[0]}">${c[1]}</option>`).join('');
$('expCur').innerHTML = `<option value="${curCode()}">${curCode()}</option><option value="HKD">HKD</option>`;
$('expFilter').onchange = () => renderBudget();

const jpy = $('jpy'), hkd = $('hkd'), rateIn = $('rateIn');
rateIn.value = rate.toFixed(4);
jpy.oninput = () => { hkd.value = jpy.value === '' ? '' : fmt(+jpy.value * rate); };
hkd.oninput = () => { jpy.value = hkd.value === '' ? '' : fmt(+hkd.value / rate); };
rateIn.onchange = () => {
  const v = +rateIn.value;
  if (v > 0) { rate = v; saveBudget(); if (jpy.value !== '') jpy.oninput(); }
  rateIn.value = rate.toFixed(4);
};
$('rateUpd').onclick = async () => {
  const note = $('rateNote'); note.textContent = '更新中…';
  const c = curCode();
  const urls = [
    `https://api.frankfurter.app/latest?from=${c}&to=HKD`,
    `https://open.er-api.com/v6/latest/${c}`
  ];
  for (const u of urls) {
    try {
      const d = await (await fetch(u)).json();
      const v = d.rates && d.rates.HKD;
      if (v > 0) {
        rate = v; saveBudget(); rateIn.value = v.toFixed(4);
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
$('budSave').onclick = () => { budget = Math.max(0, +$('budIn').value || 0); saveBudget(); $('budPanel').hidden = true; renderBudget(); };
const autoMergeEl = $('autoMerge');
autoMergeEl.setAttribute('aria-pressed', getSetting('autoMerge', false) ? 'true' : 'false');
autoMergeEl.classList.toggle('on', !!getSetting('autoMerge', false));
autoMergeEl.onclick = () => {
  const on = autoMergeEl.getAttribute('aria-pressed') !== 'true';
  autoMergeEl.setAttribute('aria-pressed', on ? 'true' : 'false');
  autoMergeEl.classList.toggle('on', on);
  setSetting('autoMerge', on); renderBudget();
};
$('expToggle').onclick = () => { $('expPanel').hidden = !$('expPanel').hidden; };
$('expAdd').onclick = () => {
  const a = +$('expAmt').value, cur = $('expCur').value, cat = $('expCat').value;
  if (!(a > 0)) { $('expAmt').focus(); return; }
  const n = $('expName').value.trim() || CATS.find(c => c[0] === cat)[1];
  exps.unshift({ id: Date.now(), n, a, cur, hkd: cur === 'HKD' ? a : a * rate, cat });
  saveBudget();
  $('expName').value = ''; $('expAmt').value = ''; $('expPanel').hidden = true;
  renderBudget();
};
function activityMerged() {
  if (!getSetting('autoMerge', false)) return [];
  const map = {};
  days.forEach(d => (d.items || []).forEach(it => {
    const cat = TYPE_TO_CAT[it.type] || 'other';
    const amt = (+it.cost || 0) + (+it.ticket || 0);
    if (!(amt > 0)) return;
    if (!map[cat]) map[cat] = 0;
    map[cat] += amt * rate;
  }));
  return Object.entries(map).map(([cat, hkd]) => ({ id: 'auto_' + cat, n: '行程自動併入', a: hkd / rate, cur: curCode(), hkd, cat, auto: 1 }));
}
function renderBudget() {
  const merged = activityMerged();
  const all = exps.concat(merged);
  const spent = all.reduce((s, e) => s + e.hkd, 0), left = budget - spent;
  const over = budget > 0 && left < 0;
  $('sumTotal').textContent = money(budget);
  $('sumSpent').textContent = money(spent);
  $('sumBar').style.width = (budget > 0 ? Math.min(100, spent / budget * 100) : 0) + '%';
  $('sumCard').classList.toggle('over', over);
  $('sumLeftLab').textContent = over ? '已超支' : '剩餘額度';
  $('sumLeft').textContent = budget > 0 ? money(Math.abs(left)) : '請先設置預算';

  $('catList').innerHTML = CATS.map(([k, n, i]) => {
    const v = all.filter(e => e.cat === k).reduce((s, e) => s + e.hkd, 0);
    if (!v) return '';
    const p = Math.round(v / (spent || 1) * 100);
    return `<div class="cat-row"><div class="cat-ic">${ic(i)}</div><div class="cat-main"><div class="cat-top"><b>${n}</b><span>${money(v)} · ${p}%</span></div><div class="cat-bar"><i style="width:${p}%"></i></div></div></div>`;
  }).join('') || '<div class="empty">未有支出記錄</div>';

  const f = $('expFilter').value, box = $('expList');
  box.innerHTML = '';
  const list = all.filter(e => f === 'all' || e.cat === f);
  if (!list.length) { box.innerHTML = '<div class="empty">暫時未有支出，撳「新增」記一筆</div>'; return; }
  list.forEach(e => {
    const c = CATS.find(x => x[0] === e.cat) || CATS[5];
    const r = document.createElement('div');
    r.className = 'exp';
    const curLab = e.cur === 'HKD' ? 'HKD' : (e.cur || curCode()) + ' ' + Math.round(e.a).toLocaleString('en-US');
    r.innerHTML = `<div class="cat-ic">${ic(c[2])}</div><div class="exp-m"><div class="exp-n"></div><div class="exp-s">${c[1]}${e.auto ? ' · 自動' : ''}</div></div><div class="exp-a"><b>${money(e.hkd)}</b><small>${curLab}</small></div>${e.auto ? '' : '<button class="del" aria-label="刪除">×</button>'}`;
    r.querySelector('.exp-n').textContent = e.n;
    const del = r.querySelector('.del');
    if (del) del.onclick = () => { exps = exps.filter(x => x.id !== e.id); saveBudget(); renderBudget(); };
    box.appendChild(r);
  });
}
renderBudget();

/* ---------- shop + todo (separate tabs) ---------- */
const SCATS = ['零食', '藥妝', '服飾', '紀念品', '其他'];
let shop = trip.shop || [];
$('spCat').innerHTML = SCATS.map(c => `<option>${c}</option>`).join('');
$('spFilter').onchange = () => renderShop();
let spImgData = '';
const saveShop = () => { trip.shop = shop; saveTrip(trip); };
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
  const f = e.target.files[0]; if (!f) return;
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
  $('spPrev').hidden = true; $('spImgNote').textContent = '可選'; $('spPanel').hidden = true;
  renderShop();
};
function shopCard(it) {
  const d = document.createElement('div');
  d.className = 'card shop-item' + (it.done ? ' done' : '');
  const priLab = it.pri === 2 ? '必買' : it.pri === 1 ? '重要' : '一般';
  d.innerHTML = `<input type="checkbox" class="chk" ${it.done ? 'checked' : ''} aria-label="已購買">${it.img ? '<img class="thumb" alt="">' : ''}<div class="si-main"><div class="si-name"></div><div class="si-note"></div><div class="tags"><span class="tag t-cat"></span><span class="tag p${it.pri}">${priLab}</span></div></div><button class="del" aria-label="刪除">×</button>`;
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

const TODO_GROUPS = { pre:'出發前', visa:'簽證', insurance:'保險', done:'已完成' };
const PRESET_TODOS = [
  { t:'護照', g:'pre' }, { t:'簽證', g:'visa' }, { t:'現金', g:'pre' }, { t:'信用卡', g:'pre' },
  { t:'手機同充電器', g:'pre' }, { t:'網卡', g:'pre' }, { t:'常用藥品', g:'pre' },
  { t:'轉接頭', g:'pre' }, { t:'雨具', g:'pre' }, { t:'旅行保險', g:'insurance' }
];
let todos = (trip.todos || []).map(o => Object.assign({ g: o.g || 'pre' }, o));
function saveTodos() { trip.todos = todos; saveTrip(trip); renderTodos(); }
function renderTodos() {
  const box = $('todoList'); box.innerHTML = '';
  const groups = ['pre','visa','insurance'];
  groups.forEach(g => {
    const items = todos.filter(o => !o.d && (o.g || 'pre') === g);
    if (!items.length && g !== 'pre') return;
    const h = document.createElement('div'); h.className = 'todo-group'; h.textContent = TODO_GROUPS[g]; box.appendChild(h);
    items.forEach(o => {
      const i = todos.indexOf(o);
      const r = document.createElement('div');
      r.className = 'todo';
      r.innerHTML = `<input type="checkbox" id="td${i}"><label for="td${i}"></label><button class="del" aria-label="刪除">×</button>`;
      r.querySelector('label').textContent = o.t;
      r.querySelector('input').onchange = e => { o.d = e.target.checked ? 1 : 0; saveTodos(); };
      r.querySelector('.del').onclick = () => { todos.splice(i, 1); saveTodos(); };
      box.appendChild(r);
    });
  });
  const doneItems = todos.filter(o => o.d);
  if (doneItems.length) {
    const h = document.createElement('div'); h.className = 'todo-group'; h.textContent = '已完成'; box.appendChild(h);
    doneItems.forEach(o => {
      const i = todos.indexOf(o);
      const r = document.createElement('div');
      r.className = 'todo done';
      r.innerHTML = `<input type="checkbox" id="td${i}" checked><label for="td${i}"></label><button class="del" aria-label="刪除">×</button>`;
      r.querySelector('label').textContent = o.t;
      r.querySelector('input').onchange = e => { o.d = e.target.checked ? 1 : 0; saveTodos(); };
      r.querySelector('.del').onclick = () => { todos.splice(i, 1); saveTodos(); };
      box.appendChild(r);
    });
  }
  const done = todos.filter(o => o.d).length, pct = todos.length ? Math.round(done / todos.length * 100) : 0;
  $('todoPct').textContent = `${done}/${todos.length} · ${pct}%`;
  $('todoBar').style.width = pct + '%';
}
$('todoAdd').onclick = () => {
  const inp = $('todoNew'), v = inp.value.trim();
  if (!v) return; todos.push({ t: v, d: 0, g: $('todoGroup').value }); inp.value = ''; saveTodos();
};
$('todoNew').addEventListener('keydown', e => { if (e.key === 'Enter') $('todoAdd').click(); });
$('todoDefaults').onclick = () => {
  confirmAsk('套用預設清單？（唔會刪除你已有項目）', () => {
    const have = new Set(todos.map(o => o.t));
    PRESET_TODOS.forEach(p => { if (!have.has(p.t)) todos.push({ t: p.t, d: 0, g: p.g }); });
    saveTodos();
  });
};
renderTodos();

/* ---------- weather (4e) ---------- */
const WX_CACHE_KEY = 'travel_wx_cache_v2';
const WX_CODE = {
  0:['晴朗','☀️'],1:['大致晴','🌤'],2:['間中有雲','⛅'],3:['多雲','☁️'],
  45:['有霧','🌫'],48:['霧凇','🌫'],51:['微毛雨','🌦'],53:['毛雨','🌦'],55:['大毛雨','🌧'],
  61:['小雨','🌧'],63:['中雨','🌧'],65:['大雨','🌧'],71:['小雪','🌨'],73:['中雪','🌨'],75:['大雪','❄️'],
  80:['驟雨','🌦'],81:['驟雨','🌧'],82:['暴雨','⛈'],95:['雷暴','⛈'],96:['雷暴夾雹','⛈'],99:['強雷暴夾雹','⛈']
};
/* Monthly climate fallbacks °C [hi, lo] when archive unavailable — not live forecasts */
const DEST_MONTH_CLIMATE = {
  '九州': { 11:[17,10], 12:[12,5] },
  '福岡': { 11:[17,10], 12:[12,5] },
  '熊本': { 11:[18,9], 12:[13,4] },
  '長崎': { 11:[17,11], 12:[13,6] },
  '黑川': { 11:[14,6], 12:[9,1] },
  '曼谷': { 11:[32,24], 12:[31,22] },
  '泰國曼谷': { 11:[32,24], 12:[31,22] },
  'Bangkok': { 11:[32,24], 12:[31,22] },
  '東京': { 11:[16,9], 12:[12,4] },
  '大阪': { 11:[16,9], 12:[12,4] },
  '首爾': { 11:[12,3], 12:[5,-3] },
  '台北': { 11:[25,18], 12:[22,15] }
};
let wxCache = store.get(WX_CACHE_KEY, {});
function wxLabel(code) { return WX_CODE[code] || ['天氣資料','🌡']; }
function monthOf(iso) { return +String(iso).slice(5, 7); }
function shiftYear(iso, y) {
  const m = String(iso).slice(5, 7), d = String(iso).slice(8, 10);
  let dd = +d;
  if (m === '02' && dd === 29) {
    const leap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    if (!leap) dd = 28;
  }
  return y + '-' + m + '-' + String(dd).padStart(2, '0');
}
function climateFallbackForDay(d) {
  if (d.temp && d.temp.length >= 2) return { hi: +d.temp[0], lo: +d.temp[1], source: 'static' };
  const place = (d.place || trip.destination || '').trim();
  const mon = monthOf(d.date);
  const keys = [place, trip.destination].filter(Boolean);
  for (const k of keys) {
    const row = DEST_MONTH_CLIMATE[k];
    if (row && row[mon]) return { hi: row[mon][0], lo: row[mon][1], source: 'table' };
  }
  // generic mild defaults by hemisphere-ish month (never presented as live)
  const mild = { 1:[12,4],2:[13,5],3:[16,8],4:[20,12],5:[24,16],6:[27,20],7:[30,23],8:[30,23],9:[27,20],10:[22,15],11:[17,10],12:[14,7] };
  const t = mild[mon] || [20,12];
  return { hi: t[0], lo: t[1], source: 'generic' };
}
async function fetchArchiveNormals(lat, lon, dates) {
  if (!dates.length) return {};
  const years = [2021, 2022, 2023];
  const sums = {}, counts = {};
  await Promise.all(years.map(async y => {
    try {
      const start = shiftYear(dates[0], y), end = shiftYear(dates[dates.length - 1], y);
      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
      const data = await (await fetch(url)).json();
      const daily = data && data.daily;
      if (!daily || !daily.time) return;
      daily.time.forEach((t, i) => {
        const md = t.slice(5);
        const hi = daily.temperature_2m_max[i], lo = daily.temperature_2m_min[i];
        if (hi == null || lo == null || Number.isNaN(+hi) || Number.isNaN(+lo)) return;
        if (!sums[md]) { sums[md] = [0, 0]; counts[md] = 0; }
        sums[md][0] += +hi; sums[md][1] += +lo; counts[md] += 1;
      });
    } catch (e) { /* ignore year */ }
  }));
  const out = {};
  Object.keys(sums).forEach(md => {
    const n = counts[md];
    if (!n) return;
    out[md] = { hi: Math.round(sums[md][0] / n), lo: Math.round(sums[md][1] / n), source: 'archive' };
  });
  return out;
}
function wxForDay(d) {
  const c = wxCache[trip.id] || {};
  const live = c.byDate && c.byDate[d.date];
  if (live) return { hi: live.hi, lo: live.lo, code: live.code, kind: 'live' };
  // Curated per-day static temps (九州原稿) beat generic destination archive
  if (d.temp && d.temp.length >= 2) return { hi: +d.temp[0], lo: +d.temp[1], kind: 'ref', source: 'static' };
  const md = String(d.date).slice(5);
  const ref = c.refByMd && c.refByMd[md];
  if (ref) return { hi: ref.hi, lo: ref.lo, kind: 'ref', source: ref.source || 'archive' };
  const fb = climateFallbackForDay(d);
  return { hi: fb.hi, lo: fb.lo, kind: 'ref', source: fb.source };
}
const GEO_ALIASES = {
  '九州': '福岡', 'Kyushu': 'Fukuoka', '日本九州': '福岡',
  '曼谷': 'Bangkok', '泰國曼谷': 'Bangkok', '泰京': 'Bangkok',
  '東京': 'Tokyo', '大阪': 'Osaka', '首爾': 'Seoul', '台北': 'Taipei'
};
async function resolveGeo(dest) {
  const q = GEO_ALIASES[dest] || dest || '福岡';
  const geo = await (await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + encodeURIComponent(q) + '&count=5&language=zh&format=json')).json();
  if (!geo.results || !geo.results.length) throw new Error('no geo');
  // Prefer city/town over mountain/island when possible
  const prefer = geo.results.find(r => ['PPLC','PPLA','PPLA2','PPLA3','PPLA4','PPL'].includes(r.feature_code)) || geo.results[0];
  // Avoid high-elevation misfires (>800m) if a lower alternative exists
  const low = geo.results.find(r => (r.elevation == null || r.elevation < 800));
  const pick = (prefer && (prefer.elevation == null || prefer.elevation < 800)) ? prefer : (low || prefer);
  return { lat: pick.latitude, lon: pick.longitude, name: pick.name };
}
async function fetchWeather() {
  const dest = trip.destination || '九州';
  $('wxSub').textContent = dest + ' · Open-Meteo';
  const grid = $('wxGrid');
  grid.innerHTML = '<div class="empty">載入緊…</div>';
  const dates = (days || []).map(d => d.date).filter(Boolean).sort();
  try {
    const { lat, lon, name } = await resolveGeo(dest);
    let byDate = {};
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=16`;
      const data = await (await fetch(url)).json();
      const daily = data.daily;
      if (daily && daily.time) {
        daily.time.forEach((t, i) => {
          byDate[t] = { hi: Math.round(daily.temperature_2m_max[i]), lo: Math.round(daily.temperature_2m_min[i]), code: daily.weathercode[i] };
        });
      }
    } catch (e) { /* forecast optional */ }
    let refByMd = {};
    try { refByMd = await fetchArchiveNormals(lat, lon, dates); } catch (e) { refByMd = {}; }
    wxCache[trip.id] = { dest: name, updated: Date.now(), byDate, refByMd, lat, lon };
    store.set(WX_CACHE_KEY, wxCache);
    renderWeatherPage();
    showDay(currentDay);
  } catch (e) {
    $('wxHint').textContent = '未能連線 Open-Meteo，會用季節參考／靜態氣溫';
    if (!wxCache[trip.id]) wxCache[trip.id] = { dest, updated: Date.now(), byDate: {}, refByMd: {} };
    renderWeatherPage();
    showDay(currentDay);
  }
}
function renderWeatherPage() {
  const c = wxCache[trip.id];
  const grid = $('wxGrid');
  const when = c && c.updated ? new Date(c.updated).toLocaleString('zh-HK') : '';
  $('wxHint').textContent = when
    ? `資料來自 Open-Meteo · 更新於 ${when} · 「季節參考」係往年同期平均／靜態氣溫，唔係即時預報`
    : '標「季節參考」唔係即時預報；出發前約兩星期會有真預報';
  /* 密實卡：跟原版九州風格（h3 / .d / .t / p），唔再放大格 */
  grid.innerHTML = days.map(d => {
    const w = wxForDay(d);
    const label = String(d.date).slice(5).replace('-', '/');
    const place = escH(d.place || trip.destination || '—');
    if (w.kind === 'live') {
      const [lab, icon] = wxLabel(w.code);
      return `<div class="card"><h3>${place}</h3><div class="d">${label}</div><div class="t">${w.hi}–${w.lo}°C</div><p>${icon} ${lab} · 預報</p></div>`;
    }
    return `<div class="card wx-ref"><h3>${place}</h3><div class="d">${label}</div><div class="t">${w.hi}–${w.lo}°C</div><p class="ref">季節參考 · 非預報</p></div>`;
  }).join('');
}
function renderDayWeather(d) {
  const wEl = $('weather');
  const w = wxForDay(d);
  wEl.style.display = '';
  const place = escH(d.place || trip.destination || '');
  if (w.kind === 'live') {
    const [lab, icon] = wxLabel(w.code);
    wEl.innerHTML = `<div class="w-ic">${icon}</div><div><div class="w-temp">${w.hi}°C <i>/ ${w.lo}°C</i></div><div class="w-note">${lab} · 預報</div></div><div class="w-right">${place}<small>最高 / 最低</small></div>`;
  } else {
    wEl.innerHTML = `<div class="w-ic">${ic('cloud')}</div><div><div class="w-temp">${w.hi}°C <i>/ ${w.lo}°C</i></div><div class="w-note ref">季節參考 · 非預報</div></div><div class="w-right">${place}<small>最高 / 最低</small></div>`;
  }
}
fetchWeather();

/* ---------- settings (4f) ---------- */
const themes = [['#D49A62','#B87D46'],['#7B8FC4','#5F74AA'],['#93C3A4','#76A788'],['#E89F9F','#CE8080'],['#B5A5D6','#9A89BE'],['#E8C86A','#CCAA48'],['#C8442F','#A43220']];
const themeNames = ['琥珀','藍','綠','櫻花粉','紫','黃','楓葉紅'];
function applyTheme(i) {
  const [a, b] = themes[i];
  const root = document.documentElement.style;
  root.setProperty('--pri', a); root.setProperty('--pri-d', b);
  root.setProperty('--tint', `color-mix(in srgb, ${a} 14%, #FFFBF0)`);
  document.querySelectorAll('.sw').forEach((e, k) => e.classList.toggle('on', k === i));
  $('themeName').textContent = '目前：' + themeNames[i];
  setSetting('theme', i);
}
const swBox = $('swatches');
themes.forEach((t, i) => { const b = document.createElement('button'); b.className = 'sw'; b.style.background = t[0]; b.setAttribute('aria-label', themeNames[i]); b.onclick = () => applyTheme(i); swBox.appendChild(b); });
applyTheme(getSetting('theme', 6));

const fs = $('fs');
function applyFs(v) { document.documentElement.style.fontSize = v + 'px'; $('fsVal').textContent = v + 'px'; fs.value = v; setSetting('fs', v); }
fs.oninput = () => applyFs(+fs.value);
applyFs(getSetting('fs', 16));

function applyDark(on) {
  document.body.classList.toggle('dark', !!on);
  $('darkTog').setAttribute('aria-pressed', on ? 'true' : 'false');
  $('darkTog').classList.toggle('on', !!on);
  setSetting('dark', !!on);
}
$('darkTog').onclick = () => applyDark($('darkTog').getAttribute('aria-pressed') !== 'true');
applyDark(!!getSetting('dark', false));

const FX = [['none','✕','無'],['sakura','🌸','櫻花'],['leaf','🍁','秋葉'],['snow','❄️','雪花']];
const LEAF_COLORS = ['#E2762F','#C9442B','#E8A93A','#B0522A','#D98B2B'];
const LEAF_PATH = 'M12 1.5 L14.2 6.5 L17.5 4.5 L16.8 9.5 L22 8.5 L18.6 12.6 L20.5 15 L14.6 15 L13 21.5 H11 L9.4 15 L3.5 15 L5.4 12.6 L2 8.5 L7.2 9.5 L6.5 4.5 L9.8 6.5 Z';
const pBox = $('petals');
function buildFx(type) {
  pBox.innerHTML = '';
  if (type === 'none') return;
  if (type === 'snow') {
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div'), s = 8 + Math.random() * 10;
      el.className = 'snow'; el.textContent = '❄';
      el.style.cssText = `left:${Math.random()*100}%;font-size:${s}px;animation-duration:${10+Math.random()*10}s;animation-delay:${-Math.random()*16}s`;
      pBox.appendChild(el);
    }
    return;
  }
  const leaf = type === 'leaf', n = leaf ? 14 : 16;
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div'), s = leaf ? 16 + Math.random() * 12 : 8 + Math.random() * 9;
    el.className = leaf ? 'leaf' : 'petal';
    el.style.cssText = `left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${(leaf?11:9)+Math.random()*9}s;animation-delay:${-Math.random()*16}s`;
    if (leaf) el.innerHTML = `<svg viewBox="0 0 24 24"><path d="${LEAF_PATH}" fill="${LEAF_COLORS[i%LEAF_COLORS.length]}"/><path d="M12 20V8M12 14L8 11M12 14L16 11" stroke="rgba(255,255,255,.4)" stroke-width=".8" stroke-linecap="round" fill="none"/></svg>`;
    pBox.appendChild(el);
  }
}
let curFx = 'sakura';
const fxGrid = $('fxGrid');
FX.forEach(([k, e, t]) => {
  const b = document.createElement('button');
  b.className = 'fx'; b.dataset.k = k; b.innerHTML = `<span>${e}</span>${t}`;
  b.onclick = () => setFx(k);
  fxGrid.appendChild(b);
});
function setFx(k) {
  curFx = k; buildFx(k);
  fxGrid.querySelectorAll('.fx').forEach(b => b.classList.toggle('on', b.dataset.k === k));
  setSetting('fx', k);
}
$('fab').onclick = () => setFx(FX[(FX.findIndex(f => f[0] === curFx) + 1) % FX.length][0]);
const savedFx = getSetting('fx', isInTripView() ? (isBangkokTrip(getTrip()) ? 'none' : 'leaf') : 'none');
setFx(FX.some(f => f[0] === savedFx) ? savedFx : (isInTripView() && isBangkokTrip(getTrip()) ? 'none' : 'leaf'));
if ($('setHint') && isInTripView()) {
  const tt = getTrip();
  $('setHint').textContent = `「${tt.title}」專用設定 · 切換旅程唔會跟住改`;
  const sub = document.querySelector('#v-set .page-sub');
  if (sub) sub.textContent = '只影響呢個旅程嘅樣';
}

/* CSS for toggle.on */
(function(){ const s=document.createElement('style'); s.textContent=`.toggle{width:48px;height:28px;border-radius:99px;border:3px solid var(--line);background:#ddd;position:relative;flex:none}.toggle::after{content:'';position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.2)}.toggle.on,.toggle[aria-pressed="true"]{background:var(--pri);border-color:var(--pri)}.toggle.on::after,.toggle[aria-pressed="true"]::after{left:22px}`; document.head.appendChild(s); })();


/* ---------- backup export/import (Station 5 lite) ---------- */
function exportBackup() {
  const blob = new Blob([JSON.stringify(APP, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'travel-backup-' + isoDate(new Date()).replace(/-/g, '') + '.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  toast('已匯出備份');
}
function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || data.version !== 1 || !Array.isArray(data.trips) || !data.trips.length) throw new Error('格式唔啱');
      confirmAsk('匯入會覆蓋而家手機入面全部旅程資料，確定？', () => {
        APP = data;
        APP.seedVersion = Math.max(APP.seedVersion || 1, SEED_VER);
        persist();
        toast('已匯入，重新整理緊…');
        setTimeout(() => location.reload(), 600);
      });
    } catch (e) { toast('匯入失敗：檔案格式唔啱'); }
  };
  reader.readAsText(file);
}
if ($('btnExport')) $('btnExport').onclick = exportBackup;
if ($('btnImport')) $('btnImport').onclick = () => $('importFile') && $('importFile').click();
if ($('importFile')) $('importFile').onchange = e => { importBackupFile(e.target.files[0]); e.target.value = ''; };
if ($('btnLoadDemo')) $('btnLoadDemo').onclick = () => {
  confirmAsk('載入示範資料（九州＋曼谷）會覆蓋本機全部旅程，確定？', () => {
    fetch('travel-backup-20261030.json').then(r => r.json()).then(data => {
      if (!data || data.version !== 1) throw new Error('bad');
      APP = data; persist();
      toast('已載入示範資料');
      setTimeout(() => location.reload(), 600);
    }).catch(() => toast('載入失敗，請稍後再試'));
  });
};

showDay(0);
