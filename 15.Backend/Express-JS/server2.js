const express = require("express");

const app = express();

/*   CASE - 1
    
    app.get("/simple", function (req, res) {
        res.end("simple2 output");
    })
    app.get("/simple", function (req, res) {
        res.end("simple1 output");
    })
    app.get("/simple", function (req, res) {
        res.end("simple output");
    })
*/


/*   CASE - 2

    app.use(function (req, res) {
        res.end("use will always run");
    })
    app.post("/simple", function (req, res) {
        res.end("simple post output");
    })
    app.get("/simple", function (req, res) {
        res.end("simple get output");
    })
    app.patch("/simple", function (req, res) {
        res.end("simple patch output");
    })
    app.delete("/simple", function (req, res) {
        res.end("simple patch output");
    })
*/


/*   CASE - 3 

    ********  user defined middleware -> call next()  ********

    app.use(function (req, res, next) {
        console.log("use will always run");
        next();
    })
    app.post("/simple", function (req, res) {
        res.end("simple post output");
    })
    app.post("/simple", function (req, res) {
        res.end("simple1 post output");
    })
    app.listen(3000, function () {
        console.log("server started at port 3000");
    })
*/


//  CASE - 4    ******* pre-defined middleware *******

    app.use(express.json());
    app.post("/simple", function (req, res) {
        console.log("data", req.body);
        res.end("simple post output");
    })
    app.post("/simple", function (req, res) {
        res.end("simple1 post output");
    })
    app.listen(3000, function () {
        console.log("server started at port 3000");
    })