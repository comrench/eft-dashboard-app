import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvestmentInfo from './core/components/screens/InvestmentInfo';
import { configs } from './core/utils/config';

const AppRouter = (props) => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={configs.routes.default}
          element={<InvestmentInfo {...props} />}
        />
        <Route
          exact
          path={configs.routes.personal}
          element={<InvestmentInfo {...props} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
