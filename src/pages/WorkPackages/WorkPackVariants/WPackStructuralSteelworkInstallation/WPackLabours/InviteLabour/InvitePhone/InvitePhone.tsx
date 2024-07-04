import { Box, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'

const InvitePhone = () => {
    const [inputs, setInputs] = useState([{ id: 1 }]);

    const handleAddMore = () => {
      setInputs((prevInputs) => [...prevInputs, { id: prevInputs.length + 1 }]);
    };
  return (
    <>
        <Typography

            mb={"10px"}
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFFFFF"
            }}>
  Enter Phone Number
          </Typography>

     
          {inputs.map((input) => (
            <Box mt={'10px'}>

        <OutlinedInput
          key={input.id}
          className="input-style"
          autoComplete="off"
          type="tel"  // Change type to "tel" for phone numbers
          placeholder="+44 12455513251412"
          size="small"
          name={`phone_${input.id}`}
          />
          </Box>
      ))}

<Typography onClick={handleAddMore} mt={"20px"} textAlign={'center'} sx={{color:'#0079FF',cursor:"pointer"}}>
      + Add More
      </Typography>
    </>
  )
}

export default InvitePhone