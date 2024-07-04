'use client';
import { Box, Button, Divider, Drawer, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import MuiTextArea from 'components/shared/Textarea/Textarea';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
                                                                                                            
// import MuiStepper from 'screens/Create-Sites/MuiStepper';
// import MuiStepper from './MuiStepper';

const AddWorkPack = () => {
  const [open, setOpen] = useState(false);
  // Function to open the Drawer
  const openDrawer = () => {
    setOpen(true);
  };

  // Function to close the Drawer
  const closeDrawer = () => {
    setOpen(false);
  };

  const handleBackdropClick = () => {
    closeDrawer();
  };
  return (
    <>
      <Box sx={{ cursor: 'pointer' }} onClick={openDrawer}>
        <Typography className="s-create-sites " sx={{whiteSpace:"nowrap"}}>+ Create Work Package</Typography>
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        // Prevent background from being disabled
        hideBackdrop // Prevent backgroun
        PaperProps={{ style: { backgroundColor: '#1D1D1D' } }}
      >
        {open && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background color
              zIndex: -99, // Behind the drawer content
            }}
            onClick={handleBackdropClick} // Close the drawer on backdrop click
          />
        )}

        <Box width={'500px'} p={'20px'} className="ps-create-sites" >
          <Typography sx={{fontSize:"36px"}}>Add Work Package</Typography>
          <Box my={'10px'}>
            <Divider />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Name
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="email"
                    placeholder="Spring Field Mall|"
                    size="small"
                    name="email"
                  />
                </Box>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Category
                  </Typography>

                  {/* <OutlinedInput className="input-style" autoComplete="off" type="text" placeholder="" size="small" name="client" /> */}

                  <Select
              className="input-style NexaFont select-icon"
              sx={{ "& .MuiSvgIcon-root": { color: "white" } }}
              size="small"
              placeholder="Contractor"
              name="role"
            //   value={"age"}
            //   onChange={"handleChange"}
              >
              <MenuItem value={"Contractor"} sx={{color: "black"}}>Contractor</MenuItem>
              <MenuItem value={"Subcontractor"} sx={{color: "black"}}>Subcontractor</MenuItem>
            </Select>

                </Box>
              </Box>
          

              <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                   Associated Project
                  </Typography>

                  <Select
              className="input-style NexaFont select-icon"
              sx={{ "& .MuiSvgIcon-root": { color: "white" } }}
              size="small"
              placeholder="Contractor"
              name="role"
            //   value={"age"}
            //   onChange={"handleChange"}
              >
              <MenuItem value={"Contractor"} sx={{color: "black"}}>Contractor</MenuItem>
              <MenuItem value={"Subcontractor"} sx={{color: "black"}}>Subcontractor</MenuItem>
            </Select>

                </Box>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                Required Labour
                  </Typography>

                  <OutlinedInput className="input-style" autoComplete="off" type="text" placeholder="" size="small" name="client" />
                </Box>
              </Box>



              <Typography mt="10px" sx={{ color: "#F7F7FC", mb: "10px" }}>
              Description
              </Typography>
              <MuiTextArea minRow={3}  />
              <Link to={"/workpackages-variants"}>
              <Button
              sx={{
                width: "159.23px",
                height: "45px",
                textAlign: "center",
                backgroundColor: "#0079FF",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "900",
                borderRadius: "10px",
                position: "absolute",
                bottom:"10px",
                right:"20px",
                textTransform:"capitalize"
              }}
            //   onClick={handleNext}
              >
              Create
            </Button>
            </Link>


        </Box>
      </Drawer>
    </>
  );
};

export default AddWorkPack;
