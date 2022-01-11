// week 4 homework date & time

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#currentCity");
  let currentCity = document.querySelector("#city-input");
  cityElement.innerHTML = currentCity.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = new Date();
let h1 = document.querySelector("h1");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];

h1.innerHTML = `${day} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

// week 5 homework - search city

function displayWeather(response) {
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#windspeed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "95fa8555a2dc7c5fe068dd93781a7dbe";
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchCity);
