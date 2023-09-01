process.stdout.write("Hello, My name is Mohit!!!\n")

const ques = [
    "what is your name?",
    "what is your hobby?",
    "how you doing??"
]

const ans = [];

function ask(idx = 0){
    process.stdout.write(`\n${ques[idx]}`);
    process.stdout.write(` >> `);
}

ask();


// cmd keep running till out of data
process.stdin.on("data" , function(data){
    ans.push(data.toString().trim());

    if(ans.length < ques.length){
        ask(ans.length)
    }
    else{
        process.exit();
    }
})

//
process.on("exit" , function(){
    process.stdout.write("\n");
    process.stdout.write(`Nice to meet you ${ans[0]}.lets play ${ans[1]} and be ${ans[2]}`)
})
