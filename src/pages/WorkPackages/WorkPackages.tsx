import { Box, Breadcrumbs, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import Navbar from "components/layouts/navbar/navbar";
import NotificationPopperComponent from "components/layouts/topbar/NotificationPopper";
import AtompointPopper from "components/layouts/topbar/PS-AtompointPopper";
import ProfileArrowDownComponent from "components/layouts/topbar/ProfileArrowDown";
import ProfileIconComponent from "components/layouts/topbar/ProfileIconPopper";
import CreateSites from "pages/Sites/CreateSites";
import React from "react";
import { MdOutlineArrowBackIosNew, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobal } from "store/user.context";
import "./WorkPackages.css";
import AddWorkPack from "./AddWorkPack/AddWorkPack";
import { IoSearchOutline } from "react-icons/io5";

const WorkPackages = () => {
  const { session } = useGlobal();
  const username = session?.additionalData?.name || session?.user?.displayName || "Username";
  const role = session?.additionalData?.role || "Role";
  const photoURL = session?.additionalData?.photoURL || session?.user?.photoURL || "/images/general/user-286.png";

  const breadcrumbs = [
    <Link key="1" color="#9A9A9A" to="/sites">
      Sites
    </Link>,
    <Link key="2" color="#9A9A9A" to="/">
      Spring Field Mall
    </Link>,
    <Typography key="3" color="white">
      Work Packages
    </Typography>
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <Navbar />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          {/* <Box className="s-container"> */}
          <Box minHeight={"100vh"} sx={{ padding: "20px", backgroundColor: "#1D1D1D" }}>
            <Box>
              <Box className="s-topbar f-topbar">
                <Box className="s-tb-left f-tb-left">
                  <MdOutlineArrowBackIosNew className="f-lefticon" />
                  <Box>
                    <Typography className="s-mss f-tbh">Spring Field Mall</Typography>
                  </Box>
                </Box>

                <Box className="s-tb-right">
                  <AtompointPopper />
                  <NotificationPopperComponent />

                  <Box>
                    <Typography className="s-mike">{username}</Typography>
                    <Typography className="s-contractor">{role}</Typography>
                  </Box>
                  <Box className="s-profile">
                    <img src={photoURL} width={49.1} height={49.1} style={{ borderRadius: "50%" }} alt="" />
                    <ProfileArrowDownComponent />
                  </Box>
                </Box>
              </Box>

              <Breadcrumbs className="f-breadc" separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>

              <Box className="s-hr">
                <Divider />
              </Box>
            </Box>
            {/* <Grid container>
        <Grid item xs={12} md={3} lg={2}>
        </Grid>
        </Grid> */}
            {/* main bar */}
            {/* <ProfileIconComponent  /> */}
{/* 
            <Box className="s-hero-top-bar">
              <Typography className="s-my-sites"> My Sites</Typography>

              <Box className="w-hero-top-bar">
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style w-input-style "
                  autoComplete="off"
                  type="text"
                  placeholder="John"
                  size="small"
                  name="name"
                />
                <AddWorkPack />
              </Box>
            </Box> */}

<Box sx={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
<Typography className="s-my-sites"> My Sites</Typography>
{/* <Typography className="s-my-sites"> My Sites</Typography> */}
<Box sx={{display:'flex',alignItems:'center',gap:"10px"}}>
<OutlinedInput
                  sx={{ color: "#FFFFFF",backgroundColor:"black",borderRadius:"5px",width:"50%" }}
                  // className="input-style w-input-style "
                  autoComplete="off"
                  type="text"
                  placeholder="John"
                  size="small"
                  name="name"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="start"
                      >
              <IoSearchOutline />
                      </IconButton>
                    </InputAdornment>
                  }
                />







                <AddWorkPack />
</Box>
</Box>

            <Box className="s-hero-section w-hero-section">
              <img src="/images/general/w-lock.png" width={88.47} height={88.47} alt="" />
              <Typography className="s-h-main-text work-main-text" sx={{ mt: 1, mb: 1 }}>
                It looks like you don't have <br />
                any Work Packages created yet.
                <br />
                Would you like to create one?
              </Typography>
              <Link to={"/sites-cards"}>
                <Typography className="s-create-sites s-h-create-sites">+ Create Work Package</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WorkPackages;
