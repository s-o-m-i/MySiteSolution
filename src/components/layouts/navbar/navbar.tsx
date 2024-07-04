import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import "./navbar.css";
import SpringPopover from "./SpringPopover";
import { Link } from "react-router-dom";

// Define the Navbar component
const Navbar = () => {
  // State to manage selected item in the navigation
  const [items, setItems] = React.useState("Overview");

  // JSX for the Navbar component
  return (
    <>
      <Box
        height={"100vh"}
        position={"sticky"}
        top={0}
        sx={{
          display: { xs: "none", sm: "block" },

          boxSizing: "border-box",
          width: "100%",
          backgroundColor: "#131313"
        }}>
        <Box p={2}>
          <Link to="/sites">
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <img src="images/general/sidebarlogo.svg" alt="logo" width={48} height={48} />
            <Typography className="nav-head" variant="h6" noWrap component="div">
              My Site Solution
            </Typography>
          </Box>
          </Link>
          <Box className="nav-s-hr">
            <Divider />
          </Box>
          <Box mb={"20px"}>
            <SpringPopover />
          </Box>
          <Link to="/sites-overview">
          <Box
            onClick={() => setItems("Overview")}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            mt={"10px"}
            className={items === "Overview" ? " f-color-pages" : "f-nav-pages"}>
            <img src="./images/general/n-overview.png" alt="" className={items === "Overview" ? " n-blue" : ""} />
            <Typography className={items === "Overview" ? " f-color-pages" : "f-nav-pages"}>Overview</Typography>
          </Box>
          </Link>
         
          <Link to="/work-packages"    onClick={() => setItems("work")}>


          <Box
            onClick={() => setItems("work")}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            mt={"10px"}
            className={items === "work" ? " f-color-pages" : "f-nav-pages"}>
             
   
            <img src="./images/general/n-workpack.png" alt="" />
            <Typography className={items === "work" ? " f-color-pages" : "f-nav-pages"}>Work Package</Typography>
        
          </Box>
          </Link>
          <Link to="/labours" >
          <Box
            onClick={() => setItems("Labours")}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            mt={"10px"}
            className={items === "Labours" ? " f-color-pages" : "f-nav-pages"}>
            <img src="./images/general/n-labor.png" alt="" />
            <Typography className={items === "Labours" ? " f-color-pages" : "f-nav-pages"}>Labours</Typography>
          </Box>
          </Link>
          <Link to="/announcements"  onClick={() => setItems("Announcements")} >
          <Box
            onClick={() => setItems("Announcements")}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            mt={"10px"}
            className={items === "Announcements" ? " f-color-pages" : "f-nav-pages"}>
            <img src="./images/general/n-announce.png" alt="" />
            <Typography className={items === "Announcements" ? " f-color-pages" : "f-nav-pages"}>Announcements</Typography>
          </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
