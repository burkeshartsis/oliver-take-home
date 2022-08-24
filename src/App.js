import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Product from './Components/Product';

const queryClient = new QueryClient();

export default function OliverTakeHome() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/product/:productId'} element={<Product />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}
