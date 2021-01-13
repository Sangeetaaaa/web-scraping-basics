const cheerio = require("cheerio");
const axios = require("axios");

const url = "http://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

const response = axios.get(url);

console.log(response.resolve);

// let $ = cheerio.load(response.data)