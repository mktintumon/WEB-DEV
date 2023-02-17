//Map function

// 1 .squaring element
let arr =[1, 2, 3, 4, 5]

let sqArr = arr.map(function (i){
    return i*i
})

console.log(sqArr)


// 2 .seperating name using map
let nameArr = ['Mohit kumar' , 'Rajnish ranjan' , 'kaushal kanan']

let seperateArr = nameArr.map(function (i){
    return i.split(' ')
})

console.log(seperateArr)


// 3. usd to inr convertor
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let convertor = transactions.map(function(i){
    // use toFixed(0) in case of decimal answers 
    return i*inrtToUsd

})

console.log(convertor) 