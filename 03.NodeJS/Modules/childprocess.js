
// child process is node module used to create sub process within a script
// we can do different task within script

// we can also run other file from this file
// Error->Buffer -> then concate with any string to get result 

const cp = require('child_process')

console.log('opening calculator')
cp.execSync('calc') // open calculator
console.log('opened calculator')

cp.execSync("code") // open vs code

cp.execSync("start chrome https://github.com/mktintumon") // open->chrome->website
cp.execSync("start firefox https://leetcode.com/mktintumon") // open->firefox->website

