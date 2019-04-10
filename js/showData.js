import { getFullDate, getShortDate, getCurrentHour } from './date.js';

function showWeather(jsonObj) {
    const { main } = jsonObj.list[0];
    const  tomorrow  = jsonObj.list[8].main;
    const day_after_tomorrow  = jsonObj.list[16].main;
    const day_fourth = jsonObj.list[24].main;
    const day_fifth = jsonObj.list[32].main;
    //today
    document.querySelector('.temp.temp_today').innerHTML= ` ${Math.round(main.temp)} <sup>o</sup>C`;
    document.querySelector('#temp_max_today_value').textContent = Math.round(main.temp_max);
    document.querySelector('#temp_min_today_value').textContent = Math.round(main.temp_min);
    document.querySelector('#pressure_today').textContent = Math.round(main.pressure);
    document.querySelector('#humidity_today').textContent = main.humidity;
    document.querySelector('#wind_speed_today').textContent = Math.round(jsonObj.list[0].wind.speed);
    document.querySelector('.weather.weather_today').src = `img/${showIcons(jsonObj.list[0].weather[0].main)}.svg`;
    // tomorrow
    document.querySelector('#temp_max_tomorrow_value').textContent = Math.round(tomorrow.temp_max);
    document.querySelector('#temp_min_tomorrow_value').textContent = Math.round(tomorrow.temp_min);
    document.querySelector('#pressure_tomorrow').textContent = Math.round(tomorrow.pressure);
    document.querySelector('#humidity_tomorrow').textContent = tomorrow.humidity;
    document.querySelector('#wind_speed_tomorrow').textContent = Math.round(jsonObj.list[8].wind.speed);
    document.querySelector('.weather.weather_tomorrow').src = `img/${showIcons(jsonObj.list[8].weather[0].main)}.svg`;
    // day after tomorrow
    document.querySelector('#temp_max_day_after_tomorrow_value').textContent = Math.round(day_after_tomorrow.temp_max);
    document.querySelector('#temp_min_day_after_tomorrow_value').textContent = Math.round(day_after_tomorrow.temp_min);
    document.querySelector('#pressure_day_after_tomorrow').textContent = Math.round(day_after_tomorrow.pressure);
    document.querySelector('#humidity_day_after_tomorrow').textContent = day_after_tomorrow.humidity;
    document.querySelector('#wind_speed_day_after_tomorrow').textContent = Math.round(jsonObj.list[16].wind.speed);
    document.querySelector('.weather.weather_d3').src = `img/${showIcons(jsonObj.list[16].weather[0].main)}.svg`;
    //day fourth
    document.querySelector('#temp_max_day_fourth_value').textContent = Math.round(day_fourth.temp_max);
    document.querySelector('#temp_min_day_fourth_value').textContent = Math.round(day_fourth.temp_min);
    document.querySelector('#pressure_day_fourth').textContent = Math.round(day_fourth.pressure);
    document.querySelector('#humidity_day_fourth').textContent = day_fourth.humidity;
    document.querySelector('#wind_speed_day_fourth').textContent = Math.round(jsonObj.list[24].wind.speed);
    document.querySelector('.weather.weather_d4').src = `img/${showIcons(jsonObj.list[24].weather[0].main)}.svg`;
    //day fifth
    document.querySelector('#temp_max_day_fifth_value').textContent = Math.round(day_fifth.temp_max);
    document.querySelector('#temp_min_day_fifth_value').textContent = Math.round(day_fifth.temp_min);
    document.querySelector('#pressure_day_fifth').textContent = Math.round(day_fifth.pressure);
    document.querySelector('#humidity_day_fifth').textContent = day_fifth.humidity;
    document.querySelector('#wind_speed_day_fifth').textContent = Math.round(jsonObj.list[32].wind.speed);
    document.querySelector('.weather.weather_d5').src = `img/${showIcons(jsonObj.list[0].weather[0].main)}.svg`;
  }
  
  function showIcons(data) {
    let ic;
    switch (data){
      case "Rain":
        ic = "Rain" 
        break;
      case "Clouds":
        ic = "Few clouds"
        break;
      case "Clear":
        ic = "clear"
        break;
      case "Snow":
        ic = "Snow";
        break;
      case "Drizzle":
        ic = "Shower rain";
        break;
      case "Thunderstorm":
        ic = "Thunderstorm";
        break;
      case "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand"|| "Dust"||"Ash"||"Squall"||"Tornado" :
        ic = "Fog"
        break;
    }
    return ic
  };

  function showDate() {
      document.querySelector('.date').textContent = getFullDate();
      document.querySelector('.hour').textContent = getCurrentHour();
      setInterval(()=> {
        document.querySelector('.hour').textContent = getCurrentHour();
      }, 1000)
      document.querySelector('.date.date_tomorrow').textContent = getFullDate(1);
      document.querySelector('.date.date_d3').textContent = getShortDate(2);
      document.querySelector('.date.date_d4').textContent = getShortDate(3);
      document.querySelector('.date.date_d5').textContent = getShortDate(4);
  }

  
  export { showWeather, showDate };