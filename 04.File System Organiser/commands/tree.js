const fs = require('fs')
const path = require('path')

function treeFn(dirpath){
   if(dirpath == undefined){
       console.log("Enter valid command")
   }
   else{
       //check if that path exists or not
       let doesExist = fs.existsSync(dirpath)
       if(doesExist==true){
           treeHelper(dirpath , " ")
       }
   }
}

function treeHelper(targetPath, indent){
    //path exists , so check inside folder by lstat
    // then check inside item is folder or file
    let isFile = fs.lstatSync(targetPath).isFile() //-> true or false


    if(isFile == true){
        //it is file
        let fileName = path.basename(targetPath)
        console.log(indent + "├──" + fileName);// file display
  
    }
    else{
        //it is folder
        let dirName = path.basename(targetPath)
        console.log(indent + "└──" + dirName); // folder display
    

        // taking out the items of test folder
        let children = fs.readdirSync(targetPath)

        for(let i=0 ; i<children.length ; i++){
            let childPath = path.join(targetPath , children[i])

            //use recursion to repeat the process
            treeHelper(childPath , indent + "\t")

        }
  }
}


module.exports={
   treeKey : treeFn
}