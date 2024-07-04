import { Box, Divider, Typography } from '@mui/material';
// import Image from 'next/image';
import React from 'react';
import NotificationPopperComponent from './NotificationPopper';

import AtompointPopper from './PS-AtompointPopper';
import ProfileArrowDownComponent from './ProfileArrowDown';
import { useGlobal } from 'store/user.context';

const ProfileIconComponent = ({setSelectedCompany}:any) => {
  const { session } = useGlobal();
  const username = session?.additionalData?.name || session?.user?.displayName || 'Username';
  const role = session?.additionalData?.role || 'Role';
  const photoURL = session?.additionalData?.photoURL || session?.user?.photoURL || '/images/general/user-286.png';
  return (
    <>
    <Box>
      <Box className="s-topbar">
        <Box className="s-tb-left">
          <img
            src="/images/general/sidebarlogo.svg"
            width={43.91}
            height={43.91}
            alt=""
          />
          <Typography className="s-mss"> My Site Solution</Typography>
        </Box>

        <Box className="s-tb-right">
          <AtompointPopper setSelectedCompany={setSelectedCompany} />
          <NotificationPopperComponent />

          <Box>
            <Typography className="s-mike">{username}</Typography>
            <Typography className="s-contractor">{role}</Typography>
          </Box>
          <Box className="s-profile">
            <img
              src={photoURL}
              width={49.1}
              style={{ borderRadius: '50%' }}
              height={49.1}
              alt=""
            />
            <ProfileArrowDownComponent />
          </Box>
        </Box>
        
      </Box>
      <Box className="s-hr">
          <Divider />
        </Box>
      </Box>
    </>
  );
};

export default ProfileIconComponent;
