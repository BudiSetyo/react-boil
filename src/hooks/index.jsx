import { useContext } from 'react';
import { StateContext } from '@/context/state.context';

const useGlobalHooks = () => {
  const { state, setState } = useContext(StateContext);

  const { auth, toggle } = state;

  const handleAuth = (data) => setState({ ...state, auth: data });

  const handleToggle = (key) => {
    setState({
      ...state,
      toggle: {
        ...toggle,
        [key]: !toggle[key],
      },
    });
  };

  return {
    state: {
      auth,
      toggle,
    },
    handlers: {
      handleAuth,
      handleToggle,
    },
  };
};

export default useGlobalHooks;
