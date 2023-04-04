import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector('input#datetime-picker')
const btn = document.querySelector('button[data-start]');
const dayss = document.querySelector('[data-days]');
const hourss = document.querySelector('[data-hours]');
const minutess = document.querySelector('[data-minutes]');
const secondss = document.querySelector('[data-seconds]');

let intervalId = null;
btn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      if(selectedDates[0] <= new Date()) {
        btn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
        return;
      } else {
        btn.disabled = false;
      }

      btn.addEventListener('click', () => {
         intervalId = setInterval(() => {
            const differenceInTime = selectedDates[0] - new Date();

            if(differenceInTime < 1000) {
                clearInterval(intervalId);
            }
            const result = convertMs(differenceInTime);
            viewOfTimer(result);
         })
      })

    },
  };

flatpickr(input, options);

function viewOfTimer({ days, hours, minutes, seconds }) {
    dayss.textContent = `${days}`;
    hourss.textContent = `${hours}`;
    minutess.textContent = `${minutes}`;
    secondss.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

////////// Увеливение таймера //////////////////
// btn.addEventListener('click', onClick);

// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if(this.isActive) {
//             return;
//         }
//         const startTame = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTame ; 
//             const time = convertMs(deltaTime);
//             //console.log(`${days}:${hours}:${minutes}:${seconds}`);
//             update(time);
//         }, 1000);
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// }

// function onClick() {
//     timer.start();
// }

// function onClose() {
//     timer.stop();
// }