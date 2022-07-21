// USER MODEL

/*
**************** Tech knowledge ******************** 

(schema) -> set of features and rules a certain entity should follow

--> how to create a db ->  link share
-->connect to my app -> mongoose 

*/

const mongoose = require('mongoose');

let dbLink = 'mongodb+srv://mktintumon:<password>@cluster0.krtav.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(dbLink)
  .then(()=>{
     console.log('DB connection established');
   })
   .catch((error)=>{
     console.log('Error' , error.message);
   })

// Creating SCHEMA---> only entries written will be added to your db AND nothing else will be added 
let userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true,
    },
    confirmPassword :{
        type : String,
        required : true,
    },
    phoneNumber :{
        type : String,
        minLength : 10,
        maxLength : 10,
    },
    pic :{
        type : String,
        default : 'mohit1.jpg',
    },
    address :{
         type : String,
    }
})   

// model is similar to your collection 
// name of the collection, the set of rules this collection should follow
const FooduserModel = mongoose.model('FooduserModel', userSchema);
module.exports = FooduserModel;