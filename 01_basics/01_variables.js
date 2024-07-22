const accountId = 1537; // we can't change the value of const after assigning

let accountEmail = "vishal@gmail.com";  // value can be changed after assigning

var accountPassword = "12345"  // prefer not to use var because of issue in block scope or functional scope 

accountCity = "Chandigarh";  // not a good practise 

let accountState; // if we are not declaring a value to any variable it will gives us a result: Undefined

// accountId = 1111; // const not allow to change 


accountEmail = "v.c@yahoo.com" // change value
accountPassword = "54321"    // change value
accountCity = "Delhi"    // change value


// --------------------------------------------------------------------------------------------------------------------------
// Examople of Multi-Line comment with a important note

/*  NOTE: Prefer not to use var 
          because of issue in block scope or functional scope*/

// --------------------------------------------------------------------------------------------------------------------------


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // use to print data in table form