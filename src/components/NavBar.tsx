import { useRef } from "react";
import { Dialog } from "./Dialog";
import { SearchLocations } from "./SearchLocations";

export const NavBar = () => {
  const searchRef = useRef<HTMLDialogElement>(null);
  const settingsRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Dialog dialogRef={searchRef} title="Search locations">
        <SearchLocations dialogRef={searchRef} />
      </Dialog>
      <Dialog dialogRef={settingsRef} title="Settings">
        asdasd
      </Dialog>

      <nav className="px-10 py-4 w-fit mx-auto bg-blue-100 rounded-lg fixed bottom-8 left-1/2 -translate-x-1/2">
        <ul className="flex align-center gap-8 text-4xl ">
          <li>
            <a href="/">
              <span className="sr-only">Home</span>
              🏠
            </a>
          </li>
          <li>
            <button
              className="cursor-pointer"
              title="Open search"
              onClick={() => searchRef.current?.showModal()}
            >
              🔍
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              title="Open settings"
              onClick={() => settingsRef.current?.showModal()}
            >
              ⚙️
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
