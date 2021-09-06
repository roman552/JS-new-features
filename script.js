"use strict";

const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option["name"]);

console.log(option);

for (let key in option) {
    console.log(`Свойство ${key} имеет значение ${option[key]}`);
}

let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++
    }
}

console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);

const option2 = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('yes');
    }
};

option2.makeTest();

const {border, bg} = option2.colors;
console.log(border);

const game = {
    name: 'game1',
    version: '1.0',
    developer: 'developer1',
    info: {
        description: 'description1',
        genre: 'genre1',
        rating: '7.5/10'
    },
    engine: 'engine',
    platform: 'PC',
    price: '100$',

    showName:function(){
        console.log(this.name);
    },

    showDeveloper:function(){
        console.log(this.developer);
    }
};

game.showDeveloper();
game.showName();

const {description, rating} = game.info;
console.log(description, rating)
