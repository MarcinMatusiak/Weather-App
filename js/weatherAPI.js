const url = 'URL';
const apiKey = 'API KEY';
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