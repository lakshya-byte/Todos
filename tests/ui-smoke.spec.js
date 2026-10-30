const { expect } = require('@playwright/test');

module.exports = async function smoke(page, baseUrl) {
  await page.goto(baseUrl);
  // Ensure heading visible
  await expect(page.getByRole('heading', { name: /todos/i })).toBeVisible();
  const input = page.getByPlaceholder(/what needs to be done/i);
  await expect(input).toBeVisible();

  // Add first todo
  await input.fill('Buy milk');
  await page.getByRole('button', { name: /add/i }).click();
  await expect(page.getByRole('checkbox', { name: 'Buy milk' })).toBeVisible();

  // Toggle first todo
  await page.getByRole('checkbox', { name: 'Buy milk' }).check();
  await expect(page.getByRole('checkbox', { name: 'Buy milk' })).toBeChecked();

  // Add second todo
  await input.fill('Read book');
  await page.getByRole('button', { name: /add/i }).click();
  await expect(page.getByRole('checkbox', { name: 'Read book' })).toBeVisible();

  // Delete first todo
  await page.getByRole('button', { name: /delete/i }).first().click();
  await expect(page.getByRole('checkbox', { name: 'Buy milk' })).not.toBeVisible();

  // Verify second todo still present
  await expect(page.getByRole('checkbox', { name: 'Read book' })).toBeVisible();
};
