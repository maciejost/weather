import { useForecast } from "@common/hooks";
import { Location } from "@model/Location";
import { SunriseResponse } from "@model/SunriseResponse";
import { SolarTransitions } from "@model/SolarTransitions";
import { useQuery } from "@tanstack/react-query";

const fetchSolarTransitions = async (
  location: Location,
): Promise<SolarTransitions> => {
  const { coords } = location;
  const response = await fetch(
    `https://api.met.no/weatherapi/sunrise/3.0/sun?lat=${coords[0]}&lon=${coords[1]}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = (await response.json()) as SunriseResponse;

  const sunrise = data.properties.sunrise.time;
  const sunset = data.properties.sunset.time;

  return { sunrise, sunset };
};

export const useSolarTransitions = (location: Location) => {
  const query = useQuery({
    queryKey: ["solarTransitions", location],
    queryFn: () => fetchSolarTransitions(location),
    staleTime: 1000 * 60 * 5,
  });

  return query;
};

export const useLocationDetails = (location: Location) => {
  const {
    data: forecast,
    isLoading: isLoadingForecast,
    isError: isForecastError,
  } = useForecast(location);
  const {
    data: solarTransitions,
    isLoading: isLoadingSolarTransitions,
    isError: isSolarTransitionsError,
  } = useSolarTransitions(location);

  return {
    locationDetails: {
      forecast,
      solarTransitions,
    },
    isLoading: isLoadingForecast || isLoadingSolarTransitions,
    isError: isForecastError || isSolarTransitionsError,
  };
};
