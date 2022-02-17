let puppeteer = require('puppeteer')

console.log("Before")

let launchrowser = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    rgs : ['--start-maximized']
})

launchrowser.then(function(browserInstance){
    let newTabOpen = browserInstance.newPage()
    return newTabOpen

}).then(function(newTab){
    console.log("New tab opened")

    let pageWillOpen = newTab.goto('https://www.pepcoding.com/')
    return pageWillOpen

}).then(function(webPage){
    console.log("Website opened")
})

console.log("After")