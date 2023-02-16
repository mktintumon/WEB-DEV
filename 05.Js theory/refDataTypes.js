let arr = [1 , 3 , 3]

console.log(arr , typeof(arr))


let obj = {
       name : 'Adam',
       age :23
}

console.log(obj , typeof(obj))



function greet(){
       console.log('Hello')
}

console.log(greet , typeof(greet))


// BAWAL
let firstPerson = {
    name:'Hitesh',
    age : 22
}

let secondPerson = firstPerson
console.log(firstPerson)   // hitesh
console.log(secondPerson)  // hitesh

// changes happens in both
secondPerson.name = 'Mrinal'
// firstPerson.age = 25
// secondPerson.age = 30

console.log(firstPerson)    // mrinal
console.log(secondPerson)   // mrinal

