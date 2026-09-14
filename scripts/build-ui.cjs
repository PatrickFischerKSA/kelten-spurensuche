const fs=require('node:fs');
const path=require('node:path');
const dictionary=JSON.parse(fs.readFileSync(path.join(__dirname,'ui-fr.json'),'utf8'));
fs.writeFileSync(path.join(__dirname,'../dist/ui-fr.js'),'const uiFR='+JSON.stringify(dictionary,null,2)+';\n');
