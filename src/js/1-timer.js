import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import { addLeadingZero, convertMs, getFpOptions, iziToastSettings } from './timer-helper.js';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/1-timer.css';

let userSelectedDate;
const datePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('.start-button');
const htmlValues = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const TIMEOUT_MS = 1000;

const validateSelectedDate = (date, isInitialValidation = false) => {
  if (date <= new Date()) {
    startButton.disabled = true;
    if (!isInitialValidation) {
      iziToast.show(iziToastSettings);
    }
  } else {
    startButton.disabled = false;
  }
};

const fpOnCloseHandler = (selectedDates) => {
  userSelectedDate = selectedDates[0];
  validateSelectedDate(userSelectedDate);
};

flatpickr('#datetime-picker', getFpOptions(fpOnCloseHandler));
validateSelectedDate(new Date(), true);

const renderTimer = ms => {
  const { days, hours, minutes, seconds } = convertMs(Math.max(ms, 0));

  htmlValues.days.textContent = addLeadingZero(days);
  htmlValues.hours.textContent = addLeadingZero(hours);
  htmlValues.minutes.textContent = addLeadingZero(minutes);
  htmlValues.seconds.textContent = addLeadingZero(seconds);
};

startButton.addEventListener('click', () => {
  datePicker.disabled = true;
  startButton.disabled = true;

  const updateTimer = () => {
    const duration = userSelectedDate.getTime() - Date.now();

    if (duration <= 0) {
      renderTimer(0);
      clearInterval(intervalId);
      datePicker.disabled = false;
      return;
    }

    renderTimer(duration);
  };

  const intervalId = setInterval(updateTimer, TIMEOUT_MS);
  updateTimer();
});

