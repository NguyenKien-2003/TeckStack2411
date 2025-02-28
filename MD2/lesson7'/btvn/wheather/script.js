
import { Header } from './header.js';
import { Main } from './main.js';
import { Footer } from './footer.js';
import { MenuComponent } from './menu.js';


document.getElementById('header').innerHTML = Header();
document.getElementById('main').innerHTML = Main();
document.getElementById('footer').innerHTML = Footer();

const API_KEY = '09a71427c59d38d6a34f89b47d75975c';
const CITY_NAME = 'Hanoi';

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherList = document.getElementById('weatherList');
            weatherList.innerHTML = '';

            data.list.forEach(forecast => {
                const forecastCard = createForecastCard(forecast);
                weatherList.appendChild(forecastCard);
            });
        })
        .catch(error => {
            console.error('Lỗi khi lấy dữ liệu dự báo thời tiết:', error);
        });
}

function createForecastCard(forecast) {
    const card = document.createElement('div');
    card.classList.add('forecast-card');

    const image = document.createElement('img');
    image.src = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    image.alt = forecast.weather[0].description;

    const temperature = document.createElement('h2');
    temperature.textContent = `${forecast.main.temp}°C`;

    const description = document.createElement('p');
    description.textContent = forecast.weather[0].description;

    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = new Date(forecast.dt * 1000).toLocaleString();

    card.appendChild(image);
    card.appendChild(temperature);
    card.appendChild(description);
    card.appendChild(time);

    return card;
}

fetchWeatherData();