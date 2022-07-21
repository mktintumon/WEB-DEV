const express = require('express');
const app = express();

//represent collections
const FoodUserModel = require('./mongoose')

app.use(express.json());

// async behaviour
app.post('/signup' , async (req, res)=>{
    // name-->password-->confirmpassword-->phonenumber-->email-->address
    try {
        let data = req.body;

        // to create a document inside userModel
        let newUser = await FoodUserModel.create(data);
        console.log(newUser);
        res.end("data recieved");
    } catch (err) {
        res.end(err.message);
    }

    /*   output recieved ----> mongoDB gives unique id to every user
         
        {
            _id: new ObjectId("62d8e93c26a645e41e9a32c8"),
            name: 'mohit',
            email: 'abcd@gmail.com',
            password: 'abcd',
            confirmPassword: 'abcd',
            pic: 'mohit1.jpg',
            __v: 0
        }
    
    */

})

app.listen(3000 , function(){
    console.log("server started at port 3000");
})