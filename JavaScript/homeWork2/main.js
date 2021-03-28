/*
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
let numbers = [1,99,100500,3.14,-1];
console.log(numbers);

// - з 5 стічкових значень
let strings = ['hello', 'world', 'okten', 'the', 'best'];
console.log(strings);

// - з 5 значень стрічкового, числового та булевого типу
let mix = [123,'anko', true, false, 6.3];
console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 'true';
array[1] = 123;
array[2] = true;
array[3] = 'hello world';
array[4] = 3.14;
console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>hello world</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>ok10 cool ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
    document.write(`<h1>just do it</h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20){
    document.write(`<h1>number ${j}</h1>`);
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numsArr = [1,3,6,9,99,0,3.14,100500,-2,-99];
for (const number of numsArr) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let words = ['asd','qwe','hello','world','just','do','it','js','java','python'];
for (const word of words) {
    console.log(word);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let asorty = [1,2,true,3.14,'okten',false,'hello','world','js',100500];
for (const asortyElement of asorty) {
    console.log(asortyElement);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const asortyElement of asorty) {
    if (typeof asortyElement === 'boolean'){
        console.log(asortyElement);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const asortyElement of asorty) {
    if (typeof asortyElement === 'number'){
        console.log(asortyElement);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const asortyElement of asorty) {
    if (typeof asortyElement === 'string'){
        console.log(asortyElement);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let empty = [];
empty[0] = 555;
empty[1] = 666;
empty[2] = 'java';
empty[3] = 'js';
empty[4] = true;
empty[5] = 999;
empty[6] = 'python';
empty[7] = false;
empty[8] = 3.14;
empty[9] = 'hello world';
for (const emptyElement of empty) {
    console.log(emptyElement);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 10; k++) {
    console.log(k);
    document.write(`<div> ${k} <br> </div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k++) {
    console.log(k);
    document.write(`<div> ${k} </div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k += 2) {
    console.log(k);
    document.write(`<div> ${k} </div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0){
        console.log(i);
        document.write(`${i}`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0){
        console.log(i);
        document.write(`${i}`);
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        console.log(i,':', j);
    }
}

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
/!*for (let h = 0; h < 2; h++){
    for (let m = 0; m < 60; m++){
        for (let s = 0; s < 60; s++){
            console.log(h, ':', m, ':', s);
        }
    }
}*!/

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < arr.length; i++){
    word += arr[i];
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let item = 0;
let newWord = '';
while (item < arr.length){
    newWord += arr[item];
    item++;
}
console.log(newWord);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let newArray = '';
for (const arrElement of arr) {
    newArray += arrElement;
}
console.log(newArray);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let txt = '';
for (const arrKey in arr) {
   txt += arr[arrKey];
}
console.log(txt);


// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let verb = ['a', 'b', 'c'];
for (i = 1; i < 4; i++) {
    verb.push(i);
}
console.log(verb);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let numbersArr = [1, 2, 3];
let newNumbersArr = [];
for (let i = numbersArr.length - 1; i >= 0; i--){
    newNumbersArr.push(numbersArr[i]);
}
console.log(newNumbersArr);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
numbersArr.push(4);
numbersArr.push(5);
numbersArr.push(6);
console.log(numbersArr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let new_number = [1, 2, 3]
new_number.unshift(6);
new_number.unshift(5);
new_number.unshift(4);
console.log(new_number);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let jsArr = ['js', 'css', 'jq'];
console.log(jsArr.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
console.log(jsArr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers.slice(3,5));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
console.log(arrayOfNumbers.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let newArrayOfNumbers = [...arrayOfNumbers];
newArrayOfNumbers.splice(1,2);
console.log(newArrayOfNumbers);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let newArrayOfNumbers2 = [...arrayOfNumbers];
newArrayOfNumbers2.splice(3,0, 'a', 'b', 'c');
console.log(newArrayOfNumbers2);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let newArrayOfNumbers3 = [...arrayOfNumbers];
newArrayOfNumbers3.splice(1,5, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(newArrayOfNumbers3);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let tenNumbers = [1,2,3,4,5,6,7,8,9,10];
for (const i of tenNumbers) {
    if (i % 2 === 0){
        console.log(i);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let copyOf10 = [];
for (const i of tenNumbers) {
    copyOf10.push(i);
}
console.log(copyOf10);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let copyOfTen = [];
for (let i = 0; i < tenNumbers.length; i++){
    copyOfTen[i] = tenNumbers[i];
}
console.log(copyOfTen);*/

