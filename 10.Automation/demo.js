let puppeteer = require('puppeteer')

console.log("Before")

// .launch() will return promise which stored in launchBrowser
let launchBrowser = puppeteer.launch({
    headless : false,
    // for full screen in chromium
    defaultViewport : null,
    rgs : ['--start-maximized']
})


launchBrowser.then(function(browserInstance){
    let newTabOpen = browserInstance.newPage() // open new tab
    return newTabOpen

}).then(function(newTab){
    console.log("New tab opened")

    let pageWillOpen = newTab.goto('https://www.pepcoding.com/') // goto('link')
    return pageWillOpen

}).then(function(webPage){
    console.log("Website opened")
})



console.log("After")