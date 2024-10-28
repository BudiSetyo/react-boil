import Routes from '@/routes';
import { StateProvider } from './context/state.context';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './query/queryClient';

function App() {
  return (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </StateProvider>
  );
}

export default App;
