// simple promise method of placing coffee order
placeOrder("coffee")
.then(function(orderInfo){
    console.log(orderInfo);
    return orderProcess(orderInfo);
})
.then(function(orderServed){
    console.log(orderServed);
})
.catch(function(err){
    console.log(err);
});


// Async Await -> makes the code cleaner -> extended version of promises
// resolve -> try   and  reject -> catch
async function coffeeOrder(){
    try {
        let order = await placeOrder('coffee')
        console.log(order);
        let processing = await orderProcess(order)
        console.log(processing);
        
    } catch (error) {
        console.log(error);
    }
}

coffeeOrder();



function placeOrder(orderName){
    return new Promise(function(resolve , reject){
        if(orderName === 'coffee'){
            resolve('Order for coffee')
        }
        else{
            reject('Sorry! order not placed')
        }
    })
}

// this function will always resolve as order already taken
function orderProcess(order){
    return new Promise(function(resolve){
        console.log('Order is processing.....')
        setTimeout(function(){
            resolve(`${order} served`)
        },5000)
    })
}




