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
/*for (let h = 0; h < 2; h++){
    for (let m = 0; m < 60; m++){
        for (let s = 0; s < 60; s++){
            console.log(h, ':', m, ':', s);
        }
    }
}*/

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
for (i = 0; i < tenNumbers.length; i++){
    copyOfTen[i] = tenNumbers[i];
}
console.log(copyOfTen);