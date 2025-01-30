import { expect } from "vitest";
import { getConditionsObject, weatherSymbolMap } from "./conditionsMap";

describe("SearchLocations", () => {
  it("Doesn't throw when given an invalid condition", () => {
    expect(() => getConditionsObject("random_condition")).not.toThrow();

    expect(getConditionsObject("random_condition")).toEqual({
      niceName: "Unknown",
      weatherSymbolURL: "",
    });
  });

  it("Returns the correct niceName and image for a given condition", () => {
    const imageBaseURL =
      "https://nrkno.github.io/yr-weather-symbols/symbols/lightmode/";

    expect(getConditionsObject("clearsky_day")).toEqual({
      niceName: "Clear skies",
      weatherSymbolURL:
        imageBaseURL + weatherSymbolMap.clearsky_day.symbolCode + ".svg",
    });

    expect(getConditionsObject("lightrainshowersandthunder_day")).toEqual({
      niceName: "Light rain and thunder",
      weatherSymbolURL:
        imageBaseURL +
        weatherSymbolMap.lightrainshowersandthunder_day.symbolCode +
        ".svg",
    });

    expect(
      getConditionsObject("heavysnowshowersandthunder_polartwilight"),
    ).toEqual({
      niceName: "Heavy snow and thunder",
      weatherSymbolURL:
        imageBaseURL +
        weatherSymbolMap.heavysnowshowersandthunder_polartwilight.symbolCode +
        ".svg",
    });
  });
});
