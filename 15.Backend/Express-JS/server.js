const express = require('express');

const app = express();

// syntax for recieving data in backend from frontend
app.use(express.json())

// GET route
// callback func will be invoked when the /sayhi will be requested
app.get('/sayhi', (req, res) => {
   res.end('Hellooo from server')
})
app.get('/saybye', (req, res) => {
    res.end('Byeee from server')
})

// POST route
app.post('/sayhi', (req, res) => {
   console.log("data" , req.body);
   res.end('Hello from the POST method server')
})

// PATCH is intended for update
app.patch("/sayhello", function (req, res) {
    console.log("data", req.body);
    res.end("patch wala hello from server");
})

// DELETE is intended for deletion 
app.delete("/sayhello", function (req, res) {
    console.log("data", req.body);
    res.end("delete wala hello from server");
})

// TEMPLATE route 
app.get("/getProduct/:first/:second", function (req, res) {
    console.log("header me data", req.params.first);
    console.log("header me data", req.params.second);
    // let number = req.params.num;
    let sq = req.params.first * req.params.second;
    res.end(sq + " ");
})

app.listen(3000 , ()=>{
    console.log('server listening on port 3000');
})