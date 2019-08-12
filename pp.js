const puppeteer = require("puppeteer");
const cheerio = require('cheerio');

// const scrapingResults = [
//     {
     
//     }
// ]

async function main() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.mypetrolprice.com/petrol-price-in-india.aspx");
    const html  = await page.content();
    const $ = cheerio.load(html);
    let states = [];
    $('#StateDropDownList').find('option').each((i,op) => {
        states.push($(op).text());
    })
    states.forEach(function(state){
        console.log(state);
    });
  
}

main(); 