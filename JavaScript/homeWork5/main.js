// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
class   Computer{
    constructor(ram, power, label) {
        this.ram = ram;
        this.power = power;
        this.label = label;
    }
    turnOn (){
        console.log('Power on, ready to work');
    }
    // Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
    upgradePower (point){
        if (point >= 0.01 && point <= 0.1){
            let percent = this.power * point;
            this.power += percent;
            console.log('power increased by ' + point * 100 + ' %');
        }else {
            console.warn('max 10 % !!!');
        }
    }
    //     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
    upgradeRAM (){
        this.ram *= 2;
    }
}
let lenovo_pc = new Computer(5,300,'lenovo');
let dell_pc = new Computer(10,600,'dell');
console.log(lenovo_pc);
console.log(dell_pc);
dell_pc.turnOn();

// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Laptop extends Computer{
    constructor(ram, power, lable, size) {
        super(ram, power, lable);
        this.size = size;
        this.batteryLife = this.power / (this.size * this.ram);
    }
}
let acer_laptop = new Laptop(15,900,'acer',15);
console.log(acer_laptop);
acer_laptop.turnOn();
acer_laptop.upgradePower(0.01);
console.log(acer_laptop);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class Ultrabook extends Laptop{
    constructor(ram, power, lable, size, weight) {
        super(ram, power, lable, size);
        this.weight = weight;
    }
    turnOn() {
        if (this.weight > 2 && this.batteryLife < 4){
            console.error('Fatal error');
        }else {console.log('Power on, ready to work');
        }
    }
}
let mac_ultra = new Ultrabook(20,1000,'apple',16.6,1.9);
console.log(mac_ultra);
mac_ultra.turnOn();
mac_ultra.upgradeRAM();
console.log(mac_ultra);

// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class BasePC extends Computer{
    constructor(ram, power, lable) {
        super(ram, power, lable);
        this.fps_count = this.power / this.ram;
    }
    gameStart(game){
        console.log(`You are playing ${game} with ${this.fps_count} FSP`);
    }
}
let newBasePC = new BasePC (3,150,'asus');
console.log(newBasePC);
newBasePC.gameStart('CS-1.6')

//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.
class GamingPC extends BasePC{
    constructor(ram, power, lable,) {
        super(ram, power, lable,);
        this.fps_count *= 2;
    }
    gameStart(game) {
        if  (this.power <= 500 && this.ram <= 8){
            console.error('на цьому відрі ігри не запускаються')
        }else {
        let percent = this.power * 0.00099;
        this.power -= percent;
        console.log(`You are playing ${game} with ${this.fps_count} FSP power of you pc decreased to ${this.power}`);
    }
    }
}
let hp = new GamingPC(6,300,'hp');
console.log(hp);
hp.gameStart('dota');


//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, engine){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }
    this.info = function (){
        console.log(this);
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (name, age, categories, exp){
        this.driver = {
            name,
            age,
            categories,
            exp
        }
    }

}
let myCar = new Car('i30', 'hyundai', 2010, 220, '1,6CRDi');
console.log(myCar);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
console.log(myCar);
myCar.drive();
myCar.changeYear(2018);
console.log(myCar);
myCar.addDriver('Andriy',31, 'B', 1.5);
console.log(myCar);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Viecle {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }
    info(){
        console.log(this);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(name, age, categories, exp){
        this.driver = {
            name,
            age,
            categories,
            exp
        }
    }
}
let myNewCar = new Viecle('kodiaq', 'skoda', 2021, 240, '1,5 TSI');
console.log(myNewCar);
myNewCar.drive();
myNewCar.info();
myNewCar.increaseMaxSpeed(40);
myNewCar.changeYear(2022);
myNewCar.addDriver('Taras', 29, 'B', 2);
console.log(myNewCar);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const olya = new Cinderella('Olya', 45, 38);
const masha = new Cinderella('Masha', 19, 36);
const dasha = new Cinderella('Dasha', 18, 34);
const sasha = new Cinderella('Sasha', 33, 41);
const katya = new Cinderella('Katya', 31, 40);
const anna = new Cinderella('Anna', 16, 35);
const sofia = new Cinderella('Sofia', 21, 39);
const maria = new Cinderella('Maria', 27, 37);
const tanya = new Cinderella('Tanya', 29, 38);
const klara = new Cinderella('Klara', 30, 36);
const cinderellas = [olya, masha, dasha, sasha, katya, anna, sofia, maria, tanya, klara];

class Prince{
    constructor(name, age, shoeFind) {
        this.name = name;
        this.age = age;
        this.shoeFind = shoeFind;
    }
}
const ivan = new Prince('Ivan', 36, 35);
for (const object of cinderellas) {
    if (object.footSize === ivan.shoeFind){
        console.log(`${ivan.name} your cinderlla's name is ${object.name}`);
    }
}



// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderela (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
const galya = new Cinderela('Galya', 25, 36);
const zoya = new Cinderela('Zoya', 28, 37);
const marta = new Cinderela('Marta', 19, 35);
const yulya = new Cinderela('Yulya', 21, 38);
const olesya = new Cinderela('Olesya', 20, 39);
const arrayOfCinderellas = [galya, zoya, marta, yulya, olesya];

function Princ (name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;

    this.findCinderela = function (arr){
        for (const arrElement of arr) {
            if (arrElement.footSize === this.shoeSize){
                console.log(`${this.name} your cinderlla's name is ${arrElement.name}`);
            }
        }
    }
}
const oleg = new Princ('Oleg', 28, 35);
oleg.findCinderela(arrayOfCinderellas);



// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

