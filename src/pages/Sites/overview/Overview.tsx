import { Box, Divider, Grid, Typography } from "@mui/material";
import AtompointPopper from "components/layouts/topbar/PS-AtompointPopper";
import NotificationPopperComponent from "components/layouts/topbar/NotificationPopper";
import ProfileArrowDownComponent from "components/layouts/topbar/ProfileArrowDown";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import React from "react";
import "./Overview.css";
import MyTable from "components/shared/MyTable/MyTable";
import CustomMapView from "components/shared/MapView/CustomMapView";
import { Location } from "components/shared/MapLocationInputWrapper/MapLocationInputWrapper";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Link } from "react-router-dom";
import Navbar from "components/layouts/navbar/navbar";
import { useGlobal } from "store/user.context";

const libraries: Libraries = ["places"];

const Overview = () => {
  const { session } = useGlobal();
  const username = session?.additionalData?.name || session?.user?.displayName || "Username";
  const role = session?.additionalData?.role || "Role";
  const photoURL = session?.additionalData?.photoURL || session?.user?.photoURL || "/images/general/user-286.png";

  const { isLoaded } = useGoogleMapsScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries
  });

  const [location] = React.useState<Location>({
    lat: -3.745,
    lng: -38.523,
    address: ""
  });

  const breadcrumbs = [
    <Link key="1" color="#9A9A9A" to="/sites">
      Sites
    </Link>,
    <Link key="2" color="#9A9A9A" to="/">
      Spring Field Mall
    </Link>,
    <Typography key="3" color="white">
      Overview
    </Typography>
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <Navbar />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Box minHeight={"100vh"} sx={{ padding: "20px", backgroundColor: "#1D1D1D" }}>
            {/* tob-bar */}
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
            {/* tob-bar-end */}

            {/* golden-box */}
            <Box
              mt={"30px"}
              sx={{ backgroundColor: "rgba(235, 169, 42, 0.1)", borderRadius: "13px", border: "1px solid #EBA92A80" }}
              p={2}
              px={3}>
              <Box mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} sx={{}}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <img src="./images/general/f-speaker.png" alt="" width="27.19px" height="27.19px" />
                  <Typography sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}>Announcements</Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  sx={{ backgroundColor: "#131313", borderRadius: "4px", cursor: "pointer" }}
                  p={"10px"}
                  px={"20px"}>
                  <img src="./images/general/f-addnew.png" alt="" width="11.32px" height="11.32px" />
                  <Typography sx={{ color: "#EBA92A" }}>Add New</Typography>
                </Box>
              </Box>

              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Typography sx={{ color: "#EBA92A" }}>13:23:</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "300", color: "#E0E4EB" }}>
                  Attention all team members: Mandatory safety training will be held in the site office this Friday at 9 AM
                </Typography>
              </Box>
              <Box mt={"5px"} display={"flex"} alignItems={"center"} gap={"10px"}>
                <Typography sx={{ color: "#EBA92A" }}>17:19:</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "300", color: "#E0E4EB" }}>
                  Great news! We've successfully completed the foundation phase ahead of schedule{" "}
                </Typography>
              </Box>
            </Box>

            {/* labour-box */}
            <Box p={2} px={3} mt={"30px"} sx={{ backgroundColor: "#131313", borderRadius: "10px" }}>
              <Box
                pb={"20px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"5px"}
                sx={{ borderBottom: "1px solid #292A33" }}>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Total Labour </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                </Box>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Compliant Labour </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>30 </Typography>
                </Box>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Labours Invited </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>300</Typography>
                </Box>
                <Box width={"25%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Labours Approved </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>80</Typography>
                </Box>
              </Box>

              <Box pt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                <Box width={"33%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Total Labour </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>100 </Typography>
                </Box>
                <Box width={"33%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Compliant Labour </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>30 </Typography>
                </Box>
                <Box width={"33%"} sx={{ backgroundColor: "", borderRight: "1px solid #292A33" }} pl={"10px"} pr={"30px"}>
                  <Typography sx={{ color: "white", fontSize: "20px" }}>Labours Invited </Typography>
                  <Typography sx={{ color: "#0079FF", fontSize: "26px" }}>300</Typography>
                </Box>
              </Box>
            </Box>

            <Grid mt={"10px"} container spacing={2}>
              <Grid item xs={12} sm={6} md={5}>
                <Box p={2} sx={{ backgroundColor: "#131313", borderRadius: "13px" }}>
                  <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>Site Details</Typography>
                    <img className="f-sd-edit" src="./images/general/st-edit.png" alt="" />
                  </Box>
                  <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"}>
                      <img src="./images/general/f-handshake.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Company Name</Typography>
                        <Typography sx={{ fontSize: "16px" }}>Harry Du Bois</Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"} pr={"20px"}>
                      <img src="./images/general/f-phone.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Contact</Typography>
                        <Typography sx={{ fontSize: "16px" }}>07700 123456</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"}>
                      <img src="./images/general/f-clock.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Due Date</Typography>
                        <Typography sx={{ fontSize: "16px" }}>16th March, 2023</Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"} pr={""}>
                      <img src="./images/general/f-email.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Email</Typography>
                        <Typography sx={{ fontSize: "16px" }}>harry@rside.com</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography mt={"20px"} sx={{ fontSize: "20px", fontWeight: "600" }}>
                    Site Location
                  </Typography>

                  <Box
                    mt={"20px"}
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      height: "352.03px",
                      borderRadius: "10px"
                    }}>
                    <CustomMapView
                      defaultLocation={{
                        lat: location.lat,
                        lng: location.lng
                      }}
                      isLoaded={isLoaded}
                    />
                  </Box>

                  <Typography mt={"20px"} sx={{ fontSize: "16px", fontWeight: "600" }}>
                    Gilsland, Brampton CA8 7DF, United Kingdom
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={7} sx={{ "& .MuiPaper-root": { backgroundColor: "#1E1E1E", marginTop: "30px" } }}>
                <Box p={2} sx={{ backgroundColor: "#131313", borderRadius: "13px" }}>
                  <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>Safety Requirements</Typography>
                    <img className="f-sd-edit" src="./images/general/st-edit.png" alt="" />
                  </Box>
                  <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"}>
                      <img src="./images/general/f-hardhat.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Hard Hat</Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"} pr={"20px"}>
                      <img src="./images/general/f-vest.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>High-visibility Vest</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"}>
                      <img src="./images/general/f-boot.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Safety Boots</Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"start"} gap={"10px"} pr={"45px"}>
                      <img src="./images/general/f-gogles.png" alt="" />
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>Safety Goggles</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={"20px"} display={"flex"} alignItems={"start"} gap={"10px"} pr={"20px"}>
                    <img src="./images/general/f-glove.png" alt="" />
                    <Box>
                      <Typography sx={{ fontSize: "14px" }}>Gloves</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box height={"450px"} mt={"20px"} p={2} sx={{ backgroundColor: "#131313", borderRadius: "13px" }}>
                  <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>Labour Expiring Certificates</Typography>
                    <Typography className="f-sd-edit" sx={{ fontSize: "16px", color: "#3596F1", fontWeight: "700" }}>
                      View All
                    </Typography>
                  </Box>

                  <MyTable />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
