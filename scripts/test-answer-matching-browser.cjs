const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(process.env.GAME_URL || 'http://127.0.0.1:8772/');
    for (const [station, task, answers] of [
      [3, 2, ['Manuta', 'etruskische']],
      [5, 2, ['Land der Santonen', 'Bibratce']],
      [7, 1, ['Aventicmu', 'keltisch-römisch']],
      [8, 0, ['Brenodur', 'befestigte Siedlung']],
      [8, 2, ['gallo roemische Kultur']],
    ]) {
      await page.locator(`[data-station="${station}"]`).click();
      await page.locator(`[data-task="${task}"]`).click();
      for (const [i, answer] of answers.entries()) await page.locator(`[data-entry="${i}"]`).fill(answer);
      await page.locator('#check').click();
      assert.match(await page.locator('#feedback').innerText(), /Spur entschlüsselt/);
      await page.reload();
      for (const [i, answer] of answers.entries()) assert.equal(await page.locator(`[data-entry="${i}"]`).inputValue(), answer);
      console.log(`PASS: Spur ${station * 3 + task + 1}, synonyms and typos accepted, original inputs preserved`);
    }
    await page.locator('[data-station="3"]').click();
    await page.locator('[data-task="2"]').click();
    await page.locator('[data-entry="0"]').fill('Rom');
    await page.locator('#check').click();
    const feedback = await page.locator('#feedback').innerText();
    assert.match(feedback, /Hier ist Mantua gemeint/);
    assert.match(feedback, /Adjektiv\): Richtig/);
    assert.deepEqual(errors, []);
    console.log('PASS: incorrect city rejected, correct second field explicitly acknowledged');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
