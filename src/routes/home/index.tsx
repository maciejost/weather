import { useLocations } from "@common/hooks";
import { ForecastCard } from "./components";

export const Home: React.FC = () => {
  const { locations } = useLocations();

  return (
    <>
      <h1 className="sr-only">Home page - Weather Overview</h1>
      <section className="max-w-6xl flex gap-10 flex-wrap justify-center mx-auto px-8">
        {locations.map((location) => (
          <ForecastCard location={location} />
        ))}
      </section>
    </>
  );
};
