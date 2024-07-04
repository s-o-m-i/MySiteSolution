import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CTAButton from "components/shared/CTAButton/CTAButton";
import { Divider } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "#1D1D1D",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function WPackLaboursDelete() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button>Open modal</Button> */}

<Box sx={{cursor:"pointer"}}>
      <img onClick={handleOpen} src="/images/general/w-delete.png" alt="" />

</Box>
      
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box my={"20px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img src="/images/general/WPL-delete.png" alt="" />
          </Box>
          <Box>
            <Typography textAlign={"center"} sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "34.95px" }}>
            Remove Labourer from <br /> Work Package?
            </Typography>
            <Typography mt={"20px"} textAlign={"center"} sx={{ fontSize: "16px", fontWeight: "300" }}>
            You're about to remove (John Doe) from this work package. This action will unassigned them from all related tasks and they will no longer receive notifications or updates related to this package.
            </Typography>
          </Box>

          <Box className="s-hr" mt="30px">
            <Divider />
          </Box>

          <Box mt={"20px"} display="flex" alignItems="center" gap={"10px"} justifyContent={"center"}>
            <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
              <CTAButton background={"#1D1D1D"} text={"Cancel"} border="#FFFFFF26" />
            </Box>
            <Box sx={{ cursor: "pointer" }}>
            <CTAButton background={"#0079FF"} text={"Delete"} border="#FFFFFF26" />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
