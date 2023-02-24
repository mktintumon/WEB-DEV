//File system module

// **************FILES**********//
// used for reading , writing , updating , deleting in a file

const fs = require('fs')

const path = require('path')

let content = fs.readFileSync('03.NodeJS\\Modules\\test.txt')
console.log("This is file1 data->" + content)

//Writing -> writeFileSync -> updates the existing file
fs.writeFileSync('03.NodeJS\\Modules\\test.txt' , 'hey Mohit , what are you doing')

//if the passed file not present then it will create the passed file and do the process
fs.writeFileSync('03.NodeJS\\Modules\\file.txt' , 'this file is not present but fs created it and write in it')

//append a data -> appendFileSync -> adds new data in previously written data
fs.appendFileSync('03.NodeJS\\Modules\\test.txt', '-> new data added by fs ')

//delete a file -> unLinkSync
fs.unlinkSync('03.NodeJS\\Modules\\file.txt')



//************Directories(folders)***************//

//create new folder -> mkdirSync
fs.mkdirSync('03.NodeJS\\Modules\\folder1')

//delete a folder-> rmdirSync
fs.rmdirSync('C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\03.NodeJS\\Modules\\mk')


// To check whether a directory exists or not ->existsSync -> true or false
//same for checking file exists or not

let exist = fs.existsSync('folder1')
console.log(exist)

let statsOfDirectory = fs.lstatSync('folder1')
console.log(statsOfDirectory)

console.log('isFile?' , statsOfDirectory.isFile()) //-> check is it file

console.log('isDirectory?', statsOfDirectory.isDirectory()) // -> check is it folder


// readdirSync -> is a method which is used to check content inside a directory
// convert single \ into double in the link -> for working in node

let folderPath = 'C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\03.NodeJS\\Modules\\folder1'
let foldercontent = fs.readdirSync(folderPath)
console.log("Directory Content   "+ foldercontent)


//copying path -> source path -> destination path

let srcFilePath = 'C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\03.NodeJS\\Modules\\folder1\\f1.txt'
let destFilePath = 'C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\03.NodeJS\\Modules'

let fileTobeCopied = path.basename(srcFilePath)
console.log(fileTobeCopied)

let destinationPath = path.join(destFilePath,fileTobeCopied)
console.log(destinationPath)

fs.copyFileSync(srcFilePath , destinationPath)
console.log('file copied')