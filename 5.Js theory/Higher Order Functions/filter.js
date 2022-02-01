// Filter function

// 1. Filter out even numbers
let arr = [1,2,3,4,5,6,7,8,9,10]

let evenNum = arr.filter(function(i){
     if(i%2 == 0){
         return true
     }
})

console.log(evenNum)


// 2. filter out profit transactions
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profit = transactions.filter(function(i){
     if( i>0 ){
         return true
     }
})

console.log(profit)

