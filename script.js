"use strict";

const arr = [1, 2, 5, 8, 9];

console.log(arr);

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const arr2 = [1, 2, 5, 8, 9];
arr2[99] = 0; 
console.log(arr2.length);
console.log(arr2);

arr2.forEach(function(item, i, arr2){
    console.log(`${i}: ${item} внутри массива ${arr2}`)
});

const str = prompt('', '');
const products = str.split(", ");
console.log(products);
products.sort();
console.log(products)
console.log(products.join("; "));

products.sort(compareNum);
function compareNum(a, b) {
    return a-b;
}

console.log(products)