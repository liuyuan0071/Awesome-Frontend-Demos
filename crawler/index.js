const cheerio = require('cheerio');
const axios = require('axios');

let time = new Date().toLocaleDateString();

// axios.get(`http://www.dongqiudi.com/match/fetch_new?tab=null&date=${time}&scroll_times=3&tz=-8`)
// .then(function (res) {
//     let html = res.data.html;
//             const $ = cheerio.load(html);
//             const $dom_arr = $('tr');
            
//             $dom_arr.each((index, elem) => {
//                 let url = $(elem).text();
//                 if(url){
//                     let reg = new RegExp("比赛集锦");
//                     let match = url.replace(/\ +/g, "").replace(/[\r\n]/g, " ").replace(reg, "");
//                     console.log("tr:" +match)
//                 }
//             });
// })

let matchesArr = [];
axios.get(`http://www.dongqiudi.com/match/fetch_new?tab=null&date=${time}&scroll_times=3&tz=-8`)
    .then(function (res) {
        let html = res.data.html;
        const $ = cheerio.load(html);
        const $dom_arr = $('tr');

        $dom_arr.each((index, elem) => {
            let away = $(elem).children(".away").text().replace(/\ +/g, "").replace(/[\r\n]/g, " ");
            let stat = $(elem).children(".stat").text() || $(elem).children(".vs").text().replace(/\ +/g, "").replace(/[\r\n]/g, " ");
            let home = $(elem).children(".home").text().replace(/\ +/g, "").replace(/[\r\n]/g, " ");
            let match = {};
            if(stat.length >= 1){
                match = {
                    team1: away,
                    score: stat,
                    team2: home
                }
            }else{
                match = {
                    scroe: $(elem).text().replace(/\ +/g, "").replace(/[\r\n]/g, " ")
                }
            }
            matchesArr.push(match);
        });
        console.log(matchesArr)
    })

