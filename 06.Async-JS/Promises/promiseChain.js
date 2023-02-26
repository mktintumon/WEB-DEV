let cart = ["shoes", "shirts", "pens"]

// promise chaining
createOrder(cart)
.then(function(id){
    console.log("Order generated ->" , id);
    return id;
})
.then(function(id){
    return proceedToPay(id);
})
.then(function(payDetails){
    console.log(payDetails);
})
.catch(function(err){
    console.log(err.message);
});



function createOrder(cart){
    let promise = new Promise(function(resolve, reject){
        //validation
        if(!validateCart(cart)){
            let err = new Error("cart is not valid");
            reject(err);
        }

        const orderId = "abc123";
        if(orderId){
            // fake delay 
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    });

    return promise;
}

function validateCart(cart){
    return true;
}

function proceedToPay(id){
    return new Promise(function(resolve, reject){
        resolve("Payment for orderId " + id + " is successful");
    });
}