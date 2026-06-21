import { getWeather } from "./weatherApi";
import { displayWeather } from "./dom";

export async function init() {
  const weather = await getWeather("Barcelona");

  displayWeather(weather);
}
