// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
const divElement = document.createElement('div');
divElement.setAttribute('id', 'text');
divElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
document.body.appendChild(divElement);
const btnHide = document.createElement('button');
btnHide.type = 'button';
btnHide.value = 'text';
btnHide.name = 'hideBnt';
btnHide.innerText = 'Hide text';
document.body.appendChild(btnHide);
const idText = document.getElementById('text');
const hideButton = document.getElementsByTagName('button')[0];
hideButton.onclick = function (){
    idText.hidden = true;
};

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
const htmlbrElement = document.createElement('br');
const buttonSelfHide = document.createElement('button');
buttonSelfHide.type = 'button';
buttonSelfHide.setAttribute('id', 'selfHide');
buttonSelfHide.innerText = 'hide me';
document.body.appendChild(htmlbrElement);
document.body.appendChild(buttonSelfHide);
const idSelfHide = document.getElementById('selfHide');
idSelfHide.onclick = function (){
    this.hidden = true;
};

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
const inputText = document.createElement('input');
const inputSubmit = document.createElement('input');
inputText.type = 'number';
inputText.name = 'inputText';
inputSubmit.type = 'submit';
inputSubmit.value = 'Ok';
inputSubmit.name = 'OkBtn';
document.body.appendChild(inputText);
document.body.appendChild(inputSubmit);
const inputsList = document.getElementsByTagName('input');
inputsList[1].onclick = function (){
    if (inputsList[0].value < 18){
        alert('You are still young');
    }else{
    confirm (`Are you realy ${inputsList[0].value} ??`);
    }

}
inputsList[0].addEventListener("keypress", function (ev){
    if (ev.code === 'Enter'){
        if (inputsList[0].value < 18){
            alert('You are still young');
        }else{
            confirm (`Are you realy ${inputsList[0].value} ??`);
        }
    }
});
inputsList[0].addEventListener("keypress", function (ev){
    if (ev.code === 'NumpadEnter'){
        if (inputsList[0].value < 18){
            alert('You are still young');
        }else{
            confirm (`Are you realy ${inputsList[0].value} ??`);
        }
    }
});

// - Створіть меню, яке розгортається/згортається при клику
const menuList = document.createElement('ul');
const menuHideButton = document.createElement('button');
menuHideButton.setAttribute('id', 'menuHideButton');
menuHideButton.innerText = 'Hide/Show';
menuList.setAttribute('id', 'menu');
document.body.appendChild(menuList);
document.body.appendChild(menuHideButton);
for (let i = 0; i < 5; i++) {
    const htmlliElement = document.createElement('li');
    htmlliElement.innerText = `menu item ${i}`;
    htmlliElement.style.listStyleType = 'none';
    menuList.appendChild(htmlliElement);
}
const menu = document.getElementById('menu');
const buttonForMenu = document.getElementById('menuHideButton');
buttonForMenu.onclick = function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
let arrOfComments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
];
const commentElement = document.createElement('div');
document.body.appendChild(commentElement);
for (const comment of arrOfComments) {
    const commentDiv = document.createElement('div');
    commentElement.appendChild(commentDiv);
    const titleElem = document.createElement('h1');
    titleElem.innerText = comment.title;
    const bodyElem = document.createElement('p');
    bodyElem.innerText = comment.body;
    commentDiv.appendChild(titleElem);
    commentDiv.appendChild(bodyElem);
    const comentBtn = document.createElement('button');
    comentBtn.type = 'button';
    comentBtn.innerText = 'hide';
    comentBtn.classList = 'commentBatton';
    commentDiv.appendChild(comentBtn);
    comentBtn.onclick = () => {
       if (bodyElem.hidden === false){
           bodyElem.hidden = true;
       }else{
           bodyElem.hidden = false;
       }
    }
}

document.body.appendChild(document.createElement('br'));

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
for (let i = 0; i < 2; i++) {
const forms = document.createElement('form');
forms.setAttribute('id', `form${i}`);
document.body.appendChild(forms);
    for (let j = 0; j < 2; j++) {
        const inpyts = document.createElement('input');
        inpyts.type = 'text';
        inpyts.value = 'text';
        inpyts.name = `input${j+1}`;
        forms.appendChild(inpyts);
        forms.appendChild(document.createElement('br'));
    }
}
const formsButton = document.createElement('button');
formsButton.setAttribute('id', 'formsButton');
formsButton.type = 'button';
formsButton.value = 'Ok';
formsButton.innerText = 'Ok';
document.body.appendChild(formsButton);
formsButton.onclick = () => {
    console.log(form0.input1.value);
    console.log(form0.input2.value);
    console.log(form1.input1.value);
    console.log(form1.input2.value);
}

