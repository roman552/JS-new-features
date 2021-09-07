"use strict";

const person = {
    name: 'Alex',
    age: 28
}

// Такой формат мы уже можем отправлять на сервер
let toServer = JSON.stringify(person);

console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

// Глубокое клонирование объекта
const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);

// Задание
const obj = {
    scale: {
        width: 200,
        height: 250
    },
    color: 'red',
    shape: 'circle',
    name: 'name1',
    number: 1,
    property: 'property1'
}

let toServer = JSON.stringify(obj);
console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

/* XML

<?xml version="1.0" encoding="UTF-8"?>
<obj>
   <color>red</color>
   <name>name1</name>
   <number>1</number>
   <property>property1</property>
   <scale>
      <height>250</height>
      <width>200</width>
   </scale>
   <shape>circle</shape>
</obj>
*/

let objClone = JSON.parse(JSON.stringify(obj));
objClone.color = 'blue';

console.log(obj);
console.log(objClone);