
// Some -> returns true even if any one of the element satisfies conditions, else return false
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let deposit = transactions.some(function(i){
    return i>0
})
console.log(deposit)