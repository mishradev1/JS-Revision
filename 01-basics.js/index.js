// let, var and const 
// let is preferred against var because var does not know its scope

"use strict"; // treat all JS code as newer version

// alert (3+3) // using nodejs not web so it will get error

// object

console.log(typeof undefined);
console.log(typeof null);

let number = "33";
console.log(typeof number);

number = "33abc";
let valueInNumber = Number(number);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN = Not a Number

