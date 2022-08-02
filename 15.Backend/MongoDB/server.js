const express = require('express');
const app = express();

// npm install cookie-parser
const cookieParser = require("cookie-parser");

//npm install jsonwebtoken
const jwt = require("jsonwebtoken");
const secrets = require("./secrets")

//represent collections
const FoodUserModel = require('./mongoose')

app.use(express.json());
app.use(cookieParser())

// async behaviour

// SIGNUP
app.post('/signup', async (req, res) => {
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
})


// LOGIN
app.post('/login', async (req, res) => {
    try {
        let data = req.body;
        let { email, password } = data;

        if (email && password) {
            let user = await FoodUserModel.findOne({ email: email });

            if (user) {
                if (user.password == password) {
                    // argument -> payload and secrets and algoritm (date->optional)
                    const token = jwt.sign({
                        data: user["_id"],
                        // expiry of 1 day
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
                    }, secrets.JWTSECRETS);

                    res.cookie("JWT", token);
                    res.end("Login successful!");
                }
                else {
                    res.end("Wrong password. Login failed!");
                }
            }
            else {
                res.end("User with this email not exists");
            }
        }
        else {
            res.end("Kindly Enter your email and password both!");
        }


    } catch (err) {
        res.end(err.message);
    }
})


//FORGET PASSWORD
app.patch('/forgetPassword', async (req, res) => {
    try {
        let { email } = req.body;
        let expiryTime = Date.now() + 5 * 60 * 1000; // 5 minutes
        let otp = otpGenerator();

        let user = await FoodUserModel.findOneAndUpdate({
            email: email,
        },
            { otp: otp, otpExpiry: expiryTime },
            { new: true });

        console.log(user);
        res.json({
            data: user,
            "message": "OTP has been sent successfully"
        })

    } catch (error) {
        res.end(error.message);
    }
})

function otpGenerator() {
    // 6 digit otp
    return Math.floor(100000 + Math.random() * 900000)
}


// RESET PASSWORD
app.patch('/resetPassword', async (req, res) => {
    try {
        let { otp, password, confirmPassword, email } = req.body;

        //search user on basis of otp -> if expiryTime is not there
        // if expiryTime is present then search user on basis of email
        let user = await FoodUserModel.findOne({ email });
        let currTime = Date.now();

        if (currTime > user.otpExpiry) {
            // delete key -> get user doc -> remove unwanted keys -> save to db
            user.otp = undefined;
            user.otpExpiry = undefined;
            await user.save();

            res.json({
                message: "Otp Expired"
            })
        }
        else {
            if (user.otp != otp) {
                res.json({
                    message: "Otp doesn't match"
                })
            }
            else {
                user = await FoodUserModel.findOneAndUpdate(
                    { otp, email },
                    { password, confirmPassword },
                    { runValidators: true, new: true });

                // delete key -> get user doc -> remove unwanted keys -> save to db
                user.otp = undefined;
                user.otpExpiry = undefined;
                await user.save();

                res.json({
                    data: user,
                    message: "Password for the user resets"
                })
            }
        }

        console.log(user);

    } catch (error) {
        res.end(error.message);
    }
})


// Get All user information from database
app.get('/users', protectRoute, async (req, res) => {
    try {
        let users = await FoodUserModel.find();
        res.json(users);

    } catch (error) {
        res.end(error.message);
    }
})

// Get single user information from database -- logged In user
app.get('/user', protectRoute, async (req, res) => {
    try {
        const userId = req.userId;
        const user = await FoodUserModel.findById(userId);
        res.json({
            data: user,
            message: "Data of user sent"
        })

    } catch (error) {
        res.end(error.message);
    }
})

function protectRoute(req, res, next) {
    // console.log(req.cookies);
    const cookies = req.cookies;
    const JWT = cookies.JWT;

    try {
        if (cookies.JWT) {
            console.log("ProtectRoute Encountered");

            //verify token
            let token = jwt.verify(JWT, secrets.JWTSECRETS);
            console.log("Encrypted token", token);
            let userId = token.data;
            console.log("userId", userId);
            req.userId = userId

            next();
        }
        else {
            console.log("Kindly login");
        }

    } catch (err) {
        console.log(err);

        if (err.message == "invalid signature") {
            res.end("Token invalid kindly login");
        } else {
            res.end(err.message);
        }
    }
}

app.listen(3000, function () {
    console.log("server started at port 3000");
})
