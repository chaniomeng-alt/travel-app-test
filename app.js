
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
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'
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
let _toastTimer = null;
function toast(msg, ms) {
  let el = document.getElementById('appToast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'appToast';
    el.className = 'app-toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), ms || 2800);
}
let _storageToastAt = 0;
function storageFailToast(where) {
  const now = Date.now();
  if (now - _storageToastAt < 2500) return;
  _storageToastAt = now;
  toast('儲存失敗（' + (where || '本機') + '）：空間可能唔夠，請匯出備份後刪啲附件或資料');
}
const store = {
  get(k, f) { try { const v = localStorage.getItem(k); return v === null ? f : JSON.parse(v); } catch (e) { return f; } },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
      return true;
    } catch (e) {
      storageFailToast('localStorage');
      return false;
    }
  }
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
    { id:'f1', route:'香港 → 福岡', from:'HKG', to:'FUK', dep:'12:55', arr:'17:00', flightNo:'UO638', date:'2026-11-22', people:1, guest:'CHA', note:'香港國際機場 客運大樓 2 → 福岡國際機場 國際線航廈' },
    { id:'f2', route:'福岡 → 香港', from:'FUK', to:'HKG', dep:'12:50', arr:'15:50', flightNo:'UO601', date:'2026-11-28', people:1, guest:'CHA', note:'福岡國際機場 → 香港國際機場' }
  ],
  stays: [
    { id:'s1', name:'天然温泉 六花の湯 ドーミーイン熊本', dates:'11/22（入住 20:00 後）– 11/24（退房 11:00）', checkIn:'2026-11-22', checkOut:'2026-11-24', meta:'方便黑川日歸早班巴士', q:'ドーミーイン熊本', people:1, guest:'CHA' },
    { id:'s2', name:'天然温泉 鶴港の湯 ドーミーイン PREMIUM 長崎駅前', dates:'11/24（入住 15:00 後）– 11/26（退房 11:00 前）', checkIn:'2026-11-24', checkOut:'2026-11-26', meta:'2 晚 · 標準雙人房 · 含早餐 · 長崎站前，方便軍艦島碼頭', q:'ドーミーイン PREMIUM 長崎駅前', people:1, guest:'CHA' },
    { id:'s3', name:'西鉄ホテル クルーム博多', dates:'11/26（15:00 入住）– 11/28（11:00 前退房）', checkIn:'2026-11-26', checkOut:'2026-11-28', meta:'博多駅前 1-17-6 · 單人房禁煙 · 天然温泉博多駅前の湯 · 方便市內散策同機場', q:'西鉄ホテル クルーム博多', sticker:'bowl', people:1, guest:'CHA' }
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
    { id:'tf1', route:'澳門 → 曼谷', from:'MFM', to:'BKK', dep:'10:20', arr:'12:30', flightNo:'NX936', date:'2026-12-24', people:2, guest:'CHA', amount:0, note:'澳門航空 · 澳門國際機場 → 素萬那普機場 · 經濟艙 A320 · 2 位' },
    { id:'tf2', route:'曼谷 → 澳門', from:'BKK', to:'MFM', dep:'13:30', arr:'17:35', flightNo:'NX935', date:'2026-12-27', people:2, guest:'CHA', amount:0, note:'澳門航空 · 素萬那普機場 → 澳門國際機場 · 經濟艙 A320 · 2 位' }
  ],
  stays: [
    { id:'ts1', name:'曼谷柏悦酒店', dates:'12/24（15:00 後）– 12/26（12:00 前）', checkIn:'2026-12-24', checkOut:'2026-12-26', meta:'Central Embassy, 88 Witthayu Rd, Lumphini · 豪華房 · 特大雙人床 · 含早餐（25、26日）· 2 成人', q:'Park Hyatt Bangkok', people:2, guest:'CHA', amount:0 }
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
    id: 't-thai', title: '曼谷之旅', destination: '曼谷', startDate: '2026-12-24', endDate: '2026-12-27', departTime: '10:20',
    currency: 'THB', cover: 'assets/covers/bangkok.png?v=8',
    bookings: JSON.parse(JSON.stringify(TH_BOOKINGS)),
    budget: { total: 0, rate: 0.22, expenses: [] },
    shop: TH_DEFAULT_SHOP.map(x => Object.assign({}, x)),
    todos: TH_DEFAULT_TODOS.map(x => Object.assign({}, x)),
    members: DEFAULT_MEMBERS_CHA.map(x => Object.assign({}, x)), settings: defaultTripSettings('bangkok'), _kind: 'bangkok', _noAdd: true
  });
}
const COVER_KYUSHU = 'assets/covers/kyushu.png?v=5';
const COVER_BANGKOK = 'assets/covers/bangkok.png?v=8';
const DEFAULT_AVATARS = [
  { src: 'assets/stickers/sticker-jp-01.png', label: '啡虎斑' },
  { src: 'assets/stickers/sticker-jp-03.png', label: '黑貓' },
  { src: 'assets/stickers/sticker-jp-06.png', label: '橘貓' },
  { src: 'assets/stickers/sticker-jp-08.png', label: '暹羅' },
  { src: 'assets/stickers/pets/sticker-dog-white-tan.png', label: '白啡狗' },
  { src: 'assets/stickers/pets/sticker-dog-chocolate.png', label: '朱古力狗' },
  { src: 'assets/stickers/pets/sticker-dog-chaimaru.png', label: '柴丸' },
  { src: 'assets/stickers/sticker-dog-01.png', label: '柴犬' }
];
const DEFAULT_MEMBERS_CHA = [{ id: 'm-cha', name: 'CHA', role: '旅客', avatar: 'assets/stickers/pets/sticker-dog-white-tan.png' }];
const SEED_VER = 11;

function renameTripTitles() {
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!t) return;
    if (t.id === 't1' || t.title === '九州小旅') {
      if (t.title !== '九州之旅') { t.title = '九州之旅'; changed = true; }
    }
    if (t.id === 't-thai' || t.title === '曼谷小旅') {
      if (t.title !== '曼谷之旅') { t.title = '曼谷之旅'; changed = true; }
    }
  });
  return changed;
}
function ensureDefaultCovers() {
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!t) return;
    const blob = ((t.title || '') + ' ' + (t.destination || '')).trim();
    const cov = String(t.cover || '').trim();
    const isKz = t.id === 't1' || t.title === '九州小旅' || t.title === '九州之旅' || /九州/.test(blob);
    const isBk = t.id === 't-thai' || t.title === '曼谷小旅' || t.title === '曼谷之旅' || /曼谷|泰國|Bangkok|Thai/i.test(blob);
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
          dark: !!g.dark,
          hideStickers: false
        };
      } else {
        t.settings = {
          theme: g.theme != null ? g.theme : 6,
          fs: g.fs != null ? g.fs : 16,
          fx: g.fx != null ? g.fx : 'none',
          dark: !!g.dark,
          hideStickers: false
        };
      }
      changed = true;
    } else {
      if (t.settings.theme == null) { t.settings.theme = isBangkokTrip(t) ? 2 : (g.theme ?? 6); changed = true; }
      if (t.settings.fs == null) { t.settings.fs = g.fs ?? 16; changed = true; }
      if (t.settings.fx == null) { t.settings.fx = isBangkokTrip(t) ? 'none' : (g.fx ?? 'leaf'); changed = true; }
      if (t.settings.dark == null) { t.settings.dark = !!g.dark; changed = true; }
      if (t.settings.hideStickers == null) { t.settings.hideStickers = false; changed = true; }
    }
  });
  return changed;
}

function tripPartyLabel(t) {
  if (!t) return '';
  const names = (t.members || []).map(m => (m && m.name) || '').filter(Boolean);
  let pax = 0;
  const b = t.bookings;
  if (b && !Array.isArray(b)) {
    [...(b.flights || []), ...(b.stays || [])].forEach(x => { pax = Math.max(pax, +x.people || 0); });
  } else if (Array.isArray(b)) {
    b.forEach(x => { pax = Math.max(pax, +x.people || +(x.split) || 0); });
  }
  if (!pax) pax = names.length;
  if (!names.length && !pax) return '';
  if (names.length && pax > names.length) return '👥 ' + names.join('、') + ' · ' + pax + ' 人';
  if (names.length) return '👥 ' + names.join('、') + (pax > 1 ? ' · ' + pax + ' 人' : '');
  return '👥 ' + pax + ' 人';
}
function bkPeopleNote(x, style) {
  if (!x) return '';
  const p = +x.people || 0;
  const g = String(x.guest || '').trim();
  if (!p && !g && !x.amount) return '';
  const bits = [];
  if (g || p) bits.push('人員' + (g ? ' ' + g : '') + (p ? (g ? ' · ' : ' ') + p + ' 人' : ''));
  if (x.amount) bits.push('金額 ' + x.amount + (p ? ' · 分攤 ' + p + ' 人' : ''));
  if (!bits.length) return '';
  return '<div class="pass-note"' + (style || '') + '>' + escH(bits.join(' · ')) + '</div>';
}

function normDepartTime(v) {
  if (v == null || v === '') return '';
  const s = String(v).trim();
  const m = s.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return '';
  return String(Math.min(23, +m[1])).padStart(2, '0') + ':' + String(Math.min(59, +m[2])).padStart(2, '0');
}
function tripDepartMs(t) {
  const date = (t && t.startDate) || '';
  const tm = normDepartTime(t && t.departTime); // empty → midnight
  const hhmm = tm || '00:00';
  return new Date(date + 'T' + hhmm + ':00').getTime();
}
function ensureDepartTimes() {
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!t) return;
    if (t.departTime == null) {
      // migrate old trips: default morning 08:00 (empty still means midnight if user clears)
      if (isKyushuTrip(t)) t.departTime = '12:55';
      else if (isBangkokTrip(t)) t.departTime = '10:20';
      else t.departTime = '08:00';
      changed = true;
    } else {
      const n = normDepartTime(t.departTime);
      if (n !== t.departTime && t.departTime !== '') { t.departTime = n; changed = true; }
    }
  });
  return changed;
}

function ensurePartyMembers() {
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!t) return;
    if (!Array.isArray(t.members)) { t.members = []; changed = true; }
    if (!t.members.length) {
      if (isKyushuTrip(t) || isBangkokTrip(t)) {
        t.members = DEFAULT_MEMBERS_CHA.map(x => Object.assign({}, x));
        changed = true;
      }
    }
    (t.members || []).forEach((m, i) => {
      if (!m) return;
      if (!m.id) { m.id = uid('m'); changed = true; }
      if (m.role == null) { m.role = '旅客'; changed = true; }
      if (m.description == null) { m.description = ''; changed = true; }
      if (!m.avatar) {
        m.avatar = isBangkokTrip(t)
          ? 'assets/stickers/pets/sticker-dog-white-tan.png'
          : (DEFAULT_AVATARS[i % 4] && DEFAULT_AVATARS[i % 4].src) || DEFAULT_AVATARS[0].src;
        changed = true;
      }
    });
    const b = t.bookings;
    if (!b || Array.isArray(b)) return;
    const guest = (t.members[0] && t.members[0].name) || 'CHA';
    const pax = isBangkokTrip(t) ? 2 : (isKyushuTrip(t) ? 1 : 0);
    if (!pax) return;
    (b.flights || []).forEach(f => {
      if (f.people == null || +f.people === 0) { f.people = pax; changed = true; }
      if (!f.guest) { f.guest = guest; changed = true; }
      if (!Array.isArray(f.memberIds)) {
        f.memberIds = (t.members || []).slice(0, Math.min(pax, (t.members || []).length)).map(m => m.id);
        if (f.memberIds.length) changed = true;
      }
    });
    (b.stays || []).forEach(st => {
      if (st.people == null || +st.people === 0) { st.people = pax; changed = true; }
      if (!st.guest) { st.guest = guest; changed = true; }
      if (!Array.isArray(st.memberIds)) {
        st.memberIds = (t.members || []).slice(0, Math.min(pax, (t.members || []).length)).map(m => m.id);
        if (st.memberIds.length) changed = true;
      }
    });
  });
  return changed;
}

