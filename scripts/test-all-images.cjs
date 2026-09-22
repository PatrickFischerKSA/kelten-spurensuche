const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');

// This independent checklist protects the image requirements of individual tasks.
const required = {
  9: ['neuchatel'],
  20: ['gleyre'],
  21: ['gleyre'],
  28: ['helvetia-coin'],
  29: ['helvetia-coin', 'helvetia-basel-detail'],
  30: ['helvetia-coin', 'helvetia-basel-detail'],
  31: ['fibula', 'torc', 'helvetii-coin'],
  32: ['neuchatel'],
  33: ['republique'],
  35: ['la-tene', 'gleyre', 'helvetia-coin'],
};

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => {
        if (response.request().resourceType() === 'image' && !response.ok()) {
          errors.push(`${response.status()} ${response.url()}`);
        }
      });
      await page.goto(process.env.GAME_URL || 'http://127.0.0.1:8772/');
      const catalogue = await page.evaluate(() => {
        for (const [id, image] of Object.entries(imageArchiveFR)) {
          if (image.src !== imageArchiveDE[id]?.src) throw Error(`Different image: ${id}`);
          for (const field of ['src', 'caption', 'alt', 'scope', 'creator', 'source', 'license', 'licenseUrl']) {
            if (!image[field] || !imageArchiveDE[id][field]) throw Error(`Missing ${id}.${field}`);
          }
        }
        for (const station of stations) {
          for (const id of [...station.images, ...station.tasks.flatMap(t => t.images || (t.image ? [t.image] : []))]) {
            if (!imageArchiveFR[id]) throw Error(`Missing image reference: ${id}`);
          }
        }
        return Object.keys(imageArchiveFR);
      });

      async function checkFigure(button) {
        assert.equal(await button.isVisible(), true, 'Image must not be hidden in a closed archive');
        await button.scrollIntoViewIfNeeded();
        const image = button.locator('img');
        await image.evaluate(img => img.decode());
        assert.equal(await image.evaluate(img => img.naturalWidth > 0 && getComputedStyle(img).objectFit === 'contain'), true);
        assert.ok(await image.getAttribute('alt'));
        const src = await image.getAttribute('src');
        await button.click();
        await page.locator('#picture[open]').waitFor();
        const enlarged = page.locator('#pictureContent img');
        await enlarged.evaluate(img => img.decode());
        assert.equal(await enlarged.getAttribute('src'), src);
        await page.locator('#closePicture').click();
      }

      for (let s = 0; s < 12; s++) {
        await page.locator(`[data-station="${s}"]`).click();
        for (let t = 0; t < 3; t++) {
          await page.locator(`[data-task="${t}"]`).click();
          const spur = s * 3 + t + 1;
          const ids = await page.locator('.card .task-image [data-image]').evaluateAll(nodes => nodes.map(n => n.dataset.image));
          assert.deepEqual(ids, required[spur] || [], `Image assignment at Spur ${spur}`);
          for (const button of await page.locator('#game [data-image]').all()) await checkFigure(button);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at Spur ${spur}`);
          console.log(`PASS ${width}px: Spur ${spur}, all images visible, decoded, uncropped and zoomable`);
          if ([9, 21, 29, 32, 33].includes(spur)) {
            await page.locator('.task-image').scrollIntoViewIfNeeded();
            await page.screenshot({ path: `/tmp/image-audit-${width}-${spur}.png` });
          }
        }
      }
      await page.locator('#archiveBtn').click();
      assert.equal(await page.locator('#archiveContent [data-image]').count(), catalogue.length);
      for (const button of await page.locator('#archiveContent [data-image]').all()) await checkFigure(button);
      await page.locator('#closeArchive').click();
      assert.deepEqual(errors, []);
      console.log(`PASS ${width}px: all ${catalogue.length} archive images and bilingual metadata`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
