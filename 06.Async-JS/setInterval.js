// setTimeout and setInterval always generates a Id 

let counter = 0;
let id;

function hello(){
    counter++;
    console.log("Hello Mohit");

    if(counter >= 5){
        clearInterval(id)
    }
}

id = setInterval(hello, 2000) 

// setInterval(hello,2000) ---> infinite loop