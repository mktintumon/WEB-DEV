function expenses(price , tax){
  console.log("My Expenses :");
  console.log(`
    Price is ${price}
    Tax is ${tax}
    Total price id ${price + tax}`);
}

expenses(100,5);

let company = "Cyraacs";

console.log(company.startsWith("Cy"));
console.log(company.endsWith("ass"));
console.log(company.includes("aac"));

// returns the indx from where words start
console.log(company.search("raac"));

console.log(company.repeat(5));
