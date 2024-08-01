//--------------Noraml Conversion of same datatypes ----------------------------------
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// --------------String To number Conversion-----------------------------------------
// console.log("2" > 1); // true because here string is automatically converted into number
// console.log("02" > 1); // true because here string is automatically converted into number

// -----------------Null Comparison (Avoid these type of conversions) ---------------------------------------
// console.log(null > 0);   // false 
// console.log(null == 0);  // false 
// console.log(null >= 0);  // true

/* NOTE: The reason is that an equality check (==) and comparisions (<,>,<=,>=) works differently.           Comparisions convert null to a number, treating it as 0 thats why (null >= 0) is true & (null > 0) is false */

// -------------------- strict check(===): it also checks the datatype ---------------------

console.log("2" === 2);  // false because one is string and another is number