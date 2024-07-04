"use client";
import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
// import Image from 'next/image';
import { Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllFilteredEntities } from "functions/ReuseableCrudService";
import { useGlobal } from "store/user.context";
import { CompanyData } from "libs/interfaces";
import { truncateString } from "libs/helper";

const AtompointPopper = ({setSelectedCompany}: any) => {
  const [selectedCompanyLocal, setSelectedCompanyLocal] = useState<CompanyData>({} as CompanyData);
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const { session } = useGlobal();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const getAtompoint = async () => {
    const currentUserCompanies = await getAllFilteredEntities("Companies", { uid: session?.user?.uid });
    setCompanies(currentUserCompanies);
    if (currentUserCompanies.length > 0) {
      setSelectedCompanyLocal(currentUserCompanies[0]);
      setSelectedCompany(currentUserCompanies[0]);
    }
  };

  React.useEffect(
    () => {
      getAtompoint();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Box aria-describedby={id} onClick={handleClick} className="s-atompoint">
        {
          selectedCompanyLocal?.photoURL ?
        <img src={selectedCompanyLocal?.photoURL} width={23.79} height={23.79} style={{borderRadius: "50%"}} alt={selectedCompanyLocal?.companyName} />
        : 
        <img src="/images/general/atompoint.svg" width={23.79} height={23.79} style={{borderRadius: "50%"}} alt={selectedCompanyLocal?.companyName} />
        }
        <Typography className="s-atom-text"> {selectedCompanyLocal?.companyName ? truncateString(selectedCompanyLocal?.companyName, 10) : "Unknown Company"}</Typography>
        <img src="/images/general/atomdownarrow.svg" width={10} height={10} alt="" />
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        sx={{
          borderRadius: "0px",
          "& .MuiPaper-root": {
            // borderRadius: '2px',
            backgroundColor: "#1E1E1E",
            color: "#fff",
            padding: "15px",
            border: "1px solid #FFFFFF26",
            marginTop: "0px"
            // width: '186.6px',
          }
        }}>
        <Box sx={{ width: "160px" }}>
          {companies.map((company, index) => (
            <div key={index}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                sx={{
                  padding: "5px",
                  color: "#fff",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#131313",
                    padding: "5px",
                    borderRadius: "5px"
                  }
                }}>
                {company.photoURL && <img src={company.photoURL} width={23.79} height={23.79} style={{borderRadius: "50%"}} alt={company.companyName} />}
                <Typography
                  onClick={() => {
                    setSelectedCompanyLocal(company);
                    setSelectedCompany(company);
                    handleClose();
                  }}>
                    { truncateString(company.companyName, 10)}
                </Typography>
              </Box>
              <Box className="ss-hr">
                <Divider />
              </Box>
            </div>
          ))}
          <Typography
            onClick={() => {
              navigate("/add-company");
            }}
            mt={"10px"}
            sx={{
              fontSize: "14px",
              padding: "5px",
              color: "#0079FF",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#131313",
                padding: "5px",
                borderRadius: "5px"
              }
            }}>
            +Add New Company
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default AtompointPopper;
