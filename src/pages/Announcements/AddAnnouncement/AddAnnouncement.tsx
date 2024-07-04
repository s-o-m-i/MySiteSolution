'use client';
import { Box, Button, Divider, Drawer, FormControlLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Typography } from '@mui/material';
import MuiTextArea from 'components/shared/Textarea/Textarea';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
                                                                                                            
// import MuiStepper from 'screens/Create-Sites/MuiStepper';
// import MuiStepper from './MuiStepper';

const AddAnnouncement = () => {
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
        <Typography className="s-create-sites " sx={{whiteSpace:"nowrap"}}>+ Add Announcement</Typography>
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        // Prevent background from being disabled
        // hideBackdrop // Prevent backgroun
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

        <Box width={'700px'} p={4} className="ps-create-sites" >
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

          <Typography sx={{fontSize:"36px"}}>Add Announcement</Typography>
          <Box sx={{cursor:'pointer'}}>
<img onClick={closeDrawer} src="/images/general/closedrawer.png" alt="" />

          </Box>
            </Box>

          <Box my={'10px'} className='ss-hr'>
            <Divider />
          </Box>
         


          <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
            Send Announcement To
                  </Typography>

       <Box sx={{border:"1px solid #FFFFFF26",borderRadius:"10px"}} p={'10px'}>
       <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Sub Contractors"
    name="radio-buttons-group"
  >
    <FormControlLabel value="Sub Contractors" control={<Radio />} label="Sub Contractors" />
    <FormControlLabel value="Labours" control={<Radio />} label="Labours" />
    <FormControlLabel value="All" control={<Radio />} label="All" />
</RadioGroup>
       </Box>
                </Box>
          

          <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
            Title
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="email"
                    placeholder=""
                    size="small"
                    name="email"
                  />
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

export default AddAnnouncement;
