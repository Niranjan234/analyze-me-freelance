import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Dashboard from './Component/Dashboard';
import Facebook from './Component/Facebook';
import Youtube from './Component/Youtube';
import Instagram from './Component/Instagram';
import Manager from './Component/Manager';
import ManagerLanding from './Component/ManagerLanding';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid" style={{ padding: '28px', boxSizing: 'border-box', backgroundColor: 'rgba(169, 169, 169, 0.3)' }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/managerLanding" element={<ManagerLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