function ensureSeed() {
  /* Always migrate per-trip settings if missing */
  let always = migrateTripSettings();
  if (ensureDefaultCovers()) always = true;
  if (renameTripTitles()) always = true;
  if (ensurePartyMembers()) always = true;
  if (ensureDepartTimes()) always = true;
  if ((APP.seedVersion || 1) >= SEED_VER) {
    if (always) persist();
    return always;
  }
  let changed = false;
  const kz = APP.trips.find(t => t.id === 't1' || t.title === '九州小旅' || t.title === '九州之旅');
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
  if (renameTripTitles()) changed = true;
  if (ensurePartyMembers()) changed = true;
  if (ensureDepartTimes()) changed = true;
  APP.seedVersion = SEED_VER;
  if (changed) {
    const now = Date.now();
    (APP.trips || []).forEach(t => { t.updatedAt = now; });
  }
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
  if (kind === 'bangkok') return { theme: 2, fs: 16, fx: 'none', dark: false, hideStickers: false }; /* 綠 + 無特效 */
  if (kind === 'kyushu') return { theme: 6, fs: 16, fx: 'leaf', dark: false, hideStickers: false }; /* 楓葉紅 + 秋葉（沿用原預設） */
  return { theme: 6, fs: 16, fx: 'none', dark: false, hideStickers: false };
}
function isBangkokTrip(t) {
  if (!t) return false;
  const blob = ((t.title || '') + ' ' + (t.destination || '')).trim();
  return t.id === 't-thai' || t.title === '曼谷小旅' || t.title === '曼谷之旅' || /曼谷|泰國|Bangkok|Thai/i.test(blob);
}
function isKyushuTrip(t) {
  if (!t) return false;
  const blob = ((t.title || '') + ' ' + (t.destination || '')).trim();
  return t.id === 't1' || t.title === '九州小旅' || t.title === '九州之旅' || /九州/.test(blob);
}
function createTrip(opts) {
  opts = opts || {};
  const start = opts.startDate || isoDate(new Date()), end = opts.endDate || start;
  const kindHint = opts.settings ? null : (opts._kind || (isBangkokTrip(opts) ? 'bangkok' : (isKyushuTrip(opts) ? 'kyushu' : 'new')));
  const t = {
    id: opts.id || uid('t'), title: opts.title || '新旅程', destination: opts.destination || '',
    startDate: start, endDate: end, departTime: opts.departTime != null ? opts.departTime : '08:00',
    cover: opts.cover || '', currency: opts.currency || 'JPY',
    days: opts.days || [], bookings: opts.bookings || { flights: [], stays: [] },
    budget: opts.budget || { total: 0, rate: ({ JPY:0.052, THB:0.22, KRW:0.0056, TWD:0.24, USD:7.8, EUR:8.4, GBP:9.9 }[opts.currency || 'JPY'] || 0.052), expenses: [] },
    shop: opts.shop || [], todos: opts.todos || [], members: opts.members || [],
    settings: opts.settings || defaultTripSettings(kindHint || 'new'),
    updatedAt: opts.updatedAt || Date.now()
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
    id: 't1', title: '九州之旅', destination: '九州', startDate: '2026-11-22', endDate: '2026-11-28', departTime: '12:55', currency: 'JPY', cover: 'assets/covers/kyushu.png?v=5',
    days: toDays(Array.isArray(oldDays) && oldDays.length ? oldDays : KZ_DEFAULT_DAYS, '2026-11-22'),
    bookings: JSON.parse(JSON.stringify(KZ_BOOKINGS)),
    budget: { total: +old('kz_budget') || 0, rate: +old('kz_rate') || 0.052, expenses: Array.isArray(exps) ? exps : [] },
    shop: Array.isArray(shop) ? shop : KZ_DEFAULT_SHOP.map(x => Object.assign({}, x)),
    todos: Array.isArray(todos) ? todos : KZ_DEFAULT_TODOS.map(x => Object.assign({}, x)),
    members: DEFAULT_MEMBERS_CHA.map(x => Object.assign({}, x)), settings: { theme: settings.theme, fs: settings.fs, fx: settings.fx, dark: false, hideStickers: false }, _kind: 'kyushu', _noAdd: true
  });
  const tThai = buildThailandTrip();
  return { version: 1, seedVersion: SEED_VER, activeTripId: 't1', settings, trips: [t1, tThai] };
}
let APP = null;
/* cloud sync flags (hoisted before first persist(); avoid TDZ) */
var cloudApplyingRemote = false;
var cloudUser = null;
var cloudReady = false;
var cloudSyncTimer = null;
var cloudSyncing = false;
var cloudLastStatus = '未登入';
function persist(opts) {
  opts = opts || {};
  /* NEVER bump trip.updatedAt here. Boot / theme / activeTrip / settings used to stamp
     stale content with a fresh clock, then auto-upload overwrote real edits on other phones.
     Only saveTrip (and explicit content mutators) may stamp. */
  const ok = store.set(APP_KEY, APP);
  try {
    if (!opts.noCloud && typeof scheduleCloudSync === 'function') scheduleCloudSync();
  } catch (e) {}
  return ok;
}
function sortTripsByStartDate(trips) {
  /* Home list + sync: always 出發日期 ascending (then title, id). Never rely on Firestore/Map push order. */
  const list = Array.isArray(trips) ? trips.slice() : [];
  list.sort((a, b) => {
    const sa = String((a && a.startDate) || '');
    const sb = String((b && b.startDate) || '');
    if (sa !== sb) return sa < sb ? -1 : 1;
    const ta = String((a && a.title) || '');
    const tb = String((b && b.title) || '');
    if (ta !== tb) return ta < tb ? -1 : 1;
    return String((a && a.id) || '').localeCompare(String((b && b.id) || ''));
  });
  return list;
}
function normalizeTripOrder() {
  if (!APP || !Array.isArray(APP.trips) || APP.trips.length < 2) return false;
  const before = APP.trips.map(t => t && t.id).join('\0');
  const next = sortTripsByStartDate(APP.trips);
  const after = next.map(t => t && t.id).join('\0');
  if (before === after) return false;
  APP.trips = next;
  return true;
}
function loadApp() {
  const a = store.get(APP_KEY, null);
  if (a && a.version === 1 && Array.isArray(a.trips) && a.trips.length) {
    a.trips.forEach(t => (t.days || []).forEach(d => d.items = (d.items || []).map(normItem)));
    a.trips = sortTripsByStartDate(a.trips);
    if (!a.trips.some(t => t.id === a.activeTripId)) a.activeTripId = a.trips[0].id;
    a.settings = a.settings || {};
    return a;
  }
  return migrate();
}
APP = loadApp(); persist({ noStamp: true });
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
  if (t) {
    t.updatedAt = Date.now();
    const i = APP.trips.findIndex(x => x.id === t.id);
    if (i >= 0) APP.trips[i] = t; else APP.trips.push(t);
  }
  persist();
}
function deleteTrip(id) {
  if (APP.trips.length <= 1) return false;
  APP.trips = APP.trips.filter(t => t.id !== id);
  if (APP.activeTripId === id) APP.activeTripId = APP.trips[0].id;
  persist();
  try {
    if (typeof cloudDeleteTrip === 'function') cloudDeleteTrip(id);
  } catch (e) {}
  return true;
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
  /* Marshall pet dogs + 柴丸 */
  petWt: { name: '白啡狗', src: 'assets/stickers/pets/sticker-dog-white-tan.png' },
  petWt2: { name: '白啡狗站', src: 'assets/stickers/pets/sticker-dog-white-tan-pose2.png' },
  petChoco: { name: '朱古力狗', src: 'assets/stickers/pets/sticker-dog-chocolate.png' },
  petChoco2: { name: '朱古力狗趴', src: 'assets/stickers/pets/sticker-dog-chocolate-pose2.png' },
  petChaimaru: { name: '柴丸', src: 'assets/stickers/pets/sticker-dog-chaimaru.png' },
  /* legacy canvas keys kept so old placements still render */
  maneki: { name: '招財貓', src: 'assets/stickers/sticker-maneki.png' },
  sakura: { name: '櫻花貓', src: 'assets/stickers/sticker-sakura.png' },
  ramen: { name: '拉麵貓', src: 'assets/stickers/sticker-ramen.png' },
  bowl: { name: '碗貓', src: 'assets/stickers/sticker-bowl.png' },
  shop: { name: '購物貓' }, bags: { name: '手袋貓' }, girl: { name: '女仔' }
};
const stkHTML = k => { const a = STICKERS[k] || {}; return a.src ? `<img src="${a.src}" alt="${a.name || k}" draggable="false">` : cat(k); };
/* dog vs cat sticker sets — Bangkok uses dogs; Kyushu keeps cats-first */
const DOG_STICKER_RE = /^(dog\d+|pet)/i;
const isDogStickerKey = k => DOG_STICKER_RE.test(k);
const BKK_DAY_DOGS = ['petWt', 'petChoco', 'petChaimaru', 'dog01', 'dog02', 'dog09', 'dog03', 'petWt2'];
const CAT_TO_DOG = {
  maneki: 'petWt', sakura: 'petChoco', ramen: 'dog01', bowl: 'dog02',
  shop: 'dog03', bags: 'dog04', girl: 'petChaimaru',
  jp01: 'dog01', jp02: 'dog02', jp03: 'dog10', jp04: 'dog05',
  jp05: 'dog06', jp06: 'dog11', jp07: 'dog09', jp08: 'dog08',
  th01: 'petWt', th02: 'petChoco', th03: 'dog03', th04: 'dog02',
  th05: 'dog07', th06: 'petChaimaru'
};
function stickerKeysForTrip(t) {
  const keys = Object.keys(STICKERS);
  const dogs = keys.filter(isDogStickerKey);
  const cats = keys.filter(k => !isDogStickerKey(k));
  /* 曼谷：只顯示狗＋自家寵物；九州／其他：貓先、狗仍可選 */
  if (isBangkokTrip(t)) return dogs.length ? dogs : keys;
  return cats.concat(dogs);
}
function dayDecorKey(t, d, dayIdx) {
  const i = dayIdx == null ? 0 : dayIdx;
  if (isBangkokTrip(t)) {
    if (d && d.cat && isDogStickerKey(d.cat) && STICKERS[d.cat]) return d.cat;
    if (d && d.cat && CAT_TO_DOG[d.cat]) return CAT_TO_DOG[d.cat];
    return BKK_DAY_DOGS[i % BKK_DAY_DOGS.length];
  }
  return (d && d.cat) || 'maneki';
}
function migrateBangkokStickers() {
  let changed = false;
  (APP.trips || []).forEach(t => {
    if (!isBangkokTrip(t)) return;
    (t.days || []).forEach((d, i) => {
      const want = BKK_DAY_DOGS[i % BKK_DAY_DOGS.length];
      if (!d.cat || !isDogStickerKey(d.cat)) {
        d.cat = (d.cat && CAT_TO_DOG[d.cat]) || want;
        changed = true;
      }
      if (Array.isArray(d.stickers)) {
        d.stickers.forEach(s => {
          if (!s || !s.k) return;
          if (!isDogStickerKey(s.k)) {
            s.k = CAT_TO_DOG[s.k] || want;
            changed = true;
          }
        });
      }
    });
  });
  return changed;
}
/* STICKERS 定義後先跑一次：曼谷日卡／已貼貓轉狗 */
(function(){
  try {
    if (typeof APP !== 'undefined' && APP && migrateBangkokStickers()) persist();
  } catch (e) {}
})();


