import PropTypes from "prop-types";
import { Navbar } from "@/components";

const MainLayout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
