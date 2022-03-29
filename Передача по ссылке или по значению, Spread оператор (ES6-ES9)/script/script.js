"use strict";

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

//////////
// info: Передача по ссылке

const obj = {
  a: 5,
  b: 1,
};

// const copy = obj; // Передача по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10; // Передача по ссылке (поверхностная копия, меняет только родительский объект)

// console.log(newNumbers);
// console.log(numbers);

//////////

const add = {
  d: 17,
  e: 20,
};

// console.log(Object.assign({}, add)); // info: передача по ссылке (поверхностная копия, меняет все объекты)

const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone); // поверхностная копия склонированного объекта

const oldArray = ["a", "b", "c"],
  newArray = oldArray.slice(); // info: передача по ссылке (поверхностная копия, меняет все объекты)

newArray[1] = "This is now data";
// console.log(newArray);
// console.log(oldArray);

//////////
// info: ES6, ES8
// создание поверхностной копии объекта
// оператор разворота - ES6: для массивов, ES8: для объектов (spreat operator)

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

// log(...num);

//////////

const array = ["a", "b", "c"];
const newAarray = [...array];

const objSelect = {
  one: 1,
  two: 2,
};

const newObj = {
  // info: ES9 standart
  ...objSelect,
};
