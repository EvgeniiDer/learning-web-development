"use strict"

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds");


function countdown()
{
    const currnetDate = new Date();
    const currentYear = currnetDate.getFullYear();
    const newYearDate = new Date(`January 1, ${currentYear + 1}, 00:00:00`);
    
    const timeDifference = newYearDate - currnetDate;
    
    secondsEl.innerText = Math.floor(timeDifference / 1000);
    minutesEl.innerText = Math.floor(timeDifference / (1000 * 60));
    hoursEl.innerText = Math.floor(timeDifference / (1000 * 60 * 60));
    daysEl.innerText = Math.floor(timeDifference / (1000  * 60 * 60 * 24));
}

countdown();