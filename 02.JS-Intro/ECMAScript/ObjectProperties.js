"use strict"

const user = {
  name : "Mohit Kumar",
  age : 24,
  aadharNum : 1234567890
};

//Object.seal(user);
//delete user.name;  -> throws Error , can't remove any prop


//Object.freeze(user); -> can't change any prop of object


Object.defineProperty(user, 'aadharNum', {
  writable: false,
});

try {
  user.aadharNum = 12345;
} catch (error) {
  console.log("Error:", "You cannot change the Aadhar number.");
}

console.log(user)
console.log(Object.keys(user)) // return keys of object in array form
console.log(Object.values(user)) // return values of object in array form
