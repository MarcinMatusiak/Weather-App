const url = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '6b6e4de508acbad1c47bc291a27a6d99';
const unit = 'metric';
const language = 'pl';


function getWeather(city) {
    const API = `${url}q=${city}&appid=${apiKey}&units=${unit}&lang=${language}`;

    return fetch(API)
        .then(response => response.json())
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        })
}

export default getWeather;