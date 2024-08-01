// ########################## EXAMPLES OF CONVERTING ANY DATATYPE INTO NUMBER ###################################

// -------------------------------------33 => 33-------------------------------------

let age = 33;
// console.log(typeof(age)); //. number datatype

let valueInNumber = Number(age); // convert age into number datatype
// console.log(typeof(valueInNumber));// number
// console.log(valueInNumber); // 33

// -------------------------------------"33abc" => NaN-------------------------------------


// let score = "33abc";

// console.log(typeof(score));  // used to find datatype of variable

// let valueInNumber = Number(score); // to convert any datatype in number datatype
// console.log(typeof(valueInNumber)); // number
// console.log(valueInNumber); // NaN (not a number)


// -------------------------------------"vishal" => NaN-------------------------------------
let name = "vishal";

// console.log(typeof(name));  // used to find datatype of variable

let valueInName = Number(name); // to convert any datatype in number datatype
// console.log(typeof(valueInName)); // number
// console.log(valueInName); // NaN (not a number)

// ------------------------------boolean => true:1 / false:0 --------------------------------------

let isLogggedIn = true;
// console.log(typeof(isLogggedIn)); // boolean

let newIsLoggedIn = Number(isLogggedIn);
// console.log(typeof(newIsLoggedIn));  // number
// console.log(newIsLoggedIn); // 1


// -----------------------------null => 0 ------------------------------------------

let order = null;
// console.log(typeof(order)); // object

let newOrder = Number(order);
// console.log(typeof newOrder); // number
// console.log(newOrder); // 0

// ------------------------------undefined => NaN -------------------------------------------

let ratio = undefined;
// console.log(typeof(ratio)); // undefined

let newRatio = Number(ratio); 
// console.log(typeof(newRatio));  // number
// console.log(newRatio); //NaN

// ############################################################################################################

// ----------------------------Conversion into boolean----------------------------------------

let isVisited = 1;
let booleanIsVisited = Boolean(isVisited);
// console.log(booleanIsVisited); // true

// 1 =>true ; 0 => False
// "" => false
// "vishal" => true

// -------------------------------Conversion into string ---------------------

let someNumber = 44;
let stringNumber = String(someNumber);
// console.log(stringNumber);   // 44
// console.log(typeof(stringNumber)); // string


// -------------------------------------------------------------------------------------------------------------------------
// ******************************************* Operations *******************************************************************8

let value = 3;
let negValue = -value;
// console.log(negValue)

// console.log(2+2); // Addition
// console.log(2-2) ; // Subtraction
// console.log(2*3);  // Multiplication
// console.log(2/3);  // division (it gives quotient)
// console.log(2**3); // power i.e., 2 to the power 3
// console.log(2%3);  // modulus i.e., gives remender


let str1 = "Hello"
let str2 = " Vishal"
let str3 = str1 + str2
// console.log(str3)    // Hello Vishal


// console.log("1" + 2);       // 12
// console.log("2" + 1);      // 21
// console.log("1" + 2 + 3); // 123
// console.log(1 + 2 + "3"); // 33
// console.log(1 + "2" + 3); // 123

// console.log(true); // true
// console.log(+true);  // 1


// -----------------------------Prefix & Postfix ------------------------------------

let gameCounter = 100;
gameCounter++;          // -----------------------postfix
console.log(gameCounter);


let score = 3;
++score;  //------------------------------------- prefix
console.log(score);



// NOTE: Study Postfix & Prefix from mdn and also do questions relate to them