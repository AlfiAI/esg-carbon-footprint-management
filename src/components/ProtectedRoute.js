import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
