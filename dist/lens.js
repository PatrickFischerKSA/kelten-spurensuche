/* Offline translation lens: only authored game text is translated. */
let lensActive=false,lensTarget=null;
const lensTranslations=new Map();
const lensNormalize=s=>String(s).replace(/\s+/g,' ').trim();
function addLensTranslation(fr,de){if(typeof fr==='string'&&typeof de==='string'&&fr!==de)lensTranslations.set(lensNormalize(fr),lensNormalize(de));}
function pairLensData(fr,de,key=''){
 if(['accept','answer','letters','src','licenseUrl'].includes(key))return;
 if(typeof fr==='string')addLensTranslation(fr,de);
 else if(Array.isArray(fr)&&Array.isArray(de)){if(key==='passage')addLensTranslation(fr.join(' '),de.join(' '));else fr.forEach((v,i)=>pairLensData(v,de[i]));}
 else if(fr&&de&&typeof fr==='object')for(const k of Object.keys(fr))pairLensData(fr[k],de[k],k);
}
const commentTranslationsDE=[
 ['Gut gemacht! Die drei Objekte sind erfasst. Ihre Lage hilft, den Fundort zu verstehen.','Ja! 1857 wurde der Fundort entdeckt. Die Objekte sind viel älter.','Eure Idee ist notiert. Bewahrt sie auf: Die nächsten Spuren können sie verändern.'],
 ['Genau! Die Helvetier haben Nachbarn. Diese Gruppen tragen nicht alle denselben Namen.','Gut erkannt! Zwei Objekte ähneln sich. Das beweist aber noch keine Wanderung von Menschen.','Richtig! Auf dem Gebiet der heutigen Schweiz lebten mehrere Völker.'],
 ['Gut gemacht! Jedes Objekt hat eine Funktion. Es erzählt ein wenig vom Alltag.','Die Kette steht! Mehr Nahrung kann Zeit für andere Berufe schaffen.','Eure Notiz liegt in der Akte. Wasser kann das Reisen erleichtern. Aber die Ufer verändern sich.'],
 ['Ja! Manche alten Namen bestehen in anderer Form weiter.','Gut erkannt! Wir kennen das Grab. Den Namen dieser Frau kennen wir nicht.','Richtig! Das Gefäss stammt aus Mantua. Seine Schriftzeichen sind etruskisch.'],
 ['Ihr habt Caturix gefunden! In römischer Zeit ist sein Name mit Mars verbunden.','Eure Notiz ist ergänzt. Caesar erzählt diese Geschichte. Sein Name muss beim Bericht stehen bleiben.','Gut gemacht! Ein Objekt ist eine Spur. Seine Geschichte bleibt manchmal eine Frage.'],
 ['Der Weg ist rekonstruiert! Der Durchgang ist gesperrt, dann ändert die Gruppe ihre Route.','Eure Bemerkung ist notiert. Caesars Zahlen sind unsicher. Ihre Differenz ergibt nicht die Zahl der Toten.','Richtig! Das Ziel ist die Saintonge. Die Niederlage findet bei Bibracte statt.'],
 ['Eure Frage ist bereit. Caesar ist auch der Sieger: Sein Blickwinkel zählt.','Ja, 107 vor Christus! Dieser Kampf fand früher statt als der bei Bibracte.','Eure Beobachtungen sind notiert. Das Gemälde ist viel jünger als der Kampf.'],
 ['Die Akten sind verbunden! Diese Orte zeigen verschiedene Zeiten der Geschichte.','Richtig! Aventicum ist das Zentrum. Die gallorömische Kultur verbindet keltische und römische Elemente.','Gut erkannt! Zur Civitas gehören auch Gebiete und Menschen im Umland der Stadt.'],
 ['Ihr habt Brenodurum gefunden! Ein Oppidum ist eine befestigte Siedlung.','Gut erkannt! Diese Wörter drücken Zweifel aus. Die Knochen sind da, aber das Ritual bleibt eine Vermutung.','Ja! Das Leben geht unter Rom weiter. Die Kulturen begegnen sich.'],
 ['Ihr habt das Wort gefunden! Eine Allegorie stellt eine Idee durch ein Bild dar.','Euer Vergleich ist notiert. Dieselbe Helvetia kann zwei Bilder der Schweiz erzählen.','Euer Entwurf liegt in der Akte. Jeder gewählte Gegenstand kann eine Idee ausdrücken.'],
 ['Eure Beobachtung ist gespeichert. «Unbekannt» zu schreiben ist besser, als ein Datum zu erfinden.','Eure Notiz ist gespeichert. Der See ist da, aber sein Ufer war nicht immer gleich.','Eure Deutung ist notiert. Helvetia empfängt die Republik Neuenburg. Das Denkmal stammt von 1898.'],
 ['Gut gemacht! Ein Volk, eine Kultur und ein Symbol sind nicht dasselbe.','Euer Text liegt bereit in der Akte. Objekte, Berichte und Bilder erzählen jeweils einen Teil der Geschichte.','Eure letzte Notiz ist gespeichert. Eine gute Untersuchung kann mit einer neuen Frage enden.']
];
let lensPattern;
function lensText(element){
 const raw=lensNormalize(element.textContent),exact=lensTranslations.get(raw);if(exact)return exact;
 const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);let n,parts=[],found=false;
 while(n=walker.nextNode()){
  const visible=lensNormalize(n.data);if(!visible)continue;
  const stored=translatedNodes.get(n);
  if(stored&&stored.raw!==stored.output&&stored.output===n.data){parts.push(stored.raw);found=true;}
  else {const direct=lensTranslations.get(visible);if(direct){parts.push(direct);found=true;}else parts.push(n.data.replace(lensPattern,m=>{found=true;return lensTranslations.get(m);}));}
 }
 return found?lensNormalize(parts.join(' ')):null;
}
function closeLens(){lensActive=false;document.body.classList.remove('lens-active');document.querySelectorAll('[data-lens-toggle]').forEach(b=>b.setAttribute('aria-pressed','false'));document.querySelector('#lensPanel').hidden=true;document.querySelector('#lensRing').hidden=true;lensTarget?.classList.remove('lens-target');lensTarget=null;document.querySelectorAll('[data-lens-focus]').forEach(el=>{el.removeAttribute('tabindex');el.removeAttribute('data-lens-focus');});}
function refreshLens(){if(!lensActive)return;lensTarget?.classList.remove('lens-target');lensTarget=null;document.querySelector('#lensRing').hidden=true;document.querySelectorAll('main h2,main h3,main p,main label,main .passage,dialog[open] p,dialog[open] h3').forEach(el=>{if(!el.hasAttribute('tabindex')&&!el.closest('[data-user-text],#lensPanel')){el.tabIndex=0;el.dataset.lensFocus='';}});}
function inspectWithLens(target,x,y){
 if(!lensActive||target.closest('#lensPanel,[data-lens-toggle],#lensRing,input,textarea,select,option,svg,[data-user-text]'))return false;
 const el=target.closest('.passage')||target.closest('p,h1,h2,h3,h4,summary,label,button,li,figcaption,strong,small,span,a');if(!el||!el.textContent.trim())return false;
 lensTarget?.classList.remove('lens-target');lensTarget=el;el.classList.add('lens-target');
 const translated=lensText(el),panel=document.querySelector('#lensPanel'),ring=document.querySelector('#lensRing');const host=el.closest('dialog[open]')||document.body;if(panel.parentElement!==host){host.append(panel,ring);}
 document.querySelector('#lensTranslation').textContent=translated||'Für diesen Text gibt es keine zusätzliche Übersetzung. Eigennamen bleiben unverändert.';
 const rect=el.getBoundingClientRect();x=x??rect.left+Math.min(rect.width/2,120);y=y??rect.top+Math.min(rect.height/2,30);
 ring.hidden=false;ring.style.left=x+'px';ring.style.top=y+'px';panel.hidden=false;
 if(innerWidth>720){panel.style.bottom='auto';panel.style.left=Math.max(12,Math.min(x+28,innerWidth-380))+'px';panel.style.top=Math.max(12,Math.min(y+36,innerHeight-Math.min(panel.offsetHeight,innerHeight*.45)-16))+'px';}else{panel.style.bottom='12px';panel.style.left='12px';panel.style.top='auto';}
 return true;
}
function initLens(){
 pairLensData(stationsFR,stationsDE);pairLensData(imageArchiveFR,imageArchiveDE);
 Object.entries(uiFR).forEach(([de,fr])=>addLensTranslation(fr,de));taskCommentsFR.forEach((row,i)=>row.forEach((fr,j)=>addLensTranslation(fr,commentTranslationsDE[i][j])));addLensTranslation('Un petit mot…','Ein kurzer Kommentar…');
 lensPattern=new RegExp([...lensTranslations.keys()].filter(k=>k.length>3).sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
 const button=document.createElement('button');button.id='lensToggle';button.className='quiet';button.dataset.fixedLanguage='';button.dataset.lensToggle='';button.lang='de';button.setAttribute('aria-pressed','false');button.textContent='🔎 Deutsch-Lupe';document.querySelector('.header-actions').prepend(button);
 const panel=document.createElement('section');panel.id='lensPanel';panel.dataset.fixedLanguage='';panel.lang='de';panel.hidden=true;panel.innerHTML='<div class="lens-panel-head"><strong>🔎 Deutsch-Lupe</strong><button id="lensClose" class="quiet" aria-label="Übersetzungslupe ausschalten">Schliessen ×</button></div><p id="lensTranslation" role="status">Zeige auf einen französischen Text oder tippe ihn an. Mit Tab kannst du Texte auswählen. Escape schliesst die Lupe.</p>';document.body.append(panel);
 const ring=document.createElement('div');ring.id='lensRing';ring.hidden=true;ring.setAttribute('aria-hidden','true');document.body.append(ring);
 const toggle=e=>{if(lensActive){closeLens();return;}lensActive=true;document.body.classList.add('lens-active');document.querySelectorAll('[data-lens-toggle]').forEach(b=>b.setAttribute('aria-pressed','true'));const host=e.currentTarget.closest('dialog[open]')||document.body;host.append(panel,ring);panel.hidden=false;panel.style.left='auto';panel.style.top='auto';panel.style.bottom='18px';document.querySelector('#lensTranslation').textContent='Zeige auf einen französischen Text oder tippe ihn an. Mit Tab kannst du Texte auswählen. Escape schliesst die Lupe.';refreshLens();};
 button.onclick=toggle;document.querySelectorAll('dialog').forEach(dialog=>{const b=button.cloneNode(true);b.removeAttribute('id');b.onclick=toggle;dialog.prepend(b);dialog.addEventListener('close',()=>{if(panel.parentElement===dialog){closeLens();document.body.append(panel,ring);}});});
 document.querySelector('#lensClose').onclick=()=>{closeLens();button.focus();};
 document.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')inspectWithLens(e.target,e.clientX,e.clientY);});
 document.addEventListener('click',e=>{if(lensActive&&!e.target.closest('#lensPanel,[data-lens-toggle],input,textarea,select,option')){if(inspectWithLens(e.target,e.clientX,e.clientY)){e.preventDefault();e.stopImmediatePropagation();}}},true);
 document.addEventListener('focusin',e=>inspectWithLens(e.target));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lensActive){e.preventDefault();closeLens();button.focus();}});
 document.addEventListener('scroll',()=>{if(lensActive)ring.hidden=true;},true);
}
