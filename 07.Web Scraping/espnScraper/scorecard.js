const request = require("request")
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const xlsx = require('xlsx')

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

        for(let j=0 ;  j<allRows.length ; j++){

            let allCols = $(allRows[j]).find('td')
            let useful = $(allCols[0]).hasClass('batsman-cell')

            if(useful == true){
               let playerName = $(allCols[0]).text().trim()
               let runs = $(allCols[2]).text().trim() 
               let balls = $(allCols[3]).text().trim()  
               let fours = $(allCols[5]).text().trim()  
               let sixes = $(allCols[6]).text().trim() 
               let STR = $(allCols[7]).text().trim()

               //template literal use
               console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${STR}`)

               processPlayer(
                teamName,
                oppoName,
                playerName,
                runs,
                balls,
                fours,
                sixes,
                STR,
                venue,
                date,
                result
              );

            }
        }

        console.log("===================================================")
    } 
}

function processPlayer(
    teamName,
    opponentName,
    playerName,
    runs,
    balls,
    fours,
    sixes,
    STR,
    venue,
    date,
    result
  ){
      let teamPath = path.join(__dirname , "IPL" , teamName )
      dirCreator(teamPath)

      let filePath = path.join(teamPath , playerName + ".xlsx")

      let content = excelReader(filePath, playerName)

      //Making json 
      //if key name and value name is same then we only write key name
      let playerObj = {
        playerName,
        teamName,
        opponentName,
        runs,
        balls,
        fours,
        sixes,
        STR,
        venue,
        date,
        result,
      };

      content.push(playerObj)

      excelWriter(filePath , playerName , content)
}

  function dirCreator(folderPath) {
    if (fs.existsSync(folderPath) == false) {
      fs.mkdirSync(folderPath)
    }
  }

  //xlsx npm work

  function excelWriter(fileName, sheetName, jsonData) {
    // Creating a new WorkBook
    let newWB = xlsx.utils.book_new();

    // Json is converted to sheet format (rows and cols)
    let newWS = xlsx.utils.json_to_sheet(jsonData);
    
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, fileName);
  }
  
  function excelReader(fileName, sheetName) {
    // one edge case to handle 
    if (fs.existsSync(fileName) == false) {
      return [];
    }
    let wb = xlsx.readFile(fileName);
  
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans
  }

module.exports={
    psc : processScoreCard
};