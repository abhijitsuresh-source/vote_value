/* Vote Value i18n. English catalog lives here; each other language is lang/<code>.js (sets VVT.<code>={...}).
   Missing keys fall back to English. Markup: [id]text[/] = link from LINKS, <b> allowed. */
(function(){
var LANGS=[['en','English'],['hi','हिन्दी']];
var U='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/may/';
var LINKS={eci:'https://www.eci.gov.in/general-election-to-loksabha-2024-statistical-reports',p13:'https://pib.gov.in/PressReleasePage.aspx?PRID=2019889',p4:U+'doc2024511336401.pdf',p5:U+'doc2024525338401.pdf',p6:'https://pib.gov.in/PressReleasePage.aspx?PRID=2021393',p7:U+'doc2024528338801.pdf',dm:'https://projects.datameet.org/maps/parliamentary-constituencies/',dh:'https://www.deccanherald.com/elections/india/bjp-registers-first-victory-as-surat-candidate-mukesh-dalal-wins-unopposed-2988832',prs:'https://prsindia.org/billtrack/the-delimitation-bill-2026',scroll:'https://scroll.in/latest/1097370/cabinet-clears-delimitation-bill-with-50-seat-increase-for-all-states-freeze-till-2051-reports',logical:'https://thelogicalindian.com/cabinet-clears-delimitation-bill-135490/'};
var EN={
back:'← Back to the map',below:'Below average',above:'Above average',leg_lo:'0.5 or less',leg_mid:'1.00 = national average',leg_hi:'2 or more',
lakh:'{n} lakh',times:'{n} times',bar_cut:'» bar cut off at {n}',vv:'vote value',electors_n:'{n} electors',rank_of:'Rank {r} of 543',of:'{a} of {b}',vs:'{a} vs {b}',
ttl_home:'Vote Value Lok Sabha',ttl_check:'Check your vote value | Vote Value Lok Sabha',ttl_pop:'Delimitation Based Purely on Population | Vote Value Lok Sabha',ttl_fifty:'If Every State Got 50% More Seats | Vote Value Lok Sabha',
h1_home:'One Person, One Vote, One Value?',h1_check:'What is your vote worth?',h1_pop:'Delimitation Based Purely on Population',h1_fifty:'If Every State Got 50% More Seats',
lede_home:'Every Indian adult gets one vote, but under the current delimitation that vote does not carry the same weight. Each of the 543 Lok Sabha seats sends one MP, whether 58,000 or 38 lakh voters stand behind them. The more voters share an MP, the less your single vote counts. This map colours every constituency by what one vote is worth there.',
lede_check:'Choose your state, then your constituency. Under the current delimitation, the answer is not 1.00 for everyone.',
lede_pop:'Here, delimitation is done purely on today’s population. The Lok Sabha grows from 543 to 850 seats, the ceiling in the delimitation bills, and the seats are shared among states and union territories in proportion to their electors. Seats inside each state are drawn to the same size, so a vote is worth about the same everywhere.',
lede_fifty:'The revised proposal cleared by the Union Cabinet on 27 November 2026 raises every state’s Lok Sabha seats by 50% and freezes each state’s share of seats until 2051. Seats inside each state are drawn on population, so every seat in a state has about the same number of voters. Differences between states stay as they are today.',
check_btn:'Check the value of your vote',pop_btn:'Delimitation based purely on population',fifty_btn:'If every state got 50% more seats',nav_fifty:'See the 50% increase scenario',nav_pop:'See delimitation based purely on population',
c1_l:'average electors per MP',c2_l:'voters behind the largest seat, {n}',c3_l:'voters behind the smallest seat, {n}',c4_l:'a vote in the smallest seat vs the largest',
h2_const:'Vote value by constituency',h2_state:'Vote value by state and union territory',h2_top:'Most valuable votes',h2_bot:'Least valuable votes',h2_how:'How the number is worked out',
src_eci:'Source: [eci]Election Commission of India, General Election 2024 statistical reports[/].',
src_home:'Source: [eci]Election Commission of India, General Election 2024 statistical reports[/]. Electors per constituency taken from the ECI phase-wise annexures on PIB: [p13]phases 1 to 3[/], [p4]phase 4[/], [p5]phase 5[/], [p6]phase 6[/], [p7]phase 7[/]. Map outlines: [dm]DataMeet[/], 2019 boundaries.',
src_rank:'Electors · vote value. Source: [eci]Election Commission of India, 2024[/].',
pin_hint:'Hover a constituency for its vote value. Tap or click one to pin it here.',pin_hint_s:'Hover a state for its vote value. Tap or click to pin it here.',
pin_txt:'{e} electors share one MP. Vote value {v}, rank {r} of 543.',full:'See the full breakdown',
state_intro_h:'State vote value = national average electors per seat divided by the state’s average electors per seat. Seats in brackets. Highest first. Orange is above the national average, blue is below, grey is level.',
state_intro_c:'State vote value = national average electors per seat divided by the state’s average electors per seat. Seats in brackets. Highest first.',
st_title:'{s}: vote value {v}, {m} electors per seat on average, {n} seats',st_title1:'{s}: vote value {v}, {m} electors per seat on average, 1 seat',
note_how:'<b>Vote value</b> = average electors per seat in India divided by electors in the seat. 1.00 is the national average. Above 1, fewer voters share the MP, so each vote counts for more. Below 1, more voters share the MP. Rank 1 is the seat where one vote counts most.',
note_src:'Sources: [eci]Election Commission of India, General Election 2024 statistical reports[/]; constituency electors from the ECI phase-wise annexures published through PIB ([p13]phases 1 to 3[/], [p4]phase 4[/], [p5]phase 5[/], [p6]phase 6[/], [p7]phase 7[/]). They exclude service electors. <span class="tag">Surat</span> is approximate (about 17.67 lakh, from a [dh]Deccan Herald report[/]). Outer Manipur is the sum of its two polling phases. Map outlines: [dm]DataMeet[/].',
note_assam:'Assam’s seats were redrawn in 2023, so its shapes are the older outlines matched to the nearest new seat, and small seats such as Lakshadweep or the Delhi and Mumbai seats are hard to see at this size. Use the lists and the checker for those. This measures how many voters share one MP, not turnout or an MP’s performance.',
lbl_state:'State or union territory',lbl_cs:'Lok Sabha constituency',tab_map:'Map and details',tab_bars:'State graph',tab_table:'State table',tab_states:'All states',tab_all:'All 543 seats',
h2_cmap:'Constituency map and details',nlab:'Location in India',bars_intro:'Electors per constituency, fewest voters first. Value on the right is electors and vote value. Click a bar to switch to that seat.',
h2_side:'Same state, side by side',h2_cmp:'States and union territories compared',h2_all:'All 543 constituencies, fewest voters to most',
approx_el:' (approximate electors)',vs_above:'One vote here counts {p}% above the national average.',vs_below:'One vote here counts {p}% below the national average.',vs_at:'One vote here counts the same as the national average.',
v_p2:'About <b>{e}</b> voters share one MP. Your vote is worth {x} times a vote in {a}, where the most voters share one MP. A vote in {b}, where the fewest do, is worth {y} times yours.',
f1:'your share of your MP',f2:'rank, 1 is the most valuable vote',f3:'average electors per seat in India',f4:'{s} average vote value ({n} seats)',f4_1:'{s} average vote value (1 seat)',one_in:'1 in {n}',
nat_avg:'National average {n}',fewest:'{c} (fewest voters)',most:'{c} (most voters)',src_click:'Source: Election Commission of India, General Election 2024 (click for link)',
h_c:'Constituency',h_e:'Electors',h_v:'Vote value',h_r:'Rank',st_total:'State total ({n} seats)',st_total1:'State total (1 seat)',st_avg:'State average per seat',
mapnote:'The outlined seat is your constituency. Seats in the same state are coloured by vote value. Click another seat to switch to it.',
mapnote_as:'Assam’s seats were redrawn in 2023, so these are older outlines matched to the nearest new seat.',
d_c:'Constituency',d_st:'State or union territory',d_el:'Electors',d_apx:'Approximate figure',d_vv:'Vote value',d_nat1:'National average is 1.00',d_dev:'Electors vs national average',d_avg_is:'Average is {n}',
d_rank:'National rank',d_best:'1 is the most valuable vote',d_less:'Seats where a vote is worth less',d_of542:'out of the other 542',d_seats_in:'Seats in {s}',d_rank_st:'Rank within state',
d_fewest_st:'Fewest voters in state',d_most_st:'Most voters in state',d_sav:'State average electors per seat',d_nat_is:'National average is {n}',d_svv:'State vote value',d_srank:'State rank among states and UTs',
d_share:'Share of seats vs electors',d_share_sub:'of all Lok Sabha seats vs all electors',
w_h:'How {nm}’s number is worked out',w1:'Total electors in {nm}: <b>{tot}</b> across {n} seats.',w1_1:'Total electors in {nm}: <b>{tot}</b> across 1 seat.',
w2:'State average: {tot} ÷ {n} = <b>{m}</b> electors per seat.',w3:'National average: {tot} ÷ {n} = <b>{m}</b> electors per seat.',w4:'State vote value: {a} ÷ {b} = <b>{v}</b>.',
w_p:'This is the average vote value of a voter in {nm}. Each seat’s value counts once per voter, so larger seats weigh more. It is not the plain average of the seat values in the table, which would be {v} here.',
w_p1:'{nm} has one seat, so the state figure is that seat’s vote value.',
sbh:'Constituencies in {s}',bar_title:'{c}: {e} electors, vote value {v}, national rank {r} of 543',st_avg_lbl:'{s} average {n}',z_title:'{c}, {s}: {e} electors, vote value {v}',
pf_h2:'Vote value on the new seat counts',pf_src:'Today’s 543 constituency outlines are shown because new boundaries do not exist yet. Each outline takes the colour of its state or union territory, since seats within a state would be drawn to a similar size. Source: [eci]Election Commission of India, 2024[/].',
pop_note1:'<b>Seats per state</b> = the state’s share of all electors in India × 850, rounded by the largest-remainder method, with at least one seat for every state and union territory. The 815 and 35 split between states and union territories in the bills is not applied, because this scenario follows population alone. Seats within a state are assumed to be equal in size.',
fifty_note1:'<b>Seats per state</b> = current seats × 1.5, with halves rounded up, which reproduces the southern-state figures the Centre gave in April (Tamil Nadu 59, Karnataka 42, Andhra Pradesh 38, Kerala 30, Telangana 26). This gives the total shown above. Reports on the proposal put the ceiling at 850 seats, up to 815 from states and up to 35 from union territories. Seats within a state are assumed to be equal in size.',
pf_note2:'<b>Vote value</b> = average electors per seat in India in this scenario ÷ average electors per seat in the state. 1.00 is the national average. Electors are the 2024 electoral rolls from the ECI, the latest count of voters available.',
pf_note3:'Sources: [prs]PRS Legislative Research, The Delimitation Bill, 2026[/]; [scroll]Scroll.in, 27 November 2026[/]; [logical]The Logical Indian, 27 November 2026[/]. This is an illustration, not an official seat allocation. No state-wise numbers are in the bills.',
p_c1:'Lok Sabha seats, now and in this scenario',p_c2:'average electors per seat (today {n})',p_c3:'highest state vote value, {s}',p_c4:'lowest state vote value, {s}',
p_seats:'Seats {a} → {b} ({d})',p_today:'Today {v}',p_pin:'Seats: {a} now, {b} in this scenario. {e} electors per seat. Vote value {v}, against {w} today.',p_ct:'{s}: vote value {v}, {k} seats, {e} electors per seat',
th_s:'State or union territory',th_now:'Seats now',th_new:'Seats in scenario',th_eps:'Electors per seat',th_v0:'Vote value today',th_v1:'Vote value in scenario',india:'India'};
var lang='en';try{lang=localStorage.getItem('vv-lang')||'en'}catch(e){}
if(!LANGS.some(function(x){return x[0]===lang}))lang='en';
window.VVT=window.VVT||{};
if(lang!=='en')document.write('<script src="lang/'+lang+'.js"><\/script>');
function mk(s){return s.replace(/\[(\w+)\]([^\[]*?)\[\/\]/g,function(m,id,tx){return '<a href="'+LINKS[id]+'" target="_blank" rel="noopener">'+tx+'</a>'})}
window.t=function(k,p){var s=((window.VVT[lang]||{})[k])||EN[k]||k;
  s=s.replace(/\{(\w+)\}/g,function(m,x){return p&&x in p?p[x]:m});return mk(s)};
window.vv={static:function(tk){
  document.documentElement.lang=lang;if(tk)document.title=t(tk);
  document.querySelectorAll('[data-i18n]').forEach(function(e){e.innerHTML=t(e.dataset.i18n)});
  var st=document.createElement('style');st.textContent='.langbar{display:flex;justify-content:flex-end}.langbar select{width:auto;min-width:140px;padding:8px 10px;font-size:14px}';document.head.appendChild(st);
  var b=document.createElement('div');b.className='langbar';
  b.innerHTML='<select aria-label="Language">'+LANGS.map(function(x){return '<option value="'+x[0]+'">'+x[1]+'</option>'}).join('')+'</select>';
  var s=b.firstChild;s.value=lang;
  s.onchange=function(){try{localStorage.setItem('vv-lang',s.value)}catch(e){}location.reload()};
  document.querySelector('main').prepend(b)}};
})();
