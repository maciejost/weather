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
  const [locations, setLocations] = useState<Location[]>(initialLocations);

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
