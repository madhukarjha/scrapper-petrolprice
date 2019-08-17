const puppeteer = require("puppeteer");
const cheerio = require('cheerio');
const request = require('request-promise');

async function main() {
    const url = "https://www.mypetrolprice.com/petrol-price-in-india.aspx";
    const html = await getHtml(url, false);
    const $ = await cheerio.load(html);
    let states = [];

    $(".container > #mainDiv").map((i, element) => {
        // state
        const state = $(element).parent().parent().prev().text();
        // city
        let elementObj = $(element).find(".W70.fl.fnt18");
        const city = elementObj.text() ? elementObj.text().trim() : elementObj.text();

        // price
        elementObj = $(element).find(".W60.fl > b");
        const price = elementObj.text();

        // date
        elementObj = $(element).find(".displayInlineBlock.boderBox.fnt13.fr");
        const date = elementObj.text() ? elementObj.text().trim() : elementObj.text();
        console.log(state + ' - ' + city + ' - ' + price +  ' - ' + date);
    }).get(); 
}

async function getHtml(url, headless) {
    let html = '';
    if (headless) {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(url);
        html = await page.content(url);
        return html;
    }
    else {
        html = await request.get(url);
        return html;
    }
}

main();
