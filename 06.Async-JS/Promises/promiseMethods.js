const p1 = new Promise((resolve , reject)=>{
    //setTimeout(()=> resolve("P1 resolved") , 3000);
    setTimeout(()=> reject("P1 rejected") , 3000);
})

const p2 = new Promise((resolve , reject)=>{
    //setTimeout(()=> resolve("P2 resolved") , 1000);
    setTimeout(()=> reject("P2 rejected") , 1000);
})

const p3 = new Promise((resolve , reject)=>{
    //setTimeout(()=> resolve("P3 resolved") , 5000);
    setTimeout(()=> reject("P3 resolved") , 5000);
})


/* .all will wait for all the promises to execute then show the results in array 
    if any promise fails then it will show the error from that promise immediately


    Promise.all([p1,p2,p3])
    .then(res=>{
        console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })
*/



/* .allSettled wait for all the promises to get resolved and then 
    show the results of each promise in array format (fulfilled or rejected)


    Promise.allSettled([p1,p2,p3])
    .then(res=>{
        console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })
*/



/* .race will do the racing means it will return the first result of 
    first settled promise either it is fulfilled or rejected 


    Promise.race([p1,p2,p3])
    .then(res=>{
        console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })
*/



/*
    .any will wait for the first resolved (settled) promise to show the output.
    If all the promises gets rejected then it will show aggregated errors


    Promise.any([p1,p2,p3])
    .then(res=>{
        console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })
*/
