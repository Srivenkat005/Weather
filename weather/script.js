function getWeather() {
  const cityInput = document.getElementById('city');
  const cityName = cityInput.value;

  if (cityName.trim() === '') {
    alert('Please enter a city name.');
    return;
  }

  // You can replace this with an actual API call to get real weather data
  const weatherConditions = [
    { temperature: '25°C', description: 'Partly Cloudy', humidity: '60%', wind: '15 km/h', backgroundImage: 'url("partly_cloudy.jpg")' },
    { temperature: '30°C', description: 'Clear Sky', humidity: '55%', wind: '20 km/h', backgroundImage: 'url("clear_sky.jpg")' },
    { temperature: '18°C', description: 'Rainy', humidity: '75%', wind: '10 km/h', backgroundImage: 'url("rainy.jpg")' },
    { temperature: '22°C', description: 'Overcast', humidity: '70%', wind: '12 km/h', backgroundImage: 'url("overcast.jpg")' },
    { temperature: '28°C', description: 'Sunny', humidity: '50%', wind: '18 km/h', backgroundImage: 'url("sunny.jpg")' }
    // Add more weather conditions as needed
  ];

  // Randomly select a weather condition
  const randomIndex = Math.floor(Math.random() * weatherConditions.length);
  const randomWeather = weatherConditions[randomIndex];

  // Update background image
  document.body.style.backgroundImage = randomWeather.backgroundImage;

  const weatherResult = document.getElementById('weather-result');
  weatherResult.innerHTML = `
    <p>Temperature: ${randomWeather.temperature}</p>
    <p>Description: ${randomWeather.description}</p>
    <p>Humidity: ${randomWeather.humidity}</p>
    <p>Wind: ${randomWeather.wind}</p>
  `;
}