// - Створити функцію, яка генерує таблицю.
const forTableOnly = document.createElement('div');
document.body.appendChild(forTableOnly);
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
function createTable (lines, colums, placeToAdd) {
const table = document.createElement('table');
    for (let i = 0; i < lines; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < colums; j++) {
            const td = document.createElement('td');
            td.innerText = `${i+1}_${j+1}`;
            tr.appendChild(td);
        }
    }
    placeToAdd.appendChild(table);
}
createTable(3,5,forTableOnly);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
const imgCarusel = document.createElement('div');
imgCarusel.setAttribute('id', 'imgCarusel');
// imgCarusel.style.width = '200px';
// imgCarusel.style.height = '200px';
document.body.appendChild(imgCarusel);
const images = document.createElement('div');
images.setAttribute('id', 'images');
imgCarusel.appendChild(images);
buttons = document.createElement('div');
buttons.setAttribute('id', 'buttons');
imgCarusel.appendChild(buttons);
for (let i = 0; i < 3; i++) {
const img = document.createElement('img');
img.setAttribute('id', `image${i+1}`);
img.setAttribute('src', null);
img.setAttribute('alt', 'image');
images.appendChild(img);
}
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');
leftButton.type = 'button';
rightButton.type = 'button';
leftButton.setAttribute('id', 'leftButton');
rightButton.setAttribute('id', 'rightButton');
leftButton.innerText = 'Назад';
rightButton.innerText = 'Вперед';
buttons.appendChild(leftButton);
buttons.appendChild(rightButton);
let imagesArray = document.querySelectorAll('img');
imagesArray[0].src = 'data:image/jpeg;base64,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';
imagesArray[1].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uBPziBmu6c-x1Cls58lH24VfL4fU9mbjFQ&usqp=CAU';
imagesArray[2].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k6vSRzOTeRSkSVNhCxmk4TDYegHMpi1hgA&usqp=CAU';
let i = 0;
rightButton.onclick = function (){
    imagesArray[i].style.display = 'none';
    i++;
    if (i >= imagesArray.length){
        i = 0;
    }
    imagesArray[i].style.display = 'block';
}
leftButton.onclick = function () {
    imagesArray[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = imagesArray.length -1;
    }
    imagesArray[i].style.display = 'block';
}

//______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
//______________________________________________________________________________________________________________________________________________________
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

////     ПРАЦЮЄ НА ДВІ ТАСКИ    ////
let badWords = ['xxx', 'aaa', 'zzz'];
const badInput = document.createElement('input');
badInput.type = 'text';
badInput.name = 'badInput';
document.body.appendChild(badInput);
const badButton = document.createElement('button');
badButton.type = 'button';
badButton.innerText = 'send';
badButton.setAttribute('id', 'badButton');
document.body.appendChild(badButton);
badButton.onclick = () => {
    for (const badElem of badWords) {
        if (badInput.value.includes(badElem)){
            alert(`${badElem} is unacceptable word !!!`);
            return;
        }
    }
    console.log(badInput.value);
}


// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті




// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
const filtered = document.createElement('div');
filtered.setAttribute('id', 'filtered');
filtered.style.width = '900px';
filtered.innerText = JSON.stringify(usersWithAddress);
document.body.appendChild(filtered);
for (let j = 0; j < 3; j++) {
const checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.name = 'check';
checkBox.checked;
checkBox.setAttribute('id', `check${j+1}`);
document.body.appendChild(checkBox);
}
filteredArray = [];
check1.onclick = () => {
    if (check1.checked) {
        if (filteredArray.length) {
            filteredArray.filter(value => {
                if (!value.isMarried) {
                    // filteredArray = [];
                    filteredArray.push(value);
                    filtered.innerText = JSON.stringify(filteredArray);
                }
            });
        } else {
            usersWithAddress.filter(value => {
                if (!value.isMarried){
                    filteredArray.push(value);
                    filtered.innerText = JSON.stringify(filteredArray);
                }
            });
        }
    }
}
check2.onclick = () => {
    if (check2.checked) {
        if (filteredArray.length) {
            filteredArray.filter(value => {
                if (value.age >= 29) {
                    // filteredArray = [];
                    filteredArray.push(value)
                    filtered.innerText = JSON.stringify(filteredArray);
                }
            });
        } else {
            usersWithAddress.filter(value => {
                if (value.age >= 29){
                    filteredArray.push(value);
                    filtered.innerText = JSON.stringify(filteredArray);
                }
            });
        }
    }
}
check3.onclick = () => {
    if (check3.checked) {
        if (filteredArray.length) {
            filteredArray.filter(value => {
                if (value.address.city === 'Kyiv') {
                    // filteredArray = [];
                    filteredArray.push(value)
                    filtered.innerText = JSON.stringify(filteredArray);
                }
            });
        } else {
            usersWithAddress.filter(value => {
                if (value.address.city === 'Kyiv'){
                    filteredArray.push(value);
                    filtered.innerText = JSON.stringify(filteredArray);
                }
            });
        }
    }
}



