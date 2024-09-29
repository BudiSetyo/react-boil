import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "@/routes";
import { StateProvider } from "./context/state.context";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./query/queryClient";

function App() {
  AOS.init();

  return (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </StateProvider>
  );
}

export default App;
