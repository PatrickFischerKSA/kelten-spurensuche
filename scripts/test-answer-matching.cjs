const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const app = fs.readFileSync('dist/app.js', 'utf8');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync('dist/data.js', 'utf8') + '\n' + fs.readFileSync('dist/data-fr.js', 'utf8') + '\n' + app.slice(app.indexOf('function answerForm'), app.indexOf('const key=')), context);
const cases = [
  [3, 2, 0, ['Manuta', 'Mantova', 'in Mantua', 'Mantoue'], ['Mailand', 'Rom', 'nicht Mantua', 'Mantua oder Rom']],
  [3, 2, 1, ['etruskische', 'etruskische Buchstaben', 'in etruskischer Schrift', 'écriture étrusque'], ['lateinisch', 'griechisch', 'nicht etruskisch']],
  [5, 2, 0, ['Land der Santonen', 'Saintonge', 'chez les Santons'], ['Gallien', 'Bibracte']],
  [5, 2, 1, ['Bibrakte', 'Bibratce', 'Schlacht bei Bibracte'], ['Genf', 'Agen', 'Saintonge']],
  [7, 1, 0, ['Aventicmu', 'Aventicum (Avenches)'], ['Avenches', 'Turicum']],
  [7, 1, 1, ['Gallo-römisch', 'gallo roemische Kultur', 'keltisch-römisch', 'gallorömischen'], ['römisch', 'keltisch', 'germanisch']],
  [8, 0, 0, ['Brenodur', 'Brenodruum', 'Oppidum Brenodor'], ['Bern', 'Aventicum']],
  [8, 0, 1, ['Oppidmu', 'Oppida', 'befestigte Siedlung', 'ville fortifiée'], ['Dorf', 'Tempel', 'kein Oppidum']],
  [8, 2, 0, ['gallo-römische Kultur', 'keltisch-römische Kultur', 'culture gallo-romaine'], ['römische Kultur', 'keltische Kultur']],
];
let checks = 0;
for (const [s, t, i, accepted, rejected] of cases) {
  const field = vm.runInContext(`({...stations[${s}].tasks[${t}].fields[${i}],accept:[...stations[${s}].tasks[${t}].fields[${i}].accept,...stationsFR[${s}].tasks[${t}].fields[${i}].accept]})`, context);
  for (const value of [...field.accept, ...accepted]) {
    assert.equal(context.acceptsAnswer(field, value), true, `Rejected ${value}`);
    checks++;
  }
  for (const value of ['', '   ', ...rejected]) {
    assert.equal(context.acceptsAnswer(field, value), false, `Accepted ${value}`);
    checks++;
  }
}
console.log(`PASS: ${checks} synonym, spelling, inflection and rejection checks across all nine fields`);
