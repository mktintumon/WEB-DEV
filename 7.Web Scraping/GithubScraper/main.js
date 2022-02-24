let url = 'https://github.com/topics'
const request = require('request')
const cheerio = require('cheerio')
const getReposPageHtml = require('./reposPage')
request(url , cb)

function cb(err , response , html){
    if(err){
        console.log(err)
    }
    else{
        //console.log(html)
        getTopicLink(html)
    }
}

function getTopicLink(html){
    let $ = cheerio.load(html)
    let linkArr = $(".no-underline.d-flex.flex-column.flex-justify-center")

    for(let i=0 ; i<linkArr.length ; i++){
       let href = $(linkArr[i]).attr("href")
       
       let topic = href.split("/").pop()
       
       let fullLink = `https://github.com/${href}`
       getReposPageHtml(fullLink , topic)
    }
}