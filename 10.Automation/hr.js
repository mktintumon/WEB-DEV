const loginLink = "https://www.hackerrank.com/auth/login";

let puppeteer = require('puppeteer')
let codeFile = require('./code')

let email = 'kebegib194@diolang.com'
let password = 'Mohit@123'

let page //global var


let launchBrowser = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    rgs : ['--start-maximized']
})


launchBrowser.then(function(browserInstance){
    let newTabOpen = browserInstance.newPage() 
    return newTabOpen

}).then(function(newTab){
    console.log("New tab opened")
    
    page = newTab // value assigned to global var

    let pageWillOpen = newTab.goto(loginLink) 
    return pageWillOpen

}).then(function(){
    let typeEmail = page.type("input[id='input-1']" , email , {delay : 100,})
    return typeEmail

}).then(function(){
    let typePassword = page.type("input[id='input-2']" , password , {delay : 100,} )
    return typePassword

}).then(function(){
    let loginPromise = page.click('button[data-analytics="LoginPassword"]', {delay: 100,})
    return loginPromise

}).then(function(){

    let algoWillBeClickedPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]' , page)
    return algoWillBeClickedPromise

}).then(function(){

    let getToWarmupPromise = waitAndClick('input[value="warmup"]', page)
    return getToWarmupPromise

}).then(function(){

    let challengesArrPromise = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
    { delay: 100 })
    return challengesArrPromise

}).then(function(questionArr){
    console.log("No. of questions ->" + questionArr.length)

    let questionWillBeSolvedpromise = questionSolver(page , questionArr[0] , codeFile.answers[0] )
})



function waitAndClick(selector , currPage){
   return new Promise(function(resolve , reject){
       let waitForModalPromise = currPage.waitForSelector(selector)

       waitForModalPromise
            .then(function(){
                let clickModalPromise = currPage.click(selector , {delay : 100})
                return clickModalPromise
            })
            .then(function(){
                resolve()
            })
            .catch(function(){
                reject()
            })
    })
}


function questionSolver(page , question , answer){
    return new Promise(function(resolve , reject){
      
        let questionWillBeClickedPromise = question.click()
        questionWillBeClickedPromise.then(function(){
            console.log("done")
        })
    })
}