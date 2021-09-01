"use strict";

const hello = () => {
    console.log('hi!!!')
    return Math.PI;
};

console.log(hello())

function server(){
    setTimeout(function(){
        console.log(1);
    }, 1000)
}

function foo() {
    console.log(2);
}

server();
foo();

function serverNew(host, callback) {
    console.log(`Server ${host} is starting...`);
    callback();
}

function done() {
    console.log('connect success!');
}

serverNew('MyServer', done);
