"use strict";

//rest оператор, обратное преоброзавание spread
const log = function (a, b, ...other) {
    console.log(a);
    console.log(b);
    console.log(other);
};

log('test1', 'test2', 'test3', 'test4');

// параметры по умолчанию
function calcOrDouble (first, second = 2) {
    return first * second;
}

console.log(calcOrDouble(5));