function stkApplyTransform(el, xPct, yPx, r, layerW) {
  const px = (xPct / 100) * layerW;
  el.style.transform = `translate3d(${px}px, ${yPx}px, 0) rotate(${r || 0}deg)`;
}
function renderStickers(d) {
  const layer = document.getElementById('stkLayer'); if (!layer) return;
  d.stickers = d.stickers || [];
  layer.innerHTML = '';
  if (getSetting('hideStickers', false)) {
    layer.hidden = true;
    return;
  }
  layer.hidden = false;
  const layerW = () => Math.max(1, layer.clientWidth);
  d.stickers.forEach((s, idx) => {
    const el = document.createElement('div');
    el.className = 'placed sticker';
    el.innerHTML = stkHTML(s.k) + '<button type="button" class="x" aria-label="刪除貼紙">×</button>';
    stkApplyTransform(el, s.x, s.y, s.r, layerW());
    el.querySelector('.x').onpointerdown = e => e.stopPropagation();
    el.querySelector('.x').onclick = e => { e.stopPropagation(); d.stickers.splice(idx, 1); saveDays(); renderStickers(d); };
    let sx, sy, ox, oy, curX, curY, moved = false, lastTap = 0, pid = null;
    const endDrag = e => {
      if (sx === undefined) return;
      if (e && pid != null && e.pointerId != null && e.pointerId !== pid) return;
      el.classList.remove('dragging');
      const wasMoved = moved;
      sx = undefined; pid = null;
      if (wasMoved) {
        const W = layerW();
        s.x = curX / W * 100;
        s.y = curY;
        stkApplyTransform(el, s.x, s.y, s.r, W);
        saveDays();
        return;
      }
      const now = Date.now();
      if (now - lastTap < 320) {
        s.r = ((s.r || 0) + 45) % 360;
        stkApplyTransform(el, s.x, s.y, s.r, layerW());
        saveDays();
        lastTap = 0;
      } else lastTap = now;
    };
    el.onpointerdown = e => {
      if (e.button != null && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
      pid = e.pointerId;
      layer.querySelectorAll('.placed.sel').forEach(p => p !== el && p.classList.remove('sel'));
      el.classList.add('sel', 'dragging');
      sx = e.clientX; sy = e.clientY;
      const W = layerW();
      ox = (s.x / 100) * W; oy = s.y;
      curX = ox; curY = oy;
      moved = false;
    };
    el.onpointermove = e => {
      if (sx === undefined || (pid != null && e.pointerId !== pid)) return;
      e.preventDefault();
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      const W = layerW(), H = Math.max(1, layer.clientHeight);
      curX = Math.max(0, Math.min(W - el.offsetWidth, ox + dx));
      curY = Math.max(0, Math.min(H - el.offsetHeight, oy + dy));
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) rotate(${s.r || 0}deg)`;
    };
    el.onpointerup = endDrag;
    el.onpointercancel = endDrag;
    el.onlostpointercapture = endDrag;
    layer.appendChild(el);
  });
}
function openStickerPicker() {
  const g = document.getElementById('stkGrid');
  const keys = stickerKeysForTrip(typeof trip !== 'undefined' ? trip : getTrip());
  g.innerHTML = keys.map(k => `<button class="sticker" data-k="${k}" aria-label="${STICKERS[k].name}">${stkHTML(k)}</button>`).join('');
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
async function enterTrip(id) {
  if (!setActiveTrip(id)) return;
  /* Push activeTripId BEFORE reload so syncWithCloud cannot bounce back to an older cloud trip. */
  try {
    if (typeof cloudSyncTimer !== 'undefined' && cloudSyncTimer) clearTimeout(cloudSyncTimer);
    if (typeof fbDb !== 'undefined' && fbDb && typeof cloudUser !== 'undefined' && cloudUser) {
      await fbDb.collection('users').doc(cloudUser.uid).set({
        email: cloudUser.email || '',
        activeTripId: id,
        updatedAt: Date.now()
      }, { merge: true });
    }
  } catch (e) { console.warn('[cloud] activeTrip push', e); }
  location.hash = 'trip';
  location.reload();
}
document.getElementById('backHome').onclick = () => { history.replaceState(null, '', location.pathname + location.search); location.reload(); };
function daysBetween(a, b) { return Math.round((pd(b) - pd(a)) / 864e5) + 1; }
const escH = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const coverCSS = c => !c ? `background:${COVERS[0]}` : c.startsWith('#') ? `background:${c}` : `background-image:url('${c}')`;
function renderHome() {
  const L = document.getElementById('tripList'); L.innerHTML = '';
  const today = isoDate(new Date());
  if (normalizeTripOrder()) {
    try { store.set(APP_KEY, APP); } catch (e) {}
  }
  APP.trips.forEach(t => {
    const st = tripStatus(t), n = daysBetween(t.startDate, t.endDate);
    let extra = '';
    if (st === 'planning') {
      const left = tripDepartMs(t) - Date.now();
      const dLeft = Math.max(0, Math.ceil(left / 864e5));
      extra = `<span class="trip-badge">✈️ 仲有 ${dLeft} 日出發</span>`;
    }
    else if (st === 'ongoing') { const k = daysBetween(t.startDate, today); extra = `<span class="trip-badge">旅程進行中・Day ${k}/${n}</span><div class="track"><div class="bar" style="width:${k / n * 100}%"></div></div>`; }
    else extra = '<span class="trip-badge">已完成</span>';
    const c = document.createElement('div');
    c.className = 'card trip-card'; c.dataset.id = t.id;
    c.innerHTML = `<div class="trip-cover" style="${coverCSS(t.cover)}"></div>
      <div class="trip-body"><div class="trip-name">${escH(t.title)}</div>
      <div class="trip-meta">📍 ${escH(t.destination || '未填目的地')}</div>
      <div class="trip-meta">${t.startDate.replace(/-/g, '/')} – ${t.endDate.replace(/-/g, '/')}・${n} 日</div>
      ${tripPartyLabel(t) ? `<div class="trip-meta trip-party">${escH(tripPartyLabel(t))}</div>` : ''}${extra}</div>
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
document.addEventListener('click', e => {
  if (!e.target.closest('.trip-menu,.trip-more')) document.querySelectorAll('.trip-menu').forEach(m => m.remove());
  if (!e.target.closest('.item-menu,.item-more,.item-more-wrap')) document.querySelectorAll('.item-menu').forEach(m => m.remove());
});
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
  $id('tmDepart').value = t ? (t.departTime != null ? t.departTime : '08:00') : '08:00';
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
  const depRaw = ($id('tmDepart') && $id('tmDepart').value) || '';
  const o = { title, destination: $id('tmDest').value.trim(), startDate: a, endDate: b, departTime: normDepartTime(depRaw), currency: $id('tmCur').value, cover: tmCover };
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
let _bootSettingsDirty = false;
if (APP.settings.dark == null) { APP.settings.dark = false; _bootSettingsDirty = true; }
if (APP.settings.autoMerge == null) { APP.settings.autoMerge = false; _bootSettingsDirty = true; }
/* settings-only — no trip.updatedAt bump, no cloud push (avoids stale overwrite) */
if (_bootSettingsDirty) persist({ noCloud: true });

const trip = getTrip();
let days = trip.days;
if (!trip.budget) trip.budget = { total: 0, rate: 0.052, expenses: [] };
if (!trip.bookings) trip.bookings = { flights: [], stays: [] };
(trip.bookings.flights || []).forEach(f => { if (!f.id) f.id = uid('f'); if (f.people == null) f.people = 1; if (f.amount == null) f.amount = 0; if (!f.fileId) f.fileId = ''; if (!f.fileStoragePath) f.fileStoragePath = ''; if (!f.fileDownloadURL) f.fileDownloadURL = ''; if (!f.fileName) f.fileName = ''; if (!f.fileMime) f.fileMime = ''; if (f.fileSize == null) f.fileSize = 0; if (f.fileFsSynced == null) f.fileFsSynced = false; if (f.fileCloudAt == null) f.fileCloudAt = 0; });
(trip.bookings.stays || []).forEach(s => { if (!s.id) s.id = uid('s'); if (s.people == null) s.people = 1; if (s.amount == null) s.amount = 0; if (!s.fileId) s.fileId = ''; if (!s.fileStoragePath) s.fileStoragePath = ''; if (!s.fileDownloadURL) s.fileDownloadURL = ''; if (!s.fileName) s.fileName = ''; if (!s.fileMime) s.fileMime = ''; if (s.fileSize == null) s.fileSize = 0; if (s.fileFsSynced == null) s.fileFsSynced = false; if (s.fileCloudAt == null) s.fileCloudAt = 0; if (!s.q) s.q = s.name || ''; });

/* ---------- IndexedDB for booking files ---------- */
/* Store ArrayBuffer envelopes (not raw Blob): iOS PWA/SW updates can detach Blob handles → empty/unloadable. */
const IDB_NAME = 'travel_app_files', IDB_STORE = 'files';
function idbOpen() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(IDB_NAME, 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains(IDB_STORE)) r.result.createObjectStore(IDB_STORE); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function blobToIdbRecord(blob, mimeHint) {
  const mime = String((blob && blob.type) || mimeHint || 'application/octet-stream');
  const ab = await blob.arrayBuffer();
  return { v: 1, mime, ab, size: ab.byteLength, savedAt: Date.now() };
}
function idbRecordToBlob(rec) {
  if (!rec) return null;
  if (typeof Blob !== 'undefined' && rec instanceof Blob) return rec;
  if (rec instanceof ArrayBuffer) return new Blob([rec], { type: 'application/octet-stream' });
  if (ArrayBuffer.isView(rec)) return new Blob([rec.buffer], { type: 'application/octet-stream' });
  if (typeof rec === 'object') {
    if (rec.ab instanceof ArrayBuffer) return new Blob([rec.ab], { type: rec.mime || 'application/octet-stream' });
    if (ArrayBuffer.isView(rec.ab)) return new Blob([rec.ab.buffer], { type: rec.mime || 'application/octet-stream' });
    if (rec.data && typeof rec.data === 'string') return b64ToBlob(rec.data, rec.mime || 'image/jpeg');
  }
  if (typeof rec === 'string') {
    try { return b64ToBlob(rec, 'image/jpeg'); } catch (e) { return null; }
  }
  return null;
}
async function idbPut(key, blob, mimeHint) {
  try {
    const db = await idbOpen();
    const record = (blob && typeof blob === 'object' && blob.v === 1 && blob.ab)
      ? blob
      : await blobToIdbRecord(blob, mimeHint);
    await new Promise((res, rej) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(record, key);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error || new Error('idbPut failed'));
      tx.onabort = () => rej(tx.error || new Error('idbPut aborted'));
    });
  } catch (e) {
    storageFailToast('IndexedDB');
    throw e;
  }
}
async function idbGetRaw(key) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const rq = db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).get(key);
    rq.onsuccess = () => res(rq.result || null);
    rq.onerror = () => rej(rq.error);
  });
}
async function idbGet(key) {
  const raw = await idbGetRaw(key);
  const blob = idbRecordToBlob(raw);
  if (!blob || !blob.size) return null;
  /* Migrate legacy Blob → envelope so later SW updates do not detach bytes */
  if (raw instanceof Blob && blob.size > 32) {
    try { await idbPut(key, blob, blob.type || 'application/octet-stream'); } catch (e) { /* keep readable blob */ }
  }
  return blob;
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
async function blobHasImageMagic(blob) {
  if (!blob || !blob.size) return false;
  try {
    const ab = await blob.slice(0, 16).arrayBuffer();
    const mime = sniffBkMime(new Uint8Array(ab));
    return !!(mime && mime.startsWith('image/'));
  } catch (e) { return false; }
}
async function canDecodeBkImage(blob) {
  if (!blob || !blob.size) return false;
  if (!(await blobHasImageMagic(blob))) return false;
  try {
    const img = await loadImageElement(blob);
    const w = img.width || img.naturalWidth || 0;
    const h = img.height || img.naturalHeight || 0;
    if (typeof img.close === 'function') try { img.close(); } catch (e) {}
    return w > 0 && h > 0;
  } catch (e) { return false; }
}

/* ---------- Booking attachments: compress to screenshot → Firestore files subcollection ---------- */
/* Primary path does NOT need Firebase Storage / Blaze. Storage helpers remain gated fallback only. */
const BK_USE_STORAGE = false; /* set true only if Blaze Storage is enabled */
const BK_FS_B64_MAX = 700 * 1024; /* max base64 chars per Firestore file doc (doc hard-cap 1MB) */
const BK_FILE_INPUT_MAX = 25 * 1024 * 1024; /* allow large camera/PDF picks; we compress before sync */
const BK_PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
const BK_PDFJS_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
let pdfJsLoading = null;

function bookingHasFile(b) {
  return !!(b && (b.fileId || b.fileFsSynced || b.fileStoragePath || b.fileDownloadURL));
}
function sanitizeTripForCloud(t) {
  const copy = JSON.parse(JSON.stringify(t || {}));
  const scrub = (b) => {
    if (!b || typeof b !== 'object') return;
    delete b.fileDataBase64;
    delete b.fileData;
    delete b.data;
  };
  ((copy.bookings && copy.bookings.flights) || []).forEach(scrub);
  ((copy.bookings && copy.bookings.stays) || []).forEach(scrub);
  return copy;
}
function bookingFileCloudLabel(b) {
  if (!bookingHasFile(b)) return '';
  if (b.fileFsSynced || b.fileStoragePath || b.fileDownloadURL) return '';
  return '（待上雲）';
}
function bookingStoragePath(tripId, bookingId, fileId) {
  return 'trips/' + tripId + '/bookings/' + bookingId + '/' + (fileId || 'file');
}
function bookingFilesCol(tripId) {
  return fbDb.collection('trips').doc(tripId).collection('files');
}
function blobToRawBase64(blob) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => {
      const url = String(r.result || '');
      const i = url.indexOf(',');
      res(i >= 0 ? url.slice(i + 1) : url);
    };
    r.onerror = () => rej(r.error || new Error('read fail'));
    r.readAsDataURL(blob);
  });
}
function b64ToBlob(b64, mime) {
  let s = String(b64 || '').replace(/\s+/g, '');
  const comma = s.indexOf(',');
  if (s.startsWith('data:') && comma >= 0) s = s.slice(comma + 1);
  const bin = atob(s);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: mime || 'image/jpeg' });
}
function sniffBkMime(buf) {
  if (!buf || buf.length < 4) return '';
  const b0 = buf[0], b1 = buf[1], b2 = buf[2], b3 = buf[3];
  if (b0 === 0xFF && b1 === 0xD8 && b2 === 0xFF) return 'image/jpeg';
  if (b0 === 0x89 && b1 === 0x50 && b2 === 0x4E && b3 === 0x47) return 'image/png';
  if (b0 === 0x47 && b1 === 0x49 && b2 === 0x46) return 'image/gif';
  if (b0 === 0x52 && b1 === 0x49 && b2 === 0x46 && b3 === 0x46) return 'image/webp';
  if (b0 === 0x25 && b1 === 0x50 && b2 === 0x44 && b3 === 0x46) return 'application/pdf';
  return '';
}
async function normalizeBkBlob(blob, meta) {
  if (!blob) return null;
  let raw = blob;
  if (!(raw instanceof Blob)) raw = new Blob([raw], { type: (meta && meta.fileMime) || 'application/octet-stream' });
  let mime = String((raw.type || (meta && meta.fileMime) || '')).toLowerCase().trim();
  const name = String((meta && meta.fileName) || '').toLowerCase();
  if (!mime || mime === 'application/octet-stream' || mime === 'binary/octet-stream') {
    try {
      const ab = await raw.slice(0, 16).arrayBuffer();
      const sniffed = sniffBkMime(new Uint8Array(ab));
      if (sniffed) mime = sniffed;
    } catch (e) {}
  }
  if (!mime || mime === 'application/octet-stream') {
    if (/\.pdf$/i.test(name)) mime = 'application/pdf';
    else if (/\.(png)$/i.test(name)) mime = 'image/png';
    else if (/\.(gif)$/i.test(name)) mime = 'image/gif';
    else if (/\.(webp)$/i.test(name)) mime = 'image/webp';
    else if (/\.(jpe?g)$/i.test(name) || (meta && meta.fileFsSynced) || (meta && String(meta.fileMime || '').includes('image'))) mime = 'image/jpeg';
    else mime = 'image/jpeg'; /* v6-18+ booking attachments are compressed screenshots */
  }
  if (raw.type !== mime) {
    try { raw = new Blob([await raw.arrayBuffer()], { type: mime }); } catch (e) { raw = new Blob([raw], { type: mime }); }
  }
  return { blob: raw, mime };
}
function blobToDataURL(blob) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result || ''));
    r.onerror = () => rej(r.error || new Error('read fail'));
    r.readAsDataURL(blob);
  });
}
function canvasToJpegBlob(canvas, quality) {
  return new Promise((res, rej) => {
    if (!canvas.toBlob) {
      try {
        const url = canvas.toDataURL('image/jpeg', quality);
        const i = url.indexOf(',');
        res(b64ToBlob(i >= 0 ? url.slice(i + 1) : url, 'image/jpeg'));
      } catch (e) { rej(e); }
      return;
    }
    canvas.toBlob(b => (b ? res(b) : rej(new Error('toBlob fail'))), 'image/jpeg', quality);
  });
}
async function loadImageElement(blob) {
  if (typeof createImageBitmap === 'function') {
    try { return await createImageBitmap(blob); } catch (e) { /* fall through */ }
  }
  const url = URL.createObjectURL(blob);
  try {
    const img = await new Promise((res, rej) => {
      const el = new Image();
      el.onload = () => res(el);
      el.onerror = () => rej(new Error('image load fail'));
      el.src = url;
    });
    return img;
  } finally {
    try { URL.revokeObjectURL(url); } catch (e) {}
  }
}
async function compressImageToFsLimit(sourceBlob) {
  const img = await loadImageElement(sourceBlob);
  const ow = img.width || img.naturalWidth || 0;
  const oh = img.height || img.naturalHeight || 0;
  if (!ow || !oh) throw new Error('讀唔到相片');
  const scales = [1, 0.85, 0.7, 0.55, 0.42, 0.32, 0.24];
  const qualities = [0.82, 0.7, 0.58, 0.46, 0.36, 0.28, 0.22];
  const maxEdge0 = 1600;
  for (const scale of scales) {
    let tw = Math.max(1, Math.round(ow * scale));
    let th = Math.max(1, Math.round(oh * scale));
    const edge = Math.max(tw, th);
    if (edge > maxEdge0) {
      const f = maxEdge0 / edge;
      tw = Math.max(1, Math.round(tw * f));
      th = Math.max(1, Math.round(th * f));
    }
    const canvas = document.createElement('canvas');
    canvas.width = tw; canvas.height = th;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) continue;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, tw, th);
    ctx.drawImage(img, 0, 0, tw, th);
    for (const q of qualities) {
      const out = await canvasToJpegBlob(canvas, q);
      if (!out || out.size < 32) continue;
      const head = new Uint8Array(await out.slice(0, 3).arrayBuffer());
      if (!(head[0] === 0xFF && head[1] === 0xD8 && head[2] === 0xFF)) continue;
      const b64Est = Math.ceil(out.size * 4 / 3) + 8;
      if (b64Est <= BK_FS_B64_MAX) {
        if (typeof img.close === 'function') try { img.close(); } catch (e) {}
        return out;
      }
    }
  }
  if (typeof img.close === 'function') try { img.close(); } catch (e) {}
  return null;
}
function ensurePdfJs() {
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if (pdfJsLoading) return pdfJsLoading;
  pdfJsLoading = new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = BK_PDFJS_CDN;
    s.async = true;
    s.onload = () => {
      try {
        if (!window.pdfjsLib) throw new Error('pdf.js missing');
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = BK_PDFJS_WORKER;
        res(window.pdfjsLib);
      } catch (e) { rej(e); }
    };
    s.onerror = () => rej(new Error('載入 PDF 工具失敗'));
    document.head.appendChild(s);
  }).catch(e => { pdfJsLoading = null; throw e; });
  return pdfJsLoading;
}
async function pdfFirstPageToJpegBlob(file) {
  const pdfjsLib = await ensurePdfJs();
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  if (pdf.numPages > 1) {
    toast('PDF 有多頁，只會用第 1 頁截圖同步（Firestore 上限）');
  }
  const page = await pdf.getPage(1);
  const base = page.getViewport({ scale: 1 });
  const targetW = Math.min(1400, base.width);
  const scale = targetW / base.width;
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.floor(viewport.width));
  canvas.height = Math.max(1, Math.floor(viewport.height));
  const ctx = canvas.getContext('2d', { alpha: false });
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvasToJpegBlob(canvas, 0.8);
}
async function prepareBookingScreenshot(file) {
  if (!file) throw new Error('未有檔案');
  if (file.size > BK_FILE_INPUT_MAX) {
    throw new Error('檔案太大（揀檔上限約 25MB），請用截圖或壓縮後再試');
  }
  const mime = String(file.type || '').toLowerCase();
  const name = String(file.name || '');
  const isPdf = mime.includes('pdf') || /\.pdf$/i.test(name);
  const isImg = mime.startsWith('image/') || /\.(jpe?g|png|webp|gif|heic|bmp)$/i.test(name);
  if (!isPdf && !isImg) {
    throw new Error('只接受相片或 PDF（會轉成壓縮截圖）');
  }
  let source = file;
  if (isPdf) {
    try {
      source = await pdfFirstPageToJpegBlob(file);
    } catch (e) {
      console.warn('[bkfile] pdf render', e);
      throw new Error('PDF 轉截圖失敗，請改用手機截圖後再上載');
    }
  }
  let compressed = null;
  /* Already a small JPEG screenshot (e.g. re-save path) — skip redraw to avoid quality loss */
  if (!isPdf) {
    const srcMime = String(source.type || mime || '').toLowerCase();
    const srcB64Est = Math.ceil((source.size || 0) * 4 / 3) + 8;
    if (srcMime.includes('jpeg') || srcMime.includes('jpg') || /\.jpe?g$/i.test(name)) {
      if (srcB64Est <= BK_FS_B64_MAX && source.size >= 32 && await blobHasImageMagic(source)) {
        compressed = source instanceof Blob ? source : new Blob([source], { type: 'image/jpeg' });
        if (compressed.type !== 'image/jpeg') compressed = new Blob([await compressed.arrayBuffer()], { type: 'image/jpeg' });
      }
    }
  }
  if (!compressed) compressed = await compressImageToFsLimit(source);
  if (!compressed || compressed.size < 32) {
    throw new Error('壓縮失敗，請改用較清楚嘅截圖再試');
  }
  if (!(await blobHasImageMagic(compressed))) {
    throw new Error('壓縮後檔案損毀，請改用截圖（JPG/PNG）再上載');
  }
  const b64 = await blobToRawBase64(compressed);
  if (b64.length > BK_FS_B64_MAX) {
    throw new Error('壓縮後仍然超過上限（約 700KB），請改用較細嘅截圖');
  }
  const base = (name || 'booking').replace(/\.[^.]+$/, '') || 'booking';
  return {
    blob: compressed,
    mime: 'image/jpeg',
    fileName: base + '.jpg',
    size: compressed.size,
    b64
  };
}
async function ensureTripDocForStorage(t) {
  if (!fbDb || !cloudUser || !t || !t.id) return false;
  const uid = cloudUser.uid;
  const ownerUid = t.cloudOwnerUid || uid;
  let memberUids = Array.isArray(t.memberUids) ? t.memberUids.slice() : [];
  if (!memberUids.includes(ownerUid)) memberUids.unshift(ownerUid);
  if (!memberUids.includes(uid)) memberUids.push(uid);
  memberUids = [...new Set(memberUids.filter(Boolean))];
  t.cloudOwnerUid = ownerUid;
  t.memberUids = memberUids;
  const payload = {
    ownerUid,
    memberUids,
    updatedAt: t.updatedAt || Date.now(),
    trip: sanitizeTripForCloud(t)
  };
  await fbDb.collection('trips').doc(t.id).set(payload);
  return true;
}
async function deleteBookingCloudFile(storagePath) {
  if (!BK_USE_STORAGE || !storagePath || !fbStorage || !cloudUser) return;
  try {
    await fbStorage.ref().child(storagePath).delete();
  } catch (e) {
    console.warn('[storage] delete', e);
  }
}
async function deleteBookingFsFile(tripId, fileId) {
  if (!fbDb || !cloudUser || !tripId || !fileId) return;
  try {
    await bookingFilesCol(tripId).doc(fileId).delete();
  } catch (e) {
    console.warn('[fs-file] delete', e);
  }
}
async function fetchBookingFsBlob(tripId, fileId) {
  if (!fbDb || !cloudUser || !tripId || !fileId) return null;
  const snap = await bookingFilesCol(tripId).doc(fileId).get();
  if (!snap.exists) return null;
  const d = snap.data() || {};
  if (!d.data || typeof d.data !== 'string') return null;
  let blob = b64ToBlob(d.data, d.mime || 'image/jpeg');
  try {
    const norm = await normalizeBkBlob(blob, { fileMime: d.mime || 'image/jpeg', fileName: d.name || '', fileFsSynced: true });
    blob = norm.blob;
  } catch (e) {}
  if (!blob || !blob.size) return null;
  return blob;
}
async function uploadBookingCloudFile(booking, tripObj) {
  const t = tripObj || (typeof trip !== 'undefined' ? trip : null) || (typeof getTrip === 'function' ? getTrip() : null);
  if (!booking || !booking.fileId || !fbDb || !cloudUser || !t) return false;
  let blob = null;
  try { blob = await idbGet(booking.fileId); } catch (e) { return false; }
  if (!blob) return false;
  try {
    await ensureTripDocForStorage(t);
  } catch (e) {
    console.warn('[fs-file] ensure trip', e);
    return false;
  }
  try {
    let mimeNow = String(blob.type || booking.fileMime || '').toLowerCase();
    let b64 = await blobToRawBase64(blob);
    const needReencode = b64.length > BK_FS_B64_MAX
      || !(mimeNow.includes('jpeg') || mimeNow.includes('jpg'))
      || !(await blobHasImageMagic(blob));
    if (needReencode) {
      const prepared = await prepareBookingScreenshot(new File([blob], booking.fileName || 'booking.jpg', { type: blob.type || 'image/jpeg' }));
      blob = prepared.blob;
      b64 = prepared.b64;
      await idbPut(booking.fileId, blob, prepared.mime);
      booking.fileMime = prepared.mime;
      booking.fileSize = prepared.size;
      booking.fileName = prepared.fileName || booking.fileName;
      mimeNow = prepared.mime;
    }
    if (b64.length > BK_FS_B64_MAX || b64.length > 720000) {
      console.warn('[fs-file] still too large', b64.length);
      return false;
    }
    if (!(await blobHasImageMagic(blob))) {
      console.warn('[fs-file] invalid image bytes');
      return false;
    }
    await bookingFilesCol(t.id).doc(booking.fileId).set({
      bookingId: booking.id || '',
      fileId: booking.fileId,
      name: booking.fileName || 'booking.jpg',
      mime: booking.fileMime || 'image/jpeg',
      size: booking.fileSize || blob.size || 0,
      data: b64,
      updatedAt: Date.now(),
      kind: 'screenshot'
    });
    booking.fileFsSynced = true;
    booking.fileCloudAt = Date.now();
    /* optional Storage fallback (Blaze) — off by default */
    if (BK_USE_STORAGE && fbStorage) {
      try {
        const path = bookingStoragePath(t.id, booking.id, booking.fileId);
        const ref = fbStorage.ref().child(path);
        await ref.put(blob, { contentType: blob.type || 'image/jpeg' });
        let url = '';
        try { url = await ref.getDownloadURL(); } catch (e) {}
        booking.fileStoragePath = path;
        booking.fileDownloadURL = url || booking.fileDownloadURL || '';
      } catch (e) {
        console.warn('[storage] optional put', e);
      }
    }
    return true;
  } catch (e) {
    console.warn('[fs-file] upload', e);
    return false;
  }
}
async function flushPendingBookingUploads(silent) {
  if (!fbDb || !cloudUser || !APP || !APP.trips) return 0;
  let n = 0;
  for (const t of APP.trips) {
    if (!t || !t.bookings) continue;
    const lists = [t.bookings.flights || [], t.bookings.stays || []];
    let touched = false;
    for (const list of lists) {
      for (const b of list) {
        if (!b || !b.fileId || b.fileFsSynced) continue;
        let local = null;
        try { local = await idbGet(b.fileId); } catch (e) {}
        if (!local) continue;
        const ok = await uploadBookingCloudFile(b, t);
        if (ok) { n++; touched = true; }
      }
    }
    if (touched) saveTrip(t);
  }
  if (n && !silent) toast('已上載 ' + n + ' 個預約截圖到雲端');
  return n;
}
async function applyLocalBookingFile(o, file) {
  if (!file) return o;
  const prepared = await prepareBookingScreenshot(file);
  const fileId = o.id + '_file';
  const t = (typeof trip !== 'undefined' ? trip : null) || (typeof getTrip === 'function' ? getTrip() : null);
  if (o.fileId && t && t.id) await deleteBookingFsFile(t.id, o.fileId);
  if (o.fileStoragePath) await deleteBookingCloudFile(o.fileStoragePath);
  await idbPut(fileId, prepared.blob, prepared.mime);
  o.fileId = fileId;
  o.fileName = prepared.fileName;
  o.fileMime = prepared.mime;
  o.fileSize = prepared.size;
  o.fileFsSynced = false;
  o.fileCloudAt = 0;
  o.fileStoragePath = '';
  o.fileDownloadURL = '';
  return o;
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
  document.getElementById('dayCard').innerHTML = `
    <div class="day-head">
      <div>
        <div class="day-date"><span class="dow">${dowOf(d)}</span><span class="num">${dayNum(d)}</span><span class="mon">${monOf(d)}</span></div>
        <div class="day-title">Day ${i + 1} ${escH(d.title || '')}</div>
        ${d.route ? `<div class="day-route">✓ ${escH(d.route)}</div>` : ''}
      </div>
      <div class="sticker bob" style="width:112px;height:112px;flex:none;margin-top:-6px">${stkHTML(dayDecorKey(trip, d, i))}</div>
    </div>
    ${d.hotel ? `<a class="hotel" href="${gmap(d.hq || d.hotel)}" target="_blank" rel="noopener">${ic('bed')}<span>${escH(d.hotel)}</span>${ic('pin')}</a>` : ''}
    <div class="sec-title">活動安排 <span style="font-size:.8rem;color:var(--soft);font-weight:500">（可新增／編輯／拖動）</span></div>
    <div id="actList"></div>
    <div class="add-row" style="margin-top:10px">
      <button class="btn" id="addActBtn" style="flex:1">＋ 新增活動</button>
    </div>
    <button class="ghost stk-btn" id="stkOpen">${isBangkokTrip(trip) ? '🐶 選擇狗貼紙' : '🐾 選擇貼紙'}</button>
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
      <div class="act-main">
        <div class="tm">${escH(it.time)}${it.remind ? '<span class="bell">🔔</span>' : ''}</div>
        <div class="tx">${escH(it.text)}</div>
        ${it.must ? '<div class="act-tags"><span class="must">必去</span></div>' : ''}
        ${metaBits.length ? `<div class="meta">${escH(metaBits.join(' · '))}</div>` : ''}
      </div>
      <div class="act-side">
      ${it.q ? mapLink(it.q) : '<span class="map-ph"></span>'}
      <button class="del act-del" aria-label="刪除">×</button>
      <div class="act-mv">
        <button class="up" aria-label="上移">↑</button>
        <button class="down" aria-label="下移">↓</button>
      </div>
      </div>`;
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

/* ---------- countdown (startDate + departTime) ---------- */
function refreshDepartTarget() {
  return tripDepartMs(trip);
}
let target = refreshDepartTarget();
const tripEnd = new Date(trip.endDate + 'T23:59:59').getTime();
function renderCdFoot() {
  const d = pd(trip.startDate);
  const tm = normDepartTime(trip.departTime);
  const timeBit = tm ? `<span class="ft-time">${tm}</span>` : '';
  $('cdFoot').innerHTML = `<span class="ft-lab">出發</span><span class="ft-num">${d.getFullYear()}</span><span class="ft-u">年</span><span class="ft-num">${d.getMonth() + 1}</span><span class="ft-u">月</span><span class="ft-num">${d.getDate()}</span><span class="ft-u">日</span>${timeBit}<span class="ft-dow">週${'日一二三四五六'[d.getDay()]}</span>`;
  document.title = `${trip.title}｜${trip.startDate.slice(5).replace('-', '/')}–${trip.endDate.slice(5).replace('-', '/')}`;
}
renderCdFoot();
function tick() {
  target = refreshDepartTarget();
  const now = Date.now(), diff = target - now;
  const cd = $('cd'), bar = $('bar'), plane = $('plane'), lab = $('cdLabel');
  if (diff <= 0) {
    if (now > tripEnd) { lab.textContent = trip.title; cd.textContent = '旅程已完成 🎉'; bar.style.width = '100%'; plane.style.left = '100%'; return; }
    const total = Math.max(1, tripEnd - target), pct = Math.min(100, (now - target) / total * 100);
    lab.textContent = '旅程進行中'; cd.innerHTML = `Day ${Math.floor((now - target) / 864e5) + 1}<span class="u">/ ${days.length} 日</span>`;
    bar.style.width = pct + '%'; plane.style.left = pct + '%'; return;
  }
  lab.textContent = '距離出發還有';
  const dd = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5), m = Math.floor(diff % 36e5 / 6e4);
  cd.innerHTML = `${dd}<span class="u">天</span>${h}<span class="u">小時</span>${m}<span class="u">分</span>`;
  const win = 30 * 864e5;
  const pct = Math.min(95, Math.max(3, (now - (target - win)) / win * 100));
  bar.style.width = pct + '%'; plane.style.left = pct + '%';
}
tick(); setInterval(tick, 1000);

