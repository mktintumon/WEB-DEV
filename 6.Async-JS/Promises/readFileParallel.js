const fs = require("fs");

let f1p = fs.promises.readFile("f1.txt");

let f2p = fs.promises.readFile("f2.txt");

let f3p = fs.promises.readFile("f3.txt");

//As readFile is async js , so need a cb to operate
function cb(data) {
  console.log("File Data -> " + data);
}

// output will not come in below order
// It may be same or random order
f1p.then(cb);

f2p.then(cb);

f3p.then(cb);