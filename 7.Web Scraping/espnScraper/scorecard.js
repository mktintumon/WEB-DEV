const request = require("request")
const cheerio = require('cheerio')

//let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

function processScoreCard(url){
    request(url , cb)

}

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

    console.log('==================================================')

    let innings = $('.card.content-block.match-scorecard-table>.Collapsible')
    let htmlString = ''

    for(let i=0 ; i<innings.length ; i++){
           htmlString += $(innings[i]).html()

           let teamName = $(innings[i]).find('h5').text()
           teamName = teamName.split('INNINGS')[0].trim()
           
           let oppoIdx = (i==0) ? 1 : 0
           let oppoName = $(innings[oppoIdx]).find('h5').text()
           oppoName = oppoName.split('INNINGS')[0].trim()

           console.log(teamName , " vs " ,  oppoName)
           console.log("=========================================================")

           let currInning = $(innings[i])
           let allRows = currInning.find('.table.batsman tbody tr')

        for(let j=0 ;  j< allRows.length ; j++){

            let allCols = $(allRows[j]).find('td')
            let useful = $(allCols[0]).hasClass('batsman-cell')

            if(useful == true){
               let playerName = $(allCols[0]).text().trim()
               let runs = $(allCols[2]).text().trim() 
               let balls = $(allCols[3]).text().trim()  
               let fours = $(allCols[5]).text().trim()  
               let sixes = $(allCols[6]).text().trim() 
               let STR = $(allCols[7]).text().trim()

               console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${STR}`)
            }
        }

        console.log("===================================================")
    } 
}

module.exports={
    psc : processScoreCard
}