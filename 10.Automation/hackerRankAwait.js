const loginLink = "https://www.hackerrank.com/auth/login";

// REFACTORING -> using async-await -> extended version of promises

let puppeteer = require("puppeteer");
const codeFile = require("./code");

let email = 'kebegib194@diolang.com'
let password = 'Mohit@123'

console.log("Before");

// IIFE
(async function(){
    
    try {
        let browserWillbeLaunced = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
          });

        let newTab = await browserWillbeLaunced.newPage(); 
        
        await newTab.goto(loginLink)

        await newTab.type("input[id='input-1']", email, { delay: 100 })

        await newTab.type("input[id='input-2']", password, {delay: 100})

        await newTab.click('button[data-analytics="LoginPassword"]', {delay: 100})

        await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab)

        await waitAndClick('input[value="warmup"]', newTab)

        let ChallengesArr = await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
        { delay: 100 });

        console.log("Total Question ->" + ChallengesArr.length);

        await questionSolver(newTab , ChallengesArr[0], codeFile.answers[0])

    } catch (error) {
        
        console.log(error)
    } 
    

})();


// waitAndClick Function
function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
      let waitForModalPromise = cPage.waitForSelector(selector)
      waitForModalPromise
        .then(function () {
          let clickModalPromise = cPage.click(selector, { delay: 100 })
          return clickModalPromise;
        })
        .then(function () {
          resolve();
        })
        .catch(function () {
          reject();
        });
    });
}


// process to solve question
async function questionSolver(page, question, answer){
    try {
        await question.click();

        await waitAndClick(".monaco-editor.no-user-select.vs", page)

        await waitAndClick(".checkbox-input", page)

        await page.waitForSelector(".text-area.custominput")

        await page.type(".text-area.custominput", answer, { delay: 20 })

        await page.keyboard.down('Control')

        await page.keyboard.press('A' , {delay : 20})

        await page.keyboard.press('X' , {delay:20})

        await page.keyboard.up('Control')

        await waitAndClick(".monaco-editor.no-user-select.vs",page);

        await page.keyboard.down('Control')

        await page.keyboard.press('A' , {delay : 20})

        await page.keyboard.press('V' , {delay:20})

        await page.keyboard.up('Control')

        await page.click('.hr-monaco-submit' , {delay : 50})

        
    } catch (error) {
        console.log(error)
    }
}

console.log('After')