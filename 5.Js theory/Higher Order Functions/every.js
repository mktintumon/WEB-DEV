

// Every returns true if every element satisfies the condition , else return false
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let deposit = transactions.every(function(i){
    return i>0
})
console.log(deposit)