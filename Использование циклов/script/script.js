/* Давайте перед серьезными практическими задачами потренируемся использовать циклы и условия.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

Задачи:

1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 Цикл, который нужно переписать:
 
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }
5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
*/

function firstTask() {
  for (i = 5; i <= 10; i++) {
    console.log(i);
  }
}
firstTask();

/////

function secondTask() {
  for (i = 20; i >= 10; i--) {
    // Когда цикл дойдет до числа 13 - остановить весь цикл
    if (i === 13) {
      break;
    }
    console.log(i);
  }
}

secondTask();

/////

function thirdTask() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

thirdTask();

/////

function fourthTask() {
  // for (let i = 2; i <= 16; i++) {
  //   if (i % 2 === 0) {
  //     continue;
  //   } else {
  //     console.log(i);
  //   }
  // }
  let i = 2;
  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

fourthTask();

/////

function fifthTask() {
  const arrayOfNumbers = [];

  // Заполните массив цифрами от 5 до 10 включительно
  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
  }

  console.log(arrayOfNumbers);
  // Не трогаем
  return arrayOfNumbers;
}

fifthTask();

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.

function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  console.log(result);
  return result;
}

firstTask();

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      data[i] = data[i] * 2;
    } else if (typeof data[i] === "string") {
      data[i] = `${data[i]} - done'`;
    }
  }
  console.log(data);
  return data;
}

secondTask();

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function thirdTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  const result = [];

  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]; // вывод в обратном порядке массива data
  }

  console.log(result);
  return result;
}

thirdTask();

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  // Цикл для вывода подчеркивания
  for (let j = 0; j < lines - i; j++) {
    // Пропускаем пустые строки
    result += " "; // Заполняем пустые строки
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    // Пропускаем пустые строки
    result += "*"; // Заполняем строку
  }
  result += "\n"; // Переходим на новую строку
}

console.log(result);
