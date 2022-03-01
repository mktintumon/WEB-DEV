//Question-1 : Return the count of price greater(>=) than 100

const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
  ];

  //return the count of price greater(>=) than 100
  let product = products.map(function(i){
      
        return i.price
      
  }).filter(function(price){
      return price >= 100
  }).length

  console.log(product)


  
// Question - 2 : Get the movie Names from this Array of Objects
//method and only get the movie name which has rating higher than or equal to 8
// use Filter and map  chaining to achaive the objective
var newReleases = [
    {
           "id": 1,
           "title": "Die Hard",
            "rating":9
           
    },
    {
           "id": 2,
           "title": "Bad Boys",
            "rating":7
           
    },
    {
           "id": 3,
           "title": "The Chamber",
           "rating": 10
           
    },
    
];

let movie = newReleases.filter(function(i){
    if(i.rating >= 8){
        return true
    }
}).map(function(i){
    return i.title
})

console.log(movie)


// Question-3 : 
//You have to use map function and have to get all the students name in upperCase
//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord 
//use filter method to approach the problem
let studentRecords = [ {name: 'Abhishek', id: 123, marks : 98 },
          {name: 'Udai', id: 101, marks : 90 },
          {name: 'Himanshu', id: 200, marks : 96 },
          {name: 'Mrinal', id: 115, marks : 75 } ]


let upperName = studentRecords.map(function(i){
       return i.name.toUpperCase()
})   

console.log(upperName)

let marksFilter = studentRecords.filter(function(i){
     return i.marks >= 50 && i.id >= 120
})

console.log(marksFilter)