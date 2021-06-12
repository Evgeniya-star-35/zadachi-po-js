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

