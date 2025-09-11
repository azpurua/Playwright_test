import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone');
  await page.screenshot({ path: 'screenshots/screenshotIphone.png'});
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
  await page.getByRole('button', { name: 'Buscar' }).click();
  //await page.getByTestId('action:understood-button').click();
  //await page.getByRole('link', { name: 'Soy nuevo' }).click();

  await page.screenshot({ path: 'screenshots/screenshot.png'});

});