const API_KEY = "8LKDBJ88CBXV2WYJTVFCAV9CQ";

export async function getWeather(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return {
      location: data.resolvedAddress,

      temperature: data.currentConditions.temp,

      feelsLike: data.currentConditions.feelslike,

      conditions: data.currentConditions.conditions,

      humidity: data.currentConditions.humidity,

      windSpeed: data.currentConditions.windspeed,
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}
