"use client";
import React from "react";
import { isEmpty, matchPassword, validateEmail } from "libs/helper";
import FirebaseAuthService from "../../../functions/FirebaseAuthService";
import { Box, Checkbox, IconButton, InputAdornment, MenuItem, OutlinedInput, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./signup.css";
import "../Login/login.css";
import { Link, useNavigate } from "react-router-dom";
import { createEntity, getSingleFilteredEntity } from "functions/ReuseableCrudService";
import { useSnackbar } from "components/shared/Toast/ToastWrap";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Component for SignUp
function SignUp({setUserSession}: {setUserSession: any}) {
  const router = useNavigate();

  // useSnackbar hook from the ToastWrap component for showing toast messages
  const showSnackbar = useSnackbar();

  const [agree, setAgree] = React.useState(false);

  // Function to handle SignUp form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agree) {
      showSnackbar('Please agree with terms and conditions.', 'error');
      return;
    }
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");
    const phone = data.get("phone");
    const confirmpassword = data.get("confirmpassword");
    const role = data.get("role");


    // Check if email is provided
    if (isEmpty(email as string)) {
      showSnackbar('Email is required.', 'warning');
      return;
    }

    if(!validateEmail(email as string)){
      showSnackbar('Email is not valid.', 'warning');
      return;
    }

    // Check if password is provided
    if (isEmpty(password as string)) {
      showSnackbar('Password is required.', 'warning');
      return;
    }

    // Check if password and confirm password match
    if (!matchPassword(password as string, confirmpassword as string)) {
        showSnackbar('Password and confirm password should match.', 'warning');
      return;
    }

    // Register user with email and password using FirebaseAuthService
    const response: any = await FirebaseAuthService.registerWithEmailAndPassword(email as string, password as string);
    if (response?.success) {
      // Create user entity in the database
      await createEntity("Users", {
        email: email,
        name: name,
        phone: phone,
        role: role ? role : "Contractor",
        uid: JSON.parse(response.data).user.uid
      });
      showSnackbar('Account created successfully.', 'success');
      router("/onboarding");
    } else {
      showSnackbar(response?.message, 'error');
    }
  };

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

  const [age, setAge] = React.useState("Contractor");

  // Handle role selection change
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  
  
  // Google login 
  const signInWithGoogle = async () => {
    if (!agree) {
      showSnackbar('Please agree with terms and conditions.', 'error');
      return;
    }
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


      router("/onboarding");

    } catch (error:any) {
      const errorMessage = error.message;
      showSnackbar(errorMessage, 'error');
    }
  };




  // JSX structure for the SignUp component
  return (
    <Box className="main">
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
            Sign up to continue your journey with us.
          </Typography>
          <img className="l-maskgroup" src={"./cards.svg"} alt="" />
        </Box>
      </Box>

      <Box p={8} className="s-right">
        <Typography fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ fontSize: "36px", color: "#FFFFFF" }}>
          Sign Up
        </Typography>
        <form className="" onSubmit={handleSubmit}>
          <Box mt={"40px"} sx={{ width: "100%", backgroundColor: "" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Name
            </Typography>

            <OutlinedInput className="input-style NexaFont" autoComplete="off" type="text" placeholder="John" size="small" name="name" />
          </Box>

          <Box mt={"20px"}  sx={{ width: "100%", backgroundColor: "" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Email
            </Typography>

            <OutlinedInput
              className="input-style NexaFont"
              autoComplete="off"
              type="email"
              placeholder="John@gmail.com"
              size="small"
              name="email"
            />
          </Box>

          <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Your Job Role
            </Typography>

            <Select
              className="input-style NexaFont select-icon"
              sx={{ "& .MuiSvgIcon-root": { color: "white" } }}
              size="small"
              placeholder="Contractor"
              name="role"
              value={age}
              onChange={handleChange}>
              <MenuItem value={"Contractor"} sx={{color: "black"}}>Contractor</MenuItem>
              <MenuItem value={"Subcontractor"} sx={{color: "black"}}>Subcontractor</MenuItem>
            </Select>
          </Box>

          <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Phone Number
            </Typography>

            <OutlinedInput
              className="input-style NexaFont"
              autoComplete="off"
              type="number"
              placeholder="154121245123"
              size="small"
              name="phone"
            />
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Password
            </Typography>
            <OutlinedInput
              className="input-style NexaFont"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="**************"
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

          <Box sx={{ marginTop: "20px" }}>
            <Typography className="NexaFont" mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
              Confirm Password
            </Typography>
            <OutlinedInput
              className="input-style NexaFont"
              id="outlined-adornment-confirm-password"
              type={showPasswordConfirm ? "text" : "password"}
              placeholder="**************"
              size="small"
              name="confirmpassword"
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

          <button className="s-signin NexaBoldFont" type="submit">
            Sign Up
          </button>

          <Box my={"10px"} display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
            <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
            <Typography textAlign={"center"} className="NexaFont" mt={"5px"} mb={"5px"} sx={{ fontSize: "16px", fontWeight: "300", color: "#FFFFFF" }}>
              Or
            </Typography>
            <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
          </Box>

          <Typography
          onClick={signInWithGoogle}
          mt={"0px"}
          mb={"5px"}
          className="google-btn NexaFont">
          <img width={20} height={20} className="l-google" src="/images/general/google.svg" alt="google" />
          Continue with Google
        </Typography>
          <Box my={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
            <Typography
            className="NexaFont"
              sx={{
                color: "#fff",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "300"
              }}>
              Already an account?
            </Typography>
            <Typography
              sx={{
                color: "yellow",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "300"
              }}>
              <Link className="s-signup" to="/login">
                Sign In
              </Link>
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
            <Checkbox sx={{ color: "#f7f7fc7a" }}
              checked={agree}
              onChange={(event) => setAgree(event.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography
            className="NexaFont"
              sx={{
                color: "white",

                textAlign: "center",
                fontSize: "14px",
                fontWeight: "300"
              }}>
              Do you agree with <span className="signup-terms"
                onClick={() => router("/terms")}
              ><b> terms and conditions </b></span>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default SignUp;