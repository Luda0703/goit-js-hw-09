import Notiflix from 'notiflix';


const form = document.querySelector('.form');
const inputDelay = document.querySelector('delay');
const inputStep = document.querySelector('step');
const inputAmount = document.querySelector('amount');
const btnSubmit = document.querySelector('button');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
let delay = Number(e.target.delay.value);
const step = Number(e.target.step.value);
const amount = Number(e.target.amount.value);


for (let position = 1; position <= amount; position++) {
  createPromise(position, delay).then(onSuccess).catch(onError)
delay += step
}};


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay);
  });
}


function onSuccess(result) {
  Notiflix.Notify.success(result);
}

function onError(error) {
  Notiflix.Notify.failure(error);
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
