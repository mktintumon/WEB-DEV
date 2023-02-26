
function studentDetails(name , cb , cb2){
    console.log(name);
    cb("22MCA0170")
    cb2("BIHAR , INDIA")
}

function regNo(number){
    console.log(number);
}

function address(address){
    console.log(address);
}

studentDetails("Mohit kumar", regNo , address)
