const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')
const getLinkObj = require('./allMatchLink')
const path = require('path')
const fs = require('fs')


let iplPath = path.join(__dirname , "IPL")
function dirCreator(filepath){
    if(fs.existsSync(filepath) == true){
          fs.mkdirSync()
    }
}

request(url , cb)

function cb(error , response , html){
    if(error){
        console.error(err)
    }
    else{
        
        extractLink(html)    
    }
}


function extractLink(html){
    const $ = cheerio.load(html)

    let anchorElement = $('a[data-hover="View All Results"]')
    let link = anchorElement.attr('href')
    //console.log(link)

    let fullLink = "https://www.espncricinfo.com/" + link
    //console.log(fullLink)

    getLinkObj.getAllMatch(fullLink)
    

}









