const fs = require('fs')

console.log('before')

let data = fs.readFileSync('f1.txt')

console.log(' ' + data)

console.log('after')

//Asynchronous way of reading a file

console.log("before");

fs.readFile("f1.txt", cb);

fs.readFile("f2.txt", cb2);

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