
// Async and await --> combo used to handle the promise 
// Await can only be used inside an async function and before any promise

const myPromise = new Promise((resolve , reject)=>{
    resolve("My promise gets resolved!!!")
})


async function getData(){
    const promiseValue = await myPromise;
    console.log(promiseValue);
}

getData()