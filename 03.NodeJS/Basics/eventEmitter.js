
const events = require("events")

let emitter = new events.EventEmitter();


emitter.on("customEvent" , (mssg , user)=>{
    console.log(`${user} : ${mssg}`);
})


emitter.emit("customEvent" , "Hello!!" , "System");
emitter.emit("customEvent" , "How are you?" , "Mohit");
process.stdout.write(`>> `);


process.stdin.on("data" , (data)=>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent" , "Byee!", "Process")
        process.exit();
    }

    emitter.emit("customEvent" , data.toString().trim() , ">> Terminal")
    process.stdout.write(`>> `);
})