function getIconName(conditions) {
  const normalized = conditions.toLowerCase();

  if (normalized.includes("thunder")) return "thunderstorms";

  if (normalized.includes("snow")) return "snow";

  if (normalized.includes("rain")) return "rain";

  if (normalized.includes("fog") || normalized.includes("mist")) {
    return "fog";
  }

  if (normalized.includes("partly") || normalized.includes("mostly clear")) {
    return "mostly-clear-day";
  }

  if (normalized.includes("cloud") || normalized.includes("overcast")) {
    return "cloudy";
  }

  if (normalized.includes("clear")) {
    return "clear-day";
  }

  // Fallback
  return "cloudy";
}

export async function getWeatherIcon(conditions) {
  const iconName = getIconName(conditions);

  const iconModule = await import(`../assets/icons/${iconName}.svg`);

  return iconModule.default;
}
