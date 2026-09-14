/* A completed dossier permanently unlocks the next dossier's German edition. */
let gameLanguage='fr';
const stationsDE=stations;
const imageArchiveDE=imageArchive;
const translatedNodes=new WeakMap();
const translatedAttributes=new WeakMap();
const uiPattern=new RegExp(Object.keys(uiFR).sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
function tr(text,language=gameLanguage){return language==='fr'?String(text).replace(uiPattern,m=>uiFR[m]):String(text);}
function germanAvailable(i){return i>0&&state.germanUnlocked.includes(i);}
function syncLanguage(){
 gameLanguage=germanAvailable(state.station)?'de':'fr';
 stations=stationsDE.map((s,i)=>germanAvailable(i)?s:stationsFR[i]);
 imageArchive=gameLanguage==='fr'?imageArchiveFR:imageArchiveDE;
 document.documentElement.lang=gameLanguage==='fr'?'fr-CH':'de-CH';
 document.title=gameLanguage==='fr'?'La Tène – Sous la surface':'La Tène – Unter der Oberfläche';
}
function localizeDOM(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let node;
 while(node=walker.nextNode()){
  if(node.parentElement?.closest('script,style,textarea,[data-user-text]'))continue;
  const old=translatedNodes.get(node),raw=old&&old.output===node.data?old.raw:node.data;
  const output=tr(raw);if(node.data!==output)node.data=output;translatedNodes.set(node,{raw,output});
 }
 document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(el=>{
  let saved=translatedAttributes.get(el)||{};
  for(const attr of ['aria-label','placeholder','title','alt']){if(!el.hasAttribute(attr))continue;const value=el.getAttribute(attr),old=saved[attr],raw=old&&old.output===value?old.raw:value,output=tr(raw);if(value!==output)el.setAttribute(attr,output);saved[attr]={raw,output};}translatedAttributes.set(el,saved);
 });
}
function languageBanner(){
 let banner=document.querySelector('.language-status');
 if(showResult||!document.querySelector('.station-lead')){banner?.remove();return;}
 if(!banner){banner=document.createElement('div');banner.className='language-status';document.querySelector('.station-lead').before(banner);}
 const i=state.station,nextId=i+1,n=String(nextId+1).padStart(2,'0'),unlocked=nextId<stations.length&&germanAvailable(nextId),done=caseDone(i);
 let text=gameLanguage==='fr'?'Dossier en français.':'Deutsch freigeschaltet · Akte '+String(i).padStart(2,'0')+' gelöst.';
 if(nextId<stations.length)text+=gameLanguage==='fr'?(unlocked?` Le dossier ${n} est maintenant disponible en allemand.`:` Résolvez les 3 indices pour débloquer le dossier ${n} en allemand.`):(unlocked?` Akte ${n} ist ebenfalls auf Deutsch verfügbar.`:` Löst alle 3 Spuren, um Akte ${n} auf Deutsch freizuschalten.`);
 else text+=gameLanguage==='fr'?' Réunissez les dernières preuves pour terminer votre dossier.':'Führt eure letzten Belege zur Schlussdeutung zusammen.';
 banner.innerHTML=`<span class="language-badge">${gameLanguage.toUpperCase()}</span><span>${text}</span>${done&&nextId<stations.length?`<button class="quiet" id="nextGerman">${gameLanguage==='fr'?'Continuer en allemand →':'Weiter auf Deutsch →'}</button>`:''}`;
 if(document.querySelector('#nextGerman'))document.querySelector('#nextGerman').onclick=()=>start(nextId);
 document.querySelectorAll('[data-station]').forEach(el=>{const i=+el.dataset.station;const badge=document.createElement('small');badge.className='nav-language';badge.textContent=germanAvailable(i)?'DE':'FR';el.append(badge);});
}
function localizedReport(){
 const isFR=gameLanguage==='fr',lines=[document.title,isFR?'DOSSIER DE FOUILLE':'FUNDAKTE',''];
 for(const [i,s]of stations.entries()){
  lines.push(`${i+1}. ${s.title} [${germanAvailable(i)?'DE':'FR'}]`);
  s.tasks.forEach((t,j)=>{const a=state.answers[`${i}-${j}`]||[];lines.push(t.q);if(t.type==='write')lines.push(...t.prompts.map((p,k)=>p+': '+(a[k]||'—')));else if(t.type==='dig')lines.push(...t.finds.map((f,k)=>f.name+': '+(a[k]==='recorded'?(isFR?'position documentée, objet sauvegardé':'Lage dokumentiert, Fund gesichert'):'—')));else lines.push(a.length?formatAnswer(t,a):'—');lines.push('');});
 }
 lines.push(isFR?'NOTRE HYPOTHÈSE':'UNSERE VERMUTUNG',board.hypothesis||state.answers['0-2']?.[0]||'—','');
 const labels=isFR?{supports:'soutient',challenges:'contredit ou limite',open:'question ouverte'}:{supports:'stützt',challenges:'begrenzt / widerspricht',open:'offene Frage'};
 stations.forEach((s,i)=>{if(caseDone(i))lines.push(s.reward.title+': '+s.reward.text,labels[board.links[i]]||'—','');});
 lines.push(isFR?'NOTRE INTERPRÉTATION FINALE':'UNSERE SCHLUSSDEUTUNG',state.draft||'—','Sources : Informationen zu den Helvetiern.pdf ; Die Kelten.docx ; PPP_Kelten (1).pptx ; SRF.',SRF);
 const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='La-Tene-Dossier.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function initLanguage(){
 // Older successful v7 results count; wrong or incomplete attempts never unlock.
 state.germanUnlocked=Array.isArray(state.germanUnlocked)?state.germanUnlocked:[];
 for(let i=0;i<stationsDE.length-1;i++)if(stationsDE[i].tasks.every((_,j)=>state.results[`${i}-${j}`]?.correct)&&!state.germanUnlocked.includes(i+1))state.germanUnlocked.push(i+1);
 // Accept both languages without changing the positional puzzle solutions.
 stationsDE.forEach((s,i)=>s.tasks.forEach((task,j)=>{if(task.type==='text')task.fields.forEach((f,k)=>{const other=stationsFR[i].tasks[j].fields[k];const deAccept=[...f.accept],frAccept=[...other.accept];f.accept=[...new Set([...deAccept,...frAccept])];other.accept=[...new Set([...frAccept,...deAccept])];});}));
 const originalRender=render;render=function(){syncLanguage();originalRender();languageBanner();localizeDOM();document.documentElement.classList.remove('language-loading');};
 const originalSidebar=sidebar;sidebar=function(){syncLanguage();originalSidebar();localizeDOM();};
 const originalComplete=complete;complete=function(correct,self=false){originalComplete(correct,self);if(correct&&caseDone(state.station)&&state.station<stationsDE.length-1&&!state.germanUnlocked.includes(state.station+1)){state.germanUnlocked.push(state.station+1);save();sidebar();}languageBanner();localizeDOM();};
 const originalResult=renderResult;renderResult=function(){originalResult();document.querySelector('#download').onclick=localizedReport;localizeDOM();};
 // Dynamic feedback, image dialogs and keyboard-operated controls keep the active locale.
 new MutationObserver(()=>localizeDOM()).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','title','alt']});
 syncLanguage();save();
}
