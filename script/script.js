"use strict";

// Function Declaration

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage('Hello World');

function calc(a, b) {
    return (a + b);
}
console.log(calc(3, 4));

function ret() {
    let num = 50;
    return num;
}
const anitherNum = ret();
console.log(anitherNum);

// Function Expression

const logger = function() {
    console.log('Hello');
};
logger();

// Arrow Function

const calc = (a, b) => {
    return a + b;
};