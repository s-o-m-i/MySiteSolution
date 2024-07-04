import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";
import "./App.css";
import { SnackbarProvider } from "components/shared/Toast/ToastWrap";

const container = document.getElementById('root');

// Check if the container is null before creating the root
if (container) {
  // Define the ReactApp component, which wraps the App component with the BrowserRouter
  const ReactApp = () => (
    <Router>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Router>
  );

  // Use createRoot to render the ReactApp component and mount it to the root element in the HTML document
  const root = createRoot(container);
  root.render(<ReactApp />);
} else {
  console.error("Container element not found");
}
