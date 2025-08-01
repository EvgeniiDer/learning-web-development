"use strict"
const daysEl = document.getElementById("days");

let days = new Date().getDate();
console.log(days);

daysEl.textContent = days;