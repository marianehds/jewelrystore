import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Home } from './view/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
