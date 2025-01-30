import { Location } from "@model/Location";

export const LOCAL_STORAGE_KEY = "locations";

export const getLocationsFromLocalstorage = (): Location[] => {
  const storedLocations = localStorage.getItem(LOCAL_STORAGE_KEY);
  const initialLocations: Location[] = storedLocations
    ? JSON.parse(storedLocations)
    : [];

  return initialLocations;
};
