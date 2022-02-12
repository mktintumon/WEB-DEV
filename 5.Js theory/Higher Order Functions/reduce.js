let arr = [2 , 3 , 7 , 8 , 1]

// reduce take 2 argument -> (accumulation , value)
// reduce also initializes the accumulation
let addition = arr.reduce(function(sum , value){
      sum = sum + value
      return sum
},0) 

console.log(addition)


// Question 
//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let balance = transactions.filter(function(amount){
       return amount > 0
}).reduce(function(sum , amount){
      return sum+amount
} , 0)


console.log(balance)