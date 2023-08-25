//write a function to add two numbers and print their sum (function Expression)


// let add =(a , b)=>{
//       console.log(a+b)
// }

// add(3 , 4)



// var regularFunction = function(name){
//        console.log(`I am ${name}`)
// }


// let arrowFunction = name => console.log(`I am ${name}`)

// regularFunction('Adam')

// arrowFunction('Steve')



// let test = () => {
//     console.log(this) // {}
// }
// test()


let person = {
       name : 'Adam',
       age : 24 ,

       // will not work
       showDetailsArrow : ()=>{
              console.log(this.name + ' ' + this.age)
       },

       showDetails : function(){
              console.log(this.name + ' ' + this.age);

              // here arrow function will work - IIFE
              (()=>{
                     console.log(this.name + " " + this.age);
              })();
       },
}


person.showDetailsArrow() // undefined undefined
person.showDetails()  // Adam 27