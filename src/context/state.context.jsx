import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const initialState = {};

  const [state, setState] = useState(() => {
    // Try to load the initial state from localStorage
    const storedState = localStorage.getItem("state");
    return storedState ? JSON.parse(storedState) : initialState;
  });

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
