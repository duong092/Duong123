const apiKey = 'YOUR_API_KEY'; // Thay 'YOUR_API_KEY' bằng API Key của bạn

document.getElementById('getWeather').addEventListener('click', () => {
const city = document.getElementById('city').value;
getWeatherByCity(city);
});

function getWeatherByCity(city) {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(apiUrl)
.then(response => response.json())
.then(data => displayWeather(data))
.catch(error => console.log('Lỗi:', error));
}

function displayWeather(data) {
if (data.cod === 200) {
const weatherInfo = `Thành phố: ${data.name}<br>
Nhiệt độ: ${data.main.temp}°C<br>
Thời tiết: ${data.weather[0].description}`;
document.getElementById('weatherResult').innerHTML = weatherInfo;
} else {
document.getElementById('weatherResult').innerHTML = 'Không tìm thấy thành phố.';
}
}

document.getElementById('getLocation').addEventListener('click', () => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeatherByLocation(lat, lon);
    }, () => {
    alert('Không thể lấy vị trí của bạn.');
    });
    } else {
    alert('Trình duyệt của bạn không hỗ trợ định vị.');
    }
    });
    
    function getWeatherByLocation(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.log('Lỗi:', error));
    }