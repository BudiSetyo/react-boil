import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "@/routes";
import { StateProvider } from "./context/state.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  AOS.init();
  const queryClient = new QueryClient();

  return (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </StateProvider>
  );
}

export default App;
