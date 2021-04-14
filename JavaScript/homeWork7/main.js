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









//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
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
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