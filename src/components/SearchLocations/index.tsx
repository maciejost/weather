import { useSearchLocation } from "@common/hooks";
import { useRef, useState } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { Results } from "./Results";
import { Location } from "@model/Location";

export const SearchLocations: React.FC<{
  dialogRef: React.RefObject<HTMLDialogElement>;
  addLocation: (location: Location) => void;
}> = ({ dialogRef, addLocation }) => {
  const [query, setQuery] = useState("");
  const { data: locations, isLoading, isError } = useSearchLocation(query);

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <section>
      <input
        className="w-full px-4 py-2 border-2 border-gray-400 mb-8 "
        onChange={(e) => {
          const value = e.target.value;

          if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
          }

          debounceTimeout.current = setTimeout(() => {
            setQuery(value);
          }, 500);
        }}
        type="search"
        placeholder="Search..."
        title="Search for a location"
      />

      {!isLoading && !isError && !locations?.length && (
        <p className="text-gray-800">
          No locations found, please try searching for something else
        </p>
      )}
      {isLoading && <Loader />}
      {isError && <Error />}
      <Results
        addLocation={addLocation}
        locations={locations}
        dialogRef={dialogRef}
      />
    </section>
  );
};
