import { Box, Breadcrumbs, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
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
import "../WorkPackages.css";
// import AddWorkPack from "./AddWorkPack/AddWorkPack";
import { IoSearchOutline } from "react-icons/io5";
import AddWorkPack from "../AddWorkPack/AddWorkPack";
import WorkPackDeleteModal from "./WorkPackDeleteModal/WorkPackDeleteModal";

const WorkPackVariants = () => {
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
      Work Packages
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
              <Typography className="s-my-sites"> My Sites</Typography>
              {/* <Typography className="s-my-sites"> My Sites</Typography> */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <OutlinedInput
                  sx={{ color: "#FFFFFF", backgroundColor: "black", borderRadius: "5px", width: "50%" }}
                  // className="input-style w-input-style "
                  autoComplete="off"
                  type="text"
                  placeholder="John"
                  size="small"
                  name="name"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="start">
                        <IoSearchOutline />
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <AddWorkPack />
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

            <Grid container spacing={2} mt={"10px"}>
              <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: "#131313", borderRadius: "10px", border: "1px solid #FFFFFF30" }} p={2}>
                  <Box display={"flex"} alignItems="start" justifyContent="space-between">
                    <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                      Plumbing and <br />
                      Drainage Installation
                    </Typography>

                    <Box display={"flex"} alignItems="center" gap="10px">
                    <Box sx={{cursor:'pointer'}}>
                      <img src="/images/general/w-edit.png" alt="" />
                      </Box>
                      {/* <img src="/images/general/w-delete.png" alt="" /> */}
                  <Box sx={{cursor:'pointer'}}>
                      <WorkPackDeleteModal />

                  </Box>
                  
                    </Box>
                  </Box>
                  <Box p={2} px={3} mt={"10px"} sx={{ backgroundColor: "#1D1D1D", borderRadius: "10px" }}>
                    <Box
                      pb={"20px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"5px"}
                      sx={{ borderBottom: "1px solid #292A33" }}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Required </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Filled </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>

                    <Box pt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Invited </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Assigned </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>   
              <Grid item xs={12} md={6}>
                <Link to={'/workpackages-StructuralSteelworkInstallation'}>
                <Box sx={{ backgroundColor: "#131313", borderRadius: "10px", border: "1px solid #FFFFFF30" }} p={2}>
                  <Box display={"flex"} alignItems="start" justifyContent="space-between">
                    <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                      Structural <br />
                      Steelwork Installation
                    </Typography>

                    <Box display={"flex"} alignItems="center" gap="10px">
                      <img src="/images/general/w-edit.png" alt="" />
                      <img src="/images/general/w-delete.png" alt="" />
                    </Box>
                  </Box>
                  <Box p={2} px={3} mt={"10px"} sx={{ backgroundColor: "#1D1D1D", borderRadius: "10px" }}>
                    <Box
                      pb={"20px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"5px"}
                      sx={{ borderBottom: "1px solid #292A33" }}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Required </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Filled </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>

                    <Box pt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Invited </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Assigned </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                </Link>
                
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: "#131313", borderRadius: "10px", border: "1px solid #FFFFFF30" }} p={2}>
                  <Box display={"flex"} alignItems="start" justifyContent="space-between">
                    <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                    Foundation and <br/> Footing Construction

                    </Typography>

                    <Box display={"flex"} alignItems="center" gap="10px">
                      <img src="/images/general/w-edit.png" alt="" />
                      <img src="/images/general/w-delete.png" alt="" />
                    </Box>
                  </Box>
                  <Box p={2} px={3} mt={"10px"} sx={{ backgroundColor: "#1D1D1D", borderRadius: "10px" }}>
                    <Box
                      pb={"20px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"5px"}
                      sx={{ borderBottom: "1px solid #292A33" }}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Required </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Filled </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>

                    <Box pt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Invited </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Assigned </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: "#131313", borderRadius: "10px", border: "1px solid #FFFFFF30" }} p={2}>
                  <Box display={"flex"} alignItems="start" justifyContent="space-between">
                    <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                    Landscaping and <br/> Exterior Work

                    </Typography>

                    <Box display={"flex"} alignItems="center" gap="10px">
                      <img src="/images/general/w-edit.png" alt="" />
                      <img src="/images/general/w-delete.png" alt="" />
                    </Box>
                  </Box>
                  <Box p={2} px={3} mt={"10px"} sx={{ backgroundColor: "#1D1D1D", borderRadius: "10px" }}>
                    <Box
                      pb={"20px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"5px"}
                      sx={{ borderBottom: "1px solid #292A33" }}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Required </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Labour Filled </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>

                    <Box pt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                      <Box width={"50%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Invited </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>213 </Typography>
                      </Box>
                      <Box width={"50%"} sx={{ backgroundColor: "" }} pl={"10px"} pr={"30px"}>
                        <Typography sx={{ color: "white", fontSize: "20px" }}>Subcontractors Assigned </Typography>
                        <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WorkPackVariants;
