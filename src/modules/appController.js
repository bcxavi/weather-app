import { getWeather } from "./weatherApi";
import { displayWeather, displayLoading, displayError } from "./dom";

export function init() {
  const form = document.querySelector("#weather-form");
  const input = document.querySelector("#location-input");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

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

    displayWeather(weather);

    input.value = "";
  });
}
