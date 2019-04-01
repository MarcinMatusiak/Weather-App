var header = document.querySelector("header");

const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "6b6e4de508acbad1c47bc291a27a6d99";
let unit = "metric";
let language = "pl";

function getWeather() {
  let city = document.getElementById("city").value;
  const API = url + "q=" + city + "&appid=" + apiKey + "&units=" + unit + "&lang=" + language;

  var request = new XMLHttpRequest();
  request.open("GET", API);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    var weather = request.response;
    showWeather(weather);
  };
}

function showWeather(jsonObj) {
  var myH1 = document.querySelector("h1");
  myH1.textContent = jsonObj.name;

  var myPara = document.querySelector("p");
  myPara.textContent = "temperatura: " + jsonObj.main.temp;
}

getWeather();

let button = document.getElementById("submit");
button.addEventListener("click", getWeather);
