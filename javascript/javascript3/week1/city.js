
const apiKey = "06150efd3d284c694f2952a08be1740b";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const button = document.getElementById('myBtn');
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: "cros"
  });
  const respData = await resp.json();
  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = Ktoc(data.main.temp);
  const speed = (data.wind.speed);
  const sunrise = new Date((data.sys.sunrise) * 1000).toLocaleTimeString();
  const sunset = new Date((data.sys.sunset) * 1000).toLocaleTimeString();
  let latitude = (data.coord.lat);
  let longitude = (data.coord.lon);
  const weather = document.createElement('div')
  weather.classList.add('weather');
  weather.innerHTML = `
      <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>  
      <small>${data.weather[0].main}</small><br>  <small>WindSpeed: ${speed} m/s</small> <br> <small>Sunrise: ${sunrise}</small> <br> <small>Sunset: ${sunset}</small> <br> <small>Latitude: ${latitude}</small> <br> <small>Longitude: ${longitude}</small>
      `
  main.innerHTML = "";
  main.appendChild(weather);
}

function Ktoc(K) {
  return Math.floor(K - 273.15);            // convert the temperature from farenheit to celsius
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = search.value;
  if (city == "") {
    alert('Enter a city name');
  } else {
    getWeatherByLocation(city);

  }
});


// Initialize and add the map
function initMap(latitude, longitude) {
  // The location of city
  const city = { lat: 55.6759, lng: 12.5655 };
  // The map, centered at current location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: city,
  });
  // The marker, positioned at current city
  const marker = new google.maps.Marker({
    position: city,
    map: map,
  });
}