/* ---------- tabs / nav ---------- */
const navEl = document.getElementById('nav');
if (navEl) navEl.classList.add('nav-dense');
document.querySelectorAll('#nav button').forEach(b => b.onclick = () => {
  document.querySelectorAll('#nav button').forEach(x => x.classList.toggle('active', x === b));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === b.dataset.v));
  if (b.dataset.v === 'v-members' && typeof renderMembers === 'function') renderMembers();
  if (b.dataset.v === 'v-budget' && typeof renderBudget === 'function') renderBudget();
  window.scrollTo({ top: 0 });
});
/* page decorations — Kyushu: decor cats; Bangkok: dogs only (tabs 預算/購物/準備/預約) */
const pageImg = (src, alt='') => `<img src="${src}" alt="${alt}" draggable="false">`;
function applyPageDecor(t) {
  const dogMode = isBangkokTrip(t);
  const top = $('stk-top');
  if (top) {
    if (dogMode) {
      top.innerHTML = `<div style="position:absolute;left:0;top:6px;width:64px;height:64px">${pageImg('assets/stickers/pets/sticker-dog-white-tan.png','白啡狗')}</div><div style="position:absolute;right:0;top:0;width:70px;height:70px">${pageImg('assets/stickers/pets/sticker-dog-chocolate.png','朱古力狗')}</div>`;
    } else {
      top.innerHTML = `<div style="position:absolute;left:0;top:6px;width:64px;height:64px">${pageImg('assets/stickers/sticker-jp-02.png','粉花')}</div><div style="position:absolute;right:0;top:0;width:70px;height:70px">${pageImg('assets/stickers/sticker-jp-01.png','啡虎斑')}</div>`;
    }
  }
  const stkShop = $('stk-shop');
  if (stkShop) stkShop.innerHTML = dogMode
    ? pageImg('assets/stickers/sticker-dog-02.png','哥基')
    : pageImg('assets/decor/deco-cat-shop.png','購物貓');
  const stkTodo = $('stk-todo');
  if (stkTodo) stkTodo.innerHTML = dogMode
    ? pageImg('assets/stickers/pets/sticker-dog-chaimaru.png','柴丸')
    : pageImg('assets/decor/deco-cat-prep.png','準備貓');
  const stkBud = $('stk-bud');
  if (stkBud) stkBud.innerHTML = dogMode
    ? pageImg('assets/stickers/pets/sticker-dog-white-tan-pose2.png','白啡狗')
    : pageImg('assets/decor/deco-cat-budget.png','預算貓');
  const pgirl = $('pgirl'); if (pgirl) pgirl.innerHTML = '<img src="assets/shop/shop-girl.png" alt="">';
  const pboy = $('pboy'); if (pboy) pboy.innerHTML = '<img src="assets/shop/shop-boy.png" alt="">';
}
applyPageDecor(typeof trip !== 'undefined' ? trip : getTrip());


