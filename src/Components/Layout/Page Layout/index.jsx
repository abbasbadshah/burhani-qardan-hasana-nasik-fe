import React from "react";
import { Helmet } from "react-helmet";
import { Sidebar } from "../../Common/Sidebar";
import { PageHeader } from "../../Common/Header";

export const PageLayout = ({
  pageTitle,
  children,
  needComponents = true,
  pageHeading,
}) => {
  if (!needComponents) {
    return (
      <div>
        <Helmet>
          <title>
            {`${pageTitle} | Burhani Qardan Hasana Nasik` || "Default Title"}
          </title>
        </Helmet>
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>
          {`${pageTitle} | Burhani Qardan Hasana Nasik` || "Default Title"}
        </title>
      </Helmet>

      {/* <Header /> */}

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 flex flex-col gap-10 h-screen">
          <PageHeader pageHeading={pageHeading} />
          {children}
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
};