// ============ ДОРОБЛЕНА ЧАСТИНА ==========================================!!!!
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrN = [2,17,13,6,22,31,45,66,100,-18];
//     1. перебрати його циклом while
let ite = 0;
while (ite < arrN.length){
    console.log(arrN[ite]);
    ite++;
}
//     2. перебрати його циклом for
for (const number of arrN) {
    console.log(number);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let it = 0;
while (it < arrN.length){
    if (it % 2 !== 0){
        console.log(it);
    }
    it++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arrN.length; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let o = 0;
while (o < arrN.length){
    if (arrN[o] % 2 === 0){
        console.log(arrN[o]);
    }
    o++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const number of arrN) {
    if (number % 2 === 0){
        console.log(number);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
let newArrN = [];
for (let t = 0; t < arrN.length; t++) {
    newArrN[t] = arrN[t];
    if (arrN[t] % 3 === 0){
    newArrN[t] = 'okten';
    }
}
console.log(newArrN);

// 8. вивести масив в зворотньому порядку.
for (let i = arrN.length - 1; i >= 0; i--){
    console.log(arrN[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let rev = [2,17,13,6,22,31,45,66,100,-18];

let revI = rev.length -1;
while (revI >= 0){
    console.log(arrN[revI]);
    revI--;
}
//-----------------------------------------------
let revIt = rev.length - 1;
while (revIt >= 0){
    if (revIt % 2 !== 0){
        console.log(revIt);
    }
    revIt--;
}
//-----------------------------------------------
for (let i = rev.length - 1; i >= 0; i--){
    if (i % 2 !== 0){
        console.log(i);
    }
}
//-----------------------------------------------
let revo = rev.length - 1;
while (revo >= 0){
    if (rev[revo] % 2 === 0){
        console.log(rev[revo]);
    }
    revo--;
}
//-----------------------------------------------
for (let i = rev.length - 1; i >= 0; i--){
    if (rev[i] % 2 === 0){
        console.log(rev[i]);
    }
}
//-----------------------------------------------
let newRev = [];
for (let i = rev.length - 1; i >= 0; i--) {
    newRev[i] = rev[i];
    if (rev[i] % 3 === 0){
        newRev[i] = 'okten';
    }
}
console.log(newRev);

// 10
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
let even = [];
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        even.push(i)
    }
}
console.log(even);

// 2. заповнити його 50 непарними числами за допомоги циклу.
let odd = [];
for (let i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        odd.push(i)
    }
}
console.log(odd);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let emptyRandom = [];
for (let i = 0; i < 10; i++){
    emptyRandom.push(Math.random());
}
console.log(emptyRandom);

let newEmptyRandom = [];
for (let i = 0; i < 10; i++){
    newEmptyRandom.push(parseInt(Math.random() * (732 - 8 ) + 8));
}
console.log(newEmptyRandom);

// 2. вывести на консоль  каждый третий елемент
let newEmptyRandom3 = [];
for (let i = 0; i < 10; i+=3){
    newEmptyRandom3.push(parseInt(Math.random() * (732 - 8 ) + 8));
}
console.log(newEmptyRandom3);

// 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.
let newEmptyRandom4 = [];
    for (let i = 0; i < 10; i += 3){
        newEmptyRandom4.push(parseInt(Math.random() * (732 - 8 ) + 8));
    if (newEmptyRandom4[i] % 2 === 0){
        console.log(newEmptyRandom4);
    }
}

// 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
let findEve = [5,6,8,530,830,7,308,30,83,3];
for (let i = 0; i < findEve.length; i++) {
    if (findEve[i] % 2 === 0){
        console.log(findEve[i - 1]);
    }
}

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let basket = [100,250,50,168,120,345,188];
let sum = 0;
for (let number of basket) {
    sum += number;
}
let midleCheck = sum / basket.length;
console.log(midleCheck);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArray = [34,5,36,435,788,7,9,568,97,89];
let multyFive = [];
for (let number of randomArray) {
    let res = number * 5;
    multyFive.push(res);
}
console.log(multyFive);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.
let all = ['hello', 12, true, 'false', 10, -5, 3.14, 'okten', 'five', [123,456]];
let allNums = [];
for (let allElement of all) {
    if (typeof allElement === 'number'){
        allNums.push(allElement);
    }
}
console.log(allNums);
