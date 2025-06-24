//game - 1 
function game1() {
    let randomNumber = Math.floor(Math.random() * 101);
    let isRight = false;
        while (!isRight) {
            const userNumber = Number (prompt ('Угадай число от 1 до 100'));
            if (randomNumber > userNumber) {
                let guess = confirm (`Не угадал, загаданное число больше`)
                if (!guess) {
                    break;
                }
            } else if (randomNumber < userNumber){
                let guess = confirm (`Не угадал, загаданное число меньше`)
                if (!guess) {
                    break;
                }
            } else {
                alert(`Угадал`)
                break;
            }
        }
    }

//game - 2    

function game2(){
    let isContinue = true;
    while (isContinue) {
        let randomNumberOne = Math.floor(Math.random() * 101);
        let randomNumberTwo = Math.floor(Math.random() * 11);
        let operationID = Math.floor(Math.random() * 4) + 1;
        let rightResult;
        let userResult;
        
        switch(operationID){
            case(1):{
                userResult = prompt(randomNumberOne + " + " + randomNumberTwo + " = ");    
                rightResult = randomNumberOne + randomNumberTwo;
                break;
            }
            case(2):{
                userResult = prompt(randomNumberOne + " - " + randomNumberTwo + " = ");
                rightResult = randomNumberOne - randomNumberTwo;
                break;
            }
            case(3):{
                userResult = prompt(randomNumberOne + " * " + randomNumberTwo + " = ");
                rightResult = randomNumberOne * randomNumberTwo;
                break;
            }
            case(4):{
                userResult = prompt(randomNumberOne + " / " + randomNumberTwo + " = ");
                rightResult = randomNumberOne / randomNumberTwo;
                rightResult = (randomNumberOne / randomNumberTwo).toFixed(2);
                break;
            }
            default:
                return;
        }

        if (userResult === null){
            break;
        }
        
        const userAnswerNum = parseFloat(userResult);

        if (rightResult == userAnswerNum){
            isContinue = confirm (`Правильно`)

        }
        else{
            isContinue = confirm ("Неверно, правильный ответ: " + rightResult)
        }
    }
}


//game - 3

function game3() {
    const userText = String(prompt ('Введите текст. Используйте только кириллические символы'));
    if (userText === null){
        alert ("Введ отменен");
        return;
    }

    let regexp = /^[а-яА-Я\s]+$/;
    if(regexp.test(userText)) {
    const arrText = userText.split('');
    arrText.reverse();
    const reversedText =  arrText.join('');
    alert (`Перевернутый текст: ${reversedText}`)
    } else{
        alert("Некорректный ввод. Используйте только кириллические символы.")
    }
}

// game - 5

function game5() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let length = 0;
    for (let i = 0; i < quiz.length; i++) {
        const answerStr = prompt(`Выберите ответ: \n${quiz[i].question}\n${quiz[i].options}`);
        
        if (answerStr === null) {
            break; 
        }

        const quizQuestions = Number(answerStr);
        
        if (quizQuestions === quiz[i].correctAnswer) {
            length++;
            alert('Ответ верный');
        } else {
            alert('Ответ неправильный');
        }
    }
    alert(`Вы ответили правильно на ${length} вопросов`);
}


/* //task1
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

let Q = '2';
let W = '3';

alert(Number(Q) + Number(W));

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

//hw - 5
//task-1

function minimumNumber (){
    let a = 8;
    let b = 5;
    return (a <= b) ? a : b;
}

console.log(minimumNumber());

//task-2

function evenOrOdd (n){
    if  (n % 2 === 0){
        return (`Число четное`)
    } else {
        return (`Число нечетное`)
    }
}
console.log(evenOrOdd(9));

//task-3 

function squareNum (w){
const square = w ** 2;
console.log(square);
}
squareNum(8); 

function getSquare(w) {
    return w ** 2;
  } 

  const result1 = getSquare(7);
    console.log(result1);

    //task-4
function friendAge (){
    let age = Number (prompt(`Сколько тебе лет?`));
    if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    } else if( age < 0){
        console.log('Вы ввели неправильное значение');
    } else {
        console.log('Вы ввели неправильное значение');
    }   
}
friendAge();

// task-5

function numTwo (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;  
    } 
}
console.log(numTwo(`sdf`,3));
console.log(numTwo(10,3));

// task-6

function numThree() {
    let d = Number (prompt(`Введи число`));
    if (isNaN(d)) {
        return `Переданный параметр не является числом`; 
    } else { 
        let result = d ** 3;
        return d + ' в кубе равняется ' + result;
    } 
}
console.log(numThree());

//task-7

const circle1 = {
    radius: 1,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
}
 const circle2 = {
    radius: 2,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());
 */

