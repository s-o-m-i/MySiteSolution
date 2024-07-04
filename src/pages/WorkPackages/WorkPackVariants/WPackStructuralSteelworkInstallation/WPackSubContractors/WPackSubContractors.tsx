import { Box, Typography } from '@mui/material'
import React from 'react'
import './WPackSubContractors.css'
import MyTable from 'components/shared/MyTable/MyTable'
import WPSubContTable from './WPSubContTable/WPSubContTable'
import { useSnackbar } from "components/shared/Toast/ToastWrap";
import {WPSubContTableProps} from './WPSubContTable/WPSubContTable'



interface WPackSubContractorsProps {
  // your existing props
}



const WPackSubContractors = () => {
    const [showUsers, setShowUsers] = React.useState(false)
    const [userEmail, setUserEmail] = React.useState('')
    const [data, setdata] = React.useState<WPSubContTableProps['data']>([])
    const showSnackbar = useSnackbar();
    // showUsers && showSnackbar("Your Invite has been sent to the subcontractor <br/> (Mike Barnes and 5 More)", "success");
    const handleInvite = () =>{
      const newUser = {
        id: new Date().getTime(),
        name: userEmail,   
        calories: "",      
        work: "",
        status: "",
        action: null,       
        imageIndex: 0       
      };
        // Add the new user to the data array
        if(userEmail === ''){

        }else{
          setdata([...data, newUser]);

          setUserEmail('')
        }
    }
    console.log(data)
  return (
  <>
   <Box
                    mt={"10px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    pl={'10px'}
                    sx={{
                    //   padding: "0px 0px",
                      border: "1px solid #FFFFFF26",
                      borderRadius: "10px"
                    }}>
                    <input
                   
                      className="wp-invite-sub-input"
                      autoComplete="off"
                      type="email"
                      placeholder="Title"
                      // size="small"
                      name="newItem"
                      value={userEmail}
                      onChange={(e)=> setUserEmail(e.target.value)}
                 
                    />


{/* <Box
                    
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
                        somi
                      </Typography>
                      <img
                        onClick={() => handleRemove(i)}
                        src="/images/general/stepper-close.svg"
                        width={12.67}
                        height={12.67}
                        alt=""
                      />
                    </Box> */}


                    <Typography className="wp-invite-sub "  
                    // onClick={()=>setShowUsers(!showUsers)}
                    onClick={handleInvite}
                    >
                    Invite Subcontractor
                    </Typography>
                    
                  </Box>

<Box mt={"20px"} >
                  <WPSubContTable data={data} setdata={setdata}  showUsers={showUsers}/>

</Box>
  </>
  )
}

export default WPackSubContractors