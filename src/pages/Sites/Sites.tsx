"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import "./Sites.css";
import CreateSites from "./CreateSites";
import ProfileIconComponent from "../../components/layouts/topbar/ProfileIconPopper";
import { Link } from "react-router-dom";

const Sites = ({setSelectedCompany}: any) => {
  return (
    <>
      <Box className="s-container">
        {/* main bar */}
        <ProfileIconComponent setSelectedCompany={setSelectedCompany} />

        <Box className="s-hero-top-bar">
          <Typography className="s-my-sites"> My Sites</Typography>

          <CreateSites />
        </Box>

        <Box className="s-hero-section">
          <img src="/images/general/building.png" width={88.47} height={88.47} alt="" />
          <Typography className="s-h-main-text" sx={{mt: 1, mb: 1}}>
            It looks like you {`don't`} have any Sites created yet.
            <br />
            Would you like to create one?
          </Typography>
          <Link to={"/sites-cards"}>
            <Typography className="s-create-sites s-h-create-sites">+ Create Site</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Sites;
