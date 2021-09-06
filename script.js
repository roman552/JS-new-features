"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a:5,
    b:1
}

const copy = obj;
copy.a = 10;

console.log(obj);
console.log(copy);

const newObj = Object.assign({}, obj);
newObj.a = 15;
console.log(newObj);

const oldArray = ['a', 'x', 'y'];
const newArray = oldArray.slice();

newArray[0] = 5;
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'facebook'],
    blogs = ['wordpress', 'twitter', 'blogger'],
    internet = [...video, ...blogs, 'VK', 'instagram'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];

log(...num);

const ar = [4, 3, 0];
const NewAr = [...ar];

const aaa = {
    first: 1,
    second: 2
};

const newA = {...aaa};
