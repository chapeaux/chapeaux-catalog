import {parse} from "https://deno.land/std/flags/mod.ts";
import puppeteer from "https://deno.land/x/puppeteer@9.0.0/mod.ts";
import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

async function main(args: string[]) {
    const {
        site,
        help,
    } = parse(args);
    if (site) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(site);
        const html = await page.content();
        const $ = cheerio.load(html);
        console.log($('img'))
    } else {
        console.log('No site entered');
    }
}

main(Deno.args);