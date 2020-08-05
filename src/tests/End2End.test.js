const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true
    });
    page = await browser.newPage();
    await page.goto("http://192.168.2.211:3000");
},30000);
test("find link button to /features",async()=>{
    await page.click("#button-features");
},30000);
// 1
test("renders string counter", async () => {
    await page.waitForSelector(".counter");
    const counter = await page.$eval(".counter", e => e.innerHTML);
    expect(counter).toBe("Counter");
},30000);

// 2
test("render counter state", async () => {
    await page.waitForSelector(".current-count");
    const counterState = await page.$eval(".current-count", e => e.innerHTML);
    expect(counterState).toBe("Current Count: 0");
},30000);

// 3
test("increments counter by 1", async () => {
    await page.waitForSelector(".current-count");
    await page.click("#button-increase");
    const counterState = await page.$eval(".current-count", e => e.innerHTML);
    expect(counterState).toBe("Current Count: 1");
},30000);

//4
test("increments counter by 1", async () => {
    await page.waitForSelector(".current-count");
    await page.click("#button-decrease");
    const counterState = await page.$eval(".current-count", e => e.innerHTML);
    expect(counterState).toBe("Current Count: 0");
    browser.close();
},30000);

