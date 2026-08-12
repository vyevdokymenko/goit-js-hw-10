import spriteUrl from '../img/sprite.svg';

const iziToastBaseSettings = {
  titleColor: '#FFFFFF',
  messageColor: '#FFFFFF',
  position: 'topRight',
  transitionIn: 'fadeIn',
  animateInside: false,
  color: '#fff',
  icon: 'toast-icon',
  class: 'snackbar-toast',
};

export const getSuccessSettings = (delay) => {
  const overrideSettings = {
    title: 'OK',
    message: `Fulfilled promise in ${delay}ms`,
    backgroundColor: '#59a10d',
    progressBarColor: '#326101',
    onOpening(instance, toast) {
      const icon = toast.querySelector('.iziToast-icon');
      icon.innerHTML = `
       <svg width="24" height="24" aria-hidden="true">
        <use href="${spriteUrl}#x-success"></use>
       </svg>
    `;
    },
  };
  return {...iziToastBaseSettings, ...overrideSettings};
};

export const getErrorSettings = (delay) => {
  const overrideSettings = {
    title: 'Error',
    message: `Rejected promise in ${delay}ms`,
    backgroundColor: '#ef4040',
    progressBarColor: '#b51b1b',
    onOpening(instance, toast) {
      const icon = toast.querySelector('.iziToast-icon');
      icon.innerHTML = `
       <svg width="24" height="24" aria-hidden="true">
        <use href="${spriteUrl}#x-octagon"></use>
       </svg>
    `;
    },
  };
  return {...iziToastBaseSettings, ...overrideSettings};
};
