const fs = require("fs");
const path = require("path");

let link1 = path.join(__dirname,'/f1.txt');
let link2 = path.join(__dirname,'/f2.txt');
let link3 = path.join(__dirname,'/f3.txt');

console.log("before");

let f1p = fs.promises.readFile(link1);

f1p.then(cb);

function cb(data) {
  console.log("File data -> " + data);
  let f2p = fs.promises.readFile(link2);

  f2p.then(cb2);
}

function cb2(data) {
  console.log("File data -> " + data);
  let f3p = fs.promises.readFile(link3);

  f3p.then(cb3);
}

function cb3(data) {
  console.log("File data -> " + data);
}

console.log("after");

// we can improve above code by reducing repeated then calls
// and in each function we replace then call by return the variable

/*
// Method chaining
f1p.then(cb).then(cb2).then(cb3).catch(function(err){
    console.log(err)
})

*/