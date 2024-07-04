"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import "../Sites/Sites.css";
import ProfileIconComponent from "../../components/layouts/topbar/ProfileIconPopper";
import { Link } from "react-router-dom";
import "./Profile.css";
import { IoIosArrowBack } from "react-icons/io";
import ProfileTabs from "./ProfileTabs/Index";

const Profile = ({setUserSession, setSelectedCompany}: any) => {
  return (
    <>
      <Box className="s-container">
        {/* main bar */}
        <ProfileIconComponent setSelectedCompany={setSelectedCompany} />

        <Box className="p-hero-top-bar">
          <Link to={"/sites"} style={{display: 'flex'}}>
          <IoIosArrowBack style={{marginTop: '6px', marginRight: '6px'}} />
          <Typography className="p-my-sites"> Account Settings</Typography>
          </Link>

        </Box>

        <Box className="p-hero-section">
          <ProfileTabs setUserSession={setUserSession} setSelectedCompany={setSelectedCompany} />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
