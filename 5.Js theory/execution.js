// global execution context -> memory area and code execution area
// inside global -> execution area

// process in -> phase 1 -> phase 2 -> execution area for function call                                                       

var a = 2
var b = 3

function add(p,q){
    var sum = p + q 
    return sum
}

var sum1 = add(2,2)

var sum2 = add(a,b)

console.log(sum1)
console.log(sum2)