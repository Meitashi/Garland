'use strict';
const imgs = document.querySelectorAll("img");

function blinking(){
    imgs.forEach(element => {
    element.style.opacity = Math.floor(Math.random() * 2);
});
};

setInterval(blinking, 1000);