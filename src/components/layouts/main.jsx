import PropTypes from "prop-types";
import { Navbar } from "@/components";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full bg-gray-200 absolute inset-y-0 flex justify-center">
      <main className="container bg-white w-full max-w-screen-md absolute inset-y-0">
        <Navbar />
        <section className="p-4">{children}</section>
      </main>
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
