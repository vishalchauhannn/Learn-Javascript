// Arrays : Array in a non-primitive data types. 
//          It is used to store nultiple items under a single varible. 

const myArr = [0, 1, 2, 3, 4, 5]  // method to declare array
const myHeroes = ["superman", "batman", "spiderman"] // method to declare array
const myArr2 = new Array (1, 2, 3, 4) // method to declare array

console.log(myArr[1]) // to extract some value from array using index

// Array Methods: 

myArr.push(6)
myArr.push(7)  // .push(6) is used to add value at the last index of the array

myArr.pop()    // .pop() is used to remove last index value from the array.

myArr.unshift(10)  // .unshift(10) used to add value in the starting of array.

myArr.shift()  // used to remove 0th index value from the array


console.log(myArr)