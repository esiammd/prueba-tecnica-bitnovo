import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import Canceled from '../pages/Canceled';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/success" element={<Success />} />
    <Route path="/canceled" element={<Canceled />} />
  </Routes>
);

export default AppRoutes;
