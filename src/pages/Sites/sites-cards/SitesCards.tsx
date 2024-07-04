"use client";
import React, { useState } from "react";
import ProfileIconComponent from "../../../components/layouts/topbar/ProfileIconPopper";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SitesCards = ({setSelectedCompany}:any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardData, setCardData] = useState([
    {
      title: `Springfield <br/> Mall Construction`,
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/sites-mallconstructor.png"
    },
    {
      title: "Riverside <br/> Industrial Park",
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/s-riverside.png"
    },
    {
      title: "Parkside <br/> Office Campus",
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/s-parkside.png"
    },
    {
      title: "Maple <br/> Manor Residences",
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/s-residentside.png"
    },
    {
      title: "Sunset <br/> Valley Estates",
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/s-sunsetside.png"
    },
    {
      title: "Cobblestone <br/> Courtyard Shops",
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/s-courtyardside.png"
    },
    {
      title: `Springfield <br/> Mall Construction`,
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/sites-mallconstructor.png"
    },
    {
      title: "Riverside <br/> Industrial Park",
      desc: "Gilsland, Brampton CA8 7DF, United Kingdom",
      labor: "213",
      expiring: "100",
      image: "/images/general/s-riverside.png"
    },
  ]);

  const router = useNavigate();
  const navigateToOverView = () => {
    router("/sites-overview");
  };
  return (
    <>
      <Box className="s-container">
        <ProfileIconComponent setSelectedCompany={setSelectedCompany} />
        <Grid container rowSpacing={2} columnSpacing={-4}>
          {cardData.map((card, i) => {
            return (
              <Grid
                className="site-card-grid"
                sx={{ cursor: "pointer" }}
                onClick={() => navigateToOverView()}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}>
                <Box className="site-card">
                  <img src={card.image} width={376.71} height={180.02} alt="" />
                  <Typography
                    sx={{
                      marginLeft: "40px",
                      marginTop: "8px"
                    }}
                    className="s-card-title"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />

                  {/* card desc */}
                  <Box className="s-card-desc">
                    <img src="/images/general/sites-card-location.svg" width={12.4} height={14.42} alt="" />
                    <Typography className="s-card-desc-text">Gilsland, Brampton CA8 7DF, United Kingdom</Typography>
                  </Box>

                  <Box className="s-card-footer">
                    <Box>
                      <Typography className="s-cfooter-title">Total Labor</Typography>
                      <Typography className="s-cfooter-title-num">213</Typography>
                    </Box>
                    <Box className="v-line"></Box>
                    <Box>
                      <Typography className="s-cfooter-title">Expiring Certifications</Typography>
                      <Typography className="s-cfooter-title-num">100</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default SitesCards;
