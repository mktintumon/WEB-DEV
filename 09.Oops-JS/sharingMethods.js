
// Polyfills are the implementation of the features that are given by our browsers, 
// but may not be present in the previous versions of it.


// ************************* BIND() FUNCTION ***************************

// The bind() method "CREATES A NEW FUNCTION" and when that new function is called it set 
// this keyword to the first argument which is passed to the bind method, 
// and if any other sequences of arguments preceding the first argument are passed to the bind 
// method then they are passed as an argument to the new function when the new function is called.

let nameObj = { 
    name: "Mohit"
} 
  
let PrintName = { 
    name: "Ram", 
    sayHi: function () { 
        console.log(this.name);   // --> refer to "Ram"
    } 
} 
  
let HiFun = PrintName.sayHi.bind(nameObj); // --> Now refers to "Mohit" (overrides this keyword of PrintName)
HiFun(); // Mohit




// WITH ARGUMENTS PASSED
let nameObj2 = { 
    name: "Mohit"
} 
  
let PrintName2 = { 
    name: "Ram", 
    sayHi: function (age) { 
        console.log(this.name + " age is " + age);   // --> refer to "Ram"
    } 
} 
  
let HiFun2 = PrintName2.sayHi.bind(nameObj2 , 24); // --> 24 will be passes as argument for age to sayHi function
HiFun2(); // ---> Mohit age is 24




// ********************** CALL() FUNCTION ***************************************

// The call() method calls the function directly and sets this to the first argument passed to the call method
// ** the call method doesn’t return a new function (we can also pass arguments like bind() function)

const student = {
    name : "Mohit",
    sayMyName : function(){
        console.log(this.name);
    }
}

const student2 = {
    name : "Mktintumon",
}

// will override the this keyword in student object
student.sayMyName.call(student2) // will print "Mktintumon"




// ************************************ APPLY() FUNCTION *******************************


// In the apply method, we pass arguments in the form of an array 
// this is only the primary difference between call and apply.


let myObj = { 
    name: "Mohit"
} 
  
let myName = { 
    name: "Mktintumon", 
    sayHi: function (age) { 
        console.log(this.name + " age is " + age); 
    } 
} 

myName.sayHi.apply(myObj, [20]);  // --> pass args in form of array 
