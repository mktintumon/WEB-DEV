
// Find returns the first element that matches the condition 

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let deposit = transactions.find(function(i){
    return i<0
})
console.log(deposit)