type ForecastInstant = {
  air_pressure_at_sea_level?: number;
  air_temperature?: number;
  cloud_area_fraction?: number;
  cloud_area_fraction_high?: number;
  cloud_area_fraction_low?: number;
  cloud_area_fraction_medium?: number;
  dew_point_temperature?: number;
  fog_area_fraction?: number;
  relative_humidity?: number;
  wind_from_direction?: number;
  wind_speed?: number;
  wind_speed_of_gust?: number;
};

type ForecastUnits = {
  air_pressure_at_sea_level: string;
  air_temperature: string;
  air_temperature_max: string;
  air_temperature_min: string;
  cloud_area_fraction: string;
  cloud_area_fraction_high: string;
  cloud_area_fraction_low: string;
  cloud_area_fraction_medium: string;
  dew_point_temperature: string;
  fog_area_fraction: string;
  precipitation_amount: string;
  precipitation_amount_max: string;
  precipitation_amount_min: string;
  probability_of_precipitation: string;
  propability_of_thunder: string;
  relative_humidity: string;
  ultraviolet_index_clear_sky_max: string;
  wind_from_direction: string;
  wind_speed: string;
  wind_speed_of_gust: string;
};

export type TimeseriesObject = {
  time: string;
  data: {
    instant: {
      details: ForecastInstant;
    };
    next_12_hours: {
      summary: {
        symbol_code: string;
      };
      details: ForecastInstant;
    };
    next_1_hours: {
      summary: {
        symbol_code: string;
      };
      details: ForecastInstant;
    };
    next_6_hours: {
      summary: {
        symbol_code: string;
      };
      details: ForecastInstant;
    };
  };
};

export type LocationforecastCompactResponse = {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };

  properties: {
    meta: {
      updated_at: string;
      units: ForecastUnits;
    };
    timeseries: TimeseriesObject[];
  };
};
