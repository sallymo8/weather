// week 4 homework date & time

// function search(event) {
//   event.preventDefault();
//   let cityElement = document.querySelector("#city");
//   let city = document.querySelector("#city-input");
//   cityElement.innerHTML = city.value;
// }
// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", search);

let date = new Date();
let h1 = document.querySelector("h1");

let dayIndex = date.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[dayIndex];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentMonth = months[date.getMonth()];
let currentYear = date.getFullYear();
let currentDate = date.getDate();

h1.innerHTML = `Last updated: ${day} @ ${hours}:${minutes}`;

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Fri", "Sat", "Sun"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `     

            <div class="col-2">
              <div class="weather-forecast-date">${day} 
              </div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 18° </span>
                <span class="weather-forecast-temperature-min"> 12° </span>
              </div>
            </div>
            </div>
          </div>
          `;
  });

  forecastHTML =
    forecastHTML +
    `     
            <div class="col-2">
              <div class="weather-forecast-date">Thur 
              </div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 18° </span>
                <span class="weather-forecast-temperature-min"> 12° </span>
              </div>
            </div>
            </div>
          </div>
          `;
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

// week 5 homework - search city

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  celciusTemperature = response.data.main.temp;
  document.querySelector("#temperature").innerHTML =
    Math.round(celciusTemperature);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#windspeed").innerHTML = Math.round(
    response.data.wind.speed
  );
  let currentWeatherIcon = response.data.weather[0].icon;
  let currentWeatherIconElement = document.querySelector(
    "#current-weather-icon"
  );
  currentWeatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

// function displayTemperature(response) {
//   celciusTemperature = response.data.main.temp;
//   console.log(celciusTemperature);
//   document.querySelector("#temperature").innerHTML =
//     Math.round(celciusTemperature);

//   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//   document.querySelector("#windspeed").innerHTML = Math.round(
//     response.data.wind.speed
//   );
//   let currentWeatherIcon = response.data.weather[0].icon;
//   let currentWeatherIconElement = document.querySelector(
//     "#current-weather-icon"
//   );
//   currentWeatherIconElement.setAttribute(
//     "src",
//     `http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`
//   );
//   document.querySelector("#description").innerHTML =
//     response.data.weather[0].description;
// }

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "95fa8555a2dc7c5fe068dd93781a7dbe";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}

// let searchInput = document.querySelector("#search-form");
// searchInput.addEventListener("submit", searchCity);

// convert C to F

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = Math.round((celciusTemperature * 9) / 5 + 32);
  temperatureElement.innerHTML = fahrenheitTemperature;
  celciusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function displayCelciusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celciusTemperature);
  fahrenheitLink.classList.remove("active");
  celciusLink.classList.add("active");
}

let celciusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelciusTemperature);

//search(`London`);
searchCity("London");
displayForecast();
