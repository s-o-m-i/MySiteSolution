import React, { createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Typography } from "@mui/material";

// Alert component to be used in Snackbar
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

// SnackbarContext
const SnackbarContext = createContext<any>(null);

// SnackbarProvider component to provide Snackbar context to its children
export const SnackbarProvider = ({ children }: { children: React.ReactNode | any }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<string | any>("success");

  const showSnackbar = (message: string, severity: string = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        // ---------- Shadow is not hiding immediately after snackbar is closed ----------
        // sx={{
        //   boxShadow:
        //     snackbarSeverity === "success"
        //       ? "0 -5px 16px 0 #2e7d32, 0 6px 20px 0 #2e7d32"
        //       : "0 8px 12px 0 rgba(255, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 0, 0, 0.19)"
        // }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity={snackbarSeverity}>
          <Typography sx={{mb: -2}}>
            {snackbarSeverity === "success" ? "Success " : "Error "}
          </Typography>
          <br />
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

// useSnackbar hook for using the snackbar context
export const useSnackbar = () => {
  const showSnackbar = useContext(SnackbarContext);

  if (!showSnackbar) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }

  return showSnackbar;
};
