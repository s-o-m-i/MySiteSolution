import { Box, Breadcrumbs, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import Navbar from "components/layouts/navbar/navbar";
import NotificationPopperComponent from "components/layouts/topbar/NotificationPopper";
import AtompointPopper from "components/layouts/topbar/PS-AtompointPopper";
import ProfileArrowDownComponent from "components/layouts/topbar/ProfileArrowDown";
import ProfileIconComponent from "components/layouts/topbar/ProfileIconPopper";
import CreateSites from "pages/Sites/CreateSites";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobal } from "store/user.context";
import "../WorkPackages/WorkPackages.css";
// import AddWorkPack from "./AddWorkPack/AddWorkPack";
import { IoSearchOutline } from "react-icons/io5";
import AddWorkPack from "pages/WorkPackages/AddWorkPack/AddWorkPack";
import WPLaboursFilter from "pages/WorkPackages/WorkPackVariants/WPackStructuralSteelworkInstallation/WPackLabours/WPLaboursFilter/WPLaboursFilter";
import WPLaboursTable from "pages/WorkPackages/WorkPackVariants/WPackStructuralSteelworkInstallation/WPackLabours/WPLaboursTable/WPLaboursTable";
import AddAnnouncement from "./AddAnnouncement/AddAnnouncement";
import WorkPackDeleteModal from "pages/WorkPackages/WorkPackVariants/WorkPackDeleteModal/WorkPackDeleteModal";
// import LaboursFilter from "./LaboursFilter/LaboursFilter";
// import AddLabour from "./AddLabour/AddLabour";
// import LaboursTable from "./LaboursTable/LaboursTable";

