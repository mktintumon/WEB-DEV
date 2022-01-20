// We will be creating a File System Organizer

//   Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const fs = require('fs')
const path = require('path')

//let input = process.argv[2]
let inputArr = process.argv.slice(2); //updated 

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };

//let command = input
let command = inputArr[0]

switch(command){
    case 'tree':
        console.log("Tree Implemented")
        break;
    case 'organisor':
          organisefn(inputArr[1])
          break; 
    case 'help':
       helpfn()
        break;   

    default:
        console.log("Please input valid command")    
        break;

}


function helpfn(){
    console.log(`List of commands to use-
                     1.) Tree command - node fo.js tree <foldername>
                     2.) Organisor command- node fo.js organisor <foldername>
                     3.) Help command - node fo.js help
                     `)   
}

function organisefn(dirname){
let destPath

   if(dirname == undefined){
       console.log("Please enter a valid directory path")
       return;
   }
   else{
       let doesExist = fs.existsSync(dirname)
       //console.log(doesExist)

       if(doesExist==true){
           destPath =path.join(dirname , 'organised_file')

             if(fs.existsSync(destPath)==false){
             fs.mkdirSync(destPath)
             }
             else{
             console.log('Folder already exists')
             }
        }

        else{
        console.log('Please enter valid path')
        }
   }

   organiseHelper(dirname,destPath)
}


function organiseHelper(src , dest){
    
}