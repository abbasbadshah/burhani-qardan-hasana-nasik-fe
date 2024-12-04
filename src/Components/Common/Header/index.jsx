export const PageHeader = ({ pageHeading }) => {
  return (
    <header className="bg-primary text-white text-center h-40 flex justify-center items-center rounded-md">
      <h1 className="text-5xl font-bold capitalize">{pageHeading}</h1>
    </header>
  );
};
