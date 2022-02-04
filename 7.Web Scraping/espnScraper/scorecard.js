const request = require("request");
const cheerio = require('cheerio')

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'
request(url , cb)

function cb(error , response , html){
     if(error){
         console.log(error)
     }
     else{
         getMatchDetail(html)
     }
}

function getMatchDetail(html){
    let $ = cheerio.load(html)

    let descriptionString = $('.header-info .description')
    let desStringArr = descriptionString.text().split(",")

    let venue = desStringArr[1].trim()
    let date = desStringArr[2].trim()
    
    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text').text()
    
    console.log(venue)
    console.log(date)
    console.log(result)
    
}