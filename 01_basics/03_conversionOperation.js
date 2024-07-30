// ########################## EXAMPLES OF CONVERTING ANY DATATYPE INTO NUMBER ###################################

// -------------------------------------33 => 33-------------------------------------

let age = 33;
console.log(typeof(age)); //. number datatype

let valueInNumber = Number(age); // convert age into number datatype
console.log(typeof(valueInNumber));// number
console.log(valueInNumber); // 33

// -------------------------------------"33abc" => NaN-------------------------------------


// let score = "33abc";

console.log(typeof(score));  // used to find datatype of variable

// let valueInNumber = Number(score); // to convert any datatype in number datatype
console.log(typeof(valueInNumber)); // number
console.log(valueInNumber); // NaN (not a number)


// -------------------------------------"vishal" => NaN-------------------------------------
let name = "vishal";

console.log(typeof(name));  // used to find datatype of variable

let valueInName = Number(name); // to convert any datatype in number datatype
console.log(typeof(valueInName)); // number
console.log(valueInName); // NaN (not a number)

// ------------------------------boolean => true:1 / false:0 --------------------------------------

let isLogggedIn = true;
console.log(typeof(isLogggedIn)); // boolean

let newIsLoggedIn = Number(isLogggedIn);
console.log(typeof(newIsLoggedIn));  // number
console.log(newIsLoggedIn); // 1


// -----------------------------null => 0 ------------------------------------------

let order = null;
console.log(typeof(order)); // object

let newOrder = Number(order);
console.log(typeof newOrder); // number
console.log(newOrder); // 0

// ------------------------------undefined => NaN -------------------------------------------

let ratio = undefined;
console.log(typeof(ratio)); // undefined

let newRatio = Number(ratio); 
console.log(typeof(newRatio));  // number
console.log(newRatio); //NaN

// ############################################################################################################

// ----------------------------Conversion into boolean----------------------------------------

let isVisited = 1;
let booleanIsVisited = Boolean(isVisited);
console.log(booleanIsVisited); // true

// 1 =>true ; 0 => False
// "" => false
// "vishal" => true

// -------------------------------Conversion into string ---------------------

let someNumber = 44;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));
