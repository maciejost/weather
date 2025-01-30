import { useRef } from "react";
import { Dialog } from "./Dialog";
import { SearchLocations } from "./SearchLocations";

export const NavBar: React.FC<{
  showSearch: boolean;
}> = ({ showSearch }) => {
  const searchRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      {showSearch && (
        <Dialog dialogRef={searchRef} title="Search locations">
          <SearchLocations dialogRef={searchRef} />
        </Dialog>
      )}

      <div className="my-4  flex items-center fixed top-0 left-4 ">
        <nav className="px-10 py-4 w-fit bg-blue-100 rounded-lg ">
          <ul className="flex align-center gap-8 text-4xl ">
            <li>
              <a href="/">
                <span className="sr-only">Home</span>
                🏠
              </a>
            </li>
            {showSearch && (
              <li>
                <button
                  className="cursor-pointer"
                  title="Open search"
                  onClick={() => searchRef.current?.showModal()}
                >
                  🔍
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
