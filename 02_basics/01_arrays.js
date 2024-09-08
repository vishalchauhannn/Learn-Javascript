// Arrays : Array in a non-primitive data types.
//          It is used to store multiple items under a single varible.

const myArr = [0, 1, 2, 3, 4, 5]; // method to declare array
const myHeroes = ["superman", "batman", "spiderman"]; // method to declare array
const myArr2 = new Array(1, 2, 3, 4); // method to declare array

// console.log(myArr[1]); // to extract some value from array using index

// Array Methods:

myArr.push(6); // .push is used to add value at the end of the array.
myArr.push(7); // .push(6) is used to add value at the last index of the array

myArr.pop(); // .pop() is used to remove last index value from the array.

myArr.unshift(10); // .unshift(10) used to add value in the starting of array.

myArr.shift(); // used to remove 0th index value from the array
myArr.includes(9); // .includes(9) uses to check wether the value is present in array or not.


myArr.indexOf(3); // .indexOf(3) uses to check the index of the element.

const newArr = myArr.join();  // .join() is used to convert the array into string
// console.log(newArr);
// console.log(myArr);


// slice: The slice() method of Array instances returns a shallow copy of a portion of an array into a new array    object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log("A" , myArr)
const myNewArray = myArr.slice(1,3)
console.log(myNewArray)


// Splice: The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

console.log("B" , myArr)
const myNewArray1 = myArr.splice(1, 3)
console.log(myNewArray1)
console.log("C" ,myArr)


