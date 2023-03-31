//Array

let arr = ["Hi", "I", "am", "Mohit"];

// let a = arr[1] // I
// let b = arr[0] // Hi

//Destructuring

let [a, b, c, d, e = "bye"] = arr;

console.log(a, b, c, d, e);



//Objects -


// let obj = {
//        pname : 'Adam',
//        state : 'New York',
//        pincode : 123456
// }


// let {state, pname , pincode} = obj

// console.log(pname , state , pincode)



//Nested Objects - 

let obj2 = {
    name: "Adam",
    address: {
      country: "USA",
      state: {
        stateName: "New York",
        pin: 123456,
      },
    },
  };


let {name} = obj2

let {address : {country}} = obj2

let {address : {state : {pin : pincode}}} = obj2

console.log(country)

console.log(pincode)


console.log(name)