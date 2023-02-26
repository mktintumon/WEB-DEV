let cart = ["shoes", "shirts", "pens"]

let promise = createOrder(cart);

console.log(promise);

promise
.then(function(data){
    console.log("Order generated ->" , data);
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