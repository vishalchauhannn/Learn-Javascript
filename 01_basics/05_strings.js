const name = "Vishal"
const repoCount = 10;

// console.log(name + repoCount);  // not a good practise to concatinate strings 

// console.log(`Hello! My name is ${name} and my repo count is ${repoCount}.`);  // this is called string interpolation & good way to concatinate strings

const gameName = new String("Vishal");  // different method to define a string
// console.log(gameName);      // to print the string
// console.log(gameName[0]);   // to print the particular index of the string
// console.log(gameName.__proto__); // to find the properties of string,you can also see them in browser console
// console.log(gameName.length); // to find the length of the string
// console.log(gameName.toUpperCase()); // to convert the string into upperCase
// console.log(gameName.charAt(2));  // to find the char using index value
// console.log(gameName.indexOf("s")); // to find the index of any character of string

// NOTE: Study all the prototypes and properties of string from Mdn 

const newString = gameName.substring(0,3); // to create a substring from a given string (first index -
                                            // - included last index not included)
// console.log(newString);

const anotherString = gameName.slice(-5, 2);
console.log(anotherString);


const newStringOne = "    Vishal      "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // trim is used to remove extra spaces from the begining & end of the string


const url = "https://www.youtube.com/watch?v=Rw1RhgLrGfQ"
// console.log(url.replace('=', '-'))      // to to replace something

// console.log(url.includes('youtube'));    // used to check wether the keyword is present or not (gives result in true/false)

const heroName = "Vishal-chauhan-web-developer"
// console.log(heroName.split('-'))       // use to convert a string into array


/*************************************** STRING Methods or Properties ******************************* */

const myName = new String("Vishal-Chauhan")

console.log(myName.anchor("Vishal")) 

// Task to perform: Practise all String Properties from the link given below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String