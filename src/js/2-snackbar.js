import iziToast from 'izitoast';
import { getErrorSettings, getSuccessSettings } from './snackbar-helper.js';

import '../css/2-snackbar.css';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const delay = Math.max(Number(form.elements.delay.value), 0);
  const state = form.elements.state.value;
  makePromise({
    value: delay,
    delay: delay,
    shouldResolve: state === 'fulfilled',
  })
    .then((value) => iziToast.show(getSuccessSettings(value)))
    .catch((error) => iziToast.show(getErrorSettings(error)));
  form.reset();
});
