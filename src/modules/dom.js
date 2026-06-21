import { getWeatherIcon } from "./weatherIcon";

export async function displayWeather(weather) {
  const result = document.querySelector("#weather-result");

  if (!weather) {
    displayError("City not found. Try again.");
    return;
  }

  updateBackground(weather.conditions);

  const iconSrc = await getWeatherIcon(weather.conditions);

  result.innerHTML = `
  <article class="weather-card">
    <div class="weather-main">
      <div>
        <img class="weather-icon"
             src="${iconSrc}"
             alt="${weather.conditions}">
        <h2>${weather.location}</h2>
        <p class="conditions">${weather.conditions}</p>
      </div>

      <p class="temperature">${Math.round(weather.temperature)}°C</p>
    </div>

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

function updateBackground(conditions) {
  const body = document.body;
  const normalizedConditions = conditions.toLowerCase();

  body.className = "";

  if (normalizedConditions.includes("rain")) {
    body.classList.add("rainy");
  } else if (normalizedConditions.includes("cloud")) {
    body.classList.add("cloudy");
  } else if (normalizedConditions.includes("clear")) {
    body.classList.add("sunny");
  } else {
    body.classList.add("default-weather");
  }
}
