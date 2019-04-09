import getWeather from './weatherAPI.js';
import { showWeather, showDate } from './showData.js';
import { getShortDate, getFullDate }from './date.js';


const button = document.getElementById('submit');
button.addEventListener('click', loadWeather);

function loadWeather() {
  getWeather(document.getElementById('city').value)
    .then(result => {
      showWeather(result);
    });
}

loadWeather();
showDate();