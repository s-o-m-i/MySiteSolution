'use client';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ProfileArrowDownComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const navigate = useNavigate();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleLogout = () => {
    localStorage.removeItem('userSession');
    window.location.href = '/login';
  };
  return (
    <>
     

      <img
        aria-describedby={id}
        onClick={handleClick}
        src="/images/general/atomdownarrow.svg"
        width={11.42}
        height={6.4}
        alt=""
        className='s-down-arrow'
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
          '& .MuiPaper-root': {
            // borderRadius: '2px',
            backgroundColor: '#1E1E1E',
            color: '#fff',
            padding: '15px',
            border: '1px solid #FFFFFF26',
            marginTop: '0px',
            // width: '186.6px',
          },
        }}
      >
        <Box sx={{ width: '160px' }}>
        <Typography
            onClick={() => {
              handleProfile();
            }}
            sx={{ color: '#fff', cursor: 'pointer',padding:"5px","&:hover":{backgroundColor:"#131313",padding:"5px",borderRadius:"5px", } }}
          >
            Profile
          </Typography>
          <Box className="ss-hr">
            <Divider />
          </Box>
          <Typography
            onClick={() => {
              handleLogout();
            }}
            sx={{padding:"5px", color: '#fff', cursor: 'pointer',"&:hover":{backgroundColor:"#131313",padding:"5px",borderRadius:"5px", }}}
          >
            Logout
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default ProfileArrowDownComponent;
