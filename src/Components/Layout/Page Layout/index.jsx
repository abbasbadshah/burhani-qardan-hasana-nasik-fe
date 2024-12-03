import { Helmet } from "react-helmet";

export const PageLayout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <title>{ `${pageTitle} | Burhani Qardan Hasana Nasik` || "Default Title"}</title>
      </Helmet>
      <main>{children}</main>
    </div>
  );
};
