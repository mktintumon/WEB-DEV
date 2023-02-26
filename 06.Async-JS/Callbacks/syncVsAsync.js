const fs = require('fs')

//Synchronous JS  -> sequencially read line by line

console.log("Before")

let data = fs.readFileSync("C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\06.Async-JS\\Callbacks\\f1.txt")
console.log(" " + data)

console.log("After")


// ASynchronous JS

console.log("Before")

let link1 = "C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\06.Async-JS\\Callbacks\\f1.txt"
let link2 = "C:\\Users\\HP\\OneDrive\\Desktop\\WEB-DEV\\06.Async-JS\\Callbacks\\f2.txt"

fs.readFile(link1 , cb)
fs.readFile(link2 , cb2)

function cb(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(" " + data)
    }
}

function cb2(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(" " + data)
    }
}

console.log("After")