let books = new Set();

books.add("Intersteller");
books.add("five brothers").add("new Journey");

console.log(books);
console.log(books.has("Space and lost"));
books.delete("five brothers");
console.log(books);

books.forEach((item)=>{
    console.log(item);
})