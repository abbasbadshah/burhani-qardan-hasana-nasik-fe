import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <section className="bg-primary h-screen flex flex-col justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-white">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            to="/"
            className="px-10 py-3 rounded-md text-white bg-its-btn-primary-color mt-10"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
