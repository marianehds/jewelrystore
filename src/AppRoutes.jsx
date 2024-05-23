import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Header, Home, JoinTeam ,Shop } from './view/index';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-team" element={<JoinTeam />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
