"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, OutlinedInput } from "@mui/material";
import "../Profile.css";
import { updateEntity } from "functions/ReuseableCrudService";
import { useGlobal } from "store/user.context";
import FileUploadingService from "functions/FirebaseStorageService";
import { useSnackbar } from "components/shared/Toast/ToastWrap";


const CompanyForm = ({setSelectedCompany}:any) => {
  const { selectedCompany } = useGlobal();
  const showSnackbar = useSnackbar();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileSelector, setFileSelector] = useState<File | null>(null);
  const [formData, setFormData] = useState<any>(null);
  console.log(formData);
  const photoURL = selectedCompany?.photoURL || '/images/general/atompoint.svg';

  const handleUploadPhotoClick = () => {
    // Trigger the click event of the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    setFileSelector(file);
    if (file) {
      // Assuming you have a function to handle file upload and set the image source
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    // Perform the necessary logic to handle the file upload
    // Update the profile image with the selected file
    const profileImage = document.getElementById("profile-image") as HTMLImageElement | null;

    if (profileImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          profileImage.src = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  useEffect(() => {
    if (selectedCompany) {
      setFormData(selectedCompany);
    }
  }, [selectedCompany]);

  const onSubmit = async () => {
    if (!formData) return;
      if (fileSelector) {
        const refference = `companiesLogo/${selectedCompany?.id}/${fileSelector?.name}`;
        const response: any = await FileUploadingService.uploadFile(selectedCompany?.id || '', refference, fileSelector);
        if (response?.success) {
          formData.photoURL = response?.data[0].fileUrl;
        }
      }
      const resp = await updateEntity("Companies", selectedCompany?.id || '', formData);
      if (resp.success) {
        showSnackbar(resp.message, "success");
      } else {
        showSnackbar(resp.message, "error");
      }
  };

  const onRemovePhoto = async () => {
    setFileSelector(null);
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      photoURL: null
    }));
    setSelectedCompany((prevFormData: any) => ({
      ...prevFormData,
      photoURL: null
    }));
  };

  return (
    <>
      <Box>
        <Grid container rowSpacing={2} columnSpacing={-4}>
          <Grid m={3} item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography mb={"5px"} sx={{ fontSize: "14px", color: "#FFFFFF" }}>
              Company Logo
            </Typography>
            <Box className="s-profile">
              <img
                src={photoURL}
                width={100}
                id="profile-image"
                style={{ borderRadius: "50%", marginTop: "10px", cursor: "pointer" }}
                height={100}
                onChange={handleFileChange}
                alt=""
              />

              <input
                type="file"
                accept=".jpg, .jpeg, .png, .svg"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />

              <img
                src="images/general/Vector (1).png"
                onClick={handleUploadPhotoClick}
                alt=""
                style={{ cursor: "pointer" }}
                width={"20.89px"}
                height={"20.89px"}
              />
              <Typography
                mb={"5px"}
                onClick={handleUploadPhotoClick}
                sx={{ fontSize: "16px", color: "#0079FF", marginTop: "5px", cursor: "pointer" }}>
                Upload Logo
              </Typography>

              {(selectedCompany?.photoURL ||
                fileSelector) && (
                  <>
                    <img
                      src="images/general/Group 42149.png"
                      alt=""
                      width={"16.56px"}
                      style={{ cursor: "pointer" }}
                      height={"19.11px"}
                      onClick={onRemovePhoto}
                    />
                    <Typography
                      mb={"5px"}
                      onClick={onRemovePhoto}
                      sx={{ fontSize: "16px", color: "#C71E1E", marginTop: "5px", cursor: "pointer" }}>
                      Remove Logo
                    </Typography>
                  </>
                )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box>
              <Box pr={"80px"} sx={{ width: "100%", backgroundColor: "" }}>
                <Typography mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
                  Company Name
                </Typography>
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style"
                  autoComplete="off"
                  type="text"
                  placeholder="Atompoint"
                  size="small"
                  value={formData?.companyName}
                  onChange={handleInputChange}
                  name="companyName"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box>
              <Box pr={"80px"} sx={{ width: "100%", backgroundColor: "" }}>
                <Typography mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
                  Email
                </Typography>
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style"
                  autoComplete="off"
                  type="email"
                  placeholder="Email"
                  size="small"
                  value={formData?.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box>
            <Box pr={"80px"} sx={{ width: "100%", backgroundColor: "" }}>
                <Typography mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
                  Address
                </Typography>
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style"
                  autoComplete="off"
                  type="email"
                  placeholder="Address"
                  size="small"
                  value={formData?.address}
                  onChange={handleInputChange}
                  name="address"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box>
              <Box  pr={"80px"} sx={{ width: "100%", backgroundColor: "" }}>
                <Typography mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
                  Phone Number
                </Typography>
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style"
                  autoComplete="off"
                  type="text"
                  placeholder="154121245123"
                  size="small"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  name="phone"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box>
              <Box  pr={"80px"} sx={{ width: "100%", backgroundColor: "" }}>
                <Typography mb={"5px"} sx={{ fontSize: "14px", fontWeight: "300", color: "#FFFFFF" }}>
                Registration Number
                </Typography>
                <OutlinedInput
                  sx={{ color: "#FFFFFF" }}
                  className="input-style"
                  autoComplete="off"
                  type="text"
                  placeholder="154121245123"
                  size="small"
                  value={formData?.registrationNumber}
                  onChange={handleInputChange}
                  name="registrationNumber"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <button style={{ width: "200px", marginTop: "30px" }} onClick={onSubmit} className="l-signin" type="submit">
          Save Changes
        </button>
      </Box>
    </>
  );
};

export default CompanyForm;
