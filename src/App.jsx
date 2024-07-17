import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "@/routes";

function App() {
  AOS.init();

  return <Routes />;
}

export default App;
