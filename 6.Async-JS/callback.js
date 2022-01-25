
function pFirstName(first , cb , cb2){ // cb-> pLastName ,  cb2-> pAge
    console.log(first)
    cb('kumar')
    cb2('22')
}

function pLastName(last){
    console.log(last)
}

function pAge(age){
    console.log(age)
}

pFirstName('Mohit' , pLastName, pAge) // we pass two functions in pFirstName func as Argument