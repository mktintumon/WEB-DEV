let fs = require('fs')

//input method
let inputArr = process.argv.slice(2);
//console.log(inputArr)

// options 
let optionArr = []
let fileArr = []

// seperate the files and command
for(let i=0 ; i<inputArr.length ; i++){
    let firstChar = inputArr[i].charAt(0)

    if(firstChar == '-'){
        optionArr.push(inputArr[i])
    }
    else{
        fileArr.push(inputArr[i])
    }
}

// ERROR -> if both -n and -b present
let check = optionArr.includes("-n") && optionArr.includes("-b")
if(check == true){
    console.log("Invalid command ...Either enter -n or -b")
    return;
}


//Check is the file entered -> present or not
for(let i=0 ; i<fileArr.length ; i++){
    let isPresent = fs.existsSync(fileArr[i])
    if(isPresent == false){
        console.log(`file ${fileArr[i]} is not present`)
        return
    }
}


// read the file content
let content = ""
for(let i=0 ; i<fileArr.length ; i++){
    let buffContent = fs.readFileSync(fileArr[i])
    content += buffContent +'\r\n'
}

let contentArr = content.split("\r\n")
console.log(contentArr[1])

//identify -s command
let sCommand = optionArr.includes("-s")

if(sCommand == true){
    //except the first blank , we make null to every line
     for(let i=1 ; i<contentArr.length ; i++){
         if(contentArr[i] == "" && contentArr[i-1] == ""){
              contentArr[i] = null;
            }
         else if(contentArr[i] == "" && contentArr[i-1] == null){
              contentArr[i] = null;
            }    
        }
        
        // transfer the non -null element into temp
        let tempArr =[]
        for(let i=0 ; i<contentArr.length ; i++){
            if(contentArr[i] != null){
                tempArr.push(contentArr[i])
            }
        }
       
        //transfering temp data to content data
        contentArr = tempArr;
}

// console.log(contentArr.join("\n"))

// identify -n command
let nCommand = optionArr.includes("-n")
if(nCommand == true){

    //concat every line with number in the front
    for(let i=0 ; i<contentArr.length ; i++){
        contentArr[i] = `${i+1} ${""} ${contentArr[i]}`
    }
}

// console.log(contentArr.join("\n"))

//identify -b command
let bCommand = optionArr.includes("-b")
if(bCommand == true){

    //concat the only line having data with numbering
    counter = 1
    for(let i=0 ; i<contentArr.length ; i++){
        if(contentArr[i] != ""){
            contentArr[i] = `${counter} ${""} ${contentArr[i]}`
            counter++
        }
    }
}

console.log(contentArr.join("\n"))







