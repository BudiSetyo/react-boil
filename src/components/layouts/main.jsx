import PropTypes from "prop-types";
import { Navbar } from "@/components";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full bg-gray-200 absolute inset-y-0 flex justify-center max-h-screen overflow-auto box-border">
      <main className="container bg-white w-full max-w-screen-lg min-h-screen absolute border box-border">
        <Navbar />
        <section className="px-4 pb-4 pt-12 box-border">{children}</section>
      </main>
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