/* ---------- members (Station 8a, local only) ---------- */
function memAvatarHTML(m, cls) {
  const av = (m && m.avatar) ? String(m.avatar) : '';
  if (av) return `<span class="mem-av ${cls || ''}"><img src="${escH(av)}" alt=""></span>`;
  return `<span class="mem-av ${cls || ''}">👤</span>`;
}
function partyAvHTML(m) {
  const av = (m && m.avatar) ? String(m.avatar) : '';
  if (av) return `<span class="party-av"><img src="${escH(av)}" alt=""></span>`;
  return `<span class="party-av">👤</span>`;
}
function shrinkAvatarFile(file) {
  return new Promise(res => {
    if (!file) return res('');
    const fr = new FileReader();
    fr.onerror = () => res('');
    fr.onload = () => {
      const im = new Image();
      im.onerror = () => res('');
      im.onload = () => {
        const max = 200;
        const k = Math.min(1, max / Math.max(im.width, im.height));
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(im.width * k));
        c.height = Math.max(1, Math.round(im.height * k));
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
        res(c.toDataURL('image/jpeg', 0.85));
      };
      im.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}
function getTripMembers() {
  const t = (typeof trip !== 'undefined' && trip) ? trip : getTrip();
  if (!t.members) t.members = [];
  return t.members;
}
function saveMembers() {
  const t = (typeof trip !== 'undefined' && trip) ? trip : getTrip();
  t.members = getTripMembers();
  saveTrip(t);
  if (typeof renderBookings === 'function') renderBookings();
  if (typeof renderBudget === 'function') renderBudget();
  renderPartyCard();
}
let memEdit = null, memPendingAv = '';
function fillAvPresets(selected) {
  const box = $('memAvPresets');
  if (!box) return;
  box.innerHTML = DEFAULT_AVATARS.map(a => {
    const on = selected === a.src ? ' on' : '';
    return `<button type="button" class="${on.trim()}" data-src="${escH(a.src)}" title="${escH(a.label)}" aria-label="${escH(a.label)}"><img src="${escH(a.src)}" alt=""></button>`;
  }).join('');
  box.querySelectorAll('button').forEach(b => b.onclick = () => {
    memPendingAv = b.dataset.src;
    const prev = $('memAvPreview');
    if (prev) prev.innerHTML = `<img src="${escH(memPendingAv)}" alt="">`;
    box.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    $('memAvNote').textContent = '已揀預設頭像';
  });
}
function setMemPreview(src) {
  const prev = $('memAvPreview');
  if (!prev) return;
  if (src) prev.innerHTML = `<img src="${escH(src)}" alt="">`;
  else prev.textContent = '👤';
}
function openMemModal(edit) {
  memEdit = edit;
  memPendingAv = edit && edit.avatar ? edit.avatar : (isBangkokTrip(getTrip()) ? DEFAULT_AVATARS[4].src : DEFAULT_AVATARS[0].src);
  $('memTitle').textContent = edit ? '編輯成員' : '新增成員';
  $('memName').value = edit ? (edit.name || '') : '';
  $('memRole').value = edit ? (edit.role || '') : '旅客';
  if ($('memDesc')) $('memDesc').value = edit ? (edit.description || '') : '';
  $('memErr').textContent = '';
  $('memAvNote').textContent = '約 200px，自動縮細';
  setMemPreview(memPendingAv);
  fillAvPresets(memPendingAv);
  $('memModal').hidden = false;
  setTimeout(() => $('memName').focus(), 50);
}
function renderMembers() {
  const list = $('memList');
  if (!list) return;
  const mem = getTripMembers();
  const t = getTrip();
  if (!mem.length) {
    list.innerHTML = '<div class="card empty">未有成員。撳上面「新增成員」開始。</div>';
  } else {
    list.innerHTML = '';
    mem.forEach((m, idx) => {
      const card = document.createElement('div');
      card.className = 'card mem-card';
      card.innerHTML = `${memAvatarHTML(m)}<div class="mem-info"><b></b><span class="mem-desc"></span></div><div class="mem-acts"><button type="button" class="item-more" aria-label="更多">⋮</button></div>`;
      card.querySelector('b').textContent = m.name || '未命名';
      const descEl = card.querySelector('.mem-desc');
      if (m.description) {
        descEl.textContent = m.description;
        descEl.classList.remove('is-role');
      } else {
        descEl.textContent = m.role || '旅客';
        descEl.classList.add('is-role');
      }
      const deleteMember = () => {
        confirmAsk(`刪除成員「${m.name || ''}」？相關預約分攤同支出付款人會一併清走標記。`, () => {
          const id = m.id;
          t.members = (t.members || []).filter(x => x.id !== id);
          const b = t.bookings;
          if (b && !Array.isArray(b)) {
            [...(b.flights || []), ...(b.stays || [])].forEach(x => {
              if (Array.isArray(x.memberIds)) x.memberIds = x.memberIds.filter(mid => mid !== id);
            });
          }
          (t.budget && t.budget.expenses || []).forEach(e => { if (e.payerId === id) e.payerId = ''; });
          if (typeof trip !== 'undefined' && trip && trip.id === t.id) {
            trip.members = t.members;
            if (trip.budget) trip.budget.expenses = t.budget.expenses;
          }
          saveMembers();
          renderMembers();
        });
      };
      card.querySelector('.item-more').onclick = e => {
        e.stopPropagation();
        const wrap = card.querySelector('.mem-acts');
        const open = wrap.querySelector('.item-menu');
        document.querySelectorAll('.item-menu').forEach(x => x.remove());
        if (open) return;
        const menu = document.createElement('div'); menu.className = 'item-menu';
        menu.innerHTML = '<button type="button" data-a="edit">編輯</button><button type="button" data-a="del" class="danger">刪除</button>';
        menu.onclick = ev => {
          ev.stopPropagation();
          const a = ev.target.dataset.a; menu.remove();
          if (a === 'edit') openMemModal(m);
          if (a === 'del') deleteMember();
        };
        wrap.appendChild(menu);
      };
      list.appendChild(card);
    });
  }
  renderSettlement();
  let hint = $('memHint');
  if (hint) {
    if (isBangkokTrip(t) && mem.length < 2) {
      hint.textContent = '曼谷預約係 2 人；Outlook 未見第二位姓名，可喺呢度自行加「旅伴」。';
    } else {
      hint.textContent = '頭像可以上載或者揀預設貓／狗。';
    }
  }
}
function renderSettlement() {
  const card = $('settleCard'), box = $('settleList');
  if (!card || !box) return;
  const mem = getTripMembers();
  const t = (typeof trip !== 'undefined' && trip) ? trip : getTrip();
  let live = (t.budget && t.budget.expenses) || [];
  try { if (typeof exps !== 'undefined' && Array.isArray(exps)) live = exps; } catch (e) {}
  if (mem.length < 2 || !live.length) { card.hidden = true; return; }
  const withPayer = live.filter(e => e && e.payerId && +e.hkd > 0);
  if (!withPayer.length) { card.hidden = true; return; }
  const total = withPayer.reduce((s, e) => s + (+e.hkd || 0), 0);
  const fair = total / mem.length;
  card.hidden = false;
  box.innerHTML = mem.map(m => {
    const paid = withPayer.filter(e => e.payerId === m.id).reduce((s, e) => s + (+e.hkd || 0), 0);
    const diff = paid - fair;
    let tag;
    if (Math.abs(diff) < 0.5) tag = '<span class="ok">剛好</span>';
    else if (diff > 0) tag = `<span class="ok">應收 $${Math.round(diff)}</span>`;
    else tag = `<span class="due">應付 $${Math.round(-diff)}</span>`;
    return `<div class="settle-row"><span>${escH(m.name)} · 已付 $${Math.round(paid)}／應付 $${Math.round(fair)}</span>${tag}</div>`;
  }).join('') + `<p class="hint" style="margin:8px 0 0">只計有標付款人嘅支出，總計 HKD $${Math.round(total)}</p>`;
}
if ($('memAddBtn')) $('memAddBtn').onclick = () => openMemModal(null);
if ($('memCancel')) $('memCancel').onclick = () => { $('memModal').hidden = true; };
if ($('memAvFile')) $('memAvFile').onchange = async e => {
  const f = e.target.files[0]; e.target.value = '';
  if (!f) return;
  const data = await shrinkAvatarFile(f);
  if (!data) { $('memAvNote').textContent = '讀唔到張相'; return; }
  memPendingAv = data;
  setMemPreview(data);
  $('memAvNote').textContent = '已上載並縮細';
  fillAvPresets('');
};
if ($('memSave')) $('memSave').onclick = () => {
  const name = $('memName').value.trim();
  if (!name) { $('memErr').textContent = '請填名稱'; return; }
  const role = $('memRole').value.trim() || '旅客';
  const description = ($('memDesc') ? $('memDesc').value.trim() : '') || '';
  const t = getTrip();
  if (!Array.isArray(t.members)) t.members = [];
  if (memEdit) {
    memEdit.name = name; memEdit.role = role; memEdit.description = description;
    memEdit.avatar = memPendingAv || memEdit.avatar || '';
  } else {
    t.members.push({ id: uid('m'), name, role, description, avatar: memPendingAv || DEFAULT_AVATARS[0].src });
  }
  if (typeof trip !== 'undefined' && trip && trip.id === t.id) trip.members = t.members;
  saveMembers();
  $('memModal').hidden = true;
  renderMembers();
};
function renderPartyCard() {
  if (!$('partyList')) return;
  const tt = getTrip();
  const mem = (tt.members || []).filter(m => m && m.name);
  let pax = 0;
  const bb = tt.bookings;
  if (bb && !Array.isArray(bb)) [...(bb.flights || []), ...(bb.stays || [])].forEach(x => { pax = Math.max(pax, +x.people || 0); });
  if (!pax) pax = mem.length;
  const ps = $('partySub');
  if (ps) ps.textContent = pax ? (`呢個旅程 · ${pax} 人`) : '呢個旅程嘅旅客';
  const pl = $('partyList');
  if (!mem.length && !pax) pl.innerHTML = '<p class="hint" style="margin:0">未有人員——去「成員」分頁新增</p>';
  else {
    const rows = mem.map(m => {
      const sub = m.description || m.role || '旅客';
      const subCls = m.description ? ' style="color:var(--pri);font-weight:600"' : '';
      return `<div class="party-row">${partyAvHTML(m)}<div><b>${escH(m.name)}</b><small${subCls}>${escH(sub)}</small></div></div>`;
    }).join('');
    const extra = (pax > mem.length) ? `<p class="hint" style="margin:8px 0 0">預約顯示共 ${pax} 人（Outlook 未見第二位姓名）</p>` : '';
    pl.innerHTML = rows + extra;
  }
}
if ($('partyGoMem')) $('partyGoMem').onclick = () => {
  const btn = document.querySelector('#nav button[data-v="v-members"]');
  if (btn) btn.click();
};

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
function fillBkMemberPick(edit) {
  const box = $('bkMemberPick');
  if (!box) return;
  const mem = getTripMembers();
  let selected = (edit && Array.isArray(edit.memberIds)) ? edit.memberIds.slice() : [];
  if (!selected.length && edit && edit.guest) {
    const names = String(edit.guest).split(/[、,，]/).map(s => s.trim()).filter(Boolean);
    selected = mem.filter(m => names.includes(m.name)).map(m => m.id);
  }
  if (!selected.length && !edit && mem.length) selected = [mem[0].id];
  if (!mem.length) {
    box.innerHTML = '<p class="hint" style="margin:0">未有成員——去「成員」分頁新增後可喺呢度勾選</p>';
    return;
  }
  box.innerHTML = mem.map(m => {
    const on = selected.includes(m.id);
    const av = m.avatar ? `<span class="chip-av"><img src="${escH(m.avatar)}" alt=""></span>` : '<span class="chip-av">👤</span>';
    return `<label class="mem-chip${on ? ' on' : ''}"><input type="checkbox" value="${escH(m.id)}"${on ? ' checked' : ''}>${av}<span>${escH(m.name)}</span></label>`;
  }).join('');
  const syncPeople = () => {
    const ids = [...box.querySelectorAll('input:checked')].map(i => i.value);
    box.querySelectorAll('.mem-chip').forEach(lab => lab.classList.toggle('on', lab.querySelector('input').checked));
    if (ids.length) $('bkPeople').value = ids.length;
  };
  box.querySelectorAll('input').forEach(inp => inp.onchange = syncPeople);
}
function selectedBkMemberIds() {
  const box = $('bkMemberPick');
  if (!box) return [];
  return [...box.querySelectorAll('input:checked')].map(i => i.value);
}
function guestLabelFromIds(ids) {
  const mem = getTripMembers();
  return ids.map(id => { const m = mem.find(x => x.id === id); return m ? m.name : ''; }).filter(Boolean).join('、');
}
function openBkModal(kind, edit) {
  if (!canEditBookings()) { toast('只有管理員可以新增／編輯預約'); return; }
  bkKind = kind; bkEdit = edit; bkPendingFile = null;
  $('bkTitle').textContent = edit ? (kind === 'flight' ? '編輯機票' : '編輯住宿') : (kind === 'flight' ? '新增機票' : '新增住宿');
  $('bkFlightFields').hidden = kind !== 'flight';
  $('bkStayFields').hidden = kind !== 'stay';
  $('bkErr').textContent = '';
  $('bkFileNote').textContent = edit && bookingHasFile(edit) ? ('已上載' + ((edit.fileFsSynced || edit.fileStoragePath) ? '（已同步雲端）' : '（本機；儲存／同步後上雲）')) : '未上載';
  $('bkNote').value = edit ? (edit.note || edit.meta || '') : '';
  $('bkAmt').value = edit && edit.amount ? edit.amount : '';
  $('bkPeople').value = edit && edit.people ? edit.people : 1;
  fillBkMemberPick(edit);
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
  if (!canEditBookings()) { toast('只有管理員可以上載／更換附件'); return; }
  $('bkFileNote').textContent = '壓縮截圖中…';
  try {
    const prepared = await prepareBookingScreenshot(file);
    bkPendingFile = new File([prepared.blob], prepared.fileName, { type: prepared.mime });
    $('bkFileNote').textContent = '已轉成壓縮截圖約 ' + Math.max(1, Math.round(prepared.size / 1024)) + 'KB（儲存後同步雲端）';
  } catch (e) {
    bkPendingFile = null;
    const msg = (e && e.message) || '壓縮失敗，請改用截圖';
    $('bkFileNote').textContent = msg;
    toast(msg);
  }
}
$('bkFile').onchange = e => { handleBkFile(e.target.files[0]); e.target.value = ''; };
$('bkCam').onchange = e => { handleBkFile(e.target.files[0]); e.target.value = ''; };
$('bkCancel').onclick = () => { $('bkModal').hidden = true; };
$('bkSave').onclick = async () => {
  if (!canEditBookings()) { toast('只有管理員可以儲存預約'); return; }
  let saved = null;
  const wantUpload = !!bkPendingFile;
  if (bkKind === 'flight') {
    const flightNo = $('bkFlightNo').value.trim(), from = $('bkFrom').value.trim().toUpperCase(), to = $('bkTo').value.trim().toUpperCase();
    if (!flightNo || !from || !to) return $('bkErr').textContent = '請填航班編號同機場';
    const memberIds = selectedBkMemberIds();
    const peopleN = memberIds.length ? memberIds.length : Math.max(1, +$('bkPeople').value || 1);
    const o = {
      id: bkEdit ? bkEdit.id : uid('f'),
      flightNo, from, to,
      dep: $('bkDep').value.trim(), arr: $('bkArr').value.trim(),
      date: $('bkDate').value || trip.startDate,
      route: `${from} → ${to}`,
      note: $('bkNote').value.trim(),
      amount: +$('bkAmt').value || 0,
      people: peopleN,
      memberIds,
      guest: guestLabelFromIds(memberIds) || (bkEdit && bkEdit.guest) || '',
      fileId: bkEdit ? (bkEdit.fileId || '') : '',
      fileStoragePath: bkEdit ? (bkEdit.fileStoragePath || '') : '',
      fileDownloadURL: bkEdit ? (bkEdit.fileDownloadURL || '') : '',
      fileName: bkEdit ? (bkEdit.fileName || '') : '',
      fileMime: bkEdit ? (bkEdit.fileMime || '') : '',
      fileSize: bkEdit ? (bkEdit.fileSize || 0) : 0,
      fileFsSynced: bkEdit ? !!bkEdit.fileFsSynced : false,
      fileCloudAt: bkEdit ? (bkEdit.fileCloudAt || 0) : 0
    };
    if (bkPendingFile) {
      try { await applyLocalBookingFile(o, bkPendingFile); }
      catch (e) { return $('bkErr').textContent = (e && e.message) || '附件寫入失敗'; }
    }
    const arr = trip.bookings.flights;
    const ix = arr.findIndex(x => x.id === o.id);
    if (ix >= 0) arr[ix] = o; else arr.push(o);
    saved = o;
  } else {
    const name = $('bkName').value.trim();
    if (!name) return $('bkErr').textContent = '請填酒店名稱';
    const memberIds = selectedBkMemberIds();
    const peopleN = memberIds.length ? memberIds.length : Math.max(1, +$('bkPeople').value || 1);
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
      people: peopleN,
      memberIds,
      guest: guestLabelFromIds(memberIds) || (bkEdit && bkEdit.guest) || '',
      fileId: bkEdit ? (bkEdit.fileId || '') : '',
      fileStoragePath: bkEdit ? (bkEdit.fileStoragePath || '') : '',
      fileDownloadURL: bkEdit ? (bkEdit.fileDownloadURL || '') : '',
      fileName: bkEdit ? (bkEdit.fileName || '') : '',
      fileMime: bkEdit ? (bkEdit.fileMime || '') : '',
      fileSize: bkEdit ? (bkEdit.fileSize || 0) : 0,
      fileFsSynced: bkEdit ? !!bkEdit.fileFsSynced : false,
      fileCloudAt: bkEdit ? (bkEdit.fileCloudAt || 0) : 0
    };
    o.dates = stayDatesLabel(o);
    if (bkPendingFile) {
      try { await applyLocalBookingFile(o, bkPendingFile); }
      catch (e) { return $('bkErr').textContent = (e && e.message) || '附件寫入失敗'; }
    }
    const arr = trip.bookings.stays;
    const ix = arr.findIndex(x => x.id === o.id);
    if (ix >= 0) arr[ix] = o; else arr.push(o);
    saved = o;
  }
  saveTrip(trip); $('bkModal').hidden = true; renderBookings();
  if (wantUpload && saved && cloudUser) {
    void (async () => {
      const ok = await uploadBookingCloudFile(saved);
      if (ok) { saveTrip(trip); renderBookings(); toast('附件截圖已同步到雲端'); }
      else toast('附件已存本機；請保持登入，稍後「立即同步」會再試上雲');
    })();
  }
};

$('addFlight').onclick = () => openBkModal('flight', null);
$('addStay').onclick = () => openBkModal('stay', null);
document.querySelectorAll('#bkTabs .tab').forEach(b => b.onclick = () => {
  document.querySelectorAll('#bkTabs .tab').forEach(x => x.classList.toggle('on', x === b));
  bkFilter = b.dataset.bk; renderBookings();
});
let bkFileObjectUrl = '';
function closeFileView() {
  const M = $('fileViewModal');
  if (M) M.hidden = true;
  const body = $('fileViewBody');
  if (body) body.innerHTML = '';
  if (bkFileObjectUrl) {
    try { URL.revokeObjectURL(bkFileObjectUrl); } catch (e) {}
    bkFileObjectUrl = '';
  }
}
async function openBkFile(entry) {
  const meta = (entry && typeof entry === 'object') ? entry : { fileId: entry || '' };
  const fileId = meta.fileId || '';
  if (!fileId && !meta.fileFsSynced && !meta.fileStoragePath && !meta.fileDownloadURL) return alert('未有上載檔案');

  async function tryLocal() {
    if (!fileId) return null;
    try {
      const b = await idbGet(fileId);
      if (!b || !b.size) return null;
      return b;
    } catch (e) { return null; }
  }
  async function tryCloud() {
    if (!fileId || !fbDb || !cloudUser || !trip || !trip.id) return null;
    try {
      const b = await fetchBookingFsBlob(trip.id, fileId);
      if (!b || !b.size) return null;
      return b;
    } catch (e) {
      console.warn('[fs-file] open', e);
      return null;
    }
  }
  async function tryStorage() {
    if (!BK_USE_STORAGE || !fbStorage || !cloudUser) return null;
    try {
      if (meta.fileStoragePath) {
        const url = await fbStorage.ref().child(meta.fileStoragePath).getDownloadURL();
        const res = await fetch(url);
        if (res.ok) return await res.blob();
      }
    } catch (e) { console.warn('[storage] open path', e); }
    try {
      if (meta.fileDownloadURL) {
        const res = await fetch(meta.fileDownloadURL);
        if (res.ok) return await res.blob();
      }
    } catch (e) { console.warn('[storage] open url', e); }
    return null;
  }

  let blob = await tryLocal();
  let fromCloud = false;
  /* Prefer a decodable image; stale/detached IDB blobs after app update often fail here */
  if (blob) {
    const okImg = await canDecodeBkImage(blob);
    const okPdf = !okImg && (await (async () => {
      try {
        const ab = await blob.slice(0, 5).arrayBuffer();
        return sniffBkMime(new Uint8Array(ab)) === 'application/pdf';
      } catch (e) { return false; }
    })());
    if (!okImg && !okPdf) {
      console.warn('[bkfile] local blob not decodable, trying cloud');
      blob = null;
    }
  }
  if (!blob) {
    blob = await tryCloud();
    fromCloud = !!blob;
  }
  if (!blob) blob = await tryStorage();
  if (!blob) {
    if (!cloudUser) return alert('搵唔到上載檔案。請先登入雲端帳號，再撳「立即同步」。');
    return alert('搵唔到可用附件（本機損毀或雲端未同步）。請喺原本上載嗰部機開啟 App 並「立即同步」，或重新上載截圖。');
  }

  let mime = 'image/jpeg';
  try {
    const norm = await normalizeBkBlob(blob, meta);
    blob = norm.blob;
    mime = norm.mime;
  } catch (e) {
    console.warn('[bkfile] normalize', e);
    mime = String(blob.type || meta.fileMime || 'image/jpeg').toLowerCase();
  }

  if (fileId) {
    try { await idbPut(fileId, blob, mime); } catch (e) {}
    if (fromCloud && meta && typeof meta === 'object') {
      meta.fileFsSynced = true;
      meta.fileMime = mime;
      meta.fileSize = blob.size;
      try { saveTrip(trip); } catch (e) {}
    }
  }

  if (bkFileObjectUrl) { try { URL.revokeObjectURL(bkFileObjectUrl); } catch (e) {} }
  const url = URL.createObjectURL(blob);
  bkFileObjectUrl = url;
  const body = $('fileViewBody');
  const title = $('fileViewTitle');
  if (!body || !$('fileViewModal')) {
    const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.download = meta.fileName || 'booking-file'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 60000);
    return;
  }
  body.innerHTML = '';
  const isImg = mime.startsWith('image/') || /\.(jpe?g|png|gif|webp)$/i.test(meta.fileName || '');
  const isPdf = mime.includes('pdf');
  if (title) title.textContent = isImg ? '睇相片' : (isPdf ? '睇 PDF' : '睇檔案');

  const showFail = (extra) => {
    body.innerHTML = '<p class="hint" style="margin:16px">相片載入失敗' + (extra ? '（' + extra + '）' : '') + '。請試「下載」，或重新上載截圖後再同步。</p>';
  };

  if (isImg) {
    const img = document.createElement('img');
    img.alt = '預約附件';
    img.decoding = 'async';
    img.style.maxWidth = '100%';
    img.style.maxHeight = '58vh';
    let triedBlobUrl = false;
    let triedCloudRepair = false;
    img.onerror = async () => {
      if (!triedBlobUrl) {
        triedBlobUrl = true;
        img.src = url;
        return;
      }
      if (!triedCloudRepair && fileId && cloudUser) {
        triedCloudRepair = true;
        try {
          const cloudBlob = await tryCloud();
          if (cloudBlob && await canDecodeBkImage(cloudBlob)) {
            blob = cloudBlob;
            if (fileId) try { await idbPut(fileId, cloudBlob, 'image/jpeg'); } catch (e) {}
            if (bkFileObjectUrl) { try { URL.revokeObjectURL(bkFileObjectUrl); } catch (e) {} }
            const u2 = URL.createObjectURL(cloudBlob);
            bkFileObjectUrl = u2;
            const dl = $('fileViewDl'); if (dl) dl.href = u2;
            try { img.src = await blobToDataURL(cloudBlob); } catch (e) { img.src = u2; }
            return;
          }
        } catch (e) { console.warn('[bkfile] cloud repair', e); }
      }
      showFail('解碼失敗');
    };
    try {
      if (await canDecodeBkImage(blob)) img.src = await blobToDataURL(blob);
      else img.src = url;
    } catch (e) {
      img.src = url;
    }
    body.appendChild(img);
  } else if (isPdf) {
    const iframe = document.createElement('iframe');
    iframe.src = url; iframe.title = 'PDF 預覽';
    body.appendChild(iframe);
  } else {
    const p = document.createElement('p');
    p.className = 'hint'; p.style.margin = '16px';
    p.textContent = '呢個檔案類型唔能直接預覽，請撳下載或用瀏覽器開啟。';
    body.appendChild(p);
  }
  const dl = $('fileViewDl');
  if (dl) {
    dl.href = url;
    let ext = '';
    if (isPdf) ext = '.pdf';
    else if (mime.includes('png')) ext = '.png';
    else if (mime.includes('webp')) ext = '.webp';
    else if (mime.includes('gif')) ext = '.gif';
    else if (isImg) ext = '.jpg';
    const base = (meta.fileName || 'booking-file').replace(/\\.[^.]+$/, '');
    dl.download = base + ext;
  }
  $('fileViewModal').hidden = false;
}

