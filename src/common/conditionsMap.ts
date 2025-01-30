export const weatherSymbolMap: Record<
  string,
  {
    symbolCode: string;
    niceName: string;
  }
> = {
  clearsky_day: { symbolCode: "01d", niceName: "Clear skies" },
  clearsky_night: { symbolCode: "01n", niceName: "Clear skies" },
  clearsky_polartwilight: { symbolCode: "01m", niceName: "Clear skies" },
  fair_day: { symbolCode: "02d", niceName: "Fair" },
  fair_night: { symbolCode: "02n", niceName: "Fair" },
  fair_polartwilight: { symbolCode: "02m", niceName: "Fair" },
  partlycloudy_day: { symbolCode: "03d", niceName: "Partially cloudy" },
  partlycloudy_night: { symbolCode: "03n", niceName: "Partially cloudy" },
  partlycloudy_polartwilight: {
    symbolCode: "03m",
    niceName: "Partially cloudy",
  },
  cloudy: { symbolCode: "04", niceName: "Cloudy" },
  rainshowers_day: { symbolCode: "05d", niceName: "Rain" },
  rainshowers_night: { symbolCode: "05n", niceName: "Rain" },
  rainshowers_polartwilight: { symbolCode: "05m", niceName: "Rain" },
  rainshowersandthunder_day: {
    symbolCode: "06d",
    niceName: "Rain and thunder",
  },
  rainshowersandthunder_night: {
    symbolCode: "06n",
    niceName: "Rain and thunder",
  },
  rainshowersandthunder_polartwilight: {
    symbolCode: "06m",
    niceName: "Rain and thunder",
  },
  sleetshowers_day: { symbolCode: "07d", niceName: "Sleet" },
  sleetshowers_night: { symbolCode: "07n", niceName: "Sleet" },
  sleetshowers_polartwilight: { symbolCode: "07m", niceName: "Sleet" },
  snowshowers_day: { symbolCode: "08d", niceName: "Snow" },
  snowshowers_night: { symbolCode: "08n", niceName: "Snow" },
  snowshowers_polartwilight: { symbolCode: "08m", niceName: "Snow" },
  rain: { symbolCode: "09", niceName: "Rain" },
  heavyrain: { symbolCode: "10", niceName: "Heavy rain" },
  heavyrainandthunder: { symbolCode: "11", niceName: "Heavy rain and thunder" },
  sleet: { symbolCode: "12", niceName: "Sleet" },
  snow: { symbolCode: "13", niceName: "Snow" },
  snowandthunder: { symbolCode: "14", niceName: "Snow and thunder" },
  fog: { symbolCode: "15", niceName: "Foggy" },
  sleetshowersandthunder_day: {
    symbolCode: "20d",
    niceName: "Sleet and thunder",
  },
  sleetshowersandthunder_night: {
    symbolCode: "20n",
    niceName: "Sleet and thunder",
  },
  sleetshowersandthunder_polartwilight: {
    symbolCode: "20m",
    niceName: "Sleet and thunder",
  },
  snowshowersandthunder_day: {
    symbolCode: "21d",
    niceName: "Sleet and thunder",
  },
  snowshowersandthunder_night: {
    symbolCode: "21n",
    niceName: "Sleet and thunder",
  },
  snowshowersandthunder_polartwilight: {
    symbolCode: "21m",
    niceName: "Sleet and thunder",
  },
  rainandthunder: { symbolCode: "22", niceName: "Sleet and thunder" },
  sleetandthunder: { symbolCode: "23", niceName: "Sleet and thunder" },
  lightrainshowersandthunder_day: {
    symbolCode: "24d",
    niceName: "Light rain and thunder",
  },
  lightrainshowersandthunder_night: {
    symbolCode: "24n",
    niceName: "Light rain and thunder",
  },
  lightrainshowersandthunder_polartwilight: {
    symbolCode: "24m",
    niceName: "Light rain and thunder",
  },
  heavyrainshowersandthunder_day: {
    symbolCode: "25d",
    niceName: "Heavy rain and thunder",
  },
  heavyrainshowersandthunder_night: {
    symbolCode: "25n",
    niceName: "Heavy rain and thunder",
  },
  heavyrainshowersandthunder_polartwilight: {
    symbolCode: "25m",
    niceName: "Heavy rain and thunder",
  },
  lightssleetshowersandthunder_day: {
    symbolCode: "26d",
    niceName: "Light sleet and thunder",
  },
  lightssleetshowersandthunder_night: {
    symbolCode: "26n",
    niceName: "Light sleet and thunder",
  },
  lightssleetshowersandthunder_polartwilight: {
    symbolCode: "26m",
    niceName: "Light sleet and thunder",
  },
  heavysleetshowersandthunder_day: {
    symbolCode: "27d",
    niceName: "Heavy sleet and thunder",
  },
  heavysleetshowersandthunder_night: {
    symbolCode: "27n",
    niceName: "Heavy sleet and thunder",
  },
  heavysleetshowersandthunder_polartwilight: {
    symbolCode: "27m",
    niceName: "Heavy sleet and thunder",
  },
  lightssnowshowersandthunder_day: {
    symbolCode: "28d",
    niceName: "Light snow and thunder",
  },
  lightssnowshowersandthunder_night: {
    symbolCode: "28n",
    niceName: "Light snow and thunder",
  },
  lightssnowshowersandthunder_polartwilight: {
    symbolCode: "28m",
    niceName: "Light snow and thunder",
  },
  heavysnowshowersandthunder_day: {
    symbolCode: "29d",
    niceName: "Heavy snow and thunder",
  },
  heavysnowshowersandthunder_night: {
    symbolCode: "29n",
    niceName: "Heavy snow and thunder",
  },
  heavysnowshowersandthunder_polartwilight: {
    symbolCode: "29m",
    niceName: "Heavy snow and thunder",
  },
  lightrainandthunder: { symbolCode: "30", niceName: "Light rain and thunder" },
  lightsleetandthunder: {
    symbolCode: "31",
    niceName: "Light sleet and thunder",
  },
  heavysleetandthunder: {
    symbolCode: "32",
    niceName: "Heavy sleet and thunder",
  },
  lightsnowandthunder: { symbolCode: "33", niceName: "Light snow and thunder" },
  heavysnowandthunder: { symbolCode: "34", niceName: "Heavy snow and thunder" },
  lightrainshowers_day: { symbolCode: "40d", niceName: "Light rain" },
  lightrainshowers_night: { symbolCode: "40n", niceName: "Light rain" },
  lightrainshowers_polartwilight: { symbolCode: "40m", niceName: "Light rain" },
  heavyrainshowers_day: { symbolCode: "41d", niceName: "Heavy rain" },
  heavyrainshowers_night: { symbolCode: "41n", niceName: "Heavy rain" },
  heavyrainshowers_polartwilight: { symbolCode: "41m", niceName: "Heavy rain" },
  lightsleetshowers_day: { symbolCode: "42d", niceName: "Light sleet" },
  lightsleetshowers_night: { symbolCode: "42n", niceName: "Light sleet" },
  lightsleetshowers_polartwilight: {
    symbolCode: "42m",
    niceName: "Light sleet",
  },
  heavysleetshowers_day: { symbolCode: "43d", niceName: "Heavy sleet" },
  heavysleetshowers_night: { symbolCode: "43n", niceName: "Heavy sleet" },
  heavysleetshowers_polartwilight: {
    symbolCode: "43m",
    niceName: "Heavy sleet",
  },
  lightsnowshowers_day: { symbolCode: "44d", niceName: "Light snow" },
  lightsnowshowers_night: { symbolCode: "44n", niceName: "Light snow" },
  lightsnowshowers_polartwilight: { symbolCode: "44m", niceName: "Light snow" },
  heavysnowshowers_day: { symbolCode: "45d", niceName: "Heavy snow" },
  heavysnowshowers_night: { symbolCode: "45n", niceName: "Heavy snow" },
  heavysnowshowers_polartwilight: { symbolCode: "45m", niceName: "Heavy snow" },
  lightrain: { symbolCode: "46", niceName: "Light rain" },
  lightsleet: { symbolCode: "47", niceName: "Light sleet" },
  heavysleet: { symbolCode: "48", niceName: "Heavy sleet" },
  lightsnow: { symbolCode: "49", niceName: "Light snow" },
  heavysnow: { symbolCode: "50", niceName: "Heavy snow" },
};

export const getConditionsObject = (symbolCode: string) => {
  if (!symbolCode) {
    return {
      niceName: "Unknown",
      weatherSymbolURL: "",
    };
  }

  return {
    niceName: weatherSymbolMap[symbolCode].niceName,
    weatherSymbolURL: `https://nrkno.github.io/yr-weather-symbols/symbols/lightmode/${weatherSymbolMap[symbolCode].symbolCode}.svg`,
  };
};
