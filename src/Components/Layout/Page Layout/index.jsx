import { useState } from "react";
import { PageHeader, ResponsiveHeader } from "../../Common/Header";
import { Sidebar } from "../../Common/Sidebar";
import { Helmet } from "react-helmet";

export const PageLayout = ({
  pageTitle,
  children,
  needComponents = true,
  pageHeading,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!needComponents) {
    return (
      <div>
        <Helmet>
          <title>
            {`${pageTitle} | Burhani Qardan Hasana Nasik` ||
              "Burhani Qardan Hasana Nasik"}
          </title>
        </Helmet>
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Helmet>
        <title>
          {`${pageTitle} | Burhani Qardan Hasana Nasik` ||
            "Burhani Qardan Hasana Nasik"}
        </title>
      </Helmet>

      <ResponsiveHeader onSidebarToggle={toggleSidebar} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <main className="flex-1 p-4 flex flex-col gap-10 h-full lg:h-screen">
          <PageHeader pageHeading={pageHeading} />
          {children}
        </main>
      </div>
    </div>
  );
};
