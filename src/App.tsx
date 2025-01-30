import { NavBar } from "@components";
import { Home } from "./routes/home";
import { Details } from "./routes/details";
import { Location } from "@model/Location";

function App() {
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
    <main className="flex flex-col justify-between my-16">
      {path === "/" && <Home />}
      {path === "/details" && !!location.name && (
        <Details location={location} />
      )}
      <NavBar />
    </main>
  );
}

export default App;
