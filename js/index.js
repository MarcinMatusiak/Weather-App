import getWeather from './weatherAPI.js';
import { showWeather, showDate } from './showData.js';

const currentDate = new Date();
const currentTime = currentDate.getHours();


const button = document.getElementById('submit');
button.addEventListener('click', loadWeather);

function loadWeather() {
  getWeather(document.getElementById('city').value)
    .then(result => {
      showWeather(result);
    });
}

function changeStyle() {
  if (19 < currentTime || currentTime <= 5)
    document.body.className = "night";
  else
    document.body.className = "day";
}

loadWeather();
showDate();
changeStyle();
