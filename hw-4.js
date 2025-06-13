//task1
let a = 10;
alert (a);
a = 20;
alert(a);

//task2
const release = 2007;
alert (`Год выпуска первого iphone: ${release}`);

//task3
const name = "Брендан Эйх";
alert(`Создатель языка JavaScript: ${name}`);

//task4
let b = 10;
let c = 2;
let sum = b + c;
alert(sum);
let subtraction = b - c;
alert(subtraction);
let multiplication = b * c;
alert (multiplication);
let division = b / c;
alert (division);

//task5
let result = 2**5;
alert (result);

//task6
let A = 9;
let B = 2;
let remainder = A % B;
alert(remainder);

//task7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//task8
let age = prompt("Сколько Вам лет?");
alert (age);

//task9

const user = {
    name: 'Diana',
    age: 27,
    isAdmin: true

};

//task10

let Name = prompt("Как Вас зовут?"); 
alert(`Привет, ${Name}`); 

//Additional task
let Number = prompt("Загадайте любое число");
let dublet = Number * 2;
alert(`Удвоенное число ${dublet}`)
let addTen = dublet + 10;
alert(`К удвоенному числу прибавлено 10: ${addTen}`);
let divited = addTen / 2;
alert(`Результат деления на 2: ${ divited}`);
let Result = divited - Number;
alert(`Разница между полученным числом и первоначальным: ${Result}`);
alert("Ответ равен 5"); 

//hw-3

  //task-1
let password = 'пароль';
let enterPassword = prompt(`Введите пароль`);
if (password === enterPassword) {
    alert(`Пароль введен верно`);    
} else {
    alert(`Пароль введен неправильно`);   
}

//task-2

let C = -3;
console.log(C>0 && C<10 ? `Верно`:`Неверно`);

//task-3

let d = 272;
let e = 10;
console.log(d > 100 || e > 100 ? `Верно`:`Неверно`);

//task-4

let q = '2';
let w = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(q) + Number(w));

//task-5
let monthNumber = 13;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:   
    case 4:  
    case 5:
        console.log('Весна');
        break;   
    case 6:  
    case 7:
    case 8:
        console.log('Лето');
        break; 
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
   default:
      console.log('ввели что-то не то');
}

//Additional task

//task1
let number = prompt(`Пожалуйста, введите любое число`);
if (isNaN(number)) {
    alert('Введено не число. Пожалуйста, попробуйте снова.');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} 

//task2
let clientOS = 1;
if (clientOS === 1) {
    console.log(`Установите версию приложения для Android по ссылке`);
} else if (clientOS === 0){
    console.log(`Установите версию приложения для iOS по ссылке`);
} else {
    console.log('Неизвестная ОС');
}

//task3
let clientDeviceYear = 2014;
if (clientOS === 1) { 
    if (clientDeviceYear >= 2015) {
        console.log(`Установите версию приложения для Android по ссылке`);
    } else {
        console.log(`Установите облегченную версию приложения для Android по ссылке`);
    }
} else if (clientOS === 0) { 
    if (clientDeviceYear >= 2015) {
        console.log(`Установите версию приложения для iOS по ссылке`);
    } else {
        console.log(`Установите облегченную версию приложения для iOS по ссылке`);
    }
} else {
    console.log('Неизвестная ОС');
}

//hw-4

//task - 1
let hello = 0;
while (hello < 2) {
    console.log(`Привет!`);
    hello++;
}

//task - 2
let Num = 1;
while (Num <= 5){
    console.log(Num);
    Num++;
}

//task - 3

for (let l = 7; l <= 22; l++) {
   console.log(l);   
}

//task - 4
const obj = {
"Коля" : '200',
"Вася" : '300',
"Петя" : '400'
}
for (let key in obj) {
    console.log(`${key}: Зарплата ${obj[key]} долларов`);
}

//task - 5
 let n = 1000;
 let num2 = 0;
 while (n >= 50) {
    n /= 2;
    num2++;
 }
 console.log(n);
 console.log(num2);

 //task - 6
 let dayWeek = 4;
 let dayMonth = 31;
 for (let friday = dayWeek;  friday <= dayMonth ; friday+= 7) {
    console.log(`Сегодня пятница, ${friday} -е число. Необходимо подготовить отчет.`);    
 }

 //Additional task

 //task - 1 

 let k = 100;
 let iterations = 0;
 while (k >= 0) {
    k -= 7;
    iterations++;
 }
 console.log(k);
 console.log(iterations);

 //task - 2 в задании массив, но мы еще не прошли их по плану они от 30/06/25

 const months = {
    "Январь" : 1,
    "Февраль" : 2,
    "Март" : 3,
    "Апрель" : 4,
    "Май" : 5,
    "Июнь" : 6,
    "Июль" : 7,
    "Август" : 8,
    "Сентябрь" : 9,
    "Октябрь" : 10,
    "Ноябрь" : 11,
    "Декабрь" : 12,
 }
 for (let key in months) {
    console.log(`${key}: ${months[key]} -й месяц`);
}


//task - 3
const book  = {
    "Название" : "The Wheel of Time",
    "Автор" : "Роберт Джордан",
    "Год издания" : 1990,
    "Жанр" : "fantasy",
 }
 for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

//task - 4 в задании массив, но мы еще не прошли их по плану они от 30/06/25

let numberMin = Math.floor(Math.random() * 101);
console.log(`Первое число: ${numberMin}`);
for (let s = 0; s < 9; s++) {
    const currentNumber = Math.floor(Math.random() * 101);
    console.log("Следующее число:", currentNumber);
    if (currentNumber < numberMin) {
        numberMin = currentNumber;
    }    
}
console.log("Минимальное число из 10 случайных:", numberMin);