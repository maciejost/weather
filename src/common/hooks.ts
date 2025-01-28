import { Location } from "@model/Location";
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
    const isExisting = locations.some((loc) => loc.coords === location.coords);

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
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch location");
  }

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
