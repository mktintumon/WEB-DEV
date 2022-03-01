

function add(a,b){
    console.log('The sum is->', a+b)
}

function sub(a,b){
    console.log('The subtract is->', a-b)
}

function mul(a,b){
    console.log('The product is->', a*b)
}

function div(a,b){
    console.log('The quotient is->', a/b)
}


//exporting the module for use in other file
module.exports={
    addition : add,
    subtraction : sub,
    multiply : mul,
    division : div
}