if ($('fileViewClose')) $('fileViewClose').onclick = () => closeFileView();
if ($('fileViewModal')) $('fileViewModal').addEventListener('click', e => { if (e.target === $('fileViewModal')) closeFileView(); });
if ($('fileViewOpen')) $('fileViewOpen').onclick = () => {
  if (!bkFileObjectUrl) return;
  const w = window.open(bkFileObjectUrl, '_blank');
  if (!w) alert('瀏覽器阻擋咗新分頁，請改用「下載」');
};
function renderBookings() {
  const b = trip.bookings;
  const box = $('bookAll');
  let html = '';
  const allowEdit = canEditBookings();
  const showF = bkFilter === 'all' || bkFilter === 'flight';
  const showS = bkFilter === 'all' || bkFilter === 'stay';
  if (showF) {
    if (!b.flights.length) html += allowEdit ? '<div class="empty">未有機票，撳上面新增</div>' : '<div class="empty">未有機票</div>';
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
        ${bkPeopleNote(f)}
        ${bookingHasFile(f) ? `<button type="button" class="file-badge" data-a="file">已上載截圖 · 撳睇${bookingFileCloudLabel(f)}</button>` : ''}
        <div class="bk-actions">
          ${allowEdit ? '<button class="ghost sm" data-a="edit">編輯</button>' : ''}
          ${bookingHasFile(f) ? `<button class="ghost sm" data-a="file">睇檔案</button>` : ''}
          ${allowEdit ? '<button class="ghost sm danger-text" data-a="del">刪除</button>' : ''}
        </div>
      </div>`;
    });
  }
  if (showS) {
    if (!b.stays.length) html += allowEdit ? '<div class="empty">未有住宿，撳上面新增</div>' : '<div class="empty">未有住宿</div>';
    b.stays.forEach(s => {
      html += `<div class="card" data-id="${escH(s.id)}" data-kind="stay">
        <div class="stay-name">${escH(s.name)}</div>
        <div class="stay-date">${escH(stayDatesLabel(s))}</div>
        <div class="stay-meta">${escH(s.addr || s.meta || s.note || '')}</div>
        <a class="maplink" href="${escH(gmap(s.q || s.name))}" target="_blank" rel="noopener">${ic('pin')}Google 地圖</a>
        ${bkPeopleNote(s, ' style="margin-top:8px"')}
        ${bookingHasFile(s) ? `<button type="button" class="file-badge" data-a="file">已上載截圖 · 撳睇${bookingFileCloudLabel(s)}</button>` : ''}
        <div class="bk-actions">
          ${allowEdit ? '<button class="ghost sm" data-a="edit">編輯</button>' : ''}
          ${bookingHasFile(s) ? `<button class="ghost sm" data-a="file">睇檔案</button>` : ''}
          ${allowEdit ? '<button class="ghost sm danger-text" data-a="del">刪除</button>' : ''}
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
        if (a === 'edit') {
          if (!canEditBookings()) { toast('只有管理員可以編輯預約'); return; }
          openBkModal('stay', s);
        }
        if (a === 'file') openBkFile(s);
        if (a === 'del') {
          if (!canEditBookings()) { toast('只有管理員可以刪除預約'); return; }
          confirmAsk('刪除呢間住宿？', async () => {
            if (s.fileId) await deleteBookingFsFile(trip.id, s.fileId);
            if (s.fileStoragePath) await deleteBookingCloudFile(s.fileStoragePath);
            if (s.fileId) await idbDel(s.fileId);
            trip.bookings.stays = trip.bookings.stays.filter(x => x.id !== id);
            saveTrip(trip); renderBookings();
          });
        }
      } else {
        const f = trip.bookings.flights.find(x => x.id === id);
        if (a === 'edit') {
          if (!canEditBookings()) { toast('只有管理員可以編輯預約'); return; }
          openBkModal('flight', f);
        }
        if (a === 'file') openBkFile(f);
        if (a === 'del') {
          if (!canEditBookings()) { toast('只有管理員可以刪除預約'); return; }
          confirmAsk('刪除呢張機票？', async () => {
            if (f.fileId) await deleteBookingFsFile(trip.id, f.fileId);
            if (f.fileStoragePath) await deleteBookingCloudFile(f.fileStoragePath);
            if (f.fileId) await idbDel(f.fileId);
            trip.bookings.flights = trip.bookings.flights.filter(x => x.id !== id);
            saveTrip(trip); renderBookings();
          });
        }
      }
    });
  });
  updateBookingEditUI();
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
function fillExpPayer(selected) {
  const sel = $('expPayer');
  if (!sel) return;
  const mem = (typeof getTripMembers === 'function') ? getTripMembers() : ((trip && trip.members) || []);
  const cur = selected || sel.value || '';
  sel.innerHTML = '<option value="">付款人（可選）</option>' + mem.map(m =>
    `<option value="${escH(m.id)}"${m.id === cur ? ' selected' : ''}>${escH(m.name)}</option>`
  ).join('');
}
$('expToggle').onclick = () => {
  const p = $('expPanel'); p.hidden = !p.hidden;
  if (!p.hidden) fillExpPayer('');
};
$('expAdd').onclick = () => {
  const a = +$('expAmt').value, cur = $('expCur').value, cat = $('expCat').value;
  if (!(a > 0)) { $('expAmt').focus(); return; }
  const n = $('expName').value.trim() || CATS.find(c => c[0] === cat)[1];
  const payerId = ($('expPayer') && $('expPayer').value) || '';
  exps.unshift({ id: Date.now(), n, a, cur, hkd: cur === 'HKD' ? a : a * rate, cat, payerId });
  saveBudget();
  $('expName').value = ''; $('expAmt').value = ''; if ($('expPayer')) $('expPayer').value = '';
  $('expPanel').hidden = true;
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
    let payerLab = '';
    if (e.payerId && typeof getTripMembers === 'function') {
      const pm = getTripMembers().find(m => m.id === e.payerId);
      if (pm) payerLab = ' · ' + pm.name + '付';
    }
    r.innerHTML = `<div class="cat-ic">${ic(c[2])}</div><div class="exp-m"><div class="exp-n"></div><div class="exp-s">${c[1]}${e.auto ? ' · 自動' : ''}${payerLab ? escH(payerLab) : ''}</div></div><div class="exp-a"><b>${money(e.hkd)}</b><small>${curLab}</small></div>${e.auto ? '' : '<button class="del" aria-label="刪除">×</button>'}`;
    r.querySelector('.exp-n').textContent = e.n;
    const del = r.querySelector('.del');
    if (del) del.onclick = () => { exps = exps.filter(x => x.id !== e.id); saveBudget(); renderBudget(); };
    box.appendChild(r);
  });
  if (typeof renderSettlement === 'function') renderSettlement();
}
fillExpPayer('');
renderBudget();

