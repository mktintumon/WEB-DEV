
// Difference between .then() VS Async-await 

/* .then() will not wait for promise to solve 

   Await wait till the promise get resolved then proceed.
   It disables the handlePromise() call and empties the call stack.
   As soon as promise resolved, handlePromise() activates again 
   and resumes the work from where it left the work.

   NOTE -> JS is a Synchronous Single-Threaded language
*/


const p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Promise-1 resolved!!!")
    },5000)
})

const p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Promise-2 resolved!!!")
    },10000)
})


// TRY with exchanging times of p1 and p2 in setTimeOut
async function handlePromise(){
    console.log("Hello My Dear....");

    console.log("First promise-> ");
    const val1 = await p1;
    console.log(val1);

    console.log("Second promise-> ");
    const val2 = await p2;
    console.log(val2);

    console.log("Bye Bye My Dear!!!");
}


/*  Traditional .then() method

async function handlePromise(){
    console.log("Hello My Dear!!!");
    const val1 = p1.then(data=>console.log(data));
    console.log(val1);

    const val2 = p2.then(data=>console.log(data));
    console.log(val2);
    console.log("Bye Bye My Dear!!!");
}

OUTPUT -->  Hello My Dear!!!
            Promise { <pending> }
            Promise { <pending> }
            Bye Bye My Dear!!!
            Promise-1 resolved!!!
            Promise-2 resolved!!!

*/

handlePromise()