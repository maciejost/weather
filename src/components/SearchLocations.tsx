import { useLocations, useSearchLocation } from "@common/hooks";
import { useRef, useState } from "react";

const ResultsLoader = () => (
  <div role="status" className="border-b-2 border-gray-300">
    <div className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300 flex gap-1 animate-pulse">
      <span className=" h-4 bg-gray-400 block w-32 rounded-sm"></span>
      <span className=" h-4 bg-gray-400 block w-16 rounded-sm"></span>
    </div>
    <div className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300 flex gap-1 animate-pulse">
      <span className=" h-4 bg-gray-400 block w-20 rounded-sm"></span>
      <span className=" h-4 bg-gray-400 block w-18 rounded-sm"></span>
    </div>
    <div className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300 flex gap-1 animate-pulse">
      <span className=" h-4 bg-gray-400 block w-34 rounded-sm"></span>
      <span className=" h-4 bg-gray-400 block w-10 rounded-sm"></span>
    </div>
    <span className="sr-only">Loading search results</span>
  </div>
);

const ErrorMessage = () => (
  <div className="bg-red-300 p-4 rounded-sm ">
    <h3 className="mb-4 font-bold text-xl">Oops!</h3>
    <p>
      Something went wrong while getting the locations, please try again later!
    </p>
  </div>
);

export const SearchLocations: React.FC<{
  dialogRef: React.RefObject<HTMLDialogElement>;
}> = ({ dialogRef }) => {
  const [query, setQuery] = useState("");
  const { data: locations, isLoading, isError } = useSearchLocation(query);
  const { addLocation } = useLocations();

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
      {isLoading && <ResultsLoader />}
      {isError && <ErrorMessage />}
      {!!locations?.length && (
        <ul className="border-b-2 border-gray-300">
          {locations?.map((location) => (
            <li key={location.coords.join(",")}>
              <button
                className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300"
                onClick={() => {
                  addLocation(location);
                  dialogRef.current?.close();
                }}
              >
                {location.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
