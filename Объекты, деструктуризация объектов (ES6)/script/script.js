"use strict";

// const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () { // Функция внутри объекта (метод объекта)
    console.log('Test');
  }
};

const { border, bg } = options.colors; // Деструктуризация объекта
console.log(border);

// options.makeTest(); // info: вызов функции из объекта

// console.log(Object.keys(options)); // info: выводит все ключи объекта
// console.log(Object.keys(options).length); // info: выводит количество ключей в объекте
// console.log(options["colors"]["border"]); // info: выводит значение ключа в объекте

// delete options.name; // info: удаление ключа из объекта
// console.log(options); // info: вывод объекта

// let counter = 0;
// for (let key in options) { // info: перебор объекта
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) { // info: перебор объекта
//       console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// console.dir(String); // info: вывод объекта в консоль (в виде дерева) для проверки поддержки объектов в браузере (в большинстве браузеров поддерживается) 