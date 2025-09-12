import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';

test('purchase an item', async ({ page }) => {
   await page.goto('https://www.saucedemo.com/');

   const loginPage = new LoginPage(page);

   await loginPage.loginWithCredentials('standard_user', 'secret_sauce');

   await loginPage.checkSuccessfulLogin();

   const itemsContainer = await page.locator('#inventory_container .inventory_item').all();

   const randomIndex = Math.floor(Math.random() * itemsContainer.length);

   const randomItem = itemsContainer[randomIndex];

   const expectDescription = await randomItem.locator('.inventory_item_desc').innerText();
   const expectName = await randomItem.locator('.inventory_item_name').innerText();
   const expectPrice = await randomItem.locator('.inventory_item_price').innerText();

   console.log('Name: ' + expectName);
   console.log('Description: ' + expectDescription);
   console.log('Price: ' + expectPrice);

   await randomItem.getByRole('button', { name: 'Add to cart' }).click();

   await page.locator('.shopping_cart_link').click();

   const actualName = await page.locator('.inventory_item_name').innerText();
   const actualDescription = await page.locator('.inventory_item_desc').innerText();
   const actualPrice = await page.locator('.inventory_item_price').innerText();

   expect(actualName).toEqual(expectName);
   expect(actualDescription).toEqual(expectDescription);
   expect(actualPrice).toEqual(expectPrice);

   await page.getByRole('textbox', { name: 'First Name'}).fill('Goku');
   await page.getByRole('textbox', { name: 'Last Name'}).fill('Sayayin');
   await page.getByRole('textbox', { name: 'Zip/Postal Code'}).fill('46980');

   await expect(page.getByRole('button', {name: 'Continue'})).toBeVisible();

   await page.getByRole('button', { name: 'Continue'}).click();
   await page.getByRole('button', { name: 'Finish'}).click();

   await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();

   await page.pause();

});
