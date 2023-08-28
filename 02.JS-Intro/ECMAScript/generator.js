
// creating generators
function* director(){
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

let count = director();

console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);

// undefined 
console.log(count.next().value);

