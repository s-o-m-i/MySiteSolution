'use client';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Image from 'next/image';
import { Box, Checkbox, Divider } from '@mui/material';

const LaboursFilter = () => {
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
    
      <Box
      display={'flex'}
       alignItems={'center'}
       gap={"10px"}
       pl={"15px"}
    py={"10px"}
      pr={'45px'}
      sx={{backgroundColor:"#131313",borderRadius:"10px",border:'1px solid #FFFFFF26',cursor:"pointer"}}
         onClick={handleClick}
         >
          <img src="/images/general/Filter-funnel.png" alt="" />
        <Typography>
        Filter
        </Typography>
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
          '& .MuiPaper-root': { borderRadius: '10px',backgroundColor: '#131313',color:"#fff",padding:"15px" ,border:"1px solid #FFFFFF26",marginTop:"20px"},
        }}
        
      >

          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }} my={"10px"}>Filter By</Typography>

          <Box mt={"10px"} width={"200px"} sx={{ backgroundColor: '#1D1D1D',borderRadius:'7px',cursor:"pointer"}} p={1}>
            <Box onClick={()=>setShowInduction(!showInduction)} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Induction</Typography>

          <img  src="/images/general/atomdownarrow.svg" alt="" />
            </Box>
{showInduction && (    

          <Box>
          <Box my={'10px'} className="ss-hr">
            <Divider  />
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={''}>
          <Checkbox sx={{ color: "#f7f7fc7a" }}
          //   checked={agree}
          //   onChange={(event) => setAgree(event.target.checked)}
          //   inputProps={{ "aria-label": "controlled" }}
            />
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Attended</Typography>
          </Box>
          <Box mt={"10px"} display={'flex'} alignItems={'center'} gap={''}>
          <Checkbox sx={{ color: "#f7f7fc7a" }}
          //   checked={agree}
          //   onChange={(event) => setAgree(event.target.checked)}
          //   inputProps={{ "aria-label": "controlled" }}
            />
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Pending</Typography>
          </Box>
          </Box>
)}
        </Box>

        <Box width={"200px"} sx={{ backgroundColor: '#1D1D1D',borderRadius:'7px',cursor:"pointer"}} mt={'10px'} p={1}>
            <Box onClick={()=>setShowStatus(!showStatus)} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Status</Typography>

          <img  src="/images/general/atomdownarrow.svg" alt="" />
            </Box>
{showStatus && (    

          <Box>
          <Box my={'10px'} className="ss-hr">
            <Divider  />
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={''}>
          <Checkbox sx={{ color: "#f7f7fc7a" }}
          //   checked={agree}
          //   onChange={(event) => setAgree(event.target.checked)}
          //   inputProps={{ "aria-label": "controlled" }}
            />
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Approved</Typography>
          </Box>
          <Box mt={"10px"} display={'flex'} alignItems={'center'} gap={''}>
          <Checkbox sx={{ color: "#f7f7fc7a" }}
          //   checked={agree}
          //   onChange={(event) => setAgree(event.target.checked)}
          //   inputProps={{ "aria-label": "controlled" }}
            />
          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Pending</Typography>
          </Box>
          </Box>
)}
        </Box>
        

    

        <Box width={"200px"} sx={{ backgroundColor: '#1D1D1D',borderRadius:'7px',cursor:"pointer"}} p={1} mt={'10px'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

          <Typography sx={{fontSize:"16px",fontWeight:"900",color:"#fff" }}>Certification</Typography>

          <img  src="/images/general/atomdownarrow.svg" alt="" />
            </Box>

        </Box>


      </Popover>
    </>
  );
};

export default LaboursFilter;
