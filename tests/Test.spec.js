import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('my first');
  await page.getByPlaceholder('Search').press('ArrowDown');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByPlaceholder('Search').dblclick();
  await page.getByPlaceholder('Search').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Search').fill('first youtube');
  await page.getByPlaceholder('Search').press('ArrowDown');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('link', { name: 'YouTube Home' }).click();
});