const Announcements = () => {
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
    <Typography key="3" color="white">
Announcements
    </Typography>
  ];

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
     

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography className="s-my-sites"> Announcements</Typography>
              {/* <Typography className="s-my-sites"> My Sites</Typography> */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>

        <AddAnnouncement/>
               
              </Box>
            </Box>

{/* hero box */}
<Box>
    {/* main design box */}
    <Box mt={"30px"} pl={"40px"} pr={'20px'} display={'flex'} justifyContent={'space-between'} sx={{backgroundColor:"#131313",borderRadius:"10px"}} >
        <Box display={'flex'} alignItems={'center'} py={"20px"}>
        <Box  textAlign={'center'} sx={{}} >
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>Today</Typography>
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>3:00 PM</Typography>
        </Box>
        <Box py={'10px'} ml={'20px'} pl={'20px'} sx={{borderLeft:"1px solid #FFFFFF1A"}}>
            <Typography sx={{fontSize:"22px",color:''}}>Safety Meeting Announcement</Typography>
            <Typography mt={'10px'} sx={{fontSize:"14px",color:''}}>Mandatory safety training will be held in the site office this Friday at 9 AM</Typography>
    
        </Box>
        </Box>
        <Box>
        <Box mt={"20px"} display={"flex"} alignItems="center" gap="10px">
                    <Box sx={{cursor:'pointer'}}>
                      <img src="/images/general/w-edit.png" alt="" />
                      </Box>
                      {/* <img src="/images/general/w-delete.png" alt="" /> */}
                  <Box sx={{cursor:'pointer'}}>
                      <WorkPackDeleteModal/>

                  </Box>
                  
                    </Box>
        </Box>
    </Box>







    <Box mt={"30px"} pl={"40px"} pr={'20px'} display={'flex'} justifyContent={'space-between'} sx={{backgroundColor:"#131313",borderRadius:"10px"}} >
        <Box display={'flex'} alignItems={'center'} py={"20px"}>
        <Box  textAlign={'center'} sx={{whiteSpace:"nowrap"}} >
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>Today</Typography>
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>2:00 PM</Typography>
        </Box>
        <Box py={'10px'} ml={'20px'} pl={'20px'} sx={{borderLeft:"1px solid #FFFFFF1A"}}>
            <Typography sx={{fontSize:"22px",color:''}}>Tool Audit</Typography>

            <Box mt={'10px'} display={'flex'} alignItems={'flex-start'} gap={'10px'}>
            <Box mt={"  "}>
<img src="/images/general/announcement-ball.png" alt="" />

                </Box>
            <Typography  sx={{fontSize:"14px",color:'',fontWeight:"300"}}>Heads up, team! There will be a tool audit conducted on Wednesday. Please ensure your tools are properly labelled and stored in their respective places by end of day Tuesday. </Typography>
    
            </Box>

            <Box mt={'10px'} display={'flex'} alignItems={'flex-start'} gap={'10px'}>
            <Box mt={"  "}>
<img src="/images/general/announcement-ball.png" alt="" />

                </Box>
            <Typography  sx={{fontSize:"14px",color:'',fontWeight:"300"}}>Heads up, team! There will be a tool audit conducted on Wednesday. Please ensure your tools are properly labelled and stored in their respective places by end of day Tuesday. </Typography>
    
            </Box>
            <Box mt={'10px'} display={'flex'} alignItems={'flex-start'} gap={'10px'}>
            <Box mt={"  "}>
<img src="/images/general/announcement-ball.png" alt="" />

                </Box>
            <Typography  sx={{fontSize:"14px",color:'',fontWeight:"300"}}>Heads up, team! There will be a tool audit conducted on Wednesday. Please ensure your tools are properly labelled and stored in their respective places by end of day Tuesday. </Typography>
    
            </Box>
        </Box>
        </Box>
        <Box>
        <Box mt={"20px"} display={"flex"} alignItems="center" gap="10px">
                    <Box sx={{cursor:'pointer'}}>
                      <img src="/images/general/w-edit.png" alt="" />
                      </Box>
                      {/* <img src="/images/general/w-delete.png" alt="" /> */}
                  <Box sx={{cursor:'pointer'}}>
                      <WorkPackDeleteModal/>

                  </Box>
                  
                    </Box>
        </Box>
    </Box>







    <Box mt={"30px"} pl={"40px"} pr={'20px'} display={'flex'} justifyContent={'space-between'} sx={{backgroundColor:"#131313",borderRadius:"10px"}} >
        <Box display={'flex'} alignItems={'center'} py={"20px"}>
        <Box  textAlign={'center'} sx={{}} >
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>Yesterday</Typography>
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>12:00 PM</Typography>
        </Box>
        <Box py={'10px'} ml={'20px'} pl={'20px'} sx={{borderLeft:"1px solid #FFFFFF1A"}}>
            <Typography sx={{fontSize:"22px",color:''}}>Payroll Reminder</Typography>
            <Typography mt={'10px'} sx={{fontSize:"14px",color:''}}>Reminder for all: Please ensure your timesheets for the past week are submitted by 5 PM today for payroll processing.</Typography>

        </Box>
        </Box>
        <Box>
        <Box mt={"20px"} display={"flex"} alignItems="center" gap="10px">
                    <Box sx={{cursor:'pointer'}}>
                      <img src="/images/general/w-edit.png" alt="" />
                      </Box>
                      {/* <img src="/images/general/w-delete.png" alt="" /> */}
                  <Box sx={{cursor:'pointer'}}>
                      <WorkPackDeleteModal/>

                  </Box>
                  
                    </Box>
        </Box>
    </Box>

    <Box mt={"30px"} pl={"40px"} pr={'20px'} display={'flex'} justifyContent={'space-between'} sx={{backgroundColor:"#131313",borderRadius:"10px"}} >
        <Box display={'flex'} alignItems={'center'} py={"20px"}>
        <Box  textAlign={'center'} sx={{}} >
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>Yesterday</Typography>
            <Typography sx={{fontSize:"18px",color:'#EBA92A'}}>3:00 PM</Typography>
        </Box>
        <Box py={'10px'} ml={'20px'} pl={'20px'} sx={{borderLeft:"1px solid #FFFFFF1A"}}>
            <Typography sx={{fontSize:"22px",color:''}}>Safety Meeting Announcement</Typography>
            <Typography mt={'10px'} sx={{fontSize:"14px",color:''}}>Mandatory safety training will be held in the site office this Friday at 9 AM</Typography>

        </Box>
        </Box>
        <Box>
        <Box mt={"20px"} display={"flex"} alignItems="center" gap="10px">
                    <Box sx={{cursor:'pointer'}}>
                      <img src="/images/general/w-edit.png" alt="" />
                      </Box>
                      {/* <img src="/images/general/w-delete.png" alt="" /> */}
                  <Box sx={{cursor:'pointer'}}>
                      <WorkPackDeleteModal/>

                  </Box>
                  
                    </Box>
        </Box>
    </Box>

</Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Announcements;
