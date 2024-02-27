import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';

class ProtectedRoute extends Component {
  isAuthenticated = () => {
    // Check if token exists in localStorage or any other authentication logic
    return localStorage.getItem('token') !== null;
  };

  render() {
    const { element, ...rest } = this.props;
    return this.isAuthenticated() ? <Route {...rest} element={element} /> : <Navigate to="/" />;
  }
}

export default ProtectedRoute;
