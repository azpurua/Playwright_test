import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test 3', async ({ page }) => {
  await page.goto('https://tienda.mercadona.es/');

  await page.locator('input[id=\'search\']').fill('papa');

  await page.keyboard.press('Enter');

  //await expect(page.locator('//span[contains(@class,\'product-cell__image-overlay\')]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Patatas fritas clásicas' })).toBeVisible();

  await page.getByRole('button', { name: 'Patatas fritas clásicas' }).click();

  await page.pause();
});

test('test 4', async ({ page }) => {
  await page.goto('https://tienda.mercadona.es/');

  await page.locator('input[id=\'search\']').fill('papa');

  await page.keyboard.press('Enter');

  await expect(page.locator('//div[contains(@class,\'product-cell product-cell--actionable\')]')).toBeVisible();

  //await page.getByRole('button', { name: 'Patatas fritas clásicas' }).click();

  const Titles = await expect(page.locator('//div[contains(@class,\'product-cell product-cell--actionable\')]').allInnerTexts());

  await page.pause();
});

test('test 5', async ({ page }) => {
  await page.goto('https://tienda.mercadona.es/');

  await page.getByRole('button', { name: 'cart-button--empty' }).click();


  await page.pause();
});

test('test locators 2', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');

  //await page.getByRole('link', { name: 'Mis compras' }).click();
  await page.getByRole('link', { name: 'Ingresa', exact: true }).click();

  await page.pause();
});


// test('purchase an item', async ({ page }) => {
//    await page.goto('https://www.saucedemo.com/');

//    await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');

//    await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce');

//    await page.getByRole('button', { name: 'Login'}).click();

//    const itemsContainer = await page.locator('#inventory_container .inventory_item').all();

//    const randomIndex = Math.floor(Math.random() * itemsContainer.length);

//    const randomItem = itemsContainer[randomIndex];

//    const expectDescription = await randomItem.locator('.inventory_item_desc').innerText();
//    const expectName = await randomItem.locator('.inventory_item_name').innerText();
//    const expectPrice = await randomItem.locator('.inventory_item_price').innerText();

//    console.log('Name: ' + expectName);
//    console.log('Description: ' + expectDescription);
//    console.log('Price: ' + expectPrice);

//    //await page.pause();
// });