import getWeather from './weatherAPI.js';
const currentDate = new Date();
const currentTime = currentDate.getHours();
console.log(currentTime);

function showWeather(jsonObj) {
  document.querySelector('h2').textContent = jsonObj.name;
  document.querySelector('p').textContent = 'temperatura: ' + jsonObj.main.temp;
}

const button = document.getElementById('submit');
button.addEventListener('click', loadWeather);

function loadWeather() {
  getWeather(document.getElementById('city').value)
    .then(result => {
      showWeather(result);
    });
}

function changeStyle() {
  if (19 < currentTime && currentTime <= 5)
    document.body.className = "night";
  else
    document.body.className = "day";
}

loadWeather();
changeStyle();