import React from "react";
import { Navigate } from "react-router-dom";

// Define the props type for the ProtectedRoute component
type ProtectedProps = {
  isLoggedIn: boolean;
  children: React.ReactNode;
};

// ProtectedRoute component checks if the user is logged in
const ProtectedRoute = ({ isLoggedIn, children }: ProtectedProps) => {
  // If not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the provided children components
  return children;
};

// Export the ProtectedRoute component
export default ProtectedRoute;
