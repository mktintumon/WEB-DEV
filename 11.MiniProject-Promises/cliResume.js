const inquirer = require('inquirer')
const cp = require('child_process')


function displayList() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                choices: ['About', 'Skills', 'Github Repo', 'Projects']

            }
        ])
        .then(function (ans) {
            if (ans.selection == 'About') {
                console.log(`I am a computer science graduate and an aspiring software developer.
                            Having good knowledge in DS and Algorithms.My interest include web 
                            development and open source contribution.I am a hard working individual 
                            and always bound myself in smaller goals for achieving bigger goals.`)

                displayNext()
            }
            else if (ans.selection == 'Skills') {
                console.log('Java , Javascript , NodeJs , ReactJs , Automation , WebScraping')

                displayNext()
            }
            else if (ans.selection == 'Github Repo') {
                cp.execSync('start chrome https://github.com/mktintumon')

                displayNext()
            }
            else if (ans.selection == 'Projects') {
                cp.execSync('start chrome https://www.linkedin.com/in/mohit-kr2930/details/projects/')

                displayNext()
            }
        })
}

displayList()


function displayNext() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                choices: ['Go back', 'Exit']

            }
        ])
        .then(function (ans) {
            if (ans.selection == 'Go back') {
                displayList()
            }
            else if (ans.selection == "Exit") {
                console.log('Resume closed')
            }
        })
}
