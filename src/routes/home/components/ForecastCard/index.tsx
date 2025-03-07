import { useForecast } from "@common/hooks";
import { getConditionsObject } from "@common/conditionsMap";
import { Location } from "@model/Location";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const ForecastCard: React.FC<{
  location: Location;
}> = ({ location }) => {
  const { data: forecast, isError, isLoading } = useForecast(location);

  const { name, coords } = location;

  const weatherSymbol = forecast?.next_1_hours.summary.symbol_code || "";
  const { weatherSymbolURL, niceName: conditionsNiceName } =
    getConditionsObject(weatherSymbol);

  const currentTemperature = forecast?.instant.details.air_temperature;

  return (
    <a
      href={`/details?loc=${name}&lat=${coords[0]}&lon=${coords[1]}`}
      className="p-4 bg-gray-50 border-[1px] border-gray-300 rounded-lg max-w-128 flex items-center justify-between w-full hover:bg-gray-200 "
    >
      <h2 className="text-2xl max-w-[50%] sm:max-w-[70%]">
        <span className="sr-only">Forecast for </span>
        {name}
      </h2>

      {isError && !currentTemperature && <Error locationName={name} />}
      {isLoading && <Loader />}

      {currentTemperature && (
        <div className="flex gap-4 items-center">
          <p className="text-xl">
            <span className="sr-only">The current temperature is </span>
            {currentTemperature}°C
          </p>
          <img
            className="w-16 h-16"
            src={weatherSymbolURL}
            alt={`The current conditions are ${conditionsNiceName}`}
          />
        </div>
      )}
    </a>
  );
};
