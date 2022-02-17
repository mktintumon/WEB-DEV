const loginLink = "https://www.hackerrank.com/auth/login";

let puppeteer = require('puppeteer')

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
})



