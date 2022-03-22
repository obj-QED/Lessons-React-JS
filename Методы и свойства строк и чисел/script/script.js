"use strict";

//
const str = "test";
const arr = [1, 2, 3, 4, 5];

console.log(str.length);
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

//
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

//
const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

//
const num = 12.2;
console.log(Math.round(num));

const num2 = "12.2px";
console.log(parseInt(num2));
console.log(parseFloat(num2));
//
let numParse = parseInt(num2);
console.log(Math.round(numParse));
