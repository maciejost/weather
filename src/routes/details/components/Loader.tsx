import { DetailCard } from "./DetailCard";
import { PageWrapper } from "./PageWrapper";

export const Loader: React.FC<{ title: string }> = ({ title }) => (
  <PageWrapper title={title}>
    <div className="flex gap-4 items-center animate-pulse">
      <span className=" h-8 bg-gray-400 block w-64 rounded-sm shrink-0"></span>
      <span className=" h-16  bg-gray-400 block w-16 rounded-full shrink-0"></span>
    </div>
    <div className="flex flex-1 w-64 flex-wrap [&>*:nth-child(odd)]:border-r animate-pulse">
      <DetailCard title="Sunrise">
        <span className=" h-4 bg-gray-400 block w-16 mx-auto rounded-sm shrink-0"></span>
      </DetailCard>
      <DetailCard title="Sunset">
        <span className=" h-4 bg-gray-400 block w-16 mx-auto rounded-sm shrink-0"></span>
      </DetailCard>
      <DetailCard title="Conditions">
        <span className=" h-4 bg-gray-400 block w-16 mx-auto rounded-sm shrink-0"></span>
      </DetailCard>
      <DetailCard title="Humidity">
        <span className=" h-4 bg-gray-400 block w-16 mx-auto rounded-sm shrink-0"></span>
      </DetailCard>
      <DetailCard title="Wind speed" className="border-b-0">
        <span className=" h-4 bg-gray-400 block w-16 mx-auto rounded-sm shrink-0"></span>
      </DetailCard>
      <DetailCard title="Air pressure" className="border-b-0">
        <span className=" h-4 bg-gray-400 block w-16 mx-auto rounded-sm shrink-0"></span>
      </DetailCard>
    </div>
  </PageWrapper>
);
