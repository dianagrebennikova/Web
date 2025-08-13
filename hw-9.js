//task - 1
const titleEl = document.querySelector('.title');
const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click',() =>{
   if( titleEl.style.display === 'none'){
    titleEl.style.display = 'block'
   } else{
    titleEl.style.display ='none'
   }
});

//task - 2
const text = document.querySelector('.text');
const btnColor = document.querySelector('.btnColor');
btnColor.addEventListener('click',() =>{
    if (text.style.color === 'blue') {
        text.style.color = 'black'; 
    } else {
        text.style.color = 'blue';
    }
});

//task - 3
const heading = document.querySelector('.heading');
const btnText = document.querySelector('.btnText');
btnText.addEventListener('click',() =>{
    if (heading.textContent === 'Привет, мир!') {
        heading.textContent = 'Lorem, ipsum dolor.'; 
    } else {
        heading.textContent = 'Привет, мир!';
    }
});

//task - 4
const descriptionEl = document.querySelectorAll('.description');
descriptionEl.forEach(description => {
    description.textContent = 'Измененный текст';
 });

 //task - 5
 const descriptionNewEl = document.querySelectorAll('.descriptionNew');
 descriptionNewEl.forEach(descriptionNew => {
    descriptionNew.textContent = 'Новый текст';
 });

 //task - 6
 const btnAddEl = document.querySelector('.btnAdd');
 btnAddEl.addEventListener('click',() =>{
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
 });

 //task-7
 const btnRemove = document.querySelector('.btnRemove');
 btnRemove.addEventListener('click',() =>{
    const paragraph = document.querySelector('.newDescription');
        paragraph.remove();
 })

