import { getWeather } from "./weatherApi";
import { displayWeather, displayLoading, displayError } from "./dom";

async function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector("#location-input");
  const location = input.value.trim();

  if (!location) {
    displayError("Please enter a city.");
    return;
  }

  displayLoading();

  const weather = await getWeather(location);

  if (!weather) {
    displayError("City not found. Try again.");
    return;
  }

  await displayWeather(weather);

  input.value = "";
}

export function init() {
  const form = document.querySelector("#weather-form");

  form.addEventListener("submit", handleSubmit);
}
