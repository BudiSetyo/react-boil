import PropTypes from "prop-types";
import { Navbar, SuspenseLoading, Sidebar } from "@/components";
import { Suspense } from "react";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full flex bg-white">
      <Sidebar />

      <section className="w-full h-screen overflow-auto duration-500">
        <Navbar />

        <div className="my-4 px-4">
          <Suspense fallback={<SuspenseLoading />}>
            <main className="">{children}</main>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
