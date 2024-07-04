import { Box, Typography } from "@mui/material";
import React from "react";

interface CTAButtonProps {
  background: string; // Assuming background is a string, adjust the type accordingly
  text: string; // Assuming background is a string, adjust the type accordingly
border: string; // Assuming background is a string, adjust the type accordingly
}

const CTAButton: React.FC<CTAButtonProps> = ({ background,text,border }) => {
  return (
    <>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        width={"159.23px"}
        height={'45px'}
        sx={{ backgroundColor: background, borderRadius: "10px",border:`1px solid ${border}`  }}
        p={""}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "900" }}>{text}</Typography>
      </Box>
    </>
  );
};

export default CTAButton;