/* ---------- shop + todo (separate tabs) ---------- */
const SCATS = ['零食', '藥妝', '服飾', '紀念品', '其他'];
let shop = trip.shop || [];
$('spCat').innerHTML = SCATS.map(c => `<option>${c}</option>`).join('');
$('spFilter').onchange = () => renderShop();
let spImgData = '';
let spEdit = null;
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
function resetShopForm() {
  spEdit = null;
  $('spName').value = ''; $('spNote').value = ''; $('spImg').value = '';
  spImgData = '';
  $('spPrev').hidden = true; $('spImgNote').textContent = '可選';
  if ($('spCat').options.length) $('spCat').selectedIndex = 0;
  $('spPri').value = '0';
  $('spAdd').textContent = '加入清單';
  if ($('spCancel')) $('spCancel').hidden = true;
  if ($('spDel')) $('spDel').hidden = true;
}
function openShopEdit(it) {
  document.querySelectorAll('.item-menu').forEach(m => m.remove());
  spEdit = it || null;
  $('spPanel').hidden = false;
  $('spName').value = it ? (it.n || '') : '';
  $('spNote').value = it ? (it.note || '') : '';
  if (it && it.cat) $('spCat').value = it.cat;
  else if ($('spCat').options.length) $('spCat').selectedIndex = 0;
  $('spPri').value = String(it && it.pri != null ? it.pri : 0);
  spImgData = (it && it.img) ? it.img : '';
  $('spPrev').hidden = !spImgData;
  if (spImgData) $('spPrev').src = spImgData;
  $('spImgNote').textContent = spImgData ? '已加相' : '可選';
  $('spAdd').textContent = it ? '儲存修改' : '加入清單';
  if ($('spCancel')) $('spCancel').hidden = !it;
  if ($('spDel')) $('spDel').hidden = !it;
  setTimeout(() => $('spName').focus(), 50);
}
$('spImg').onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  spImgData = await readImg(f);
  $('spPrev').hidden = !spImgData; $('spPrev').src = spImgData;
  $('spImgNote').textContent = spImgData ? '已加相' : '讀取相片失敗';
};
$('spToggle').onclick = () => {
  if ($('spPanel').hidden) openShopEdit(null);
  else { $('spPanel').hidden = true; resetShopForm(); }
};
if ($('spCancel')) $('spCancel').onclick = () => { $('spPanel').hidden = true; resetShopForm(); };
if ($('spDel')) $('spDel').onclick = () => {
  if (!spEdit) return;
  const target = spEdit;
  confirmAsk('刪除呢件購物項目？', () => {
    shop = shop.filter(x => x.id !== target.id);
    saveShop();
    $('spPanel').hidden = true; resetShopForm();
    renderShop();
  });
};
$('spAdd').onclick = () => {
  const n = $('spName').value.trim();
  if (!n) { $('spName').focus(); return; }
  if (spEdit) {
    spEdit.n = n;
    spEdit.note = $('spNote').value.trim();
    spEdit.cat = $('spCat').value;
    spEdit.pri = +$('spPri').value;
    spEdit.img = spImgData || '';
  } else {
    shop.unshift({ id: Date.now(), n, note: $('spNote').value.trim(), cat: $('spCat').value, pri: +$('spPri').value, done: 0, img: spImgData });
  }
  saveShop();
  $('spPanel').hidden = true;
  resetShopForm();
  renderShop();
};
function shopCard(it) {
  const d = document.createElement('div');
  d.className = 'card shop-item' + (it.done ? ' done' : '');
  const priLab = it.pri === 2 ? '必買' : it.pri === 1 ? '重要' : '一般';
  d.innerHTML = `<input type="checkbox" class="chk" ${it.done ? 'checked' : ''} aria-label="已購買">${it.img ? '<img class="thumb" alt="">' : ''}<div class="si-main"><div class="si-name"></div><div class="si-note"></div><div class="tags"><span class="tag t-cat"></span><span class="tag p${it.pri}">${priLab}</span></div></div><div class="item-more-wrap"><button type="button" class="item-more" aria-label="更多">⋮</button></div>`;
  d.querySelector('.si-name').textContent = it.n;
  const nt = d.querySelector('.si-note'); if (it.note) nt.textContent = it.note; else nt.remove();
  d.querySelector('.t-cat').textContent = it.cat;
  if (it.img) d.querySelector('.thumb').src = it.img;
  d.querySelector('.chk').onchange = e => { it.done = e.target.checked ? 1 : 0; saveShop(); renderShop(); };
  d.querySelector('.item-more').onclick = e => {
    e.stopPropagation();
    const wrap = d.querySelector('.item-more-wrap');
    const open = wrap.querySelector('.item-menu');
    document.querySelectorAll('.item-menu').forEach(m => m.remove());
    if (open) return;
    const m = document.createElement('div'); m.className = 'item-menu';
    m.innerHTML = '<button type="button" data-a="edit">編輯</button><button type="button" data-a="del" class="danger">刪除</button>';
    m.onclick = ev => {
      ev.stopPropagation();
      const a = ev.target.dataset.a; m.remove();
      if (a === 'edit') openShopEdit(it);
      if (a === 'del') confirmAsk('刪除呢件購物項目？', () => { shop = shop.filter(x => x.id !== it.id); saveShop(); renderShop(); });
    };
    wrap.appendChild(m);
  };
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
let todoEdit = null;
function saveTodos() { trip.todos = todos; saveTrip(trip); renderTodos(); }
function openTodoEdit(o) {
  document.querySelectorAll('.item-menu').forEach(m => m.remove());
  todoEdit = o;
  if (!$('todoModal')) return;
  $('todoTitle').textContent = '編輯準備事項';
  $('todoEditText').value = o.t || '';
  $('todoEditGroup').value = o.g || 'pre';
  $('todoModal').hidden = false;
  setTimeout(() => $('todoEditText').focus(), 50);
}
function todoRow(o, checked) {
  const i = todos.indexOf(o);
  const r = document.createElement('div');
  r.className = 'todo' + (checked ? ' done' : '');
  r.innerHTML = `<input type="checkbox" id="td${i}" ${checked ? 'checked' : ''}><label for="td${i}"></label><div class="item-more-wrap"><button type="button" class="item-more" aria-label="更多">⋮</button></div>`;
  r.querySelector('label').textContent = o.t;
  r.querySelector('input').onchange = e => { o.d = e.target.checked ? 1 : 0; saveTodos(); };
  r.querySelector('.item-more').onclick = e => {
    e.stopPropagation();
    const wrap = r.querySelector('.item-more-wrap');
    const open = wrap.querySelector('.item-menu');
    document.querySelectorAll('.item-menu').forEach(m => m.remove());
    if (open) return;
    const m = document.createElement('div'); m.className = 'item-menu';
    m.innerHTML = '<button type="button" data-a="edit">編輯</button><button type="button" data-a="del" class="danger">刪除</button>';
    m.onclick = ev => {
      ev.stopPropagation();
      const a = ev.target.dataset.a; m.remove();
      if (a === 'edit') openTodoEdit(o);
      if (a === 'del') confirmAsk('刪除呢項準備事項？', () => {
        const ix = todos.indexOf(o);
        if (ix >= 0) todos.splice(ix, 1);
        saveTodos();
      });
    };
    wrap.appendChild(m);
  };
  return r;
}
function renderTodos() {
  const box = $('todoList'); box.innerHTML = '';
  const groups = ['pre','visa','insurance'];
  groups.forEach(g => {
    const items = todos.filter(o => !o.d && (o.g || 'pre') === g);
    if (!items.length && g !== 'pre') return;
    const h = document.createElement('div'); h.className = 'todo-group'; h.textContent = TODO_GROUPS[g]; box.appendChild(h);
    items.forEach(o => box.appendChild(todoRow(o, false)));
  });
  const doneItems = todos.filter(o => o.d);
  if (doneItems.length) {
    const h = document.createElement('div'); h.className = 'todo-group'; h.textContent = '已完成'; box.appendChild(h);
    doneItems.forEach(o => box.appendChild(todoRow(o, true)));
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
if ($('todoEditCancel')) $('todoEditCancel').onclick = () => { $('todoModal').hidden = true; todoEdit = null; };
if ($('todoEditSave')) $('todoEditSave').onclick = () => {
  if (!todoEdit) return;
  const t = $('todoEditText').value.trim();
  if (!t) { $('todoEditText').focus(); return; }
  todoEdit.t = t;
  todoEdit.g = $('todoEditGroup').value || 'pre';
  $('todoModal').hidden = true; todoEdit = null;
  saveTodos();
};
if ($('todoEditDel')) $('todoEditDel').onclick = () => {
  if (!todoEdit) return;
  const target = todoEdit;
  confirmAsk('刪除呢項準備事項？', () => {
    const ix = todos.indexOf(target);
    if (ix >= 0) todos.splice(ix, 1);
    $('todoModal').hidden = true; todoEdit = null;
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

function applyHideStickers(on) {
  document.body.classList.toggle('hide-stickers', !!on);
  const tog = $('hideStkTog');
  if (tog) {
    tog.setAttribute('aria-pressed', on ? 'true' : 'false');
    tog.classList.toggle('on', !!on);
  }
  setSetting('hideStickers', !!on);
  if (typeof days !== 'undefined' && days[currentDay] && document.getElementById('stkLayer')) {
    renderStickers(days[currentDay]);
  }
}
if ($('hideStkTog')) {
  $('hideStkTog').onclick = () => applyHideStickers($('hideStkTog').getAttribute('aria-pressed') !== 'true');
  applyHideStickers(!!getSetting('hideStickers', false));
}

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
  if (typeof renderPartyCard === 'function') renderPartyCard();
}

/* CSS for toggle.on */
(function(){ const s=document.createElement('style'); s.textContent=`.toggle{width:48px;height:28px;border-radius:99px;border:3px solid var(--line);background:#ddd;position:relative;flex:none}.toggle::after{content:'';position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.2)}.toggle.on,.toggle[aria-pressed="true"]{background:var(--pri);border-color:var(--pri)}.toggle.on::after,.toggle[aria-pressed="true"]::after{left:22px}`; document.head.appendChild(s); })();


/* ---------- backup export/import (Station 5) ---------- */
const LAST_EXPORT_KEY = 'travel_app_last_export';
const BACKUP_DISMISS_KEY = 'travel_app_backup_dismiss';
const BACKUP_DAY_MS = 86400000;

function collectBookingFileIds(app) {
  const ids = new Set();
  (app && app.trips || []).forEach(t => {
    const b = t.bookings;
    if (!b) return;
    const lists = Array.isArray(b) ? [b] : [b.flights || [], b.stays || [], b.other || []];
    lists.forEach(list => (list || []).forEach(x => { if (x && x.fileId) ids.add(x.fileId); }));
  });
  return [...ids];
}
function blobToB64Meta(blob) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => {
      const url = String(r.result || '');
      const i = url.indexOf(',');
      res({ mime: blob.type || 'application/octet-stream', data: i >= 0 ? url.slice(i + 1) : url });
    };
    r.onerror = () => rej(r.error || new Error('read fail'));
    r.readAsDataURL(blob);
  });
}
function b64MetaToBlob(meta) {
  const bin = atob(meta.data || '');
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: (meta && meta.mime) || 'application/octet-stream' });
}
function markBackupExported() {
  try { localStorage.setItem(LAST_EXPORT_KEY, String(Date.now())); } catch (e) {}
  try { localStorage.removeItem(BACKUP_DISMISS_KEY); } catch (e) {}
  const b = $('backupBanner'); if (b) b.hidden = true;
}
function dismissBackupBanner() {
  try { localStorage.setItem(BACKUP_DISMISS_KEY, String(Date.now())); } catch (e) {}
  const b = $('backupBanner'); if (b) b.hidden = true;
}
function checkBackupReminder() {
  const b = $('backupBanner');
  if (!b) return;
  let last = 0, dismissedAt = 0;
  try { last = +localStorage.getItem(LAST_EXPORT_KEY) || 0; } catch (e) {}
  try { dismissedAt = +localStorage.getItem(BACKUP_DISMISS_KEY) || 0; } catch (e) {}
  if (dismissedAt && (Date.now() - dismissedAt) < 14 * BACKUP_DAY_MS) { b.hidden = true; return; }
  const overdue = !last || (Date.now() - last > 14 * BACKUP_DAY_MS);
  b.hidden = !overdue;
}
function goBackupSettings() {
  const setBtn = document.querySelector('#nav button[data-v="v-set"]');
  if (setBtn) setBtn.click();
  else {
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'v-set'));
  }
  const card = $('btnExport');
  if (card) setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
}
async function exportBackup() {
  try {
    toast('匯出緊…', 5000);
    const files = {};
    for (const id of collectBookingFileIds(APP)) {
      try {
        const blob = await idbGet(id);
        if (blob) files[id] = await blobToB64Meta(blob);
      } catch (e) { /* skip missing attachment */ }
    }
    const payload = Object.assign({}, APP, { _files: files, _exportedAt: new Date().toISOString() });
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'travel-backup-' + isoDate(new Date()).replace(/-/g, '') + '.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    markBackupExported();
    toast('已匯出備份' + (Object.keys(files).length ? '（含 ' + Object.keys(files).length + ' 個附件）' : ''));
  } catch (e) {
    toast('匯出失敗，請稍後再試');
  }
}
function stripBackupExtras(data) {
  const copy = Object.assign({}, data);
  delete copy._files;
  delete copy._exportedAt;
  return copy;
}
function validateBackup(data) {
  return !!(data && data.version === 1 && Array.isArray(data.trips) && data.trips.length);
}
function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch (e) {
      toast('匯入失敗：檔案格式唔啱');
      return;
    }
    if (!validateBackup(data)) {
      toast('匯入失敗：檔案格式唔啱，未改動現有資料');
      return;
    }
    confirmAsk('匯入會覆蓋而家手機入面全部旅程資料，確定？', () => {
      (async () => {
        try {
          const files = data._files && typeof data._files === 'object' ? data._files : {};
          const next = stripBackupExtras(data);
          next.seedVersion = Math.max(next.seedVersion || 1, SEED_VER);
          APP = next;
          if (!persist()) throw new Error('persist failed');
          for (const id of Object.keys(files)) {
            const meta = files[id];
            if (!meta || !meta.data) continue;
            await idbPut(id, b64MetaToBlob(meta));
          }
          toast('已匯入，重新整理緊…');
          setTimeout(() => location.reload(), 600);
        } catch (e) {
          toast('匯入失敗：儲存空間唔夠或寫入錯誤');
        }
      })();
    });
  };
  reader.onerror = () => toast('匯入失敗：讀唔到檔案');
  reader.readAsText(file);
}
if ($('btnExport')) $('btnExport').onclick = () => { exportBackup(); };
if ($('btnImport')) $('btnImport').onclick = () => $('importFile') && $('importFile').click();
if ($('importFile')) $('importFile').onchange = e => { importBackupFile(e.target.files[0]); e.target.value = ''; };
if ($('btnLoadDemo')) $('btnLoadDemo').onclick = () => {
  confirmAsk('載入示範資料（九州＋曼谷）會覆蓋本機全部旅程，確定？', () => {
    fetch('travel-backup-20261030.json').then(r => r.json()).then(data => {
      if (!validateBackup(data)) throw new Error('bad');
      APP = stripBackupExtras(data); persist();
      toast('已載入示範資料');
      setTimeout(() => location.reload(), 600);
    }).catch(() => toast('載入失敗，請稍後再試'));
  });
};
if ($('backupBannerGo')) $('backupBannerGo').onclick = () => { goBackupSettings(); };
if ($('backupBannerDismiss')) $('backupBannerDismiss').onclick = () => dismissBackupBanner();
checkBackupReminder();

showDay(0);



/* ---------- Station 8b: Firebase Auth + Firestore sync ---------- */
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyArozM-ttFNOyfLVrKT2HWLBmDqyYx8y-A',
  authDomain: 'my-journey-d5690.firebaseapp.com',
  projectId: 'my-journey-d5690',
  storageBucket: 'my-journey-d5690.firebasestorage.app',
  messagingSenderId: '135594737576',
  appId: '1:135594737576:web:edeaae35dd4eb21b58679d'
};

let fbApp = null, fbAuth = null, fbDb = null, fbStorage = null;

