const fs = require("fs");

console.log("Before");

fs.readFile("f1.txt", cb1);

// Here all output will be in order as we pass function inside a function
// one function process then goes to another function
function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
    fs.readFile("f2.txt", cb2);
  }
}

function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
    fs.readFile("f3.txt", cb3);
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