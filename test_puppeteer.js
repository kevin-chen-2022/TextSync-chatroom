const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 800});
    await page.goto('http://127.0.0.1:8765/');
    console.log('title:', await page.title());
    console.log('viewport:', await page.viewport());
    await browser.close();
  } catch (e) {
    console.error('ERROR:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
})();
