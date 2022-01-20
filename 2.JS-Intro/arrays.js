// In js array can be of different data set

let arr = []

let car = ['ferrari' , 2 , null]

let car2= ['ferrari' , 'Tesla' , 'BMW' , 'jaguar']
// accessing the element
console.log(car2[1])

// replacing element
car2[2]= 'Alto'
console.log(car2)

//Add element
car2[6]= 'KIA'
console.log(car2) // index 4 and 5 will be empty item

//ARRAYS methods

//length
console.log(car2.length)

//pop() - remove from end
car2.pop()
console.log(car2)

//push('') - add in the end
car2.push('Maruti')
console.log(car2)

//shift() - remove from beginning
car2.shift()
console.log(car2)

//unshift('') - add in the beginning
car2.unshift('Bentley')
console.log(car2)

//Multidimentional Array
let matrix = [
    [1 , 2, 3],
    [4 , 5, 6],
    [7 , 8, 9]
]

console.log(matrix[2][1])
