import getWeather from './weatherAPI.js';

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
        })
}

loadWeather();