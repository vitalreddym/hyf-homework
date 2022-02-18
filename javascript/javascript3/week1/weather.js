
const button = document.getElementById("userLocation");
button.addEventListener("click", getWeather());

function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    let id = navigator.geolocation.watchPosition(success, error);

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "06150efd3d284c694f2952a08be1740b";

    location.innerHTML = "Locating...";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitutde = position.coords.latitude;
        longitude = position.coords.longitude;
        navigator.geolocation.clearWatch(id);

        let url = `${api}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temperature.innerHTML = temp + "° C";
                location.innerHTML = data.name + " (" + position.coords.latitude + "°, " + position.coords.longitude + "°)";

                description.innerHTML = data.weather[0].main;
            });
    }
    function error() {
        location.innerHTML = "Location unavailable";
    }
}
document.body.append(button);
getWeather();