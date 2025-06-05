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