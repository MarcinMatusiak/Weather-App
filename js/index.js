import getWeather from './weatherAPI.js';
import { showWeather, showDate } from './showData.js';
import getPredictions from './autocomplete.js';


const currentDate = new Date();
const currentTime = currentDate.getHours();

const button = document.getElementById('submit');
button.addEventListener('click', loadWeather)

const input = document.getElementById('city');
input.addEventListener('keydown', function (e) {
  if (e.keyCode === 38) return;
  if (e.keyCode === 40) return;
  else showPredictions (e)
});
input.addEventListener('change', loadWeather);
input.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) loadWeather(e)
  }
);
/* dodać eventlistenera na klawisz enter na zaznaczonej podpowiedzi
const suggestions = document.getElementsByClassName('suggestion')
Array.from(suggestions).forEach(e => e.addEventListener('keydown', e => {
  if (e.keyCode === 13) loadWeather(e);
  }
));
*/
function loadWeather() {
  getWeather(input.value)
    .then(result => {
      showWeather(result);
    });
};

function showPredictions() {
  getPredictions(input.value); 
};

function changeStyle() {
  if (19 < currentTime || currentTime <= 5)
    document.body.className = "night";
  else
    document.body.className = "day";
};

loadWeather();
showDate();
changeStyle();
