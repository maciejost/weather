import { PageWrapper } from "./PageWrapper";

export const Error: React.FC<{
  title: string;
}> = ({ title }) => (
  <PageWrapper title={title}>
    <p className="p-4 bg-red-200 text-xl max-w-lg rounded-lg">
      Something went wrong while getting the weather data. Please try again
      later! 🌧️
    </p>
  </PageWrapper>
);
