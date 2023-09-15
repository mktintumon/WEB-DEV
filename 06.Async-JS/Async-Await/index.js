/*  Async function always return a promise
    if we not return promise then it will automatically
    wrap up (int , string etc ) into promise and return it


    Async not always linked with await.
    It also exist independently in JS
*/


const myPromise = new Promise((resolve , reject)=>{
    resolve("My promise data")
})

async function getData(){
    // return "My Data"; ---> automatically wraps into promise 
    return myPromise;
}

const data = getData();
console.log(data);

// handle the promise returned
data.then(data=>console.log(data))