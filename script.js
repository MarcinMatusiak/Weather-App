const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "6b6e4de508acbad1c47bc291a27a6d99";
const unit = "metric";
const language = "pl";

let weather;

function getWeather() {
  const city = document.getElementById("city").value;
  const API = url + "q=" + city + "&appid=" + apiKey + "&units=" + unit + "&lang=" + language;

  fetch(API)
    .then(
      function response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function (data) {
          weather = data;
          console.log(weather);
          showWeather(weather);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    })
}

function showWeather(jsonObj) {
  document.querySelector("h1").textContent = jsonObj.name;
  document.querySelector("p").textContent = "temperatura: " + jsonObj.main.temp;
}

getWeather();

const button = document.getElementById("submit");
button.addEventListener("click", getWeather);