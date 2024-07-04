'use client';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Image from 'next/image';
import { Box, Checkbox, Divider, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const LaboursAttended = () => {
    const [showStatus, setShowStatus] = React.useState(false);
    const [showInduction, setShowInduction] = React.useState(false);
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
    
      {/* <Box
      display={'flex'}
       alignItems={'center'}
       gap={"10px"}
       pl={"15px"}
    py={"10px"}
      pr={'45px'}
      sx={{backgroundColor:"#131313",borderRadius:"10px",border:'1px solid #FFFFFF26',cursor:"pointer"}}
      
         >
          <img src="/images/general/Filter-funnel.png" alt="" />
        <Typography>
        Filter
        </Typography>
      </Box> */}
      <Box   onClick={handleClick}>
      <img src="/images/general/labours_open.png" alt="" />

      </Box>

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
          '& .MuiPaper-root': { borderRadius: '10px',backgroundColor: '#1D1D1D',color:"#fff",padding:"15px" ,border:"1px solid #FFFFFF26",marginTop:"20px"},
        }}
        
      >

         
<Box width={"130px"}>
<RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Attended"
    name="radio-buttons-group"
  >
    <FormControlLabel value="Attended" control={<Radio />} label="Attended" />
    <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
</RadioGroup>
    
</Box>

    

       


      </Popover>
    </>
  );
};

export default LaboursAttended;
