//File system module

// **************FILES**********//
// used for reading , writing , updating , deleting in a file

const fs = require('fs')

const path = require('path')


let content = fs.readFileSync('file1.txt')
console.log("This is file1 data->" + content)

//Writing -> writeFileSync
fs.writeFileSync('file2.txt' , 'hey mktintumon')

// if the passed file not present then it will create the passed file and do the process
fs.writeFileSync('file3.txt' , 'this file is not present but fs created it and write in it')

//append a data -> appendFileSync -> adds new data in previously written data
fs.appendFileSync('file1.txt', 'this is appended data')

//delete a file -> unLinkSync
fs.unlinkSync('file2.txt')

//************Directories(folders)***************//

//create new folder -> mkdirSync
fs.mkdirSync('mktintumon')

//delete a folder-> rmdirSync
fs.rmdirSync('mktintumon')


// To check whether a directory exists or not ->existsSync -> true or false
//same for checking file exists or not

let exist = fs.existsSync('mktintumon')
console.log(exist)

let statsOfDirectory = fs.lstatSync('mktintumon')
console.log(statsOfDirectory)

console.log('isFile?' , statsOfDirectory.isFile()) //-> check is it file

console.log('isDirectory?', statsOfDirectory.isDirectory()) // -> check is it folder


// readdirSync -> is a method which is used to check content inside a directory
// convert single \ into double in the link -> for working in node

let folderPath = 'C:\\Users\\HP\Desktop\\coding\\WEB-DEV\\Node\\mktintumon'
let foldercontent = fs.readdirSync(folderpath)
console.log("Directory Content   "+ foldercontent)


//copying path -> source path -> destination path

let srcFilePath = 'C:\\Users\\HP\\Desktop\\coding\\WEB-DEV\\Node\\mktintumon\\f1.txt'
let destFilePath = 'C:\\Users\\HP\\Desktop\\coding\\WEB-DEV\\Node\\mktintumon2'

let fileTobeCopied = path.basename(srcFilePath)
console.log(fileTobeCopied)

let destinationPath = path.join(destFilePath,fileTobeCopied)
console.log(destinationPath)

fs.copyFileSync(srcFilePath , destinationPath)
console.log('file copied')