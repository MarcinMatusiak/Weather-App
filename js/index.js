import getWeather from './weatherAPI.js';
import { showWeather, showDate } from './showData.js';
import { getShortDate, getFullDate }from './date.js';
import autocomplete from './autocomplete.js';

const currentDate = new Date();
const currentTime = currentDate.getHours();


const button = document.getElementById('submit');
button.addEventListener('click', loadWeather);

function loadWeather() {
  getWeather(document.getElementById('city').value)
    .then(result => {
      showWeather(result);
    });
};

const input = document.getElementById('city');
input.addEventListener('keyup', showPredictions);

function showPredictions() {
  autocomplete(input.value)
    .then(result => {
      console.log(result);
    })
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