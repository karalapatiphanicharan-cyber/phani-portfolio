import { test, expect } from '@playwright/test';

test('verify final page structure and appearance', async ({ page }) => {
  await page.goto('http://localhost:3006');

  // Verify mandatory sections are present
  // Hero: Look for name
  const hero = page.locator('section').filter({ hasText: 'K. Sri Phani Charan' }).first();
  await expect(hero).toBeVisible();

  // Metrics: Look for "Software Products Built"
  const metrics = page.locator('section').filter({ hasText: 'Software Products Built' }).first();
  await expect(metrics).toBeVisible();

  // About: Look for "About Me"
  const about = page.locator('section').filter({ hasText: 'About Me' }).first();
  await expect(about).toBeVisible();

  // Skills: Look for "Technical Skills"
  const skills = page.locator('section').filter({ hasText: 'Technical Skills' }).first();
  await expect(skills).toBeVisible();

  // Verify order
  const heroBox = await hero.boundingBox();
  const metricsBox = await metrics.boundingBox();
  const aboutBox = await about.boundingBox();
  const skillsBox = await skills.boundingBox();

  if (heroBox && metricsBox && aboutBox && skillsBox) {
    console.log('Hero Y:', heroBox.y);
    console.log('Metrics Y:', metricsBox.y);
    console.log('About Y:', aboutBox.y);
    console.log('Skills Y:', skillsBox.y);
    expect(heroBox.y).toBeLessThan(metricsBox.y);
    expect(metricsBox.y).toBeLessThan(aboutBox.y);
    expect(aboutBox.y).toBeLessThan(skillsBox.y);
  }

  // Take screenshots for desktop, tablet, mobile
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: 'desktop_final.png', fullPage: true });

  await page.setViewportSize({ width: 768, height: 1024 });
  await page.screenshot({ path: 'tablet_final.png', fullPage: true });

  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'mobile_final.png', fullPage: true });
});
