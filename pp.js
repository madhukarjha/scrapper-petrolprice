const puppeteer = require("puppeteer");
const cheerio = require('cheerio');
const request = require('request-promise');

async function main() {
    const url = "https://www.mypetrolprice.com/petrol-price-in-india.aspx";
    const html = await getHtml(url, false);
    const $ = await cheerio.load(html);
    let states = [];
    $("h2.txtC+div div.W70, h2.txtC+div div.fl, h2.txtC+div div.fnt18").map((i, element) => {
        console.log(element);
    }).get();
    // $('#StateDropDownList').find('option').each((i,op) => {
    //     states.push($(op).text());
    // })
    // states.forEach(function(state){

    //     console.log(state);
    // });
    // await page.waitFor(5000)
    // await page.select('#StateDropDownList', states[1]);
    // await page.waitFor(5000)
    // const selectElem = await page.$('select[id="StateDropDownList"]');
    // await selectElem.type(states[1]);
    // await page.waitFor(5000)
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