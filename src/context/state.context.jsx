import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState({
    auth: {},
  });

  useEffect(() => {
    const storedState = localStorage.getItem("state");
    if (storedState) {
      setState(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.any,
};

export { StateProvider, StateContext };
