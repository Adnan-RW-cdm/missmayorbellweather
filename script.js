document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'f17a170c5112afb0ff94a67b84b382c9' ;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                document.getElementById('cityName').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('weatherIcon').src = iconUrl;
                document.getElementById('weatherIcon').alt = data.weather[0].description;
            } else {
                document.getElementById('cityName').textContent = 'City not found';
                document.getElementById('temperature').textContent = '';
                document.getElementById('description').textContent = '';
                document.getElementById('weatherIcon').src = '';
                document.getElementById('weatherIcon').alt = '';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
