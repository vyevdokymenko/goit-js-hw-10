import spriteUrl from '../img/sprite.svg';

export const iziToastSettings = {
  title: 'Error',
  titleColor: '#FFFFFF',
  message: 'Please choose a date in the future',
  messageColor: '#FFFFFF',
  position: 'topRight',
  transitionIn: 'fadeIn',
  animateInside: false,
  class: 'error-message',
  backgroundColor: '#ef4040',
  color: '#fff',
  icon: 'toast-icon',
  onOpening(instance, toast) {
    const icon = toast.querySelector('.iziToast-icon');
    icon.innerHTML = `
       <svg width="24" height="24" aria-hidden="true">
        <use href="${spriteUrl}#x-octagon"></use>
       </svg>
    `;
  },
  progressBarColor: '#b51b1b',
};

export const getFpOptions = handler => {
  return {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      handler(selectedDates);
    },
  }
};

export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
