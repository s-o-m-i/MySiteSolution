"use client";
import React, { useState } from "react";
import FirebaseAuthService from "../../../functions/FirebaseAuthService";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

import { BiArrowBack } from "react-icons/bi";
import { useSnackbar } from "components/shared/Toast/ToastWrap";
import { validateEmail } from "libs/helper";
import { getSingleFilteredEntity } from "functions/ReuseableCrudService";

// Component for handling the Forgot Password functionality
function ForgotPassword() {
  // State to manage input validity
  const [valid, setValid] = useState("");
  const [required, setRequired] = useState(false);
  // useSnackbar hook from the ToastWrap component for showing toast messages
  const showSnackbar = useSnackbar();


  // Function to handle form submission
  const handleSubmit = async () => {
    

    const myInput: any = document.querySelector(".forgot-email");
    if (valid === "") {
      myInput.style.border = "1px solid red";
      setRequired(true);
      return;
    }
    if (!validateEmail(valid)) {
      showSnackbar("Please enter valid email.", "warning");
    }
    else {
      const userData:any = await getSingleFilteredEntity('Users', { email: valid });
      if (!userData) {
        showSnackbar("No user matched with the given email.", "warning");
        return;
      }
      // Call the Firebase Auth service for password reset
      const response = await FirebaseAuthService.onForgotPassword(valid as string);
      // Show appropriate toast based on the API response
      if (response?.success) {
        showSnackbar(response?.message+'.', 'success');
      } else {
        showSnackbar(response?.message, 'error');
        
      }
    }

  };

  // JSX structure for the Forgot Password component
  return (
    <Box
      display={"flex"}
      sx={{
        backgroundColor: "",
        "@media (max-width: 600px)": {
          // Styles for screens with a width of 600px or less
          flexDirection: "column"
        }
      }}>
      <Box
        sx={{
          height: "100vh",
          width: "55%",
          // backgroundColor: ' rgba(49, 90, 226, 0.973)',
          background: "rgb(2, 0, 36)",
          backgroundImage: "linear-gradient(34deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 34%, rgba(0, 78, 255, 1) 100%)",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
          "@media (max-width: 600px)": {
            // Styles for screens with a width of 600px or less
            width: "100%"
          }
        }}>
        <Box
          pl={"90px"}
          className="forgot-bg"
          sx={{
            "@media (max-width: 600px)": {
              // Styles for screens with a width of 600px or less
              padding: "10px"
            }
          }}>
          <Typography fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ color: "#fff", fontSize: "30px", mt: 1.5 }}>
            Site Solution
          </Typography>

          <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} height={"100%"} sx={{ backgroundColor: "" }}>
            <Typography
              mt={"50px"}
              fontFamily={" 'Bai Jamjuree', sans-serif"}
              sx={{ lineHeight: "49.05px", color: "#fff", fontSize: "45px" }}>
              Forgot
              <br />
              Your Password?
            </Typography>

            <Typography mb={"50px"} mt={"20px"} sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "300" }}>
              No worries. Let’s get you back on track.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={10}
        sx={{
          height: "100vh",
          width: "45%",
          backgroundColor: "#131313",
          boxSizing: "border-box",
          "@media (max-width: 600px)": {
            // Styles for screens with a width of 600px or less
            width: "100%",
            padding: "20px"
          }
        }}>
        <Typography fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ fontSize: "36px", color: "#FFFFFF" }}>
          Forgot Password
        </Typography>
        <div className="mss-login-form">
          <Box mt={"40px"} sx={{ width: "100%", backgroundColor: "" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Your Email
            </Typography>

            <input
              type="text"
              className="forgot-email NexaFont"
              placeholder="Email"
              name="email"
              value={valid}
              onChange={(e) => setValid(e.target.value)}
            />
          </Box>

          {required && (
            <Typography mt={"5px"} className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#B73030" }}>
              This is a required field*
            </Typography>
          )}

          <button className="forgot-reset NexaBoldFont" onClick={handleSubmit}>
              Send Password Reset Link
          </button>

          <Box my={"10px"} display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
            <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
            <Typography textAlign={"center"} className="NexaFont" mt={"5px"} mb={"5px"} sx={{ fontSize: "16px", fontWeight: "300", color: "#FFFFFF" }}>
              Or
            </Typography>
            <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
          </Box>
          <Link className="no-style" to="/login">
            <Typography
              position={"relative"}
              // onClick={() => login()}
              className="NexaBoldFont"
              mt={"20px"}
              mb={"5px"}
              sx={{
                fontSize: "16px",
                cursor: "pointer",
                color: "#FFFFFF",
                background: " transparent",
                textAlign: "center",
                padding: "12px 0px",
                borderRadius: "10px",
                border: "1px solid #FFFFFF26"
              }}>
              <BiArrowBack
                style={{
                  marginRight: "20px",
                  marginTop: "10px"
                }}
              />
              Back to Login
            </Typography>
          </Link>
        </div>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
