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
function arithmeticMean(array = []) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum / array.length;
}

const mid = arithmeticMean([30, 4, 6, 77, 3, 30, 4, 546]);
console.log(mid);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
let man = [{name: 'Dima', age: 13}, {model: 'Camry'}, {wife: 'Anna', children: true}]; // ===> [ name, age, model ]
function getKeys(arrayOfObjects = []) {
    let keys = [];
    for (const arrElem of arrayOfObjects) {
        for (const arrElemKey in arrElem) {
            keys.push(arrElemKey);
        }
    }
    return keys;
}

let manKey = getKeys(man);
console.log(manKey);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
let man2 = [{name: 'Dima', age: 13}, {model: 'Camry'}]  //===> [ Dima, 13, Camry ]
function getValues(arrayOfObjects = []) {
    let values = [];
    for (const arrElem of arrayOfObjects) {
        for (const arrElemValue in arrElem) {
            values.push(arrElem[arrElemValue]);
        }
    }
    return values;
}

let manValues = getValues(man2);
console.log(manValues);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

//                                     (!!!!ВИКОНУЄТЬСЯ ОДНИМ ЦИКЛОМ НЕ ПОТРІБНО ВКЛАДЕНОСТІ!!!!)
function sumArrays(array1, array2) {
    let sum = [];
    for (let i = 0; i < array1.length; i++){
        sum.push(array1[i] + array2[i]);
    }
    return sum;
}
const sumArrays1 = sumArrays([1,2,3,4,7,9], [2,3,4,5,13,91]);
console.log(sumArrays1);

// ============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//                                 (!!!!МОЖНА ВИКОРИСТАТИ ДВІ ПЕРЕВІРКИ НА МАКС І МІН В ОДНОМУ ЦИКЛІ!!!!)
function maxAndMin(numbers) {
    let max = arguments[0];
    let min = arguments[0];
    for (const element of arguments) {
        if (element < min){
            min = element;
        }
        if (element > max){
            max = element;
        }
    }
    console.log(max);
    return min;
}
const resolt1 = maxAndMin(999.9,2,3,4,5,6,687,-77,8,8,-7,-999);
console.log(resolt1);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
function getKeysOrValues(arrayOfObjects = [], keyOrValue) {
    let resolt = [];
    if (keyOrValue === 'key'){
        for (const arrElem of arrayOfObjects) {
            for (const arrElemKey in arrElem) {
                resolt.push(arrElemKey);
            }
        }
    }
    if (keyOrValue === 'value'){
        for (const arrElem of arrayOfObjects) {
            for (const arrElemKey in arrElem) {
                resolt.push(arrElem[arrElemKey]);
            }
        }
    }
    return resolt;
}
const keysOrValues = getKeysOrValues(man, 'key');
console.log(keysOrValues);
const keysOrValues2 = getKeysOrValues(man, 'value');
console.log(keysOrValues2);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function replaceIndex (array, index){
    for (let i = 0; i < array.length; i++){
        if (i === index){
            let slice = array.slice(i, i + 1);
            array.splice(i, 1);
            array.splice(i + 1, 0, slice[0])
        }
    }
    return array;
}
const replaceIndex1 = replaceIndex([9,8,0,4], 0);
console.log(replaceIndex1);
const replaceIndex2 = replaceIndex([9,8,0,4], 1);
console.log(replaceIndex2);
const replaceIndex3 = replaceIndex([9,8,0,4], 2);
console.log(replaceIndex3);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function zeroToEnd (array){
    let numbs = [];
    let zeros = [];
    if (array.length >= 2 && array.length <= 100){
        for (const arrayElement of array) {
            if (arrayElement > 0 || arrayElement < 0){
                numbs.push(arrayElement);
            }else {
                zeros.push(arrayElement);
            }
        }
    }
    return numbs.concat(zeros);
}
const zeroToEnd1 = zeroToEnd([1,0,6,0,3]);
const zeroToEnd2 = zeroToEnd([0,1,2,3,4]);
const zeroToEnd3 = zeroToEnd([0,0,1,0]);
console.log(zeroToEnd1);
console.log(zeroToEnd2);
console.log(zeroToEnd3);

// - Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function correctName (string) {
let name = string.trim();
let space = name.slice(name.indexOf(' '), name.lastIndexOf(' '));
let replace = name.replace(space, '');
return replace;
}
const correctName1 = correctName(n1);
const correctName2 = correctName(n2);
const correctName3 = correctName(n3);
console.log(correctName1);
console.log(correctName2);
console.log(correctName3);




// ============================================================================================


// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //

