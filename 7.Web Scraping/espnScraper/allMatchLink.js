const request = require('request')
const cheerio = require('cheerio')

const scoreCardObj = require('./scorecard')


function getAllMatchLink(uri){
    request(uri , function(error , response , html){
        if(error){
            console.error(error)
        }
        else{
            extractAllLink(html)
        }
    })
}

//just manage the all links of every match
function extractAllLink(html){
    let $ = cheerio.load(html)

    let scoreCardArr = $('a[data-hover="Scorecard"]')

    for(let i= 0 ; i<scoreCardArr.length ; i++){
        let link = $(scoreCardArr[i]).attr('href')

        let fullLink = 'https://www.espncricinfo.com/' + link
        //console.log(fullLink)

        scoreCardObj.psc(fullLink)
    }
}

module.exports={
    getAllMatch : getAllMatchLink
}