const fs = require("fs");
const path = require("path")

//console.log(path.join(__dirname,"/f1.txt"))

let link1 = path.join(__dirname,"/f1.txt")
let link2 = path.join(__dirname,"/f2.txt")
let link3 = path.join(__dirname,"/f3.txt")


console.log("Before");

fs.readFile(link1, cb1);

// Here all output will be in order as we pass function inside a function
// one function process then goes to another function
function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
    fs.readFile(link2, cb2);
  }
}

function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
    fs.readFile(link3, cb3);
  }
}

function cb3(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
  }
}

console.log("After");