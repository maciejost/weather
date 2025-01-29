import { NavBar } from "@components";
import { Home } from "./routes/home";

function App() {
  return (
    <main className="flex flex-col justify-between my-16">
      <Home />
      <NavBar />
    </main>
  );
}

export default App;
