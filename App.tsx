import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DogData from './DogData';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DogData />
    </QueryClientProvider>
  );
}

export default App;