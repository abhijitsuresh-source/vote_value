/* Vote Value Lok Sabha: shared language support.
   Each language lives in lang/<code>.js and is loaded only when chosen.
   English below is the source text. Any key missing from a language falls back to English.
   Names of states and constituencies, and all numbers, are not translated. */
(function (w) {
  'use strict';
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/[^\/]*$/, '');
  var LANGS = [
    ['en', 'English', 'ltr'], ['hi', 'हिन्दी', 'ltr'], ['bn', 'বাংলা', 'ltr'], ['mr', 'मराठी', 'ltr'],
    ['te', 'తెలుగు', 'ltr'], ['ta', 'தமிழ்', 'ltr'], ['gu', 'ગુજરાતી', 'ltr'], ['ur', 'اردو', 'rtl'],
    ['kn', 'ಕನ್ನಡ', 'ltr'], ['or', 'ଓଡ଼ିଆ', 'ltr'], ['ml', 'മലയാളം', 'ltr'], ['pa', 'ਪੰਜਾਬੀ', 'ltr'],
    ['as', 'অসমীয়া', 'ltr']
  ];
  var FONTS = {
    hi: 'Noto Sans Devanagari', mr: 'Noto Sans Devanagari', bn: 'Noto Sans Bengali', as: 'Noto Sans Bengali',
    te: 'Noto Sans Telugu', ta: 'Noto Sans Tamil', gu: 'Noto Sans Gujarati', kn: 'Noto Sans Kannada',
    or: 'Noto Sans Oriya', ml: 'Noto Sans Malayalam', pa: 'Noto Sans Gurmukhi', ur: 'Noto Nastaliq Urdu'
  };
  var LINKS = {
    eci: 'https://www.eci.gov.in/general-election-to-loksabha-2024-statistical-reports',
    dh: 'https://www.deccanherald.com/elections/india/bjp-registers-first-victory-as-surat-candidate-mukesh-dalal-wins-unopposed-2988832',
    ph13: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2019889',
    ph4: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/may/doc2024511336401.pdf',
    ph5: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/may/doc2024525338401.pdf',
    ph6: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2021393',
    ph7: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/may/doc2024528338801.pdf',
    dm: 'https://projects.datameet.org/maps/parliamentary-constituencies/',
    prs: 'https://prsindia.org/billtrack/the-delimitation-bill-2026',
    scroll: 'https://scroll.in/latest/1097370/cabinet-clears-delimitation-bill-with-50-seat-increase-for-all-states-freeze-till-2051-reports',
    logical: 'https://thelogicalindian.com/cabinet-clears-delimitation-bill-135490/'
  };

  var EN = {
    /* shared */
    site: 'Vote Value Lok Sabha',
    langLabel: 'Language',
    lakh: 'lakh',
    times: '{n} times',
    sep: ', ',
    back: '← Back to the map',
    below: 'Below average',
    above: 'Above average',
    leg05: '0.5 or less',
    leg1: '1.00 = national average',
    leg2: '2 or more',
    cutoff: '» bar cut off at {n}',
    vv: 'vote value',
    ofN: '{r} of {n}',
    vs: 'vs',
    srcLbl: 'Source:',
    srcsLbl: 'Sources:',
    eci: 'Election Commission of India, General Election 2024 statistical reports',
    eci24: 'Election Commission of India, 2024',
    dh: 'Deccan Herald report',
    ph13: 'phases 1 to 3',
    phN: 'phase {n}',
    srcElec: 'Electors per constituency taken from the ECI phase-wise annexures on PIB:',
    mapOut: 'Map outlines: {dmLink}, 2019 boundaries.',
    src: '{srcLbl} {eciLink}.',
    srcFull: '{srcLbl} {eciLink}. {srcElec} {phLinks}. {mapOut}',
    listNote: '{thE} · {thV}. {srcLbl} {eci24Link}.',
    stDescFull: '{stDesc} {stColor}',
    rankNote: '1 is the most valuable vote',
    noteH: 'How the number is worked out',
    stH: 'Vote value by state and union territory',
    stDesc: 'State vote value = national average electors per seat divided by the state’s average electors per seat. Seats in brackets. Highest first.',
    stColor: 'Orange is above the national average, blue is below, grey is level.',
    stLabel: 'State or union territory',
    thE: 'Electors',
    thV: 'Vote value',
    thR: 'Rank',
    thC: 'Constituency',

    /* home */
    hTitle: 'One Person, One Vote, One Value?',
    hLede: 'Every Indian adult gets one vote, but under the current delimitation that vote does not carry the same weight. Each of the 543 Lok Sabha seats sends one MP, whether 58,000 or 38 lakh voters stand behind them. The more voters share an MP, the less your single vote counts. This map colours every constituency by what one vote is worth there.',
    cta: 'Check the value of your vote',
    navPop: 'Delimitation based purely on population',
    navFifty: 'If every state got 50% more seats',
    chip1: 'average electors per MP',
    chip2: 'voters behind the largest seat, {name}',
    chip3: 'voters behind the smallest seat, {name}',
    chip4: 'a vote in the smallest seat vs the largest',
    mapH: 'Vote value by constituency',
    pinHint: 'Hover a constituency for its vote value. Tap or click one to pin it here.',
    pinText: '{e} electors share one MP. Vote value {v}, rank {r} of 543.',
    pinBtn: 'See the full breakdown',
    tipE: '{e} electors',
    tipRank: 'Rank {r} of 543',
    mostH: 'Most valuable votes',
    leastH: 'Least valuable votes',
    note1: '<b>Vote value</b> = average electors per seat in India divided by electors in the seat. 1.00 is the national average. Above 1, fewer voters share the MP, so each vote counts for more. Below 1, more voters share the MP. Rank 1 is the seat where one vote counts most.',
    note2: '{srcsLbl} {eciLink}; constituency electors from the ECI phase-wise annexures published through PIB ({phLinks}). They exclude service electors. <span class="tag">Surat</span> is approximate (about 17.67 lakh, from a {dhLink}). Outer Manipur is the sum of its two polling phases. Map outlines: {dmLink}.',
    note3: 'Assam’s seats were redrawn in 2023, so its shapes are the older outlines matched to the nearest new seat, and small seats such as Lakshadweep or the Delhi and Mumbai seats are hard to see at this size. Use the lists and the checker for those. This measures how many voters share one MP, not turnout or an MP’s performance.',

    /* checker */
    tCheck: 'Check your vote value',
    chH1: 'What is your vote worth?',
    chLede: 'Choose your state, then your constituency. Under the current delimitation, the answer is not 1.00 for everyone.',
    csLabel: 'Lok Sabha constituency',
    tMap: 'Map and details',
    tBars: 'State graph',
    tTable: 'State table',
    tStates: 'All states',
    tAll: 'All 543 seats',
    vApprox: '(approximate electors)',
    vAbove: 'One vote here counts {p}% above the national average.',
    vBelow: 'One vote here counts {p}% below the national average.',
    vAt: 'One vote here counts the same as the national average.',
    vCmp: 'About <b>{e}</b> voters share one MP. Your vote is worth {x} times a vote in {max}, where the most voters share one MP. A vote in {min}, where the fewest do, is worth {y} times yours.',
    f1: '1 in {n}',
    f1s: 'your share of your MP',
    f2s: 'rank, 1 is the most valuable vote',
    f3s: 'average electors per seat in India',
    f4s: '{s} average vote value (seats: {n})',
    mapPH: 'Constituency map and details',
    mapNote: 'The outlined seat is your constituency. Seats in the same state are coloured by vote value. Click another seat to switch to it.',
    mapNoteAs: 'Assam’s seats were redrawn in 2023, so these are older outlines matched to the nearest new seat.',
    nLab: 'Location in India',
    dApprox: 'Approximate figure',
    dNat1: 'National average is 1.00',
    dDev: 'Electors vs national average',
    dAvgIs: 'Average is {n}',
    dRank: 'National rank',
    dWorse: 'Seats where a vote is worth less',
    dWorseS: 'out of the other 542',
    dSeatsIn: 'Seats in {s}',
    dStRank: 'Rank within state',
    dFew: 'Fewest voters in state',
    dMost: 'Most voters in state',
    dElecs: '{e} electors',
    dStAvg: 'State average electors per seat',
    dNatIs: 'National average is {n}',
    dStVV: 'State vote value',
    dStR2: 'State rank among states and UTs',
    dShare: 'Share of seats vs electors',
    dShareS: 'of all Lok Sabha seats vs all electors',
    sbH: 'Constituencies in {s}',
    sbDesc: 'Electors per constituency, fewest voters first. Value on the right is electors and vote value. Click a bar to switch to that seat.',
    sbNat: 'National average {n}',
    sbSt: '{s} average {n}',
    tblH: 'Same state, side by side',
    fTot: 'State total (seats: {n})',
    fAvg: 'State average per seat',
    wH: 'How {s}’s number is worked out',
    w1: 'Total electors in {s}: <b>{t}</b>. Seats: {n}.',
    w2: 'State average: {t} ÷ {n} = <b>{m}</b> electors per seat.',
    w3: 'National average: {t} ÷ {n} = <b>{m}</b> electors per seat.',
    w4: 'State vote value: {a} ÷ {b} = <b>{v}</b>.',
    wMulti: 'This is the average vote value of a voter in {s}. Each seat’s value counts once per voter, so larger seats weigh more. It is not the plain average of the seat values in the table, which would be {x} here.',
    wOne: '{s} has one seat, so the state figure is that seat’s vote value.',
    stsH: 'States and union territories compared',
    allH: 'All 543 constituencies, fewest voters to most',
    cFew: '{c} (fewest voters)',
    cMost: '{c} (most voters)',
    cAvg: 'national average {n}',

    /* scenario pages */
    sNavFifty: 'See the 50% increase scenario',
    sNavPop: 'See delimitation based purely on population',
    popH: 'Delimitation Based Purely on Population',
    popLede: 'Here, delimitation is done purely on today’s population. The Lok Sabha grows from 543 to 850 seats, the ceiling in the delimitation bills, and the seats are shared among states and union territories in proportion to their electors. Seats inside each state are drawn to the same size, so a vote is worth about the same everywhere.',
    fifH: 'If Every State Got 50% More Seats',
    fifLede: 'The revised proposal cleared by the Union Cabinet on 27 November 2026 raises every state’s Lok Sabha seats by 50% and freezes each state’s share of seats until 2051. Seats inside each state are drawn on population, so every seat in a state has about the same number of voters. Differences between states stay as they are today.',
    sMapH: 'Vote value on the new seat counts',
    sSrc: 'Today’s 543 constituency outlines are shown because new boundaries do not exist yet. Each outline takes the colour of its state or union territory, since seats within a state would be drawn to a similar size. {srcLbl} {eci24Link}.',
    sPinHint: 'Hover a state for its vote value. Tap or click to pin it here.',
    sPin: 'Seats now: {n}; in this scenario: {k}. {per} electors per seat. Vote value {v}, against {v0} today.',
    sTip: 'Seats {n} → {k} ({d})',
    sTipToday: 'Today {v}',
    sChip1: 'Lok Sabha seats, now and in this scenario',
    sChip2: 'average electors per seat (today {t})',
    sChip3: 'highest state vote value, {s}',
    sChip4: 'lowest state vote value, {s}',
    thNow: 'Seats now',
    thScn: 'Seats in scenario',
    thPer: 'Electors per seat',
    thV0: 'Vote value today',
    thVs: 'Vote value in scenario',
    india: 'India',
    popNote1: '<b>Seats per state</b> = the state’s share of all electors in India × 850, rounded by the largest-remainder method, with at least one seat for every state and union territory. The 815 and 35 split between states and union territories in the bills is not applied, because this scenario follows population alone. Seats within a state are assumed to be equal in size.',
    fifNote1: '<b>Seats per state</b> = current seats × 1.5, with halves rounded up, which reproduces the southern-state figures the Centre gave in April (Tamil Nadu 59, Karnataka 42, Andhra Pradesh 38, Kerala 30, Telangana 26). This gives the total shown above. Reports on the proposal put the ceiling at 850 seats, up to 815 from states and up to 35 from union territories. Seats within a state are assumed to be equal in size.',
    sNote2: '<b>Vote value</b> = average electors per seat in India in this scenario ÷ average electors per seat in the state. 1.00 is the national average. Electors are the 2024 electoral rolls from the ECI, the latest count of voters available.',
    prs: 'PRS Legislative Research, The Delimitation Bill, 2026',
    scroll: 'Scroll.in, 27 November 2026',
    logical: 'The Logical Indian, 27 November 2026',
    sNote3: '{srcsLbl} {prsLink}; {scrollLink}; {logicalLink}. This is an illustration, not an official seat allocation. No state-wise numbers are in the bills.'
  };

  var CSS =
    '.langbar{display:flex;justify-content:flex-end;align-items:center;gap:8px;margin:0 0 14px}' +
    '.langbar select{font:500 14px var(--body);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:8px 12px;min-height:40px;cursor:pointer}' +
    '.langbar select:focus-visible{outline:3px solid var(--accent);outline-offset:2px}' +
    '.langbar label{font-size:18px;line-height:1}' +
    'html.i18n-x body{line-height:1.75}' +
    'html.i18n-x h1{letter-spacing:0;line-height:1.3}' +
    'html.i18n-x h2,html.i18n-x h3{letter-spacing:0;text-transform:none;font-size:15px;line-height:1.5}' +
    'html.i18n-x .chip b,html.i18n-x .big{line-height:1.3}' +
    'html[lang=ur] body{line-height:2.05}' +
    'html[lang=ur] h1{line-height:1.6}' +
    'html[dir=rtl] th{text-align:right}' +
    'html[dir=rtl] th.n,html[dir=rtl] td.n{text-align:left}' +
    'html[dir=rtl] .big span{margin-left:0;margin-right:8px}' +
    'html[dir=rtl] dl.det dd{text-align:left}' +
    'html[dir=rtl] svg,html[dir=rtl] .legend,html[dir=rtl] #tip{direction:ltr}' +
    'html[dir=rtl] #tip b,html[dir=rtl] #tip div{direction:rtl}';

  var packs = { en: EN }, loading = {}, sel = null, listeners = [], titleFn = null;
  var I = { lang: 'en', LANGS: LANGS, LINKS: LINKS };

  function raw(k) {
    var P = packs[I.lang], v = P && P[k];
    if (v == null) v = EN[k];
    return v == null ? k : v;
  }
  function a(h, txt) { return '<a href="' + h + '" target="_blank" rel="noopener">' + txt + '</a>'; }
  function t(k, p) {
    var s = raw(k), guard = 0;
    while (guard++ < 4 && /\{\w+\}/.test(s)) {
      s = s.replace(/\{(\w+)\}/g, function (m, n) {
        if (p && Object.prototype.hasOwnProperty.call(p, n)) return p[n];
        if (n === 'eciLink') return a(LINKS.eci, raw('eci'));
        if (n === 'eci24Link') return a(LINKS.eci, raw('eci24'));
        if (n === 'dhLink') return a(LINKS.dh, raw('dh'));
        if (n === 'dmLink') return a(LINKS.dm, 'DataMeet');
        if (n === 'prsLink') return a(LINKS.prs, raw('prs'));
        if (n === 'scrollLink') return a(LINKS.scroll, raw('scroll'));
        if (n === 'logicalLink') return a(LINKS.logical, raw('logical'));
        if (n === 'phLinks') {
          var out = [a(LINKS.ph13, raw('ph13'))];
          [4, 5, 6, 7].forEach(function (i) { out.push(a(LINKS['ph' + i], raw('phN').replace('{n}', i))); });
          return out.join(raw('sep'));
        }
        var r = (packs[I.lang] && packs[I.lang][n]);
        if (r == null) r = EN[n];
        return r != null ? r : m;
      });
    }
    return s;
  }
  function qs() { return I.lang === 'en' ? '' : '&lang=' + I.lang; }
  function dirOf(c) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === c) return LANGS[i][2]; return 'ltr'; }

  function loadFont(c) {
    var f = FONTS[c], h = document.documentElement;
    if (!f) { h.style.removeProperty('--sf'); return; }
    h.style.setProperty('--sf', "'" + f + "'");
    var id = 'font-' + f.replace(/ /g, '-');
    if (!document.getElementById(id)) {
      var l = document.createElement('link');
      l.id = id; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=' + f.replace(/ /g, '+') + ':wght@400;500;600;700&display=swap';
      document.head.appendChild(l);
    }
  }
  function urlSync() {
    try {
      var u = new URL(location.href);
      if (I.lang === 'en') u.searchParams.delete('lang'); else u.searchParams.set('lang', I.lang);
      history.replaceState(null, '', u.toString());
    } catch (e) { }
  }
  function apply() {
    var h = document.documentElement;
    h.lang = I.lang; h.dir = dirOf(I.lang);
    h.classList.toggle('i18n-x', I.lang !== 'en');
    loadFont(I.lang);
    document.querySelectorAll('[data-i18n]').forEach(function (e) { e.textContent = t(e.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (e) { e.innerHTML = t(e.getAttribute('data-i18n-html')); });
    document.querySelectorAll('a[data-page]').forEach(function (e) {
      e.setAttribute('href', e.getAttribute('data-page') + (I.lang === 'en' ? '' : '?lang=' + I.lang));
    });
    if (sel) { sel.value = I.lang; sel.setAttribute('aria-label', t('langLabel')); }
    if (titleFn) document.title = titleFn(t);
    listeners.forEach(function (f) { f(); });
  }
  function load(c, ok, bad) {
    if (loading[c]) { loading[c].push([ok, bad]); return; }
    loading[c] = [[ok, bad]];
    var s = document.createElement('script');
    s.src = BASE + 'lang/' + c + '.js';
    s.onload = function () { var q = loading[c]; delete loading[c]; q.forEach(function (x) { x[0](); }); };
    s.onerror = function () { var q = loading[c]; delete loading[c]; q.forEach(function (x) { x[1](); }); };
    document.head.appendChild(s);
  }
  function set(c) {
    if (!packs[c] && !LANGS.some(function (l) { return l[0] === c; })) c = 'en';
    function go() { I.lang = c; try { localStorage.setItem('vv-lang', c); } catch (e) { } urlSync(); apply(); }
    if (packs[c]) go();
    else load(c, go, function () { c = 'en'; go(); });
  }

  I.t = t; I.raw = raw; I.qs = qs; I.set = set;
  I.add = function (code, pack) { packs[code] = pack; };
  I.onApply = function (f) { listeners.push(f); };
  I.init = function (cfg) {
    cfg = cfg || {};
    titleFn = cfg.title || null;
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    sel = document.getElementById(cfg.select || 'lang');
    if (sel) {
      sel.innerHTML = LANGS.map(function (l) { return '<option value="' + l[0] + '" lang="' + l[0] + '">' + l[1] + '</option>'; }).join('');
      sel.addEventListener('change', function () { set(sel.value); });
    }
    var want = null;
    try { want = new URLSearchParams(location.search).get('lang'); } catch (e) { }
    if (!want) { try { want = localStorage.getItem('vv-lang'); } catch (e) { } }
    if (titleFn) document.title = titleFn(t);
    if (want && want !== 'en') set(want); else { I.lang = 'en'; if (sel) { sel.value = 'en'; sel.setAttribute('aria-label', t('langLabel')); } apply(); }
  };
  w.I18N = I;
})(window);
