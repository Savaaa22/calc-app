const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const btnReset = document.querySelector('.btn-reset');
const btnDelete = document.querySelector('.btn-delete');
const btnEqual = document.querySelector('.btn-equal');

// SLIDER

const slider = document.querySelector('.slider');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const body = document.querySelector('body');
const numbersBg = document.querySelector('.numbers');
const h1 = document.querySelector('h1');
const thColor = document.querySelector('.th-color');
const style = document.querySelector('[data="theme"]');




// CALCULATOR 

for (let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    }) 
 }

btnEqual.addEventListener('click', function() {
    if(screen.value === ''){
        alert('Input is empty')
    }
    else {
    let value = eval(screen.value);
    screen.value = value;
    }
})

btnReset.addEventListener('click', function(){
    screen.value = '';
})

btnDelete.addEventListener('click', function() {
    screen.value = screen.value.slice(0, -1);
})


// SLIDER 

theme1.addEventListener('click', () => {
    slider.value = 1;
})

theme2.addEventListener('click', () => {
    slider.value = 2;
})

theme3.addEventListener('click', () => {
    slider.value = 3;
})

function checkColors() {
    if(slider.value == 1) {
        body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        numbersBg.style.backgroundColor = 'hsl(223, 31%, 20%)';
        screen.style.backgroundColor = 'hsl(224, 36%, 15%)';
        screen.style.color = '#fff';
        Array.from(document.querySelectorAll(".btn"),  e => e.style.backgroundColor = "hsl(30, 25%, 89%)");
        Array.from(document.querySelectorAll(".btn"),  e => e.style.color = "hsl(221, 14%, 31%)");
        Array.from(document.querySelectorAll(".btn"),  e => e.style.borderBottom = "5px solid hsl(28, 16%, 65%)");
        btnReset.style.backgroundColor = 'hsl(225, 21%, 49%)';
        btnDelete.style.backgroundColor = 'hsl(225, 21%, 49%)';
        btnDelete.style.borderBottom = '5px solid hsl(224, 28%, 35%)';
        btnReset.style.borderBottom = '5px solid hsl(224, 28%, 35%)';
        btnEqual.style.backgroundColor = 'hsl(6, 63%, 50%)';
        btnEqual.style.borderBottom = '5px solid hsl(6, 70%, 34%)';
        btnEqual.style.color = '#fff';
        theme1.style.color = '#fff';
        theme2.style.color = '#fff';
        theme3.style.color = '#fff';
        h1.style.color = '#fff';
        thColor.style.color = '#fff';
        slider.style.backgroundColor = 'hsl(223, 31%, 20%)';
        style.innerHTML = '';
    }
    if(slider.value == 2) {
        body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        numbersBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
        Array.from(document.querySelectorAll(".btn"),  e => e.style.backgroundColor = "hsl(45, 7%, 89%)");
        Array.from(document.querySelectorAll(".btn"),  e => e.style.color = "hsl(60, 10%, 19%)");
        Array.from(document.querySelectorAll(".btn"),  e => e.style.borderBottom = "5px solid hsl(35, 11%, 61%)");
        screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
        screen.style.color = 'hsl(60, 10%, 19%)';
        btnReset.style.backgroundColor = 'hsl(185, 42%, 37%)';
        btnDelete.style.backgroundColor = 'hsl(185, 42%, 37%)';
        btnDelete.style.borderBottom = '5px solid hsl(185, 58%, 25%)';
        btnReset.style.borderBottom = '5px solid hsl(185, 58%, 25%)';
        btnEqual.style.backgroundColor = 'hsl(25, 98%, 40%)';
        btnEqual.style.borderBottom = '5px solid hsl(25, 99%, 27%)';
        btnEqual.style.color = '#fff';
        theme1.style.color = 'hsl(60, 10%, 19%)';
        theme2.style.color = 'hsl(60, 10%, 19%)';
        theme3.style.color = 'hsl(60, 10%, 19%)';
        h1.style.color = 'hsl(60, 10%, 19%)';
        thColor.style.color = 'hsl(60, 10%, 19%)';
        slider.style.backgroundColor = 'hsl(0, 5%, 81%)';
        style.innerHTML = '.slider::-webkit-slider-thumb { background: hsl(25, 98%, 40%) }';
    }
    if(slider.value == 3) {
        body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        numbersBg.style.backgroundColor = 'hsl(268, 71%, 12%)';
        Array.from(document.querySelectorAll(".btn"),  e => e.style.backgroundColor = "hsl(268, 47%, 21%)");
        Array.from(document.querySelectorAll(".btn"),  e => e.style.color = "hsl(52, 100%, 62%)");
        Array.from(document.querySelectorAll(".btn"),  e => e.style.borderBottom = "5px solid hsl(290, 70%, 36%)");
        screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
        screen.style.color = 'hsl(52, 100%, 62%)';
        btnReset.style.backgroundColor = 'hsl(281, 89%, 26%)';
        btnDelete.style.backgroundColor = 'hsl(281, 89%, 26%)';
        btnDelete.style.borderBottom = '5px solid hsl(285, 91%, 52%)';
        btnReset.style.borderBottom = '5px solid hsl(285, 91%, 52%)';
        btnEqual.style.backgroundColor = 'hsl(176, 100%, 44%)';
        btnEqual.style.borderBottom = '5px solid hsl(177, 92%, 70%)';
        btnEqual.style.color = 'hsl(198, 20%, 13%)';
        theme1.style.color = 'hsl(52, 100%, 62%)';
        theme2.style.color = 'hsl(52, 100%, 62%)';
        theme3.style.color = 'hsl(52, 100%, 62%)';
        h1.style.color = 'hsl(52, 100%, 62%)';
        thColor.style.color = 'hsl(52, 100%, 62%)';
        slider.style.backgroundColor = 'hsl(268, 71%, 12%)';
        style.innerHTML = '.slider::-webkit-slider-thumb { background: hsl(176, 100%, 44%) }';
    }
}

setInterval(checkColors, 100);