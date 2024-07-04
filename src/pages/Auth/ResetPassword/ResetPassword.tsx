"use client";
import React, { useState } from "react";
import FirebaseAuthService from "../../../functions/FirebaseAuthService";

import { Box, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

import { isEmpty, matchPassword } from "libs/helper";
import { useSnackbar } from "components/shared/Toast/ToastWrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Component for handling the Reset Password functionality
function ResetPassword() {
  // Use Navigate hook from React Router for navigation
  const router = useNavigate();
  // State to manage input validity
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // useSnackbar hook from the ToastWrap component for showing toast messages
  const showSnackbar = useSnackbar();

  // Function to handle form submission
  const code = new URLSearchParams(window.location.search).get("oobCode");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if email is empty and show toast if required
    if (isEmpty(newPassword as string) || isEmpty(confirmPassword as string)) {
      showSnackbar("Please enter password.", "warning");
      return;
    }
    // Check if password and confirm password match and show toast if required
    if (!matchPassword(newPassword as string, confirmPassword as string)) {
      showSnackbar("Password does not match.", "warning");
      return;
    }

    // Call the Firebase Auth service for password reset
    const response = await FirebaseAuthService.onResetPassword(code as string, confirmPassword as string);
    console.log(response);
    // Show appropriate toast based on the API response
    if (response?.success) {
      showSnackbar(response?.message, "success");
      router("/login");
    } else {
      showSnackbar("Link got expired or already used.", "error");
    }
  };

  // JSX structure for the Reset Password component
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
              Reset Password
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
          Reset Password
        </Typography>
        <form className="mss-login-form" onSubmit={handleSubmit}>
          <Box sx={{ marginTop: "20px" }}>
            <Typography mb={"5px"} className="NexaFont" sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              New Password
            </Typography>
            <OutlinedInput
              className="input-style NexaFont"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              size="small"
              onChange={(e) => setNewPassword(e.target.value)}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ color: "#FFFFFF" }}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Typography mb={"5px"} className="NexaFont" sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Confirm Password
            </Typography>
            <OutlinedInput
              className="input-style NexaFont"
              id="outlined-adornment-confirm-password"
              type={showPasswordConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              size="small"
              name="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPasswordConfirm}
                    edge="end"
                    sx={{ color: "#FFFFFF" }}>
                    {showPasswordConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>

        

          <button className="forgot-reset NexaBoldFont" type="submit">
            <Link className="no-style" to="/reset-password">
              Confirm
            </Link>
          </button>
        </form>
      </Box>
    </Box>
  );
}

export default ResetPassword;
