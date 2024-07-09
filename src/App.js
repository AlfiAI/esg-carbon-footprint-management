import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated
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
      <Routes>  // Updated
        <Route exact path="/" element={<Home />} />  // Updated
        <Route path="/signup" element={<Signup />} />  // Updated
        <Route path="/login" element={<Login />} />  // Updated
        <Route path="/logout" element={<Logout />} />  // Updated
        <Route path="/educational-modules" element={<ProtectedRoute component={EducationalModules} />} />  // Updated
        <Route path="/carbon-footprint-analysis" element={<ProtectedRoute component={CarbonFootprintAnalysis} />} />  // Updated
        <Route path="/compliance-tracking" element={<ProtectedRoute component={ComplianceTracking} />} />  // Updated
        <Route path="/user-profile" element={<ProtectedRoute component={UserProfile} />} />  // Updated
      </Routes>
    </Router>
  );
};

export default App;
