
// REAL WORLD example 

/*

WORKING OF FETCH 
-> fetch return a promise
-> returns as a readable stream as response
-> we convert that response to json as (res.json())
-> Again res.json() returns a promise 
-> finally we got Json value as response

*/

// npm install node-fetch@2 
const fetch = require('node-fetch');

const API_URL = "https://api.github.com/users/mktintumon";

async function handlePromise(){
    const data = await fetch(API_URL);
    
    const jsonValue = await data.json();

    console.log(jsonValue); 

    // For error handling -> use try-catch 
}

handlePromise();