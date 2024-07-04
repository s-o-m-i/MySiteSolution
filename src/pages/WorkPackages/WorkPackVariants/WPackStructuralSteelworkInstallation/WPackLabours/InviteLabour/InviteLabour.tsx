'use client';
import { Box, Button, Divider, Drawer, MenuItem, OutlinedInput, Select, Tab, Tabs, Typography } from '@mui/material';
import CTAButton from 'components/shared/CTAButton/CTAButton';
import MuiTextArea from 'components/shared/Textarea/Textarea';
import React, { useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ByCSV from './ByCSV/ByCSV';
import InvitePhone from './InvitePhone/InvitePhone';
                                                                                                            
// import MuiStepper from 'screens/Create-Sites/MuiStepper';
// import MuiStepper from './MuiStepper';



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  
  interface ProfileTabsProps {
    setUserSession: any;
    setSelectedCompany: any;
  }
  





const InviteLabour = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  

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
   <Box onClick={openDrawer} sx={{cursor:"pointer"}}>
      <CTAButton background='#0079FF' text='Invite Labour' border='1px solid #0079FF'/>

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

        <Box width={'800px'} p={'20px'} className="ps-create-sites" >
          <Typography sx={{fontSize:"36px",lineHeight:'41.94px'}}>Invite Labour to
Structural Steelwork
Installation</Typography>
          <Box my={'10px'}>
            <Divider />
          </Box>
      
           


        </Box>



        <Box sx={{ width: "100%" }} p={2}>
      <Box className="profileTabs" sx={{ borderBottom: 1, borderColor: "divider","& .MuiButtonBase-root":{marginRight:"50px"} }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label="Invite by CSV" {...a11yProps(0)} />
          <Tab  label="Invite by Phone" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* <ProfileForm setUserSession={setUserSession} /> */}
        {/* <WPackLabours/> */}

      <ByCSV close={closeDrawer}/>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <CompanyForm setSelectedCompany={setSelectedCompany} /> */}
        {/* <WPackSubContractors/> */}
        <InvitePhone/>
      </CustomTabPanel>
    </Box>

      </Drawer>
    </>
  );
};

export default InviteLabour;
