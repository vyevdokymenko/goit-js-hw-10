import iziToast from 'izitoast';
import spriteUrl from '../img/sprite.svg';

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
    .then(delay => {
      iziToast.show({
        title: 'OK',
        titleColor: '#FFFFFF',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFFFFF',
        position: 'topRight',
        transitionIn: 'fadeIn',
        animateInside: false,
        backgroundColor: '#59a10d',
        color: '#fff',
        icon: 'toast-icon',
        class: 'snackbar-toast',
        progressBarColor: '#326101',
        onOpening(instance, toast) {
          const icon = toast.querySelector('.iziToast-icon');
          icon.innerHTML = `
            <svg width="24" height="24" aria-hidden="true">
              <use href="${spriteUrl}#x-success"></use>
            </svg>
          `;
        },
      });
    })
    .catch(delay => {
      iziToast.show({
        title: 'Error',
        titleColor: '#FFFFFF',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFFFFF',
        position: 'topRight',
        transitionIn: 'fadeIn',
        animateInside: false,
        backgroundColor: '#ef4040',
        color: '#fff',
        icon: 'toast-icon',
        class: 'snackbar-toast',
        progressBarColor: '#b51b1b',
        onOpening(instance, toast) {
          const icon = toast.querySelector('.iziToast-icon');
          icon.innerHTML = `
            <svg width="24" height="24" aria-hidden="true">
              <use href="${spriteUrl}#x-octagon"></use>
            </svg>
          `;
        },
      });
    });
  form.reset();
});
