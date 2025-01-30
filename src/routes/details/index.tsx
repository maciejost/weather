import { Location } from "@model/Location";
import { useLocationDetails } from "./queries";
import { getConditionsObject } from "@common/conditionsMap";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { PageWrapper } from "./components/PageWrapper";
import { DetailCard } from "./components/DetailCard";

export const Details: React.FC<{ location: Location }> = ({ location }) => {
  const { locationDetails, isError, isLoading } = useLocationDetails(location);

  if (isLoading) return <Loader title={location.name} />;
  if (isError) return <Error title={location.name} />;

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
      <PageWrapper title={location.name}>
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
      </PageWrapper>
    </>
  );
};
