// 1) створити функцію яка приймає масив та виводить його
function showArray(array = []) {
    console.log(array);
}
let arr = [123, 435, 'hello', true, -5, [false, 666], 0, '0', 3.14, 'okten cool'];
showArray(arr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function fillRandomArray (length, maxRandom, minRandom){
    let randomArray = [];
    for (let i = 0; i < length; i++){
        randomArray.push(Math.random() * (maxRandom - minRandom) + minRandom);
    }
    return randomArray;
}
showArray(fillRandomArray(10, 100, 1));

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function findMin (a, b, c){
    if (a <= b && a <= c){
        console.log(a);
    }else if (b <= a && b <= c){
        console.log(b);
    }else console.log(c);
}
findMin(-12,1,-120.5)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function findMax (a, b, c){
    if (a >= b && a >= c){
        console.log(a);
    }else if (b >= a && b >= c){
        console.log(b);
    }else console.log(c);
}
findMax(12,1,120.8)

// 5) створити функцію яка повертає найбільше число з масиву
function findMaxInArray(array = []){
    let max = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max;
}
const maxInArray = findMaxInArray([1230,4,6,77,888,99999,9,22220,-5]);
console.log(maxInArray);

// 6) створити функцію яка повертає найменьше число з масиву
function findMinInArray(array = []) {
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
}
const minInArray = findMinInArray([-1230,4,6,77,888,-99999,9,-22220,-5]);
console.log(minInArray);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sumArray (array = []) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
const number = sumArray([30,4,6,77,3,30]);
console.log(number);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean (array = []) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    let arithmeticMean = sum / array.length;
    return arithmeticMean;
}
const mid = arithmeticMean([30,4,6,77,3,30,4,546]);
console.log(mid);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]