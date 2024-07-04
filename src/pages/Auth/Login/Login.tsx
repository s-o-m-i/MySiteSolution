import React from "react";
import { isEmpty } from "libs/helper";
import FirebaseAuthService from "../../../functions/FirebaseAuthService";
import { Box, Typography, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link } from "react-router-dom";
import "./login.css";
import { useSnackbar } from "components/shared/Toast/ToastWrap";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createEntity, getSingleFilteredEntity } from "functions/ReuseableCrudService";

// Component for the Login Page
function LoginPage({setUserSession}: {setUserSession: any}) {
  // Use Navigate hook from React Router for navigation
  const history = useNavigate();
  // Use Snackbar hook from the ToastWrap component for showing toast messages
  const showSnackbar = useSnackbar();

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const form = new FormData(event.currentTarget);
      const email = form.get("email");
      const password = form.get("password");

      // Check if email and password are provided
      if (isEmpty(email as string)) {
        showSnackbar('Email is required.', 'warning');
        return;
      }

      if (isEmpty(password as string)) {
        showSnackbar('Password is required.', 'warning');
        return;
      }

      // Call the Firebase Auth service for login
      const response = await FirebaseAuthService.loginWithEmailAndPassword(email as string, password as string);
      // Handle the response data
      if (response.success === false) {
        showSnackbar(response.message, 'error');
        return;
      }

      setUserSession(response?.data);
      history("/sites");
    } catch (error: any) {
      showSnackbar(error?.message, 'error');
    }
  };

  // Google login 
  const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;

      
      const parsedUser = JSON.parse(JSON.stringify(user));
      
      const userData = await getSingleFilteredEntity('Users', { email: parsedUser.email });
      if (!userData) {
        const user = {
          email: parsedUser.email,
          name: parsedUser.displayName,
          role: "Contractor",
          uid: parsedUser.uid,
          photoURL: parsedUser.photoURL,
        }
        await createEntity("Users", user); 
        const userData:any = await getSingleFilteredEntity('Users', { email: parsedUser.email });
        setUserSession({ additionalData: {
          ...user,
          id: userData.id,
        }, user: parsedUser})
        showSnackbar('You are registered successfully.', 'success');
      }
      else {
        setUserSession({ additionalData: userData, user: parsedUser})
      }
      

      if (!user) {
        showSnackbar('An error occurred while logging in.', 'error');
        return;
      }


      history("/sites");

    } catch (error:any) {
      const errorMessage = error.message;
      showSnackbar(errorMessage, 'error');
    }
  };

  // State for password visibility
  const [showPassword, setShowPassword] = React.useState(false);

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Prevent default behavior for password visibility button
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // JSX structure for the Login Page component
  return (
    <Box className="main">
      {/* Left-side container with background */}
      <Box
        className="section"
        sx={{
          background: "rgb(2, 0, 36)",
          backgroundImage: "linear-gradient(34deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 34%, rgba(0, 78, 255, 1) 100%)"
        }}>
        <Box className="vector-bg">
          <Typography fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ color: "#fff", fontSize: "30px", mt: 1.5 }}>
            Site Solution
          </Typography>
          <Typography
            mt={"50px"}
            fontFamily={" 'Bai Jamjuree', sans-serif"}
            sx={{ lineHeight: "49.05px", color: "#fff", fontSize: "45px" }}>
            Welcome to <br /> Site Solution
          </Typography>
          <Typography mb={"50px"} mt={"20px"} sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "300" }}>
            Sign in to continue your journey with us.
          </Typography>
          <img className="l-maskgroup" src={"./cards.svg"} alt="" />
        </Box>
      </Box>

      {/* Right-side container with the login form */}
      <Box p={8} className="right">
        <Typography fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ fontSize: "36px", color: "#FFFFFF" }}>
          Sign In
        </Typography>
        <form className="mss-login-form" onSubmit={handleSubmit}>
          {/* Email input field */}
          <Box mt={"40px"} sx={{ width: "100%", backgroundColor: "" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Email
            </Typography>
            <OutlinedInput
              sx={{ color: "#FFFFFF" }}
              className="input-style NexaFont"
              autoComplete="off"
              type="email"
              
              placeholder="Email"
              size="small"
              name="email"
            />
          </Box>

          {/* Password input field */}
          <Box sx={{ marginTop: "20px" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Password
            </Typography>
            <OutlinedInput
              sx={{ color: "#FFFFFF" }}
              className="input-style NexaFont"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              size="small"
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

          {/* Forgot Password link */}
          <Typography mt={"10px"} mb={"5px"} sx={{ fontSize: "14px", fontWeight: "600", color: "#FFFFFF" }}>
            <Link className="l-forgotpassword NexaFont" to="/forgot-password">
              Forgot Password?
            </Link>
          </Typography>

          {/* Sign In button */}
          <button className="l-signin NexaBoldFont" type="submit">
            Sign in
          </button>
        </form>

        {/* Separator and back to login link */}
        <Box my={"10px"} display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
          <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
          <Typography textAlign={"center"} className="NexaFont" mt={"5px"} mb={"5px"} sx={{ fontSize: "16px", fontWeight: "300", color: "#FFFFFF" }}>
            Or
          </Typography>
          <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
        </Box>

        {/* Google Sign In button */}
        <Typography
          onClick={signInWithGoogle}
          fontFamily={" 'Bai Jamjuree', sans-serif"}
          mt={"0px"}
          mb={"5px"}
          className="google-btn NexaFont">
          <img width={20} height={20} className="l-google" src="/images/general/google.svg" alt="google" />
          Continue with Google
        </Typography>

        {/* Sign Up link */}
        <Box sx={{ backgroundColor: "" }} mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box display={"flex"} gap={"3px"} alignItems={"center"}>
            <Typography
            className="NexaFont"
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "300"
              }}>
              Don’t have an account?
            </Typography>
            <Typography
              sx={{
                color: "yellow",
                fontSize: "14px",
                fontWeight: "300"
              }}>
              <Link className="l-signup" to="/register">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
