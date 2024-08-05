//----------------------- DATE ---------------------

let myDate = new Date();
// console.log(myDate) // 2024-08-05T09:47:24.430Z
// console.log(typeof(myDate))

// console.log(myDate.toString())  // Mon Aug 05 2024 15:17:24 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Mon Aug 05 2024
// console.log(myDate.toISOString())  // 2024-08-05T09:49:03.097Z
// console.log(myDate.toJSON())      //  2024-08-05T09:49:56.880Z
// console.log(myDate.toLocaleDateString())  // 8/5/2024
// console.log(myDate.toLocaleString())     //  8/5/2024, 3:21:48 PM

// let myCreatedDate = new Date(2022, 0 , 23); // months start with 0:Jan
// let myCreatedDate = new Date("2022-02-15");  // yy-mm-dd
let myCreatedDate = new Date("07-28-2000");     // mm-dd-yy
// console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)   // output comes in milliseconds

// console.log(myCreatedDate.getTime()) // output comes in milliseconds (easy to compare with above)
// console.log(Math.floor(Date.now()/1000)) // converted milliseconds  into seconds


let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay() + 1)


// Note: Important 

newDate.toLocaleString('default', {
    weekday:"long",
    day:"2-digit"
})