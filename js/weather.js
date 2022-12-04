function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "c0b1b69dfe28850df0e924c21352ee45";
    
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });

}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);