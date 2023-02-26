const fs = require("fs");
const path = require("path");

console.log("Before");

let link = path.join(__dirname,'/f1.txt');

// fs.readFile(link , function(err , data){
//        if(err){
//               console.log(err)
//        }
//        console.log('File Data -> ' + data)
// })

let promise = fs.promises.readFile(link);

console.log(promise)

//FullFilled
promise.then(function (data) {
  console.log("File Data -> " + data);
});

// rejected
promise.catch(function (err) {
  console.log(err);
});



console.log("After");