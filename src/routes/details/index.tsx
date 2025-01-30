import { Location } from "@model/Location";
import { useLocationDetails } from "./queries";
import { getConditionsObject } from "@common/conditionsMap";

const DetailCard: React.FC<{
  children: React.ReactNode;
  title: string;
  className?: string;
}> = ({ children, title, className }) => {
  return (
    <div
      className={`border-b border-gray-300 w-32 text-center p-2 ${className}`}
    >
      <h3 className="mb-1 font-semibold">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export const Details: React.FC<{ location: Location }> = ({ location }) => {
  const { locationDetails, isError, isLoading } = useLocationDetails(location);

  if (isLoading) return null;

  const { solarTransitions, forecast } = locationDetails;

  const currentWeather = forecast?.instant.details;
  const conditions = forecast?.next_1_hours.summary.symbol_code;

  // Since we return a loader while the sunrise is loading, there is no risk in assigning the time to 0
  const sunriseTime = new Date(
    solarTransitions?.sunrise || 0,
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = new Date(solarTransitions?.sunset || 0).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  );

  const { niceName: conditionsNiceName, weatherSymbolURL } =
    getConditionsObject(conditions || "");

  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-lg text-center">
          {location.name} - Weather Overview
        </h1>
        <div className="flex w-fit gap-4 items-center">
          <p className="text-center text-7xl">
            {currentWeather?.air_temperature}&deg;C
          </p>
          <img src={weatherSymbolURL} alt={conditionsNiceName} />
        </div>

        <div className="flex flex-1 w-64 flex-wrap [&>*:nth-child(odd)]:border-r">
          <DetailCard title="Sunrise">
            <time dateTime={solarTransitions?.sunrise}>{sunriseTime}</time>
          </DetailCard>
          <DetailCard title="Sunset">
            <time dateTime={solarTransitions?.sunrise}>{sunsetTime}</time>
          </DetailCard>
          <DetailCard title="Conditions">{conditionsNiceName}</DetailCard>
          <DetailCard title="Humidity">
            {currentWeather?.relative_humidity}%
          </DetailCard>
          <DetailCard title="Wind speed" className="border-b-0">
            {currentWeather?.wind_speed} m/s
          </DetailCard>
          <DetailCard title="Air pressure" className="border-b-0">
            {currentWeather?.air_pressure_at_sea_level} hPa
          </DetailCard>
        </div>
      </section>
    </>
  );
};
