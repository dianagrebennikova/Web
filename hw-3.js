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
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;   
    case 4:
        console.log('Весна');
        break;   
    case 5:
        console.log('Весна');
        break;   
    case 6:
        console.log('Лето');
        break;   
    case 7:
        console.log('Лето');
        break;   
    case 8:
        console.log('Лето');
        break;   
    case 9:
        console.log('Осень');
        break;   
    case 10:
        console.log('Осень');
        break;   
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
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