//hw - 6
//task - 1

 /* const numbers = [1, 5, 4, 10, 0, 3];
 for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
 }

 //task - 2

 const num3 = [1, 5, 4, 10, 0, 3];
 const index = num3.indexOf(4);
 console.log(index);

 //task - 3

  const space = [1, 3, 5, 10, 20];
  let joinSpace = space.join (" ");
  console.log(joinSpace);

  //task - 4 
  const size = 3; 
  const multiArray = [];
  
  for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
          row.push(1);
      }
      multiArray.push(row); 
  }
  
  console.log(multiArray);

  //task - 5

const array =  [1, 1, 1];
array.push (2, 2, 2.);
console.log(array);

//task - 6

 const array1 = [9, 8, 7, 'a', 6, 5];
 array1.sort()
 array1.pop()
 console.log(array1);

 //task - 7

 const guessNum = [9, 8, 7, 6, 5];
 let thinkNum = Number(prompt (`Угадай число`));
 if (guessNum.includes(thinkNum)) {
    alert (`Угадал`)
 } else{
    alert (`Не угадал`)
 }

 //task - 8

let string = 'abcdef';
let splitString = string.split("");
let reverseString = splitString.reverse();
console.log(reverseString.join(""));

//task - 9

const union = [
    [1, 2, 3],
    [4, 5, 6]
];
const combinedArray = [...union[0], ...union[1]];
console.log(combinedArray);

//task - 10 

const Array = [ 3,4,2,6,5,7,9];
    for (let i = 0; i < Array.length - 1; i++) {
        const sum = Array[i] + Array[i + 1];
        console.log(sum);
    } 

//task - 11

function Square () {
    const input = prompt (`Введите числа через запятую`)
    const arr = input.split(',').map(Number);
    const getSquares = (arr) => arr.map(num => num * num);
    const result = getSquares(arr);
    console.log(result);
}
 console.log(Square());

 //task - 12

function arrayString () {
    const lines =  prompt (`Введите слова через запятую`);
    const arrLines = lines.split (`,`).map(word=> word.trim());
    const getLengths = (arr) => arr.map(word => word.length);
    const lengths = getLengths(arrLines);
    console.log(lengths);
}
console.log(arrayString());

//task - 13

function negativeNum () {
    const input = prompt (`Введите числа через запятую`)
    const arr = input.split(',').map(Number);
    const getNegativeNum = (arr) => arr.filter(num => num < 0);
    const result = getNegativeNum(arr);
    console.log(result);
}
 console.log(negativeNum());

 //task - 14

const numArr = [];
for (let i = 0; i < 10; i++) {
    numArr[i] = Math.floor(Math.random() * 11);
}
const getEvenNum = (arr) => arr.filter(num => num % 2 === 0);
const evenArr = getEvenNum(numArr);
console.log(numArr);
console.log(evenArr);


//task - 15

const averageArr = [];
for (let i = 0; i < 6; i++) {
    averageArr[i] = Math.floor(Math.random() * 11);
}
const getAverageArr = (arr) => {
    const sum = arr.reduce((acc,number)=> acc + number,0);
    return sum / arr.length;
};
console.log(averageArr);
console.log(getAverageArr(averageArr)); */

//hw - 7

//task - 1

 let str = 'js';
 let STR = str.toUpperCase();
 console.log(STR);

 //task - 2

const arrUp = [`Бабочка`, `Молоко`, `Бриллиант`, `Книга`, `Бассейн`];
const arrDown = "б";

function strArray(array, startStr) {
    const lowerStartStr = startStr.toLowerCase();
    return array.filter(item => item.toLowerCase().startsWith(lowerStartStr));
}

const filterArray = strArray(arrUp, arrDown);
 console.log(filterArray);

 //task - 3

let fractionalNum = 32.58884;
console.log(Math.floor (fractionalNum));
console.log(Math.ceil (fractionalNum));
console.log(Math.round (fractionalNum));

//task - 4

const Numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...Numbers));
console.log(Math.max(...Numbers));

//task - 5

function randomNum () {
    let random = Math.floor(Math.random() * 10)
    let result = Math.ceil(random);
    console.log(result);
}
randomNum();

//task - 6

function Number2 (a) {
    const length = Math.floor(a/2);
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (a + 1));
        result.push(randomNumber); 
    }
    return result
}

console.log(Number2(7));

//task - 7

function number (start, end) {
     const min = Math.ceil(Math.min(start, end));
     const max = Math.floor(Math.max(start, end));

     return Math.floor(Math.random() * max - (min + 1)) + min;
 
}
console.log(number (5, 10));

//task - 8

let date = new Date();

console.log(date.toLocaleDateString());

//task - 9

let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let newDays = +currentDate + days73;
let  in73Days = new Date(newDays); 

console.log(in73Days);

//task - 10 

function dateArr (inputDate) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let date = new Date(inputDate)
    if (isNaN(date.getTime())) {
        console.log("Некорректная дата");
        return;
    }
    let fullDate = "Дата: " + date.getDate() + 
        " " + months[date.getMonth()] + 
        " " + date.getFullYear() + 
        " - это " + days[date.getDay()];
    let fullTime = "Время: " + date.getHours().toString().padStart(2, '0') + 
        ":" + date.getMinutes().toString().padStart(2, '0') + 
        ":" + date.getSeconds().toString().padStart(2, '0');

    console.log(`${fullDate}\n${fullTime}`);
}
dateArr("2025/06/24 14:30:45");