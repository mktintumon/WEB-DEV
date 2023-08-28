
// used to capture unique identifier
const id = Symbol();

const info = {
    course : "javascript",
    syllabus : ["intro", "arrays" , "objects"],

    // added later on
    id : 12345,
}

console.log(info);

info[id] = 112233;

console.log(info);