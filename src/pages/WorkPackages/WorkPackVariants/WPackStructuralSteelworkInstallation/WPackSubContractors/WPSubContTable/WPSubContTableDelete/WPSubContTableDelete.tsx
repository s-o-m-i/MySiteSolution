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

interface WorkPackDeleteModalProps {
  onDelete: () => void;
}

export default function WPSubContTableDelete({ onDelete }: WorkPackDeleteModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteClick = () => {
    onDelete(); // Call the onDelete function passed as a prop
    handleClose(); // Close the modal after deleting
  };

  return (
    <div>
      {/* <Button>Open modal</Button> */}

<Box sx={{cursor:"pointer"}}>
      <img onClick={handleOpen} src="/images/general/w-delete.png" alt="" />

</Box>
      
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img src="/images/general/wpack-modal-warn.png" alt="" />
          </Box>
          <Box>
            <Typography textAlign={"center"} sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "34.95px" }}>
              You are about to delete this <br /> work package.
            </Typography>
            <Typography mt={"20px"} textAlign={"center"} sx={{ fontSize: "16px", fontWeight: "300" }}>
              This action will permanently erase the selected work <br /> package. Once deleted, it cannot be retrieved. Continue?
            </Typography>
          </Box>

          <Box className="s-hr" mt="30px">
            <Divider />
          </Box>

          <Box mt={"20px"} display="flex" alignItems="center" gap={"10px"} justifyContent={"center"}>
            <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
              <CTAButton background={"#1D1D1D"} text={"Cancel"} border="#FFFFFF26" />
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleDeleteClick}>
            <CTAButton background={"#0079FF"} text={"Delete"} border="#FFFFFF26"  />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
