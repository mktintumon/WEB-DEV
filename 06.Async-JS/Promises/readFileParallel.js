const fs = require("fs");
const path = require("path");

let link1 = path.join(__dirname,'/f1.txt');
let link2 = path.join(__dirname,'/f2.txt');
let link3 = path.join(__dirname,'/f3.txt');

let f1p = fs.promises.readFile(link1);

let f2p = fs.promises.readFile(link2);

let f3p = fs.promises.readFile(link3);

//As readFile is async js , so need a cb to operate
function cb(data) {
  console.log("File Data -> " + data);
}

// output will not come in below order
// It may be same or random order
f1p.then(cb);

f2p.then(cb);

f3p.then(cb);