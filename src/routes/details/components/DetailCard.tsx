export const DetailCard: React.FC<{
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
