import { Location } from "@model/Location";

export const Results: React.FC<{
  locations: Location[] | undefined;
  dialogRef: React.RefObject<HTMLDialogElement>;
  addLocation: (location: Location) => void;
}> = ({ locations, dialogRef, addLocation }) => {
  if (!locations) return null;

  return (
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
  );
};
