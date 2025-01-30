export const PageWrapper: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-lg text-center">
        {title} - Weather Overview
      </h1>
      {children}
    </section>
  );
};
