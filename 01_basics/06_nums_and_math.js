const score = 400;
// console.log(score);  // 400

/* TAsk to perform: Read all prototypes of number from mdn link: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) */

const balance = new Number(100); // define a number 
// console.log(balance);  // [Number: 100]

// console.log(balance.toString())   // used to convert a number into string
// console.log(balance.toFixed(2)) // output: 100.00 provide values to the fixed decimal point


const anotherNum = 123.8766;
// console.log(anotherNum.toPrecision(4))  // round off the value and start count from left

const anotherNumber = 1000000
// console.log(anotherNumber.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

// console.log(Math.abs(-5));  // 5    // convert negative values into positive
// console.log(Math.round(5.3)); // 5  // round of the value to the nearest integer
// console.log(Math.round(5.6)); // 6  // round of the value to the nearest integer
// console.log(Math.ceil(2.2));  // 3  //  round of the value to the next value
// console.log(Math.floor(2.9)); // 2  // round of the value to the previous value

// console.log(Math.min(2, 5, 8, 4));  // 2 // to find the minimum value
// console.log(Math.max(2, 3, 5, 9));  // 9 // to find the maximum value 

// console.log(Math.random()); // used to generate a random value between 0 to 1
// console.log((Math.random()*10) + 1)


const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));  // Important Formula to create random value b/w any numbers


// --------------------------- Dice Game Logic -----------------------------------

const minVal = 1;
const maxVal = 6;

console.log(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))