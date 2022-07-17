const express = require("express");

const app = express();

app.use(express.json());

// Middleware -> its a function that modifies request and response cycle
app.post("/simple", function bodyChecker(req, res, next) {
    let data = req.body;
    // Object.keys(data)=>["name","age"]
    let length = Object.keys(data).length;
    // console.log("hello",keysArr.length);
    if (length == 0) {
        res.end("Kindly enter data in the body");
    } else {
        next();
    }
})
app.post("/simple", function (req, res) {
    console.log("data", req.body);
    res.end("simple post output");
})


app.listen(3000, function () {
    console.log("server started at port 3000");
})

