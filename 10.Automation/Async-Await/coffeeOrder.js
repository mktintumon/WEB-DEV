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

function orderProcess(order){
    return new Promise(function(resolve){
        console.log('Order is processing')
        resolve(`${order} served`)
    })
}

// solution via promise
placeOrder('coffee')
.then(function(demand){
    console.log(demand)

    let orderIsProcessed = orderProcess(demand)
    return orderIsProcessed
})
.then(function(orderServed){
    console.log(orderServed)
}).catch(function(err){
    console.log(err)
})


// solution via async-await
async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced)

        let processedOrder = await orderProcess(orderPlaced)
        console.log(processedOrder)
        
    } catch (error) {
        console.log(error)
    }
}

serveOrder()