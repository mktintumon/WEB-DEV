
"use Strict"

// return globalObject -> window
console.log(this)


// INSIDE FUNCTION
// returns undefined in strict mode("use Strict")
// In "non-strict" mode it uses "this substitution" and changes undefined to globalObject
function fun(){
    console.log(this);
}
fun() 



// this keyword will depend on how the function will be called

fun() // returns undefined
Window.fun() // returns globalObject



// if a function is defined outside object then its called FUNCTION
// if a function is defined inside object then its called METHOD


// here x is a METHOD
const myObj = {
    a : 10,
    x : function(){
        console.log(this); // returns myObj --> {a:10 , x:f}

        console.log(this.a) // returns 10 {value of a}
    },
};

myObj.x()



// call() , bind() , apply() -> sharing methods
// used to override the this keyword value across objects

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




// INSIDE ARRAOW FUNCTION
// ** arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context)
const obj = {
    name : "Mohit",
    sayMyName : () => {
        console.log(this.name);
         // returns the "globalObject" because arrow function don't provide their own this binding
         // here lexical context of arrow function is obj , which is defined in global space
    }
}

obj.sayMyName()



// INSIDE NESTED ARROW FUNCTION
const obj2 = {
    name : "Mohit",
    sayMyName : function () {
        const hello = () => {
            console.log(this.name);
            // returns the "obj2" object because arrow function don't provide their own this binding
            // here lexical context of arrow function is sayMyName function , which is defined in obj2 object
        };

        hello()
    }
}

obj2.sayMyName()



// INSIDE DOM elements

//  ------> refer to HTML element --> here this.tagName will be "button"
//  <button onclick-{alert(this)}> Click me </button>  


