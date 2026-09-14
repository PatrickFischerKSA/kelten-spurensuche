/* French narrative and archives; German task instructions, finds and reasoning. */
let gameLanguage='fr';
const stationsDE=stations;
const imageArchiveDE=imageArchive;
const translatedNodes=new WeakMap();
const translatedAttributes=new WeakMap();
const quotePattern=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const uiPattern=new RegExp(Object.keys(uiFR).sort((a,b)=>b.length-a.length).map(s=>(/^[A-Za-zÀ-ÿ0-9]/.test(s)?'(?<![A-Za-zÀ-ÿ0-9])':'')+quotePattern(s)+(/[A-Za-zÀ-ÿ0-9]$/.test(s)?'(?![A-Za-zÀ-ÿ0-9])':'')).join('|'),'g');
function tr(text,language=gameLanguage){return language==='fr'?String(text).replace(uiPattern,m=>uiFR[m]):String(text);}
function syncLanguage(){
 gameLanguage='fr';
 stations=stationsFR.map((s,i)=>({...s,tasks:stationsDE[i].tasks,reward:stationsDE[i].reward}));
 imageArchive=imageArchiveFR;
 document.documentElement.lang='fr-CH';
 document.title='La Tène – Sous la surface';
}
function contentLanguage(el){const scope=el?.closest('[data-archive-fr],[data-content-language]');return scope?.hasAttribute('data-archive-fr')?'fr':scope?.dataset.contentLanguage||gameLanguage;}
function localizeDOM(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let node;
 while(node=walker.nextNode()){
  if(node.parentElement?.closest('script,style,textarea,[data-user-text],[data-fixed-language]'))continue;
  const old=translatedNodes.get(node),raw=old&&old.output===node.data?old.raw:node.data;
  const output=tr(raw,contentLanguage(node.parentElement));if(node.data!==output)node.data=output;translatedNodes.set(node,{raw,output});
 }
 document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(el=>{
  if(el.closest('[data-fixed-language]'))return;let saved=translatedAttributes.get(el)||{};
  for(const attr of ['aria-label','placeholder','title','alt']){if(!el.hasAttribute(attr))continue;const value=el.getAttribute(attr),old=saved[attr],raw=old&&old.output===value?old.raw:value,output=tr(raw,contentLanguage(el));if(value!==output)el.setAttribute(attr,output);saved[attr]={raw,output};}translatedAttributes.set(el,saved);
 });
}
function languageBanner(){
 document.querySelector('.language-status')?.remove();
 document.querySelectorAll('.nav-language').forEach(el=>el.remove());
}
function localizedReport(){
 const isFR=false,lines=[document.title,isFR?'DOSSIER DE FOUILLE':'FUNDAKTE',''];
 for(const [i,s]of stations.entries()){
  lines.push(`${i+1}. ${s.title}`);
  s.tasks.forEach((t,j)=>{const a=state.answers[`${i}-${j}`]||[];lines.push(t.q);if(t.type==='write')lines.push(...t.prompts.map((p,k)=>p+': '+(a[k]||'—')));else if(t.type==='dig')lines.push(...t.finds.map((f,k)=>f.name+': '+(a[k]==='recorded'?(isFR?'position documentée, objet sauvegardé':'Lage dokumentiert, Fund gesichert'):'—')));else lines.push(a.length?formatAnswer(t,a):'—');if(state.results[`${i}-${j}`]?.correct)lines.push('Un petit mot… '+taskCommentsFR[i][j]);lines.push('');});
 }
 lines.push(isFR?'NOTRE HYPOTHÈSE':'UNSERE VERMUTUNG',board.hypothesis||state.answers['0-2']?.[0]||'—','');
 const labels=isFR?{supports:'soutient',challenges:'contredit ou limite',open:'question ouverte'}:{supports:'stützt',challenges:'begrenzt / widerspricht',open:'offene Frage'};
 stations.forEach((s,i)=>{if(caseDone(i))lines.push(s.reward.title+': '+s.reward.text,labels[board.links[i]]||'—','');});
 lines.push(isFR?'NOTRE INTERPRÉTATION FINALE':'UNSERE SCHLUSSDEUTUNG',state.draft||'—','Sources : Informationen zu den Helvetiern.pdf ; Die Kelten.docx ; PPP_Kelten (1).pptx ; SRF.',SRF);
 const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='La-Tene-Dossier.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function initLanguage(){
 // Existing answers and results remain intact; old language unlocks are ignored.
 // Accept both languages without changing the positional puzzle solutions.
 stationsDE.forEach((s,i)=>s.tasks.forEach((task,j)=>{if(task.type==='text')task.fields.forEach((f,k)=>{const other=stationsFR[i].tasks[j].fields[k];const deAccept=[...f.accept],frAccept=[...other.accept];f.accept=[...new Set([...deAccept,...frAccept])];other.accept=[...new Set([...frAccept,...deAccept])];});}));
 const originalRender=render;render=function(){syncLanguage();originalRender();languageBanner();localizeDOM();document.documentElement.classList.remove('language-loading');if(typeof refreshLens==='function')refreshLens();};
 const originalSidebar=sidebar;sidebar=function(){syncLanguage();originalSidebar();localizeDOM();};
 const originalComplete=complete;complete=function(correct,self=false){originalComplete(correct,self);languageBanner();localizeDOM();};
 const originalResult=renderResult;renderResult=function(){originalResult();document.querySelectorAll('#game>section,#game>.review-list').forEach(el=>{el.dataset.contentLanguage='de';el.lang='de';});document.querySelector('#download').onclick=localizedReport;localizeDOM();};
 // Dynamic feedback, image dialogs and keyboard-operated controls keep the active locale.
 new MutationObserver(()=>localizeDOM()).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','title','alt']});
 syncLanguage();save();initLens();
}
