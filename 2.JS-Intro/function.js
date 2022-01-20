function sayHii(){
    console.log('hiiiiiiiiiiiii')
}

sayHii() // function call

function operator(a , b){
     console.log('Addition = ' , a+b)
     console.log('subtraction = ' , a-b)
     console.log('Multiply =' , a*b)
     console.log('Division =' , a/b)

}


operator(10,5)

// function as first class function
//function Expression

let hello = function(){ // assign function to a variable
    console.log('say hello')
}

hello() // variable call behaves as function call

// ** IIFE - immediately invoked function expression

let add = (function(a,b){
       return a+b
})(10 , 20)

console.log(add)