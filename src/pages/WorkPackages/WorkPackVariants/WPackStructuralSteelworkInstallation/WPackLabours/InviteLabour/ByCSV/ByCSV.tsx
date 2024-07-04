import { Box, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import MuiTextArea from "components/shared/Textarea/Textarea";
import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import WPLaboursTable from "../../WPLaboursTable/WPLaboursTable";
import BYCSVTable from "./BYCSVTable/BYCSVTable";
import CTAButton from "components/shared/CTAButton/CTAButton";

interface ByCSVProps {
  close: () => void; // Adjust the type based on the close function signature
}

const ByCSV: React.FC<ByCSVProps> = ({ close })=> {
  return (
    <>

<Box mt={"20px"}>

<Typography
     
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Upload CSV
          </Typography>


      <Box
        mt={"10px"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        sx={{
          height: "126px",
          width: "100%  ",
          border: "1px dashed #0079FF",
          borderRadius: "10px",
          "@media (max-width: 600px)": {
            width: "100%"
          }
        }}>
        <MdOutlineFileUpload
          style={{
            color: "#0079FF",
            fontSize: "50px",
            marginBottom: "5px"
          }}
        />

        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
          <Typography
            fontFamily={" 'Bai Jamjuree', sans-serif"}
            sx={{
              fontSize: "14px",
              color: "#0079FF",
              fontWeight: "400"
            }}>
            Click to upload
          </Typography>
          <Typography fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ fontSize: "14px", color: "#fff", fontWeight: "400" }}>
            or drag and drop
          </Typography>
        </Box>
      </Box>
  
      </Box>

      <Box my={"10px"} display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
          <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
          <Typography textAlign={"center"} className="NexaFont" mt={"5px"} mb={"5px"} sx={{ fontSize: "16px", fontWeight: "300", color: "#FFFFFF" }}>
            Or
          </Typography>
          <Box sx={{ backgroundColor: "#FFFFFF", height: "1px", width: "50%", opacity: "25%" }}></Box>
        </Box>

      <Box display={"flex"} alignItems={"center"} gap={"20px"}>
        <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
          <Typography
            mb={"5px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Name
          </Typography>

          <OutlinedInput
            className="input-style"
            autoComplete="off"
            type="email"
            placeholder="Spring Field Mall|"
            size="small"
            name="email"
          />
        </Box>
        <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
          <Typography
            mb={"5px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Email
          </Typography>

          <OutlinedInput className="input-style" autoComplete="off" type="email" placeholder="" size="small" name="email" />
        </Box>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={"20px"}>
        {/* <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                   Associated Project
                  </Typography>

                  <Select
              className="input-style NexaFont select-icon"
              sx={{ "& .MuiSvgIcon-root": { color: "white" } }}
              size="small"
              placeholder="Contractor"
              name="role"
            //   value={"age"}
            //   onChange={"handleChange"}
              >
              <MenuItem value={"Contractor"} sx={{color: "black"}}>Contractor</MenuItem>
              <MenuItem value={"Subcontractor"} sx={{color: "black"}}>Subcontractor</MenuItem>
            </Select>

                </Box> */}

        <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
          <Typography
            mb={"5px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Address
          </Typography>

          <OutlinedInput className="input-style" autoComplete="off" type="email" placeholder="" size="small" name="email" />
        </Box>

        <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
          <Typography
            mb={"5px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Phone
          </Typography>

          <OutlinedInput className="input-style" autoComplete="off" type="email" placeholder="" size="small" name="email" />
        </Box>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={"20px"}>
        <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
          <Typography
            mb={"5px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Emergency Contact Number
          </Typography>

          <OutlinedInput className="input-style" autoComplete="off" type="email" placeholder="" size="small" name="email" />
        </Box>

        <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
          <Typography
            mb={"5px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
            Role
          </Typography>

          <Select
            className="input-style NexaFont select-icon"
            sx={{ "& .MuiSvgIcon-root": { color: "white" } }}
            size="small"
            placeholder="Contractor"
            name="role"
            //   value={"age"}
            //   onChange={"handleChange"}
          >
            <MenuItem value={"Contractor"} sx={{ color: "black" }}>
              Contractor
            </MenuItem>
            <MenuItem value={"Subcontractor"} sx={{ color: "black" }}>
              Subcontractor
            </MenuItem>
          </Select>
        </Box>
      </Box>

      <Box width={'100%'} sx={{backgroundColor:''}} mt={"20px"} display={"flex"} alignItems={"center"} 
      gap={'20px'} justifyContent={''} >
        <Box width={'50%'} py={'10px'} px={'10px'} sx={{ border: "1px solid #FFFFFF26" }} display={"flex"} alignItems={"center"} justifyContent={'space-between'}>
          <Box  display={"flex"} alignItems={"center"} gap={"20px"}>

          <img src="/images/general/CSCS-card.png" alt="" />
          <Typography>CSCS Card</Typography>
          </Box>
          <img src="/images/general/CSCS-check.png" alt="" />
        </Box>
        <Box width={'50%'} py={'10px'} px={'10px'} sx={{ border: "1px solid #FFFFFF26" }} display={"flex"} alignItems={"center"} justifyContent={'space-between'}>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>

          <img src="/images/general/ECS-card.png" alt="" />
          <Typography>CSCS Card</Typography>
          </Box>
          <MdOutlineFileUpload
          style={{
            color: "#0079FF",
            fontSize: "20px",
            marginBottom: "5px"
          }}
        />
    
        </Box>
      </Box>

      <Typography mt={"20px"} textAlign={'center'} sx={{color:'#0079FF',cursor:'pointer'}}>
      + Add More
      </Typography>
      <Typography my={"20px"} sx={{color:'',fontSize:"18px"}}>
      Invited Labours Preview
      </Typography>



<Box sx={{"& .css-1xaekgw":{backgroundColor:"#131313"},"& .MuiPaper-elevation":{backgroundColor:"#131313"}}}>

      <BYCSVTable/>
</Box>

<Box onClick={close} sx={{cursor:"pointer"}} mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={'end'} >
<CTAButton text="Send Invite" background="#0079FF" border="1px solid #0079FF"/>

</Box>
    </>
  );
};

export default ByCSV;
