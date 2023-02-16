//String is a sequence of characters

let str = 'pepcoders'
console.log(str)

//Methods -

//Length of string
console.log('The length of string is' ,str.length)

//extracting a part of a string

//1.slice
//slice(start , end+1)
let slicedStr = str.slice(3)
console.log(slicedStr)


// Replacing String Content
let sayHello = 'Hello Palak'

//Replace Method
//repalce(valueTobeReplaced , valueTobeReplacedWith)

let sayBye = sayHello.replace('Hello' , 'Bye')
console.log(sayBye) // Bye Palak



//ToUpperCase and ToLowerCase

let text1 = 'Hello World'
let text2 = text1.toUpperCase()

console.log(text2)

// toLowerCase
let text3 = text1.toLowerCase()
console.log(text3)

// concatenation (concat Method)
let firstString = 'Hello'
let secondString = 'Ayush'
let concatenation = firstString.concat(" bhai " , secondString)
console.log(concatenation)


//Trim method is used to remove all the whiteSpaces
let text = '            Hello World          '
console.log(text)

let trimmedtext = text.trim()
console.log(trimmedtext)