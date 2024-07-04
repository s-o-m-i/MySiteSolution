import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { MdOutlineFileUpload } from "react-icons/md";
import { Checkbox, OutlinedInput } from "@mui/material";
// import '../../styles/login.scss';
// import Image from 'next/image';
import "./MuiStepper.css";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import CustomMapView from "components/shared/MapView/CustomMapView";
import { Location } from "components/shared/MapLocationInputWrapper/MapLocationInputWrapper";
import MuiTextArea from "components/shared/Textarea/Textarea";
import { Navigate } from "react-router-dom";
// import MuiTextArea from '@/components/shared/Textarea/Textarea';

const steps = ["Site Information", "Safety & Compliance", "Parking"];

const libraries: Libraries = ["places"];

export default function MuiStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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


  const [products, setProducts] = React.useState(["PPE", "Gloves", "Helmet", "Eye Protection"]);
  const [comProducts, setComProducts] = React.useState(["CSCS", "ECS", "CISRS", "IPAF"]);
  const [inputdata, setinputdata] = React.useState<string[]>([]);
  const [compliancedata, setcompliancedata] = React.useState<string[]>([]);
  const [addmore, setaddmore] = React.useState(false);
  const [addmoreComp, setaddmoreComp] = React.useState(false);
  const [newItem, setNewItem] = React.useState("");
  const [newItemComp, setNewItemComp] = React.useState("");

  const handleRemove = (i: any) => {
    let filteredData = inputdata.filter((e, index) => {
      return index !== i;
    });
    setinputdata(filteredData);
  };
  const handleRemoveComp = (i: any) => {
    let filteredData = compliancedata.filter((e, index) => {
      return index !== i;
    });
    setcompliancedata(filteredData);
  };

  const handleCheckboxChange = (value: any) => {
    // Check if the value is already in compliancedata
    if (compliancedata.includes(value)) {
      // If it's already in the array, remove it
      setcompliancedata(compliancedata.filter((item) => item !== value));
    } else {
      // If it's not in the array, add it
      setcompliancedata([...compliancedata, value]);
    }
  };

  const handleServiceCheckboxChange = (value: any) => {
    if (inputdata.includes(value)) {
      setinputdata(inputdata.filter((item) => item !== value));
    } else {
      setinputdata([...inputdata, value]);
    }
  };

  function capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleAddItem = () => {
    const formattedItem = capitalizeFirstLetter(newItem);
    setProducts([...products, formattedItem]);
    setNewItem("");
    setaddmore(false);
  };
  const handleAddItemComp = () => {
    const formattedItem = capitalizeFirstLetter(newItemComp);
    setComProducts([...comProducts, formattedItem]);
    setNewItemComp("");
    setaddmoreComp(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        "& .MuiStepLabel-label": { color: "#9A9A9A", fontWeight: 600, marginBottom: "10px" },
        "& .Mui-completed .MuiStepLabel-label": { color: "#0079FF", fontWeight: 600 },
        "& svg circle": { color: "gray" },
        "& .Mui-active svg circle": { color: "#0079FF" },
        "& .Mui-completed svg path": { color: "#0079FF" },
        "& .Mui-active": { color: "#0079FF !important" },
      }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} sx={{ color: "#fff" }}>
              <StepLabel {...labelProps}> {label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Navigate to="/sites-cards" />
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <Box>
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
                    Client
                  </Typography>

                  <OutlinedInput className="input-style" autoComplete="off" type="text" placeholder="" size="small" name="client" />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"20px"} mt={"10px"}>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Client Contact
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    size="small"
                    name="clientcontact"
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
                    Client Email
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="email"
                    placeholder=""
                    size="small"
                    name="clientemail"
                  />
                </Box>
              </Box>
              <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                <Typography
                  mb={"5px"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "300",
                    color: "#FFFFFF"
                  }}>
                  Description
                </Typography>

                <OutlinedInput
                  className="input-style"
                  autoComplete="off"
                  type="email"
                  placeholder=""
                  size="small"
                  name="clientemail"
                />
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"20px"} mt={"10px"}>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Project Start Date
                  </Typography>

                  <OutlinedInput className="input-style" autoComplete="off" type="date" placeholder="" size="small" name="date" />
                </Box>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Project Duration
                  </Typography>

                  <OutlinedInput className="input-style" autoComplete="off" type="" placeholder="" size="small" name="duration" />
                </Box>
              </Box>

              <Box display={"flex"} alignItems={"center"} gap={"20px"} mt={"10px"}>
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Site Address (eg: Gilsland, 7DF, UK)
                  </Typography>

                  <OutlinedInput className="input-style" autoComplete="off" type="" placeholder="" size="small" name="duration" />
                </Box>
              </Box>

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

              <Box
                mt={"30px"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  height: "126px",
                  width: "464px",
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
                  <Typography
                    fontFamily={" 'Bai Jamjuree', sans-serif"}
                    sx={{ fontSize: "14px", color: "#fff", fontWeight: "400" }}>
                    or drag and drop
                  </Typography>
                </Box>
              </Box>

              <Box mt={"20px"}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Box
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={1}
                    sx={{ backgroundColor: "#131313", borderRadius: "10px" }}>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                      <img src="/images/general/site2.png" width={58.79} height={46.95} alt="" />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: "900",
                            color: "#fff"
                          }}>
                          Site2.png
                        </Typography>
                        <Typography
                          mt={""}
                          sx={{
                            fontSize: "14px",
                            fontWeight: "300",
                            color: "#fff"
                          }}>
                          1.5mb
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img src="/images/general/greentick.svg" width={20} height={20} alt="" />
                    </Box>
                  </Box>
                  <img src="/images/general/sites-close.svg" width={12.67} height={12.67} alt="" />
                </Box>

                <Box
                  mt={"10px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  p={1}
                  sx={{ backgroundColor: "#131313", borderRadius: "10px" }}>
                  <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                    <img src="/images/general/sites-img2.png" width={58.79} height={46.95} alt="" />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "900",
                          color: "#fff"
                        }}>
                        Site1.png
                      </Typography>
                      <Typography
                        mt={""}
                        sx={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#fff"
                        }}>
                        1.5mb
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <img src="/images/general/sites-loader.svg" width={20} height={20} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#F7F7FC" }}>
                Safety
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                sx={{
                  padding: "5px 22px 5px 22px",
                  border: "1px solid #0079FF",
                  borderRadius: "10px",
                  minHeight: "40px"
                  // backgroundColor:"red"
                }}>
                {inputdata.map((e, i) => {
                  return (
                    <Box
                      key={i}
                      py={"2px"}
                      px={"5px"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"10px"}
                      sx={{
                        cursor: "pointer",
                        backgroundColor: "#131313",
                        border: "1px solid #FFFFFF26",
                        borderRadius: "8px"
                      }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#F7F7FC"
                        }}>
                        {e}
                      </Typography>
                      <img
                        onClick={() => handleRemove(i)}
                        src="/images/general/stepper-close.svg"
                        width={12.67}
                        height={12.67}
                        alt=""
                      />
                    </Box>
                  );
                })}
              </Box>

              {/* service product box */}
              <Box className="stp-product-box">
                {products.map((e, i) => {
                  return (
                    <Box className="stp-product">
                      <Checkbox
                        checked={inputdata.includes(e)}
                        onChange={() => handleServiceCheckboxChange(e)}
                        sx={{ color: "#f7f7fc7a" }}
                      />
                      <Typography
                        className="stp-product-name"
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleServiceCheckboxChange(e)}>
                        {e}
                      </Typography>
                    </Box>
                  );
                })}

                <Box onClick={() => setaddmore(true)} className="stp-pbox-more">
                  <img src="/images/general/plus.svg" width={13} height={13} alt="" />
                  <Typography className="stp-pbox-addmore">Add More</Typography>
                </Box>

                {addmore && (
                  <Box
                    mt={"10px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{
                      padding: "5px 5px",
                      border: "1px solid #FFFFFF26",
                      borderRadius: "10px"
                    }}>
                    <input
                      // sx={{ color: "#FFFFFF" }}
                      className="steeper-add"
                      autoComplete="off"
                      type="email"
                      placeholder="Title"
                      // size="small"
                      name="newItem"
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                    />

                    <Typography className="comp-add" onClick={handleAddItem}>
                      Add
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* compliance */}

              <Typography mt={"20px"} mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#F7F7FC" }}>
                Compliance
              </Typography>

              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                sx={{
                  padding: "5px 22px 5px 22px",
                  border: "1px solid #0079FF",
                  borderRadius: "10px",
                  minHeight: "40px"
                }}>
                {compliancedata.map((e, i) => {
                  return (
                    <Box
                      key={i}
                      py={"2px"}
                      px={"5px"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"10px"}
                      sx={{
                        cursor: "pointer",
                        backgroundColor: "#131313",
                        border: "1px solid #FFFFFF26",
                        borderRadius: "8px"
                      }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#F7F7FC"
                        }}>
                        {e}
                      </Typography>
                      <img
                        onClick={() => handleRemoveComp(i)}
                        src="/images/general/stepper-close.svg"
                        width={12.67}
                        height={12.67}
                        alt=""
                      />
                    </Box>
                  );
                })}
              </Box>
              {/* compliance product box */}
              <Box className="stp-product-box">
                {comProducts.map((e, i) => {
                  return (
                    <Box className="stp-product">
                      <Checkbox
                        checked={compliancedata.includes(e)}
                        onChange={() => handleCheckboxChange(e)}
                        sx={{ color: "#f7f7fc7a" }}
                      />
                      <Typography className="stp-product-name" sx={{ cursor: "pointer" }} onClick={() => handleCheckboxChange(e)}>
                        {e}
                      </Typography>
                    </Box>
                  );
                })}

                <Box className="stp-pbox-more">
                  <img src="/images/general/plus.svg" width={13} height={13} alt="" />
                  <Typography className="stp-pbox-addmore" onClick={() => setaddmoreComp(true)}>
                    Add More
                  </Typography>
                </Box>

                {addmoreComp && (
                  <Box
                    mt={"10px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{
                      padding: "5px 5px",
                      border: "1px solid #FFFFFF26",
                      borderRadius: "10px"
                    }}>
                    <input
                      // sx={{ color: "#FFFFFF" }}
                      className="steeper-add"
                      autoComplete="off"
                      type="email"
                      placeholder="Title"
                      // size="small"
                      name="newItemComp"
                      value={newItemComp}
                      onChange={(e) => setNewItemComp(e.target.value)}
                    />

                    <Typography className="comp-add" onClick={handleAddItemComp}>
                      Add
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <Typography sx={{ color: "#F7F7FC" }}>Parking Location</Typography>
              <Box mt={"5px"}>
                <OutlinedInput
                  className="input-style"
                  autoComplete="off"
                  type="text"
                  placeholder="Gilsland, Brampton CA8 7DF, United Kingdom"
                  size="small"
                  name="parkingLocation"
                />
              </Box>

              <Box
                my={"20px"}
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

              <Typography mt="10px" sx={{ color: "#F7F7FC", mb: "10px" }}>
                Parking Instructions
              </Typography>
              <MuiTextArea minRow={3} />
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              sx={{
                width: "159.23px",
                height: "45px",
                textAlign: "center",
                backgroundColor: "#0079FF",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "900",
                borderRadius: "10px"
              }}
              onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
