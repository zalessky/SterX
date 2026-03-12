const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Wait for the dev server to be ready
  let ready = false;
  for (let i = 0; i < 20; i++) {
    try {
      await page.goto('http://localhost:3006');
      ready = true;
      break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  if (!ready) {
    console.error('Server not ready');
    process.exit(1);
  }

  await page.setViewportSize({ width: 1280, height: 4000 });
  await page.waitForTimeout(2000); // Wait for animations

  await page.screenshot({ path: '/home/jules/verification/final_desktop.png', fullPage: true });

  // Verify correct phone number in BookingForm
  const bookingPhone = await page.locator('#booking a[href^="tel:"]').textContent();
  console.log('Booking Phone:', bookingPhone.trim());

  // Verify localized image existence in DOM
  const heroStyle = await page.locator('section').first().getAttribute('style');
  console.log('Hero background style:', heroStyle);

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/final_mobile.png', fullPage: true });

  await browser.close();
})();
