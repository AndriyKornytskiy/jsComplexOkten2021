// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
let pContent = document.getElementById('content').innerText;
console.log(pContent);

// b) отримує текст з блоку з id "rules"
const divContent = document.getElementById('rules').innerText;
console.log(divContent);

// c) замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'okten is cool';

// d) замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'hello world';

// e) змініть кожному елементу колір фону на червоний
document.getElementById('content').style.backgroundColor = 'red';
document.getElementById('rules').style.backgroundColor = 'red';
document.getElementsByTagName('ul')[0].style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій
document.getElementById('content').style.color = '#081cee';
document.getElementById('rules').style.color = '#081cee';
document.getElementsByTagName('ul')[0].style.color = '#081cee';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
const rulClass = document.getElementById('rules').classList;
console.log(rulClass);

// h) отримати всі елементи з класом fc_rules
let allRules = document.getElementsByClassName('fc_rules');

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let allRule of allRules) {
    allRule.style.color = 'red';
}


let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
for (let i = 0; i < users.length; i++) {
    const div = document.createElement('div');
    div.innerHTML = `${users[i].name} <br> ${users[i].age} <br> ${users[i].address.city} ${users[i].address.country} <hr>`;
    document.body.appendChild(div);
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userDiv = document.createElement('div');
    const addressDiv = document.createElement('div');

    for (const item in user.address) {
        const addresItem = document.createElement('div');
        addresItem.innerHTML = user.address[item];
        addressDiv.appendChild(addresItem);
    }
    userDiv.innerText = `${user.name} ${user.age}`;
    userDiv.appendChild(addressDiv);
    document.body.appendChild(userDiv);

}

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
const elementById = document.getElementById('main_header');
elementById.style.color = 'red';
elementById.innerText = `FEB-2021`;

// b) робить шириниу елементу ul 400px
const ulList = document.getElementsByTagName('ul');
ulList[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkElem = document.getElementsByClassName('linkList');
for (const element of linkElem) {
    element.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
const element2List = document.getElementsByClassName('listElement2');
const textElem2 = element2List[0].innerHTML;
console.log(textElem2);

// e) отримує всі елементи li та змінює ім колір фону на сірий
const liList = document.getElementsByTagName('li');
for (const liListElement of liList) {
    liListElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const aList = document.getElementsByTagName('a');
for (const aListElement of aList) {
    aListElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let aListElement of aList) {
    if (aListElement.innerText === 'link3'){
        aListElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aListElement of aList) {
    aListElement.classList.add(`element_${aListElement.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeaderList = document.getElementsByClassName('sub-header');
for (const item of subHeaderList) {
    item.style.backgroundColor = prompt("enter color like: yellow, green, blue, etc.:" );
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const elem of subHeaderList) {
    if (elem.innerText === 'content 2 segment') {
        elem.style.color = prompt("enter color like: yellow, green, blue, etc.:");
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const contentList = document.getElementsByClassName('content_1');
contentList[0].innerText = prompt('enter some text here:');

// l) отримати елементи p та змінити їм padding на 20px
const paragrafsList = document.getElementsByTagName('p');
for (const element of paragrafsList) {
    element.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
const text2Elem = document.getElementsByClassName('text2');
for (const text2ElemElement of text2Elem) {
    text2ElemElement.innerText = 'FEB-2021';
}

// 2) Є масив котрий характеризує правила.

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

//Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
const wrap = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба';
wrap.appendChild(h1);
for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = rule.title;
    p.innerText = rule.body;

    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div);

}
document.body.appendChild(wrap);

// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
let userWithAddres = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
            userWithAddres.push(user);
        }
    }
}
console.log(userWithAddres);
//
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         }
//
//



