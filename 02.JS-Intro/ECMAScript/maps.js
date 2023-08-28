
// Maps are key value pair
const course = new Map();

course.set("React" , {description : "tutorials"});
course.set("Node" , {description : "beginner"});

console.log(course);

// not accessible -> undefined
console.log(course.React);

console.log(course.get("React"));




const info = new Map([
    [new Date() , " today"],
    [2, {javascript : ['js' , 'node' , 'react']}],
    ["items", [1,2]],
]);

console.log(info);
console.log(info.size);

info.forEach((item)=>{
    console.log(item);
})

