"use strict";
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    p ? p.innerHTML = `${value + 100 - value * 0.2} ` : console.log('error P');
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
input ? input.addEventListener('keyup', totalMudou) : console.log('error');
const button = document.querySelector('button');
button?.click();
