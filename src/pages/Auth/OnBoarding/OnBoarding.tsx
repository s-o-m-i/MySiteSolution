import { Box, OutlinedInput, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

import "./OnBoarding.css";
import { Link } from "react-router-dom";
import { createEntity } from "functions/ReuseableCrudService";
import { useGlobal } from "store/user.context";
import FileUploadingService from "functions/FirebaseStorageService";
import { CompanyData } from "libs/interfaces";


const OnBoarding = () => {
  const [register, setRegister] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [formData, setFormData] = useState<CompanyData>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { session } = useGlobal();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileSelection(file);
  };

  const handleFileSelection = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(null);
    }
  };

  const handleFileInput = () => {
    // Trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelection(file);
  };

  const removeImage = () => {
    fileInputRef.current?.value && (fileInputRef.current.value = "");
    handleFileSelection(null);
    setSelectedFile(null);
    setPreviewURL(null);
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const saveContinue = async () => {
    const companyData = {
      uid: session?.user?.uid,
      ...formData,
    }
    if (selectedFile) {
      const refference = `companiesLogo/${session?.user?.uid}/${selectedFile?.name}`;
      const response: any = await FileUploadingService.uploadFile(session?.user.uid, refference, selectedFile);
      if (response?.success) {
        companyData.photoURL = response?.data[0].fileUrl;
      }
    }
    const resp = await createEntity("Companies", companyData);
    if(resp) {
      setRegister(!register)
    }
  }


  return (
    <>
      <Box position={"relative"} sx={{ backgroundColor: "#131313", width: "100%", minHeight: "100vh" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={register === true ? "center" : ""}
          flexDirection={"column"}
          className="b-vector-bg">
          {register === false ? (
            <>
              <Typography my={"20px"} fontFamily={" 'Bai Jamjuree', sans-serif"} sx={{ color: "#fff", fontSize: "30px" }}>
                Site Solution
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                p={4}
                sx={{
                  backgroundColor: "#1D1D1D",
                  width: "560px",
                  borderRadius: "20px",
                  "@media (max-width: 600px)": {
                    width: "100%"
                  }
                }}>
                <Typography
                  fontFamily={" 'Bai Jamjuree', sans-serif"}
                  sx={{
                    lineHeight: "41.94px",
                    fontSize: "36px",
                    color: "#fff",
                    fontWeight: "700"
                  }}>
                  Enter Your <br /> Company Details
                </Typography>
                <Typography
                  mt={"30px"}
                  fontFamily={" 'Bai Jamjuree', sans-serif"}
                  sx={{ fontSize: "14px", color: "#fff", fontWeight: "300" }}>
                  Upload Company Logo{" "}
                </Typography>

                <Box
                  mt={"5px"}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  id="dropzone"
                  justifyContent={"center"}
                  onDrop={(e) => handleDrop(e)}
                  onDragOver={(e) => e.preventDefault()}
                  sx={{
                    height: "126px",
                    width: "464px",
                    border: "1px dashed #0079FF",
                    borderRadius: "10px",
                    cursor: "pointer", // Add this line to show the drop cursor
                    "@media (max-width: 600px)": {
                      width: "100%"
                    }
                  }}>
                  <MdOutlineFileUpload style={{ color: "#0079FF", fontSize: "50px", marginBottom: "5px" }} />

                  <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                    <Typography
                      fontFamily={" 'Bai Jamjuree', sans-serif"}
                      onClick={() => handleFileInput()}
                      sx={{ fontSize: "14px", color: "#0079FF", fontWeight: "400" }}>
                      Click to upload
                    </Typography>
                    <Typography
                      fontFamily={" 'Bai Jamjuree', sans-serif"}
                      sx={{ fontSize: "14px", color: "#fff", fontWeight: "400" }}>
                      or drag and drop
                    </Typography>
                  </Box>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                    accept="image/*"
                  />
                </Box>
                {selectedFile && (
                  <Box sx={{ display: "flex" }}>
                    <Box className="selectedImage">
                      {previewURL && (
                        <img
                          src={previewURL}
                          alt="Preview"
                          style={{ width: "50px", borderRadius: "50%", height: "50px", marginBottom: "10px" }}
                        />
                      )}
                      <Box sx={{ display: "block" }}>
                        <Typography
                          fontFamily={" 'Bai Jamjuree', sans-serif"}
                          sx={{ fontSize: "14px", color: "#fff", fontWeight: "400", mt: "5px", ml: "10px" }}>
                          {selectedFile.name}
                        </Typography>

                        <Typography
                          fontFamily={" 'Bai Jamjuree', sans-serif"}
                          sx={{ fontSize: "12px", color: "#9A9A9A", fontWeight: "400", ml: "10px" }}>
                          {(selectedFile.size / 1024).toFixed(2)} KB
                        </Typography>
                      </Box>

                      <img
                        src="images/general/tick.png"
                        alt="tick"
                        width={"17.5px"}
                        height={"12.31px"}
                        style={{ marginLeft: "auto", marginRight: "10px", marginTop: "18px" }}
                      />
                    </Box>
                    <img
                      src="images/general/cross.png"
                      alt="tick"
                      onClick={removeImage}
                      width={"12.67px"}
                      height={"12.67px"}
                      style={{ marginLeft: "auto", marginRight: "11%", marginTop: "8%", cursor: "pointer" }}
                    />
                  </Box>
                )}
                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Company Name
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="text"
                    placeholder="Atompoint"
                    size="small"
                    onChange={handleInputChange}
                    name="companyName"
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
                    Address
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="text"
                    placeholder="49 Featherstone Street"
                    size="small"
                    name="address"
                    onChange={handleInputChange}
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

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="email"
                    placeholder="john@gmail.com"
                    onChange={handleInputChange}
                    size="small"
                    name="email"
                  />

                  {/* 
            <input
              type="text"
              className="l-email"
              placeholder="Email"
              name="email"
            /> */}
                </Box>

                <Box mt={"20px"} sx={{ width: "100%", backgroundColor: "" }}>
                  <Typography
                    mb={"5px"}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      color: "#FFFFFF"
                    }}>
                    Phone Number
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="tel"
                    placeholder="+44 654214156113"
                    size="small"
                    onChange={handleInputChange}
                    name="phone"
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
                    Registration Number
                  </Typography>

                  <OutlinedInput
                    className="input-style"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    size="small"
                    onChange={handleInputChange}
                    name="registrationNumber"
                  />
                </Box>
                <button onClick={saveContinue} className="l-signin" type="submit">
                  Save & Continue
                </button>
              </Box>
            </>
          ) : (
            <>
              <Typography
                position={"absolute"}
                top={"20px"}
                my={"20px"}
                fontFamily={" 'Bai Jamjuree', sans-serif"}
                sx={{ color: "#fff", fontSize: "30px" }}>
                Site Solution
              </Typography>

              <Box
                display={"flex"}
                flexDirection={"column"}
                p={4}
                sx={{
                  backgroundColor: "#1D1D1D",
                  width: "560px",
                  borderRadius: "20px",
                  "@media (max-width: 600px)": {
                    width: "100%"
                  }
                }}>
                <Box mb={"5px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <img src="/images/general/tick.svg" alt="verified" width={50} height={50} />
                </Box>

                <Typography
                  fontFamily={" 'Bai Jamjuree', sans-serif"}
                  textAlign={"center"}
                  sx={{
                    lineHeight: "41.94px",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "36px",
                    "@media (max-width: 600px)": {
                      fontSize: "20px",
                      lineHeight: "1.5"
                    }
                  }}>
                  Congrats! Your <br /> company has been registered successfully.{" "}
                </Typography>
                <button className="l-signin">
                  <Link className="no-style" to={"/sites"}>
                    Continue to Dashboard
                  </Link>
                </button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default OnBoarding;
