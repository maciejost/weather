import { NavBar } from "@components";
import { Home } from "./routes/home";
import { Details } from "./routes/details";
import { Location } from "@model/Location";
import {
  getLocationsFromLocalstorage,
  LOCAL_STORAGE_KEY,
} from "@common/getLocationsFromLocalstorage";
import { useCallback, useEffect, useState } from "react";

function App() {
  const initialLocations = getLocationsFromLocalstorage();

  const defaultLocations = initialLocations.length
    ? initialLocations
    : [
        {
          name: "Berlin",
          coords: [52.5108, 13.3989],
        },
        {
          name: "London",
          coords: [51.5074, -0.1278],
        },
        {
          name: "New York",
          coords: [40.7128, -74.006],
        },
      ];

  const [locations, setLocations] = useState<Location[]>(defaultLocations);

  const addLocation = useCallback(
    (location: Location) => {
      const isExisting = locations.some(
        (loc) =>
          loc.coords[0] === location.coords[0] &&
          loc.coords[1] === location.coords[1],
      );

      if (isExisting) return;

      const newLocations = [location, ...locations];
      setLocations(newLocations);
    },
    [locations],
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
  }, [locations]);

  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  const location: Location = {
    name: params.get("loc") || "",
    coords: [
      parseFloat(params.get("lat") || "0"),
      parseFloat(params.get("lon") || "0"),
    ],
  };

  return (
    <>
      <main className="flex flex-col justify-between mb-16 mt-32">
        {path === "/" && <Home locations={locations} />}
        {path === "/details" && !!location.name && (
          <Details location={location} />
        )}
      </main>
      <NavBar showSearch={path === "/"} addLocation={addLocation} />
    </>
  );
}

export default App;
