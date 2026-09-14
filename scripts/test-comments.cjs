const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(process.env.GAME_URL||'http://localhost:8088/');
 await page.evaluate(()=>{
  if(taskCommentsFR.length!==12||taskCommentsFR.some(x=>x.length!==3||x.some(t=>!t)))throw Error('Missing comments');
  for(let i=0;i<12;i++)for(let j=0;j<3;j++){
   start(i,j);if(!document.querySelector('#solvedComment').hidden)throw Error('Premature comment');const t=current();
   if(t.type==='write'){selection=t.prompts.map(()=> 'Une note assez longue pour le dossier.');remember();check();if(!document.querySelector('#solvedComment').hidden)throw Error('Unreviewed note');document.querySelectorAll('[data-criterion]').forEach(c=>{c.checked=true;c.dispatchEvent(new Event('change'));});document.querySelector('#selfDone').click();}
   else{if(t.type==='dig')selection=['recorded','recorded','recorded'];else if(t.type==='text')selection=t.fields.map(f=>f.accept[0]);else if(t.type==='number')selection=[t.answer];else if(t.type==='order')order=[...t.answer];else if(t.type==='letters'){const used=[];selection=[...t.answer].map(c=>{const n=t.letters.findIndex((l,k)=>l===c&&!used.includes(k));used.push(n);return n;});}else selection=[...t.answer];remember();check();}
   const box=document.querySelector('#solvedComment');if(box.hidden||box.querySelector('p').textContent!==taskCommentsFR[i][j]||box.lang!=='fr')throw Error('Wrong comment '+i+'-'+j);
  }
  start(1);if(gameLanguage!=='fr')throw Error('Game must stay French');
 });
 await page.reload();assert.equal(await page.locator('html').getAttribute('lang'),'fr-CH');assert.equal(await page.locator('#solvedComment').getAttribute('lang'),'fr');assert.match(await page.locator('#solvedComment').innerText(),/Helvètes/);
 await page.evaluate(()=>{start(0,1);selection=[1000];changed();check();if(!document.querySelector('#solvedComment').hidden)throw Error('Comment on wrong answer');start(0,2);selection[0]='Nouvelle note à relire.';changed();if(!document.querySelector('#solvedComment').hidden)throw Error('Comment after edit');});
 await page.locator('#reportBtn').click();const download=page.waitForEvent('download');await page.locator('#download').click();const file=await download;const stream=await file.createReadStream();let report='';for await(const chunk of stream)report+=chunk;assert.match(report,/Un petit mot…/);
 assert.deepEqual(errors,[]);console.log('PASS: all36 comments, no premature praise, self-review, French in all units, reload, edit/wrong handling, export');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
