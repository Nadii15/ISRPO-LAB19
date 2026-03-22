// for (let i = 0; i< 5; i++){
//     console.log(i);
// }
// for (let i = 1; i<11; i++){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log("Сумма равна:", sum);

// let count = 0;

// while (count <3){
//     console.log("Count:",count);
//     count++;
// }

// console.log("--- Практическое задание №2: Цикл while ---");


// let number = 5;

// while (number >= 0) {
//     console.log(number);
//     number--; 
// }

// let doValue = 0;
// do{
//     console.log("Value: ", doValue);
//     doValue++;
// }while (doValue<3);

// for (let i = 0; i < 10; i++){
//     if (i==5){
//         break;
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 10; i++) {
//     if (i === 8) {
//         console.log("Достигнуто число 8. Цикл остановлен.");
//         break; 
//     }
//     if (i === 5) {
//         continue; 
//     }
//     console.log(i);
// }

// for (let i =1; i <= 3; i++ ){
//     for (let j = 1; j <= 3; j++){
//         console.log(`i = ${i}, j = $${j}`);
//     }
// }


// for (let i = 1; i <= 4; i++) {
//     let line = ""; 
//     for (let j = 1; j <= i; j++) {
//         line += "*";
//     }
//     console.log(line);
// }

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,5));

// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(4, 5); 
// console.log("Результат умножения:", result);
// console.log("10 * 20 =", multiply(10, 20));


// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }
// sayHello("Тимофей");

// function printInfo(name,age){
//     console.log(`Hello, ${name},${age}`);
// }
// printInfo("Тимофей" , "25");

// function greet(name = "Гость"){
//     console.log("ПРивет," + name);
// }
// greet();
// greet("Анастасия");


// function calculateDiscount(price, discountPercent = 10) { 
//     const discountAmount = price * (discountPercent / 100);
//     return price - discountAmount;
// }
// let finalPrice1 = calculateDiscount(1000, 20);
// console.log(`Цена 1000 со скидкой 20%: ${finalPrice1}`); 

// const add = function(a,b) {
//     return a+ b;
// };
// console.log(add(2,3));

// function makeCounter(){
//     let count = 0;
//     return function (){
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter();
// console.log(counter ());
// console.log(counter ());
// console.log(counter ());

// function sumFunc(a,b){
//     return a+b;
// }
// const sumFunc2 = (a,b) => a+b;
// const double = x => x*2;
// const sumFunc3 = (a,b) => a+b;
// const sayGreeting = ()=> console.log("Hello");
// const square = x => x*x;

// const calculate = (a,b) => {
//     let result = a +b;
//     return result *2;
// };

// let numbersArr = [1,2,3,4,5];
// console.log(numbersArr);

// console.log(numbersArr[0]);
// console.log(numbersArr[1]);


// let colors = ["Красный", "Зеленый", "Синий"];
// console.log("Первый элемент:", colors[0]); 
// console.log("Последний элемент:", colors[colors.length - 1]);
// colors[1] = "Желтый"; 
// console.log("Измененный массив:", colors);

// numberArr.push(10);
// console.log(numberArr);

// numberArr.pop();
// console.log(numbersArr);


// let students = [];
// students.push("Иванов");
// students.push("Петров");
// students.push("Сидоров");
// console.log("Массив после добавления:", students);
// students.pop(); 
// console.log("Итоговый массив:", students);

// let number2 = [10,20,30];
// for (let i =0; i< number2.length; i++){
//     console.log(number2[i]);
// }

// for (let value of number2){
//     console.log(value);
// }

// let mixedArray = [1,"text",true,3.14];
// console.log(mixedArray);

// console.log(numbersArr.includes(1));
// console.log(numbersArr.indexOf(2));

// console.log(fruits.includes("Яблоко"));
// console.log(fruits.includes("Манго"));

// let cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Екатеринбург"];
// let searchCity = "Казань";
// if (cities.includes(searchCity)) {
//     let index = cities.indexOf(searchCity);
//     console.log(`Город "${searchCity}" найден! Индекс: ${index}`);
// } else {
//     console.log(`Город "${searchCity}" не найден в списке.`);
// }
// let searchCity2 = "Сочи";
// if (cities.includes(searchCity2)) {
//     let index = cities.indexOf(searchCity2);
//     console.log(`Город "${searchCity2}" найден! Индекс: ${index}`);
// } else {
//     console.log(`Город "${searchCity2}" не найден в списке.`);
// }
// console.log("Список городов:", cities);

// let user2 = {
//     name:"Ivan",
//     age: 20,
//     isStudent: true,
// };
// console.log(user2);

// console.log(user2.name);
// console.log(user2.age);
// console.log(user2["name"]);

// let book = {
//     title: "Мастер и Маргарита",
//     author: "Михаил Булгаков",
//     year: 1967
// };

// console.log("Название:", book.title);
// console.log("Автор:", book.author);
// console.log("Год издания:", book.year);
// console.log("Объект book:", book);
// book.year = 1966; 
// console.log("\n--- После изменения ---");
// console.log("Новый год издания:", book.year);
// console.log("Объект book после изменений:", book);

// user2.age = 30;
// user2.name = "Кирилл";
// delete user2.isStudent;
// console.log(user2);

// let user2 = {
//     name:"Ivan",
//     age: 20,
//     isStudent: true,
//     sayHello: function(){
//         console.log(`hello, my name is ${name}`);
//     },
// };
// user2.sayHello();


// let car = {
//     brand: "Toyota",
//     year: 2020,
//     getInfo: function() {
//         console.log(`Автомобиль: ${this.brand}, Год выпуска: ${this.year}`);
//     }
// };
// car.getInfo();
// car.year = 2021;
// console.log("После изменения года:");
// car.getInfo();

// for (let key in user2){
//     console.log(key +": " + user2[key]);
// }


// let product = {
//     title: "Ноутбук",
//     price: 75000,
//     category: "Электроника",
//     inStock: true,
//     rating: 4.8
// };
// console.log("Свойства объекта product:");
// for (let key in product) {
//     console.log(`${key}: ${product[key]}`);
// }
// product.discount = 10;
// console.log("После добавления свойства 'discount':");
// for (let key in product) {
//     console.log(`${key}: ${product[key]}`);
// }

let student = {
    name:"Григорий",
    skills: ["HTML","CSS","JS"],
    address:{
        city: "Волжский",
        street: "Пускина",
    },
};
console.log(student.skills[0]);
console.log(student.address.city);