export type SunriseResponse = {
  copyright: string;
  licenseURL: string;
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  when: {
    interval: string[];
  };
  properties: {
    body: string;
    sunrise: {
      time: string;
      azimuth: number;
    };
    sunset: {
      time: string;
      azimuth: number;
    };
    solarnoon: {
      time: string;
      disc_centre_elevation: number;
      visible: boolean;
    };
    solarmidnight: {
      time: string;
      disc_centre_elevation: number;
      visible: boolean;
    };
  };
};
