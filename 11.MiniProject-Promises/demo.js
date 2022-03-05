//  Inquirer.js -> strives to be an easily embeddable and 
//  beautiful command line interface for Node.js

var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type : 'list',
        name : 'selection',
        choices : ['choice 1' , 'choice 2']

    } 
  ])
  .then(function(ans) {
    if(ans.selection == 'choice 1'){
        console.log('choice 1 says hello user')
    }
    else{
        console.log('choice 2 says hello user')
    }
  })
  