
const dataStart = document.querySelector('[data-start]');
const dataStop = document.querySelector('[data-stop]');
const dataBody = document.querySelector('body');

dataStart.addEventListener('click', onStartColor);
dataStop.addEventListener('click', onStopColor);

let timerId = null;
 let isActive = true;

function onStartColor() {
    timerId = setInterval(getBgColor, 1000);
    
    dataStart.disabled = true
    if(dataStart.disabled) {
        dataStop.disabled = false
    }

}

function onStopColor() {
    clearInterval(timerId);
    
    dataStop.disabled = true
    if(dataStop.disabled) {
        dataStart.disabled = false
    }
}

function getBgColor() {
    dataBody.style.backgroundColor = getRandomHexColor();
} 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)
    }`;
  }

 
  