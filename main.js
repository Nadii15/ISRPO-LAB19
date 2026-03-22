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

for (let i =1; i <= 3; i++ ){
    for (let j = 1; j <= 3; j++){
        console.log(`i = ${i}, j = $${j}`);
    }
}


for (let i = 1; i <= 4; i++) {
    let line = ""; 
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}