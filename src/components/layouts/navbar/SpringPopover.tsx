"use client";
import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";


// Define the SpringPopover component
const SpringPopover = () => {
  // State to manage the selected atompoint
  const [atompoint, setAtompoint] = useState("Spring Field Mall");
  // State to manage the anchor element for the Popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  // Event handler for opening the Popover
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the Popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Check if the Popover is open
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // JSX for the SpringPopover component
  return (
    <>
      <Box aria-describedby={id} onClick={handleClick} className="nav-s-atompoint ">
        <Typography className="s-atom-text"> {atompoint}</Typography>
        <img src="/images/general/atomdownarrow.svg" width={10} height={10} alt="" />
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        sx={{
          borderRadius: "0px",
          "& .MuiPaper-root": {
            // borderRadius: '2px',
            backgroundColor: "#1E1E1E",
            color: "#fff",
            padding: "15px",
            border: "1px solid #FFFFFF26",
            marginTop: "0px"
            // width: '186.6px',
          }
        }}>
        <Box sx={{ width: "170px" }}>
          <Typography>Sites</Typography>

          <Typography
            onClick={() => {
              setAtompoint("Spring Field Mall");
              handleClose();
            }}
            mt={"10px"}
            sx={{
              fontSize: "14px",
              padding: "5px",

              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131313",
                padding: "5px",
                borderRadius: "5px"
              }
            }}>
            Spring Field Mall
          </Typography>
          <Box className="ss-hr">
            <Divider />
          </Box>

          <Typography
            onClick={() => {
              setAtompoint("Spring Field Mall");
              handleClose();
            }}
            mt={"10px"}
            sx={{
              fontSize: "14px",
              padding: "5px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131313",
                padding: "5px",
                borderRadius: "5px"
              }
            }}>
            Riverside Industrial Park
          </Typography>
          <Box className="ss-hr">
            <Divider />
          </Box>

          <Typography
            onClick={() => {
              setAtompoint("Spring Field Mall");
              handleClose();
            }}
            mt={"10px"}
            sx={{
              fontSize: "14px",
              padding: "5px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131313",
                padding: "5px",
                borderRadius: "5px"
              }
            }}>
            Parkside Office Campus
          </Typography>
          <Box className="ss-hr">
            <Divider />
          </Box>
          <Typography
            onClick={() => {
              setAtompoint("Spring Field Mall");
              handleClose();
            }}
            mt={"10px"}
            sx={{
              fontSize: "14px",
              padding: "5px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131313",
                padding: "5px",
                borderRadius: "5px"
              }
            }}>
            Sunset Valley Estates
          </Typography>
          <Box className="ss-hr">
            <Divider />
          </Box>

          <Typography
            onClick={() => {
              setAtompoint("Spring Field Mall");
              handleClose();
            }}
            mt={"10px"}
            sx={{
              fontSize: "14px",
              padding: "5px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131313",
                padding: "5px",
                borderRadius: "5px"
              }
            }}>
            Cobblestone Courtyard
          </Typography>
          <Box className="ss-hr">
            <Divider />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

// Export the SpringPopover component
export default SpringPopover;
