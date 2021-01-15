const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');




  axios.get('https://www.fundoodata.com/companies-in/mumbai-l5')
  .then(function (response) {
    const $ = cheerio.load(response.data);
    const data = $('.search-result').text()
    // const finalData = JSON.parse(data)
    fs.writeFile('final.csv', data, (err) => {
      console.log(err)
    })
  })
  .catch(function (error) {
    console.log(error);
  })

  
  




