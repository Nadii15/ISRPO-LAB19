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

function sumFunc(a,b){
    return a+b;
}
const sumFunc2 = (a,b) => a+b;
const double = x => x*2;
const sumFunc3 = (a,b) => a+b;
const sayGreeting = ()=> console.log("Hello");
const square = x => x*x;

const calculate = (a,b) => {
    let result = a +b;
    return result *2;
};