import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate for redirect
import NavBar from './components/NavBar';
import Home from './components/Home';
import EducationalModules from './components/EducationalModules';
import CarbonFootprintAnalysis from './components/CarbonFootprintAnalysis';
import ComplianceTracking from './components/ComplianceTracking';
import UserProfile from './components/UserProfile';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/educational-modules" element={<ProtectedRoute component={EducationalModules} />} />
        <Route path="/carbon-footprint-analysis" element={<ProtectedRoute component={CarbonFootprintAnalysis} />} />
        <Route path="/compliance-tracking" element={<ProtectedRoute component={ComplianceTracking} />} />
        <Route path="/user-profile" element={<ProtectedRoute component={UserProfile} />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any unmatched paths to Home */}
      </Routes>
    </Router>
  );
};

export default App;
