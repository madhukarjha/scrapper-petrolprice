const puppeteer = require("puppeteer");
const cheerio = require('cheerio');

const scrapingResults = [
    {
     
    }
]

async function main() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    const html  = await page.content();
    const $ = cheerio.load(html);
    
}

main();