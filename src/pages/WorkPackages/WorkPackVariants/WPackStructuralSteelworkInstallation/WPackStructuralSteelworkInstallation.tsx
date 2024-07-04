"use client";
import { Box, Breadcrumbs, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "components/layouts/navbar/navbar";
import NotificationPopperComponent from "components/layouts/topbar/NotificationPopper";
import AtompointPopper from "components/layouts/topbar/PS-AtompointPopper";
import ProfileArrowDownComponent from "components/layouts/topbar/ProfileArrowDown";
import ProfileIconComponent from "components/layouts/topbar/ProfileIconPopper";
import CreateSites from "pages/Sites/CreateSites";
import React from "react";
import { MdOutlineArrowBackIosNew, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobal } from "store/user.context";
import "../../WorkPackages.css";
// import AddWorkPack from "./AddWorkPack/AddWorkPack";
import { IoSearchOutline } from "react-icons/io5";
import WorkPackDeleteModal from "../WorkPackDeleteModal/WorkPackDeleteModal";
import ProfileTabs from "pages/Profile/ProfileTabs/Index";
import ProfileForm from "pages/Profile/ProfileTabs/ProfileForm";
import CompanyForm from "pages/Profile/ProfileTabs/CompanyForm";
import WPackLabours from "./WPackLabours/WPackLabours";
import WPackSubContractors from "./WPackSubContractors/WPackSubContractors";
// import AddWorkPack from "../AddWorkPack/AddWorkPack";
// import WorkPackDeleteModal from "./WorkPackDeleteModal/WorkPackDeleteModal";
// 

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



const WPackStructuralSteelworkInstallation = ({setUserSession, setSelectedCompany}: any) => {
  const { session } = useGlobal();
  const username = session?.additionalData?.name || session?.user?.displayName || "Username";
  const role = session?.additionalData?.role || "Role";
  const photoURL = session?.additionalData?.photoURL || session?.user?.photoURL || "/images/general/user-286.png";

  const breadcrumbs = [
    <Link key="1" color="#9A9A9A" to="/sites">
      Sites
    </Link>,
    <Link key="2" color="#9A9A9A" to="/">
      Spring Field Mall
    </Link>,
  <Link key="3" color="#9A9A9A" to="/work-packages">
      Work Packages
   </Link>,
    <Typography key="4" color="white">
  Structural Steelwork Installation
    </Typography>
  ];


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <Navbar />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          {/* <Box className="s-container"> */}
          <Box minHeight={"100vh"} sx={{ padding: "20px", backgroundColor: "#1D1D1D" }}>
            <Box>
              <Box className="s-topbar f-topbar">
                <Box className="s-tb-left f-tb-left">
                  <MdOutlineArrowBackIosNew className="f-lefticon" />
                  <Box>
                    <Typography className="s-mss f-tbh">Spring Field Mall</Typography>
                  </Box>
                </Box>

                <Box className="s-tb-right">
                  <AtompointPopper />
                  <NotificationPopperComponent />

                  <Box>
                    <Typography className="s-mike">{username}</Typography>
                    <Typography className="s-contractor">{role}</Typography>
                  </Box>
                  <Box className="s-profile">
                    <img src={photoURL} width={49.1} height={49.1} style={{ borderRadius: "50%" }} alt="" />
                    <ProfileArrowDownComponent />
                  </Box>
                </Box>
              </Box>

              <Breadcrumbs className="f-breadc" separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>

              <Box className="s-hr">
                <Divider />
              </Box>
            </Box>
            {/* <Grid container>
        <Grid item xs={12} md={3} lg={2}>
        </Grid>
        </Grid> */}
            {/* main bar */}
            {/* <ProfileIconComponent  /> */}
            {/* 
            <Box className="s-hero-top-bar">
              <Typography className="s-my-sites"> My Sites</Typography>

              <Box className="w-hero-top-bar">
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style w-input-style "
                  autoComplete="off"
                  type="text"
                  placeholder="John"
                  size="small"
                  name="name"
                />
                <AddWorkPack />
              </Box>
            </Box> */}

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography className="s-my-sites">  Structural Steelwork Installation
</Typography>
              {/* <Typography className="s-my-sites"> My Sites</Typography> */}
              <Box display={"flex"} alignItems="center" gap="10px">
                    <Box sx={{cursor:'pointer'}}>
                      <img src="/images/general/w-edit.png" alt="" />
                      </Box>
                      {/* <img src="/images/general/w-delete.png" alt="" /> */}
                  <Box sx={{cursor:'pointer'}}>
                      <WorkPackDeleteModal/>

                  </Box>
                  
                    </Box>
            </Box>

            {/* <Box className="s-hero-section w-hero-section">
                <img src="/images/general/w-lock.png" width={88.47} height={88.47} alt="" />
                <Typography className="s-h-main-text work-main-text" sx={{ mt: 1, mb: 1 }}>
                    It looks like you don't have <br />
                    any Work Packages created yet.
                    <br />
                    Would you like to create one?
                </Typography>
                <Link to={"/sites-cards"}>
                    <Typography className="s-create-sites s-h-create-sites">+ Create Work Package</Typography>
                </Link>
                </Box> */}

<Box p={2} px={3} mt={"30px"} sx={{ backgroundColor: "#131313", borderRadius: "10px" }}>
              <Box
                pb={"20px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"5px"}
                sx={{ borderBottom: "1px solid #292A33" }}>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Associated Site: </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>Springfield Mall </Typography>
                </Box>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Category: </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>Electric </Typography>
                </Box>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Size: </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100</Typography>
                </Box>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Required: </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>60</Typography>
                </Box>
              </Box>

              <Box pt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                <Box width={"33%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Filled:</Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>40 </Typography>
                </Box>
                <Box width={"33%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Invited: </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>0 </Typography>
                </Box>
                <Box width={"33%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Assigned: </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>0</Typography>
                </Box>
              </Box>
            </Box>


            <Box sx={{ width: "100%","& .css-1xaekgw":{backgroundColor:"#131313"},"& .MuiPaper-elevation":{backgroundColor:"#131313"}}}>
      <Box className="profileTabs" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Labours" {...a11yProps(0)} />
          <Tab label="Subcontractors" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* <ProfileForm setUserSession={setUserSession} /> */}
        <WPackLabours/>
      </CustomTabPanel>
      <CustomTabPanel  value={value} index={1}>
        {/* <CompanyForm setSelectedCompany={setSelectedCompany} /> */}
        <Box >
        <WPackSubContractors/>

        </Box>
      </CustomTabPanel>
    </Box>

          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WPackStructuralSteelworkInstallation;
