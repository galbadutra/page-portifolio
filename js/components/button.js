

const button_left = window.document.querySelector('.button-arrow.-left');
const button_right = window.document.querySelector('.button-arrow.-right');

const elements = window.document.querySelector('.elements');
let pixels = 0;

button_left.addEventListener('click',function(){
    pixels = pixels - 30;
    elements.style = `transform: translateX(${pixels}px)`;
});

button_right.addEventListener('click', function(){
    pixels = pixels + 30;
    elements.style = `transform: translateX(${pixels}px)`;
});