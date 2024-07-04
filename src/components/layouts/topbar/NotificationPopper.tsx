'use client';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Image from 'next/image';
import { Box } from '@mui/material';

const NotificationPopperComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <img
        aria-describedby={id}
        onClick={handleClick}
        src="/images/general/bell.svg"
        width={44.32}
        style={{ cursor: 'pointer' }}
        height={44.32}
        alt=""
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          
          borderRadius: '0px',
          '& .MuiPaper-root': { borderRadius: '10px',backgroundColor: '#131313',color:"#fff",padding:"15px" ,border:"1px solid #FFFFFF26",marginTop:"20px"},
        }}
        
      >
        <Box width={"317.37px"} sx={{ backgroundColor: '#1D1D1D',borderRadius:'7px'}} p={2}>
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Equipment Malfunction</Typography>
          <Typography mt={"10px"} sx={{fontSize:"14px",fontWeight:"300",color:"#fff",lineHeight:"17.93px"  }}>Crane reported malfunctioning <br/> at {`"City Plaza"`}. Immediate <br/> attention required.</Typography>
          <Typography  mt={"15px"} sx={{fontSize:"10px",fontWeight:"300",color:"#949494" }}>Today, 09:15 AM</Typography>
        </Box>

        <Box mt={"10px"} width={"317.37px"} sx={{ backgroundColor: '#1D1D1D',borderRadius:'7px'}} p={2}>
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Safety Inspection Alert</Typography>
          <Typography mt={"10px"} sx={{fontSize:"14px",fontWeight:"300",color:"#fff",lineHeight:"17.93px"  }}>The {`"Springfield Site"`} passed its <br/> safety inspection. No issues found.</Typography>
          <Typography  mt={"15px"} sx={{fontSize:"10px",fontWeight:"300",color:"#949494" }}>Today, 08:45 AM</Typography>
        </Box>

        <Box mt={"10px"} width={"317.37px"} sx={{ backgroundColor: '#1D1D1D',borderRadius:'7px'}} p={2}>
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Laborer Compliance</Typography>
          <Typography mt={"10px"} sx={{fontSize:"14px",fontWeight:"300",color:"#fff",lineHeight:"17.93px"  }}>2 laborers on the {`"River Bridge"`} <br/> project have expiring certifications.</Typography>
          <Typography  mt={"15px"} sx={{fontSize:"10px",fontWeight:"300",color:"#949494" }}>24th Oct, 11:20 AM</Typography>
        </Box>

      </Popover>
    </>
  );
};

export default NotificationPopperComponent;
