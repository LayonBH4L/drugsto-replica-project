
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect from the index page to the home page
  return <Navigate to="/home" replace />;
};

export default Index;
