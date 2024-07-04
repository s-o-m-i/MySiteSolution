'use client';
import { Box, Divider, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react';
import MuiStepper from './MuiStepper';
// import MuiStepper from 'screens/Create-Sites/MuiStepper';
// import MuiStepper from './MuiStepper';

const CreateSites = () => {
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
        <Typography className="s-create-sites">+ Create Site</Typography>
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

        <Box width={'500px'} p={'20px'} className="ps-create-sites">
          <Typography className="ps-heading">Create Site</Typography>
          <Box my={'10px'}>
            <Divider />
          </Box>

          <MuiStepper />
        </Box>
      </Drawer>
    </>
  );
};

export default CreateSites;
