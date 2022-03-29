'use strict';

const arr = [2, 13, 3, 26, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
//////////

console.log(arr.length); // info: вывод длины массива (последний индекс плюс один)

arr.pop(); // info: удаление последнего элемента массива
console.log(arr);

arr.push(10); // info: добавление элемента в конец массива
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

arr.forEach(function (item, idx, array) {
  console.log(`${idx}: ${item} внутри массива ${array}`);
});

//////////

const str = prompt('', ''); // info: ввод строки в окно браузера
const products = str.split(', '); // info: разбиваем строку на массив по запятой

products.sort(); // info: сортировка массива

// console.log(products);
console.log(products.join(';')); // info: соединяем массив в строку с разделителем