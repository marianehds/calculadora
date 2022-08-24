import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import React, { useContext } from 'react';

import Home from './view/home/home';


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
        </Routes>
    </Router>
  );
};
export default AppRoutes;
