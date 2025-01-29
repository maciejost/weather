import { useLocations } from "@common/hooks";
import { ForecastCard } from "./components";

export const Home: React.FC = () => {
  const { locations } = useLocations();

  return (
    <>
      <h1 className="sr-only">Home page - Weather Overview</h1>
      {locations.map((location) => (
        <ForecastCard location={location} />
      ))}
    </>
  );
};
