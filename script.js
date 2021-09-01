"use strict";

let number = 10;

function showMessage(text) {
    console.log(text);
    let number = 20;
    console.log(number);
}

showMessage("Hello");
console.log(number);

const server = function() {
    console.log("server start...");
}

server();

const calc = (x, y) => x + y;

console.log(calc(46, 1))
