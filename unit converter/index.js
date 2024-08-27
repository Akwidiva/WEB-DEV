/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let InputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")
const piEl = document.getElementById("pi")
const piiEl = document.getElementById("pii")
const piiiEl = document.getElementById("piii")
btnEl.addEventListener("click", function(){
    const InputValue = Number(InputEl.value);
    piEl.textContent=`${InputValue} meter = ${(InputValue * 3.281).toFixed(2)} feet | ${InputValue} feet = ${(InputValue / 3.281).toFixed(2)} meter`;
    piiEl.textContent=`${InputValue} liter = ${(InputValue * 0.264).toFixed(2)} gallon | ${InputValue} gallon = ${(InputValue / 0.264).toFixed(2)} liter`;
    piiiEl.textContent =`${InputValue} kilogram = ${(InputValue * 2.204).toFixed(2)} pound | ${InputValue} pound = ${(InputValue / 2.204).toFixed(2)} kilogram`;
})