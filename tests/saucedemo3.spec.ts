import { test, expect } from '@playwright/test';

test('purchase an item', async ({ page }) => {
   await page.goto('https://www.saucedemo.com/');

   await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');

   await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce');

   await page.getByRole('button', { name: 'Login'}).click();

   const itemsContainer = await page.locator('#inventory_container .inventory_item').all();

   const randomIndex = Math.floor(Math.random() * itemsContainer.length);

   const randomItem = itemsContainer[randomIndex];

   const expectDescription = await randomItem.locator('.inventory_item_desc').innerText();
   const expectName = await randomItem.locator('.inventory_item_name').innerText();
   const expectPrice = await randomItem.locator('.inventory_item_price').innerText();

   console.log('Name: ' + expectName);
   console.log('Description: ' + expectDescription);
   console.log('Price: ' + expectPrice);

   //await page.pause();
});