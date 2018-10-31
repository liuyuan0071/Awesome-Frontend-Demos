const cheerio = require('cheerio');
const axios = require('axios');

let time = new Date().toLocaleDateString();
let msgArr = [];
axios.get(`http://www.dongqiudi.com/match/fetch_new?tab=null&date=${time}&scroll_times=3&tz=-8`)
.then(function (res) {
    let html = res.data.html;
            const $ = cheerio.load(html);
            const $dom_arr = $('tr');
            
            $dom_arr.each((index, elem) => {
                let url = $(elem).text();
                if(url){
                    //console.log("tr:",url);
                    let reg = new RegExp("比赛集锦");
                    let match = url.replace(/\ +/g, "").replace(/[\r\n]/g, " ").replace(reg, "");
                    //console.log("tr:",newnewu);
                    msgArr.push(match);
                }
            });
            console.log(msgArr);
})
