const { test, expect } = require('@playwright/test');

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const DeelPage = require('../pages/DeelPage');

const csvFilePath = path.join(__dirname, '../input.csv');
const csvData = fs.readFileSync(csvFilePath, 'utf8');
const testData = parse(csvData, { columns: true, skip_empty_lines: true });

let deelPage;

test.describe('DemoQA website tests', () => {

    test.beforeEach(async ({ page }) => {
        deelPage = new DeelPage(page);
        await page.goto('/dev/salary-insights');
    });


    for (const row of testData) {
        test(`Test case: ${row.test_case}`, async ({ page }) => {
            await deelPage.enterTextInRole(`${row.Role}`);
            await deelPage.enterTextInCountry(`${row.Country}`)
            await deelPage.clickSearchBtn();
            expect(deelPage.verifySalarySection()).toBeTruthy();

        });
    }

});