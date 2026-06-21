export function displayWeather(weather) {
  const result = document.querySelector("#weather-result");

  if (!weather) {
    result.innerHTML = `
      <div class="weather-card error-card">
        <p>City not found. Try again.</p>
      </div>
    `;
    return;
  }

  result.innerHTML = `
    <article class="weather-card">
      <h2>${weather.location}</h2>

      <p class="temperature">${Math.round(weather.temperature)}°C</p>
      <p class="conditions">${weather.conditions}</p>

      <div class="weather-details">
        <p><span>Feels like</span>${Math.round(weather.feelsLike)}°C</p>
        <p><span>Humidity</span>${Math.round(weather.humidity)}%</p>
        <p><span>Wind</span>${Math.round(weather.windSpeed)} km/h</p>
      </div>
    </article>
  `;
}

export function displayLoading() {
  const result = document.querySelector("#weather-result");

  result.innerHTML = `
    <div class="weather-card">
      <p>Loading weather...</p>
    </div>
  `;
}

export function displayError(message) {
  const result = document.querySelector("#weather-result");

  result.innerHTML = `
    <div class="weather-card error-card">
      <p>${message}</p>
    </div>
  `;
}
