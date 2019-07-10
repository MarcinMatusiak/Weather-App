import getWeather from './weatherAPI.js';
import { showWeather, showDate } from './showData.js';
import { getShortDate, getFullDate }from './date.js';
import autocomplete from './autocomplete.js';

const currentDate = new Date();
const currentTime = currentDate.getHours();


const button = document.getElementById('submit');
button.addEventListener('click', loadWeather);

const input = document.getElementById('city');
input.addEventListener('change', showPredictions);
//input.addEventListener('keyup', showPredictions);

function loadWeather() {
  getWeather(input.value)
    .then(result => {
      showWeather(result);
    });
};

function showPredictions() {
  autocomplete(input.value); 
};

function changeStyle() {
  if (19 < currentTime && currentTime <= 5)
    document.body.className = "night";
  else
    document.body.className = "day";
};

loadWeather();
showDate();
changeStyle();
autocomplete();