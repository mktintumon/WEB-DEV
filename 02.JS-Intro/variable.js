var flag = true

var num = 13
var num = 14 // var can be re-initialized and re-assigned

for(var i=2 ; i*i<num ; i++){
      if(num%i==0){
          flag = false
          break
      }
}

if(flag){
    console.log('Number is prime')
}
else{
    console.log('Number is not prime')
}

let a = 10
a = 5            // redeclaration not allowed
console.log(a)   // reassignment allowed

const b = 100
b = 50            // redeclaration not allowed
console.log(b)    // reassignment not allowed
