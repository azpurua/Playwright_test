import { test, expect } from '@playwright/test';

test('test web table', async ({ page }) => {
    await page.goto('https://cosmocode.io/automation-practice-webtable/');

    const tableContainer = await page.locator("xpath=//table[@id='countries']");
    
    const rows = await tableContainer.locator("xpath=.//tr").all();

    const countries: Country[] = [];

    console.log('Number of rows: ' + rows.length);

    for(let row of rows) {
        let country: Country = {
            name: await row.locator("xpath=.//td[2]").innerText(),
            capital: await row.locator("xpath=.//td[3]").innerText(),
            currency: await row.locator("xpath=.//td[4]").innerText(),
            language: await row.locator("xpath=.//td[5]").innerText()
        };
        countries.push(country);
    }

    // for(let pepito of countries) {
    //         console.log(pepito);
    // }

    const countriesWherePeopleSpeakSpanish = countries.filter(c => c.language === 'Spanish');
    console.log('Countries where people speak Spanish: ');
    for(let country of countriesWherePeopleSpeakSpanish) {
            console.log(country);
    }

/*     const row1 = rows.at(1);

    const countryName = await row1?.locator("xpath=.//td[2]").innerText();
    const countryCapital = await row1?.locator("xpath=.//td[3]").innerText();
    const countryCurrency = await row1?.locator("xpath=.//td[4]").innerText();
    const countryLanguage = await row1?.locator("xpath=.//td[5]").innerText();

    console.log('Country name: ' + countryName);
    console.log('Country capital: ' + countryCapital);
    console.log('Country currency: ' + countryCurrency);
    console.log('Country language: ' + countryLanguage); */

    
   //await page.pause();
});

interface Country{
    name: string;
    capital: string;
    currency: string;
    language: string;
}


/*
    element container: //table[@id='countries']
    //tr  -> rows
    //th  -> headers
    //td  -> columns

    //table[@id='countries']//tr[2]//td[1]  -> Check
    //table[@id='countries']//tr[2]//td[2]  -> Country
    //table[@id='countries']//tr[2]//td[3]  -> Capital
    //table[@id='countries']//tr[2]//td[4]  -> Currency
    //table[@id='countries']//tr[2]//td[5]  -> PrimaryLanguage
*/