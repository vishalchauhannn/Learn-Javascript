// ------------------- Primitive DataTypes (Call by value) -----------------------
// 7 Types: string, number, Boolean, null, undefined, symbol, bigInt


const score = 100;
const newScore = 100.5;

const outsideTemp = null;
let accountEmail;

const id = Symbol("123")
const anotherId = Symbol("123") // create unique value 
// console.log(id === anotherId);  // false

const bigNumber = 3972647823678263785427n;

// ---------------------- Reference (Non-Primitive) ----------------

// Arrays, Objects, functions

const myArray = ["superman", "batman", "spiderman"];

let myObj = {
    name: "Vishal",
    age: 23
}

const myFunction = function(){
// console.log("Hello World");
}

// console.log(typeof(myArray));   // object
// console.log(typeof(myObj));     // object
// console.log(typeof(myFunction)); // object Function


// ---------------------------- MEMORY (stack & heap) -----------------------------------

// Stack memory (Primitive dataTypes) it gives us a copy
let name = "Vishal";
let anotherName = name;
anotherName = "aman"
// console.log(anotherName)
// console.log(name);

// // Heap memory (reference & non-primitive)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
// console.log(userTwo);

userTwo.email = "vishal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);