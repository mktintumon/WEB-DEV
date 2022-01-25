const fs = require('fs')

//Synchronous JS

console.log("Before")

let data = fs.readFileSync("f1.txt")
console.log(" "+data)

console.log("After")


// ASynchronous JS

console.log("Before")

fs.readFile("f1.txt" , cb)
fs.readFile("f2.txt" , cb2)

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