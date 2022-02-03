const request = require('request')
const cheerio = require('cheerio')

console.log('Before')


request('https://www.worldometers.info/coronavirus/', cb );

function cb(error , response , html){
  if(error){
      console.log(error)
  }
  else{
      handleHtml(html)
  }
}

function handleHtml(html){
    let selTool = cheerio.load(html)

    let contentArr = selTool('.maincounter-number span')

    // we use the .text() function for easy reading 
    let total = selTool(contentArr[0]).text()
    console.log('Total cases:->' , total)

    let death = selTool(contentArr[1]).text()
    console.log('Total deaths:->' , death)

    let recover = selTool(contentArr[2]).text()
    console.log('Total recovered:->' , recover)
}


console.log('After')
