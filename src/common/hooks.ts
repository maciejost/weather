import { Location } from "@model/Location";
import { LocationforecastCompactResponse } from "@model/LocationforecastCompactResponse";
import { NominatimResponse } from "@model/NominatimResponse";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";

export const useLocations = () => {
  const LOCAL_STORAGE_KEY = "locations";

  const storedLocations = localStorage.getItem(LOCAL_STORAGE_KEY);
  const initialLocations: Location[] = storedLocations
    ? JSON.parse(storedLocations)
    : [];

  const [locations, setLocations] = useState<Location[]>(initialLocations);

  const addLocation = useCallback((location: Location) => {
    const isExisting = locations.some(
      (loc) =>
        loc.coords[0] === location.coords[0] &&
        loc.coords[1] === location.coords[1],
    );

    if (isExisting) return;

    const newLocations = [...locations, location];
    setLocations(newLocations);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
  }, [locations]);

  return { locations, addLocation };
};

const fetchLocation = async (searchQuery: string): Promise<Location[]> => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${searchQuery}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location");
  }

  const data = (await response.json()) as NominatimResponse[];

  const filteredData = data.map((location: NominatimResponse) => ({
    name: location.display_name,
    coords: [
      parseFloat(location.lat.slice(0, 7)),
      parseFloat(location.lon.slice(0, 7)),
    ],
  })) as Location[];

  return filteredData;
};

export const useSearchLocation = (searchQuery: string) => {
  const query = useQuery({
    queryKey: ["searchLocation", searchQuery],
    queryFn: () => fetchLocation(searchQuery),
    enabled: !!searchQuery,
    staleTime: 1000 * 60 * 60,
  });

  return query;
};

const fetchForecast = async (
  location: Location,
): Promise<LocationforecastCompactResponse> => {
  const { coords } = location;
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${coords[0]}&lon=${coords[1]}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = (await response.json()) as LocationforecastCompactResponse;

  return data;
};

export const useForecast = (location: Location) => {
  const query = useQuery({
    queryKey: ["forecast", location],
    queryFn: () => fetchForecast(location),
    staleTime: 1000 * 60 * 5,
  });

  return query;
};
