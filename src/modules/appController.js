import { getWeather } from "./weatherApi";
import { displayWeather } from "./dom";

export function init() {
  const form = document.querySelector("#weather-form");
  const input = document.querySelector("#location-input");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = input.value.trim();

    if (!location) return;

    const weather = await getWeather(location);

    displayWeather(weather);

    input.value = "";
  });
}
