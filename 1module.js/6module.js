//                  Задача №  1

// Метод forEach(callback)
// Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

// массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });
// Поэлементно перебирает массив.
// Вызывает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.
// Аргументы коллбек - функции это значение текущего элемента element, его индекс index и сам исходный массив array.Объявлять можно только те
// параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла.
// Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

// Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
//     которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.


//                                                              ответ 

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки, index, orderedItems
//     orderedItems.forEach(function (item) {
//         totalPrice += item
//     })
//       // Пиши код выше этой строки
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


//                                                          Задача №  2

// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива,
//     которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.


//                                                     ответ 

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//   numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
      
//         }
//     })
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

//                                                                  Задача №  3


// Задача. Общие элементы
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
//     то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

//                                                                    ответ 

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function(item) {
//       if (secondArray.includes(item)) {
//         commonElements.push(item);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }


//                                                                  Задача №  4


// Стрелочные функции.
// Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.

// Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// // Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };
// Если параметр один, его объявление может быть без круглых скобок.

// const add = a => {
//   return a + 5;
// };
// Если параметров нет, то обязательно должны быть пустые круглые скобки.

// const greet = () => {
//   console.log('Привет!');
// };
// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.


//                                                             ответ 

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }


//                                                         Задача №  5


// Неявный возврат
// В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Если фигурные скобки есть, и функция должна возвращать какое - то значение, необходимо явно поставить return.Это называется явный возврат(explicit return).
// Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие - то инструкции кроме возврата значения.

// const add = (a, b, c) => a + b + c;
// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>.Это называется неявный возврат(implicit return).В примере вернётся результат
// выражения сложения параметров a, b и c.

// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в теле функции не нужно
// выполнять никаких дополнительных инструкций кроме возврата значения.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // После
// const arrowAdd = (a, b, c) => a + b + c;
// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.


//                                                           ответ 

// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
 
// Пиши код выше этой строки


//                                                          Задача №  6

// Стрелочные функции как коллбеки
// Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Стрелочную коллбек - функцию также можно объявлять отдельно и передавать на неё ссылку.Это стоит делать если одна функция используется в нескольих местах программы или
// если она громоздкая.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);
// Задание
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в метод forEach()
// на стрелочную функцию.


//                                                           ответ 

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }


//                                                          Задача №  7


//                                                           ответ 