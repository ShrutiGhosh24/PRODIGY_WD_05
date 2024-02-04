const apiKey ="cf52e46ff129bc903805c6d06d5b5584";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchBtn');
const loc = document.getElementById('location');
const  temp = document.getElementById('temperature');
const des = document.getElementById('description');
let weatherIcon = document.querySelector('.weather-icon');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    
    if(location){
        fetchWeather(location)
    }
    });

function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        loc.textContent = data.name;
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        des.textContent = data.weather[0].description;
        weatherIcon.src = `icons/${data.weather[0].icon}`;

       /* if(data.weather[0].main == "clear sky"){
            weatherIcon.src  = "icons/01d.png";
        }
        else if(data.weather[0].main == "few clouds"){
            weatherIcon.src  = "weather/icons/02d.png";
        }
        else if(data.weather[0].main == "sacttered clouds"){
            weatherIcon.src  = "icons/03d.png";
        }
        else if(data.weather[0].main == "broken clouds"){
            weatherIcon.src  = "icons/04d.png";
        }
        else if(data.weather[0].main == "shower rain"){
            weatherIcon.src  = "icons/09d.png";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src  = "icons/10d.png";
        }
        else if(data.weather[0].main == "thunderstorm"){
            weatherIcon.src  = "icons/11d.png";
        }
        else if(data.weather[0].main == "snow"){
            weatherIcon.src  = "icons/13d.png";
        }
        else if(data.weather[0].main == "mist"){
            weatherIcon.src  = "C:\Users\DELL\Documents\web development\weather/icons/50d.png";
        }*/

        console.log(data);
       

    })
    .catch(error => {
        console.error('Error while fetching weather data:', error);
    });
}