function cloudDebugLine() {
  try {
    const trips = (APP && APP.trips) || [];
    const maxAt = trips.reduce((m, t) => Math.max(m, tripUpdatedAt(t)), 0);
    const active = trips.find(t => t.id === (APP && APP.activeTripId)) || trips[0];
    const at = active ? tripUpdatedAt(active) : 0;
    const fmt = (n) => n ? new Date(n).toLocaleString('zh-HK', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '—';
    const shopN = active && Array.isArray(active.shop) ? active.shop.length : '?';
    const todoN = active && Array.isArray(active.todos) ? active.todos.length : '?';
    const bud = active && active.budget ? (+active.budget.total || 0) : '?';
    return `本機 ${active ? active.id : '—'} updatedAt ${fmt(at)}（最大 ${fmt(maxAt)}）· 購物${shopN}/準備${todoN}/預算${bud}`;
  } catch (e) { return ''; }
}

function cloudSetStatus(msg) {
  cloudLastStatus = msg || '';
  const el = $('cloudSyncLine');
  if (el) {
    const dbg = cloudDebugLine();
    el.textContent = '同步狀態：' + cloudLastStatus + (dbg ? '\n' + dbg : '');
    el.style.whiteSpace = 'pre-wrap';
  }
  const sub = $('cloudSub');
  if (sub && cloudUser) sub.textContent = '已登入 · 改行程會自動同步（約 1.5 秒後）';
  else if (sub && !cloudUser) sub.textContent = '登入後同步旅程到 Firebase（本機資料唔會自動清）';
}

function cloudAuthError(err) {
  const c = (err && err.code) || '';
  if (c === 'auth/email-already-in-use') return '呢個電郵已經註冊過，請直接登入';
  if (c === 'auth/invalid-email') return '電郵格式唔啱';
  if (c === 'auth/weak-password') return '密碼至少要 6 個字元';
  if (c === 'auth/user-not-found' || c === 'auth/wrong-password' || c === 'auth/invalid-credential') return '電郵或密碼唔啱';
  if (c === 'auth/too-many-requests') return '嘗試太多次，請稍後再試';
  if (c === 'auth/popup-closed-by-user') return '已取消 Google 登入';
  if (c === 'auth/unauthorized-domain') return '網域未授權：請喺 Firebase Authentication → Settings → Authorized domains 加 chaniomeng-alt.github.io';
  if (c === 'auth/operation-not-allowed') return '呢個登入方式未喺 Console 開啟';
  if (c === 'auth/network-request-failed') return '網絡錯誤，請檢查連線';
  return (err && err.message) ? String(err.message).slice(0, 120) : '登入失敗';
}

function initFirebase() {
  if (typeof firebase === 'undefined' || !firebase.initializeApp) {
    cloudSetStatus('Firebase SDK 未載入（離線或被擋）');
    return false;
  }
  try {
    fbApp = firebase.apps && firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    try { fbStorage = firebase.storage(); } catch (e) { console.warn('[storage] init', e); fbStorage = null; }
    try { fbDb.enablePersistence({ synchronizeTabs: true }).catch(() => {}); } catch (e) {}
    cloudReady = true;
    fbAuth.onAuthStateChanged(async (user) => {
      cloudUser = user || null;
      renderCloudAccountUI();
      if (user) {
        cloudSetStatus('登入成功，合併雲端中…');
        try {
          await syncWithCloud();
          cloudSetStatus('已同步 ' + new Date().toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
          try { await flushPendingBookingUploads(true); } catch (e2) { console.warn('[storage] flush', e2); }
        } catch (e) {
          console.warn('[cloud] merge', e);
          cloudSetStatus('合併失敗：' + ((e && e.message) || '請稍後「立即同步」'));
        }
      } else {
        cloudSetStatus('未登入');
      }
    });
    return true;
  } catch (e) {
    console.warn('[cloud] init', e);
    cloudSetStatus('初始化失敗');
    return false;
  }
}

const FORCE_SYNC_EMAIL = 'chaniomeng33@outlook.com';
function canForceCloudSync() {
  const email = ((cloudUser && cloudUser.email) || '').trim().toLowerCase();
  return email === FORCE_SYNC_EMAIL;
}
/** 預約編輯權：未登入＝本機照舊可改；已登入則只有 FORCE_SYNC_EMAIL 可新增／編輯／刪除／換附件。其他人只可睇附件。 */
function canEditBookings() {
  if (!cloudUser) return true;
  return canForceCloudSync();
}
function updateBookingEditUI() {
  const allow = canEditBookings();
  const addF = $('addFlight'), addS = $('addStay');
  if (addF) addF.hidden = !allow;
  if (addS) addS.hidden = !allow;
  const addRow = addF && addF.parentElement;
  if (addRow && addRow.classList && addRow.classList.contains('add-row')) addRow.hidden = !allow;
  const pick = document.querySelector('#bkModal .photo-pick');
  if (pick) pick.hidden = !allow;
}

function renderCloudAccountUI() {
  const out = $('cloudSignedOut'), inn = $('cloudSignedIn'), line = $('cloudUserLine');
  if (!out || !inn) return;
  if (cloudUser) {
    out.hidden = true;
    inn.hidden = false;
    if (line) line.textContent = '已登入：' + (cloudUser.email || cloudUser.uid);
  } else {
    out.hidden = false;
    inn.hidden = true;
  }
  const allowForce = !!cloudUser && canForceCloudSync();
  const pushBtn = $('btnCloudForcePush');
  const pullBtn = $('btnCloudForcePull');
  const forceHint = $('cloudForceHint');
  if (pushBtn) pushBtn.hidden = !allowForce;
  if (pullBtn) pullBtn.hidden = !allowForce;
  if (forceHint) {
    if (allowForce) {
      forceHint.innerHTML = '正常用「立即同步」。若兩部唔齊：喺<strong>最齊嗰部</strong>撳「強制上載本機」，再喺另一部撳「強制下載雲端」。強制掣只開放畀 ' + FORCE_SYNC_EMAIL + '。預約附件會轉成壓縮截圖同步到 Firestore，換機可睇。';
    } else if (cloudUser) {
      forceHint.textContent = '正常用「立即同步」。強制上載／下載只開放畀管理員帳號。預約附件會以壓縮截圖同步雲端。';
    } else {
      forceHint.textContent = '正常用「立即同步」。登入後預約附件會轉成壓縮截圖同步雲端（每檔約 ≤700KB）。';
    }
  }
  renderCompanionUI();
  try { updateBookingEditUI(); if (typeof renderBookings === 'function') renderBookings(); } catch (e) {}
  cloudSetStatus(cloudLastStatus);
}

function tripUpdatedAt(t) {
  const n = t && +t.updatedAt;
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function cloudDocUpdatedAt(cdata) {
  if (!cdata) return 0;
  return +cdata.updatedAt || tripUpdatedAt(cdata.trip) || 0;
}

function scheduleCloudSync() {
  if (!cloudReady || !cloudUser || cloudApplyingRemote) return;
  if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => { pushLocalToCloud().catch(e => console.warn('[cloud] push', e)); }, 1500);
}

async function fetchMyCloudTrips(uid) {
  const map = new Map();
  const q1 = await fbDb.collection('trips').where('ownerUid', '==', uid).get();
  q1.forEach(doc => map.set(doc.id, doc.data()));
  try {
    const q2 = await fbDb.collection('trips').where('memberUids', 'array-contains', uid).get();
    q2.forEach(doc => { if (!map.has(doc.id)) map.set(doc.id, doc.data()); });
  } catch (e) {
    console.warn('[cloud] member query', e);
  }
  return map;
}

function adoptRemoteTrip(remoteTrip, remoteAt, cloudMeta) {
  const copy = Object.assign({}, remoteTrip, { updatedAt: remoteAt || tripUpdatedAt(remoteTrip) || Date.now() });
  if (cloudMeta) {
    if (cloudMeta.ownerUid) copy.cloudOwnerUid = cloudMeta.ownerUid;
    if (Array.isArray(cloudMeta.memberUids)) copy.memberUids = cloudMeta.memberUids.slice();
  }
  return copy;
}

/**
 * Full sync: pull cloud → compare trip.updatedAt only → wholesale replace (no array richness merge).
 * Remote newer → replace local trip data entirely (shop/prep/expenses/days included).
 * Local newer → upload entirely. Equal stamp → keep local. Missing-on-cloud synced trips → drop locally.
 * Used on login and 「立即同步」.
 */
async function syncWithCloud() {
  if (!fbDb || !cloudUser) return;
  const uid = cloudUser.uid;
  const cloudMap = await fetchMyCloudTrips(uid);
  let changed = false;
  cloudApplyingRemote = true;
  try {
    const localById = new Map((APP.trips || []).map(t => [t.id, t]));

    cloudMap.forEach((cdata, id) => {
      const remoteTrip = cdata && cdata.trip;
      if (!remoteTrip || !remoteTrip.id) return;
      const remoteAt = cloudDocUpdatedAt(cdata);
      const local = localById.get(id);
      if (!local) {
        const adopted = adoptRemoteTrip(remoteTrip, remoteAt, cdata);
        APP.trips.push(adopted);
        localById.set(id, adopted);
        changed = true;
        return;
      }
      const localAt = tripUpdatedAt(local);
      /* Strict timestamp: never prefer longer/richer arrays (that resurrects deletes). */
      if (remoteAt > localAt) {
        const i = APP.trips.findIndex(t => t.id === id);
        if (i >= 0) {
          APP.trips[i] = adoptRemoteTrip(remoteTrip, remoteAt, cdata);
          localById.set(id, APP.trips[i]);
          changed = true;
        }
      }
      /* localAt >= remoteAt → keep local; push will upload if local newer */
    });

    /* Whole-trip delete: previously synced local trip gone from cloud → drop local */
    const cloudIds = new Set(cloudMap.keys());
    const kept = [];
    for (const t of (APP.trips || [])) {
      if (cloudIds.has(t.id)) { kept.push(t); continue; }
      const wasSynced = !!(t.cloudOwnerUid || (Array.isArray(t.memberUids) && t.memberUids.length));
      if (wasSynced) {
        changed = true;
        continue; /* deleted on another device */
      }
      kept.push(t); /* never uploaded yet — keep for upload */
    }
    APP.trips = sortTripsByStartDate(kept);
    if (APP.trips.map(t => t && t.id).join('\0') !== kept.map(t => t && t.id).join('\0')) changed = true;

    /* Meta: NEVER overwrite local activeTripId here — that bounced Bangkok → Kyushu after enterTrip reload
       when cloud user doc still had the older trip. Only forcePullFromCloud may adopt cloud activeTripId.
       Settings still merge if cloud user doc has them. */
    try {
      const uref = await fbDb.collection('users').doc(uid).get();
      if (uref.exists) {
        const u = uref.data() || {};
        if (u.settings && typeof u.settings === 'object' && (+u.updatedAt || 0) > 0) {
          APP.settings = Object.assign({}, APP.settings || {}, u.settings);
        }
      }
    } catch (e) { console.warn('[cloud] user meta', e); }

    if (!APP.trips.some(t => t.id === APP.activeTripId) && APP.trips[0]) {
      APP.activeTripId = APP.trips[0].id;
      changed = true;
    }

    store.set(APP_KEY, APP);

    await pushLocalToCloud(true, cloudMap);
  } finally {
    cloudApplyingRemote = false;
  }

  if (changed) {
    toast('已同雲端合併旅程');
    /* trip/shop/days are const/let aliases to old objects — reload so UI & next upload use wholesale remote */
    try { location.reload(); } catch (e) {}
  }
}

async function forcePullFromCloud() {
  if (!fbDb || !cloudUser) return;
  cloudSetStatus('強制下載中…');
  const uid = cloudUser.uid;
  const cloudMap = await fetchMyCloudTrips(uid);
  cloudApplyingRemote = true;
  try {
    const next = [];
    cloudMap.forEach((cdata, id) => {
      const remoteTrip = cdata && cdata.trip;
      if (!remoteTrip || !remoteTrip.id) return;
      next.push(adoptRemoteTrip(remoteTrip, cloudDocUpdatedAt(cdata), cdata));
    });
    if (!next.length) {
      cloudSetStatus('雲端未有旅程可下載');
      toast('雲端未有旅程');
      return;
    }
    APP.trips = sortTripsByStartDate(next);
    try {
      const uref = await fbDb.collection('users').doc(uid).get();
      if (uref.exists) {
        const u = uref.data() || {};
        if (u.activeTripId && APP.trips.some(t => t.id === u.activeTripId)) APP.activeTripId = u.activeTripId;
        if (u.settings && typeof u.settings === 'object') APP.settings = Object.assign({}, APP.settings || {}, u.settings);
      }
    } catch (e) {}
    if (!APP.trips.some(t => t.id === APP.activeTripId)) APP.activeTripId = APP.trips[0].id;
    store.set(APP_KEY, APP);
    cloudSetStatus('已強制下載 ' + new Date().toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    toast('已用雲端覆蓋本機');
    try { location.reload(); } catch (e) {}
  } finally {
    cloudApplyingRemote = false;
  }
}

async function cloudDeleteTrip(id) {
  if (!fbDb || !cloudUser || !id) return;
  try {
    await fbDb.collection('trips').doc(id).delete();
  } catch (e) {
    console.warn('[cloud] delete trip', e);
  }
}

async function pushLocalToCloud(fromMerge, prefetchedCloudMap, forceUpload) {
  if (!fbDb || !cloudUser || cloudSyncing) return;
  cloudSyncing = true;
  if (!fromMerge) cloudSetStatus(forceUpload ? '強制上載中…' : '上載中…');
  try {
    const uid = cloudUser.uid;
    const now = Date.now();
    const cloudMap = prefetchedCloudMap || await fetchMyCloudTrips(uid);
    const batchLimit = 400;
    let batch = fbDb.batch();
    let n = 0;
    let uploaded = 0;
    const commitBatch = async () => {
      if (n === 0) return;
      await batch.commit();
      batch = fbDb.batch();
      n = 0;
    };

    for (const t of (APP.trips || [])) {
      if (!t.updatedAt) t.updatedAt = now;
      const ownerUid = t.cloudOwnerUid || uid;
      let memberUids = Array.isArray(t.memberUids) ? t.memberUids.slice() : [];
      if (!memberUids.includes(ownerUid)) memberUids.unshift(ownerUid);
      if (ownerUid === uid && !memberUids.includes(uid)) memberUids.push(uid);
      memberUids = [...new Set(memberUids.filter(Boolean))];
      t.cloudOwnerUid = ownerUid;
      t.memberUids = memberUids;

      const existing = cloudMap.get(t.id);
      const cloudAt = cloudDocUpdatedAt(existing);
      let localAt = tripUpdatedAt(t);
      if (forceUpload) {
        /* recover from poisoned stamps on other devices: bump then overwrite cloud */
        localAt = now;
        t.updatedAt = now;
      } else {
        if (existing && cloudAt > localAt) {
          /* cloud strictly newer — do not overwrite */
          continue;
        }
        if (existing && cloudAt === localAt) {
          /* same stamp → already consistent; skip (no richness tie-break) */
          continue;
        }
      }

      const payload = {
        ownerUid,
        memberUids,
        updatedAt: t.updatedAt || now,
        trip: sanitizeTripForCloud(t)
      };
      const ref = fbDb.collection('trips').doc(t.id);
      /* wholesale trip replace — no merge that could leave stale nested fields */
      batch.set(ref, payload);
      n++;
      uploaded++;
      if (n >= batchLimit) await commitBatch();
    }

    const uref = fbDb.collection('users').doc(uid);
    batch.set(uref, {
      email: cloudUser.email || '',
      activeTripId: APP.activeTripId,
      settings: APP.settings || {},
      updatedAt: now,
      tripIds: (APP.trips || []).map(t => t.id)
    }, { merge: true });
    n++;
    await commitBatch();

    store.set(APP_KEY, APP);
    cloudSetStatus('已同步 ' + new Date().toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      + (uploaded ? `（上載 ${uploaded} 程）` : '（已同雲端一致）'));
    if (!fromMerge) toast(uploaded ? '已同步到雲端' : '已同雲端一致');
    try { await flushPendingBookingUploads(true); } catch (e2) { console.warn('[storage] flush after push', e2); }
  } catch (e) {
    console.warn('[cloud] push fail', e);
    const msg = (e && e.code === 'permission-denied')
      ? '權限被拒：請喺 Firestore Rules 貼上仓库 firestore.rules'
      : ('同步失敗：' + ((e && e.message) || '未知錯誤'));
    cloudSetStatus(msg);
    if (!fromMerge) toast(msg);
    throw e;
  } finally {
    cloudSyncing = false;
  }
}

async function cloudSignIn() {
  const email = ($('cloudEmail') && $('cloudEmail').value || '').trim();
  const pass = ($('cloudPass') && $('cloudPass').value) || '';
  if (!email || !pass) { toast('請填電郵同密碼'); return; }
  try {
    await fbAuth.signInWithEmailAndPassword(email, pass);
    toast('登入成功');
  } catch (e) { toast(cloudAuthError(e)); }
}
/* Public sign-up disabled in UI. Owner creates companions via secondary Auth app (keeps owner session). */
async function cloudSignUp() {
  toast('公開註冊已關閉，請用管理員產生嘅帳號登入');
}
async function cloudGoogle() {
  toast('公開註冊／Google 自助開戶已關閉');
}

function isOwnerAccount() {
  const email = ((cloudUser && cloudUser.email) || '').trim().toLowerCase();
  return email === FORCE_SYNC_EMAIL;
}

function genTempPassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  let s = '';
  for (let i = 0; i < 10; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s + '!';
}

function renderCompanionUI() {
  const box = $('companionBox');
  if (!box) return;
  box.hidden = !(cloudUser && isOwnerAccount());
}

async function createCompanionAccount() {
  if (!cloudUser || !isOwnerAccount()) { toast('只有管理員可以產生同伴帳號'); return; }
  if (!fbAuth || typeof firebase === 'undefined') { toast('Firebase 未就緒'); return; }
  const email = ($('companionEmail') && $('companionEmail').value || '').trim().toLowerCase();
  if (!email || !email.includes('@')) { toast('請填有效同伴電郵'); return; }
  const trips = (APP.trips || []).slice();
  if (!trips.length) { toast('本機未有旅程可以分享'); return; }
  const tempPass = genTempPassword();
  const btn = $('btnCreateCompanion');
  if (btn) btn.disabled = true;
  let secondary = null;
  try {
    cloudSetStatus('產生同伴帳號中…');
    secondary = (firebase.apps || []).find(a => a.name === 'CompanionFactory')
      || firebase.initializeApp(FIREBASE_CONFIG, 'CompanionFactory');
    const secondaryAuth = secondary.auth();
    const cred = await secondaryAuth.createUserWithEmailAndPassword(email, tempPass);
    const newUid = cred.user.uid;
    try { await secondaryAuth.signOut(); } catch (e) {}

    const now = Date.now();
    const ownerUid = cloudUser.uid;
    const addedTitles = [];
    for (const t of trips) {
      // Share every local trip (owner account owns the APP trips).
      const tripOwner = t.cloudOwnerUid || ownerUid;
      let members = Array.isArray(t.memberUids) ? t.memberUids.slice() : [];
      if (!members.includes(tripOwner)) members.unshift(tripOwner);
      if (!members.includes(ownerUid)) members.push(ownerUid);
      if (!members.includes(newUid)) members.push(newUid);
      t.cloudOwnerUid = tripOwner;
      t.memberUids = [...new Set(members.filter(Boolean))];
      t.updatedAt = now;
      addedTitles.push(t.title || t.id);
    }
    store.set(APP_KEY, APP);
    await pushLocalToCloud(false, null, true);

    const line = $('companionCredLine');
    const res = $('companionResult');
    const text = '電郵：' + email + '\n臨時密碼：' + tempPass + '\n已加入全部旅程：' + addedTitles.join('、');
    if (line) line.textContent = text;
    if (res) res.hidden = false;
    window.__companionCopyText = email + '\n' + tempPass;
    toast('已產生同伴帳號，請即複製密碼');
    cloudSetStatus('同伴帳號已建立');
    if ($('companionEmail')) $('companionEmail').value = '';
  } catch (e) {
    console.warn('[cloud] createCompanion', e);
    try { if (secondary) await secondary.auth().signOut(); } catch (e2) {}
    toast(cloudAuthError(e));
    cloudSetStatus('產生同伴失敗');
  } finally {
    if (btn) btn.disabled = false;
  }
}
async function cloudSignOut() {
  try {
    if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
    await fbAuth.signOut();
    toast('已登出（本機資料仍保留）');
  } catch (e) { toast('登出失敗'); }
}

function wireCloudUI() {
  if ($('btnCloudSignIn')) $('btnCloudSignIn').onclick = () => cloudSignIn();
  if ($('btnCloudSignUp')) $('btnCloudSignUp').onclick = () => cloudSignUp();
  if ($('btnCloudGoogle')) $('btnCloudGoogle').onclick = () => cloudGoogle();
  if ($('btnCloudSignOut')) $('btnCloudSignOut').onclick = () => cloudSignOut();
  if ($('btnCreateCompanion')) $('btnCreateCompanion').onclick = () => createCompanionAccount();
  if ($('btnCopyCompanion')) $('btnCopyCompanion').onclick = async () => {
    const t = window.__companionCopyText || (($('companionCredLine') && $('companionCredLine').textContent) || '');
    try {
      await navigator.clipboard.writeText(t);
      toast('已複製');
    } catch (e) {
      toast('複製失敗，請長按文字手動複製');
    }
  };
  if ($('btnCloudSyncNow')) $('btnCloudSyncNow').onclick = () => {
    if (!cloudUser) { toast('請先登入'); return; }
    cloudSetStatus('同步中…');
    syncWithCloud()
      .then(() => {
        cloudSetStatus('已同步 ' + new Date().toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      })
      .catch(e => {
        console.warn('[cloud] sync now', e);
        cloudSetStatus('同步失敗：' + ((e && e.message) || '請稍後再試'));
      });
  };
  if ($('btnCloudForcePush')) $('btnCloudForcePush').onclick = () => {
    if (!cloudUser) { toast('請先登入'); return; }
    if (!canForceCloudSync()) { toast('強制上載只開放畀管理員帳號'); return; }
    confirmAsk('用呢部手機嘅旅程強制蓋過雲端？另一部之後請「強制下載雲端」。', () => {
      cloudSetStatus('強制上載中…');
      pushLocalToCloud(false, null, true)
        .then(() => toast('已強制上載本機'))
        .catch(e => console.warn('[cloud] force push', e));
    });
  };
  if ($('btnCloudForcePull')) $('btnCloudForcePull').onclick = () => {
    if (!cloudUser) { toast('請先登入'); return; }
    if (!canForceCloudSync()) { toast('強制下載只開放畀管理員帳號'); return; }
    confirmAsk('用雲端覆蓋呢部手機嘅旅程？本機較新嘅改動會冇。', () => {
      forcePullFromCloud().catch(e => {
        console.warn('[cloud] force pull', e);
        cloudSetStatus('強制下載失敗：' + ((e && e.message) || '請稍後再試'));
      });
    });
  };
  renderCloudAccountUI();
}

wireCloudUI();
initFirebase();


/* ---------- Station 6: PWA service worker ---------- */
function registerTravelSW() {
  if (!('serviceWorker' in navigator)) return;
  const showUpdate = (worker) => {
    const ban = document.getElementById('swUpdateBanner');
    const btn = document.getElementById('swUpdateReload');
    if (!ban || !btn || !worker) return;
    ban.hidden = false;
    btn.onclick = () => {
      try { worker.postMessage({ type: 'SKIP_WAITING' }); } catch (e) {}
    };
  };
  navigator.serviceWorker.register('./sw.js').then(reg => {
    if (reg.waiting) showUpdate(reg.waiting);
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      if (!nw) return;
      nw.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdate(reg.waiting || nw);
        }
      });
    });
    try { setInterval(() => { try { reg.update(); } catch (e) {} }, 60 * 60 * 1000); } catch (e) {}
  }).catch(() => {});
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    location.reload();
  });
}
if (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  registerTravelSW();
}
