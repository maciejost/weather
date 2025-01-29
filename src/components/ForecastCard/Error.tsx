export const Error: React.FC<{ locationName: string }> = ({ locationName }) => (
  <p>Failed to get the forecast for {locationName}. Please try again later.</p>
);
