setTimeout(()=>{
    console.log("Mohit after 5 seconds");
},5000)


// this function will executed before 5 seconds
function print(name , cb){
    console.log(name);
    cb("Kumar");
}

function secondName(second){
    console.log(second);
}

print("Mohit" , secondName)