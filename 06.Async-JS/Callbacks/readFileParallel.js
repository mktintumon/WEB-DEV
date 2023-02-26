const fs = require('fs')
const path = require('path')

let link1 = path.join(__dirname,"/f1.txt")
let link2 = path.join(__dirname,"/f2.txt")
let link3 = path.join(__dirname,"/f3.txt")

console.log('before')

let data = fs.readFileSync(link1)
let data2 = fs.readFileSync(link2)
let data3 = fs.readFileSync(link3)

console.log(' ' + data)
console.log(' ' + data2)
console.log(' ' + data3)

console.log('after')



//Asynchronous way of reading a file

console.log("before");

fs.readFile(link1, cb);

fs.readFile(link2, cb2);

function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
  }
}

function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
  }
}

console.log("after");