import fetch from 'node-fetch';

const api = "https://leetcode.com/mktintumon/";

let promise = fetch(api);

console.log(promise);

promise.then(function(data){
    console.log(data);
})

promise.catch(function(err){
    console.log(err);
})