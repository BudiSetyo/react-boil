import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "@/routes";
import { StateProvider } from "./context/state.context";

function App() {
  AOS.init();

  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
}

export default App;
