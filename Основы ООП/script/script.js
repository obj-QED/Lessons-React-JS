"use strict";

let str = "some";

let strObj = new String(str); //info: Создание объекта строки (устаревший метод)
// let strObj = [...str]; //info: Создание объекта строки (пример из ES6)

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

//////////

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = {
  health: 100,
};

// john.__proto__ = soldier;

////////////

const johnObj = Object.create(soldier); // создаем обьект

// console.log(Object.getPrototypeOf(johnObj)); // получаем обьект
console.log(Object.setPrototypeOf(john, soldier)); // устанавливаем прототип

//////////

// let johnObj = Object.create(john, {
//   armor: {
//     value: 200,
//   }
// });
// console.log(johnObj.armor);

// let clone = Object.create(Object.getPrototypeOf(john), Object.getOwnPropertyDescriptors(john));
// console.log(clone);
//////////

// console.log(john.health);
// john.sayHello();
