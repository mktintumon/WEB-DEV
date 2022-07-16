// server creation
const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res)=>{
    console.log("Request made from browser to server");
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Welcome to the My server!!!</h1>');
    // res.write('<h2>My name is Mohit</h2>');
    // res.end();

    let path = './views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/contact' :
            path += '/contact.html';
            res.statusCode = 200;
            break;
        case '/contact-me' :
            res.statusCode = 301;
            res.setHeader('Location' , '/about');
            res.end();
            break;    
        default :
            res.statusCode = 404;
            path += '/404.html';
            break;            
    }

    fs.readFile(path ,(err , file)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(file);
            res.end();
        }
    })
})

// argument -> port number , host , callback function
server.listen(3000 , 'localhost', ()=>{
    console.log("server listening on port 3000")
})