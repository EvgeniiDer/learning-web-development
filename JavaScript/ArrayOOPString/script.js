"use strict"
const ENABLE_SETTIMEOUT = true;//setTimeout() and setInterval()
const ENABLE_TIME = false;
if(ENABLE_SETTIMEOUT)
{
const text = "To be, or not to be, than is the question....";
const autrh = "William Shakespeare, from Hamlet";
const delay = 50;
const repeatDelay = 7000;
let i = 0;

const outputElement = document.getElementById("container");

function typeWriter(targetElement){
    if(i < text.length)
    {
        targetElement.textContent += text.charAt(i);
        i++;
        setTimeout(()=>typeWriter(targetElement), delay);
    }
    else{
        targetElement.innerHTML += "<br>" + autrh;
        
    }
}

function startAnimation()
{
    const newQouteElement = document.createElement('p');
    outputElement.appendChild(newQouteElement);
    i = 0;
    typeWriter(newQouteElement);
}
    startAnimation();
    setInterval(startAnimation, repeatDelay);
    
    console.log(outputElement);
}
if(ENABLE_TIME)
{
    
}

