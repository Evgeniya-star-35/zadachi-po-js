//                     Задача № 1

// Прототип объекта и метод Object.create()
// Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом.
// Связующим звеном выступает специальное скрытое свойство[[Prototype]], которое в консоли браузера отображается как __proto__.

// const animal = {
//   legs: 4
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj.Объект, на который указывает ссылка в __proto__,
//     называется прототипом.В нашем примере объект animal это прототип для объекта dog.Метод isPrototypeOf() проверяет является ли объект animal
// прототипом для dog и возвращает true или false.

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4
// Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog.При обращении к dog.legs интерпретатор ищет свойство
// legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.__proto__, то есть, в данном случае, в объекте animal - его прототипе.

// То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске.У объекта, который выступает прототипом
// может также быть свой прототип, у того свой, и так далее.

// Поиск свойства выполняется до первого совпадения.Интерпретатор ищет свойство по имени в объекте, если не находит, то обращается к свойству __proto__,
//     т.е.переходит по ссылке к объекту - прототипу, а затем и прототипу прототипа.Если интерпретатор доберется до конца цепочки и не найдет свойства
// с таким именем, то вернёт undefined.

// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.



//                                                ответ


// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;


//                                    Задача № 2

// Задача. Цепочка прототипов
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

//                                           ответ


// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

//                                                      Задача № 3

// Функция-конструктор
// Синтаксис литерала объекта позволяет создать один объект.Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями, и
// методами для взаимодействия со свойствами.Всё это нужно сделать динамически, во время выполнения программы.Для этого используют функции - конструкторы,
//     вызывая их при помощи специального оператора new.

// function User() {
//   // Тело функции
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Любая функция, кроме стрелочной, может быть использована как конструктор.Чтобы отличить конструктор от обычной функции, их принято называть
// с большой буквы, а в самом названии отражать тип создаваемого объекта(существительное).

// Вызов функции с оператором new приводит к созданию нового объекта и вызову функции в контексте этого объекта.То есть this внутри функции
// будет ссылаться на новосозданный объект.Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во
// время её вызова с оператором new.


//                                                     ответ


// function Car(brand, model, price) {
 
//     this.brand = brand;
//     this.model = model; 
//     this.price = price;
//   }

//                                                         Задача № 4


// Объект настроек
// Функции - конструкторы всегда принимают большое количество входных данных для свойств будущего объекта.Поэтому, к ним также можно применить паттерн «Объект настроек»,
// передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });
// Задание
// Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price.Деструктуризируй объект в сигнатуре(подписи)
// функции.


//                                             ответ


// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const { brand, model, price } = Car;



//                                                      Задача № 5

// Свойство prototype
// Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств объекта по цепочке прототипов.Во время вызова функции - конструктора
// через new и создания нового объекта со свойствами, ему также устанавливается прототип.

// У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, указывающим на саму функцию-конструктор.

// function User() {}
// console.log(User.prototype); // { constructor: User }
// При вызове функции-конструктора и создании объекта через new, объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией - конструктором.Методы в prototype будут вызываться
// объектами созданными функцией - конструктором, поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// Задание
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.


//                                                    ответ

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
// return this.price;
// };

// Car.prototype.changePrice = function(newPrice) {
//   return this.price = newPrice;
// };


//                                                 Задача № 6


// Задача. Хранилище
// Задание
// С помощью Function Declaration напиши функцию - конструктор Storage, которая будет создавать объекты для управления складом товаров.Функция ожидает только один аргумент
//     - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


//                                                     ответ


// function Storage (items) {
//   this.items = items;
// } 
//   Storage.prototype.getItems = function() {
//     return this.items; 
//   };
//     Storage.prototype.addItem = function(newItem) {
//        return this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//     return this.items.splice(itemIndex, 1);
//   };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//                                         Задача № 7

// Конструктор строк
// Задание
// С помощью Function Declaration напиши функцию - конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на
// создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


//                                                        ответ


// function StringBuilder(baseValue) {
//   this.value = baseValue;
//   // console.log(value);

  
// };
// StringBuilder.prototype.getValue = function() {
//   return this.value;
// };

 
// StringBuilder.prototype.padStart = function(str) {
//   return this.value = this.value.padStart (2, str);
// };
// StringBuilder.prototype.padEnd = function(str) {
//   return this.value = this.value.padEnd (3, str);
  
  
// };
// StringBuilder.prototype.padBoth = function(str) {
//   return this.value = str + this.value + str;
 
// };
 
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


//                                          Задача № 8

// Объявление класса
// Классы это синтаксический сахар (надстройка) над функциями-конструкторами - новый удобный способ для задания конструктора вместе с прототипом.

// function User() {
//   // Тело функции-конструктора
// }

// const mango = new User();
// Объявление класса начинается с ключевого слова class, после которого идёт имя класса и фигурные скобки - его тело.

// class User {
//   // Тело класса
// }

// const mango = new User();
// Результат вызова new User() это объект, как и в функциях-конструкторах, он называется экземпляр класса, потому что содержит данные и поведение, описываемые классом.

// Задание
// Используя ключевое слово class объяви класс Car с пустым телом.



//                                                       ответ

// class Car {
// }


//                                                     Задача № 9

