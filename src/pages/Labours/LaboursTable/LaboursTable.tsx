// Import necessary dependencies from Material-UI
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
// import "../../../../../../components/shared/MyTable/MyTable.css"; // Import local styles
import '../../../components/shared/MyTable/MyTable.css'; // Import local styles
import { Box, Checkbox, Typography } from "@mui/material";
// import '../../WPackSubContractors/WPSubContTable/WPSubContTable.css'
import '../../WorkPackages/WorkPackVariants/WPackStructuralSteelworkInstallation/WPackSubContractors/WPSubContTable/WPSubContTable.css'
import WorkPackDeleteModal from "pages/WorkPackages/WorkPackVariants/WorkPackDeleteModal/WorkPackDeleteModal";
import WPackLaboursDelete from "pages/WorkPackages/WorkPackVariants/WPackStructuralSteelworkInstallation/WPackLabours/WPackLaboursDelete/WPackLaboursDelete";
import LaboursAttended from "../LaboursAttended/LaboursAttended";
// import WPackLaboursDelete from "../WPackLaboursDelete/WPackLaboursDelete";

// Define the cell style for table cells
const cellStyle = {
  color: "white"
};

// Define avatar images for each row
const avatarImages = [
  "./images/general/ft-samcoe.png",
  "./images/general/ft-jhon.svg",
  "./images/general/ft-ashley.svg",
  "./images/general/ft-natasha.svg",
];

// Function to create a data row
function createData(name: string, induction: string, phone: string, certificates:string, status:string, action: React.ReactNode, imageIndex:React.ReactNode) {
    return { name, induction, phone,certificates, status, action, imageIndex };
  }
  

// Sample data rows
const rows = [
    createData("John", "Attended", "1241235412", "Verified", "Pending", <WPackLaboursDelete />, 0),
    createData("John", "Attended", "1241235412", "Expired", "Accepted", <WPackLaboursDelete />, 1),
    createData("John", "Attended", "1241235412", "Verified", "Pending", <WPackLaboursDelete />, 2),
    createData("John", "Attended", "1241235412", "Expired", "Accepted", <WPackLaboursDelete />, 3),
    createData("John", "Attended", "1241235412", "Expired", "Accepted", <WPackLaboursDelete />, 4),
    createData("John", "Attended", "1241235412", "Expired", "Accepted", <WPackLaboursDelete />, 5),
    createData("John", "Attended", "1241235412", "Expired", "Accepted", <WPackLaboursDelete />, 6)
  ];
interface WPSubContTableProps {
    showUsers: boolean;
  }
// MyTable component to render a Material-UI table
export default function LaboursTable() {
    // const [showUsers, setShowUsers] = React.useState(false)
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", backgroundColor: "#131313", color: "white", height: "407.77px", borderRadius: "5px" }}
        aria-label="simple table"
      >
        <TableHead sx={{ backgroundColor: "#2E2E2EED", borderRadius: "5px" }}>
          <TableRow>
            <TableCell align="left" style={cellStyle}>Name</TableCell>
            <TableCell align="left" style={cellStyle}>
            Induction
            </TableCell>
            <TableCell align="left" style={cellStyle}>
            Phone
            </TableCell>
           
            <TableCell align="left" style={cellStyle}>
            Certificates
            </TableCell>
            <TableCell align="left" style={cellStyle}>
            Status
            </TableCell>
            <TableCell align="left" style={cellStyle}>
            Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="w-sc-tablebody">

        


            
       


{rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left" style={cellStyle} component="th" scope="row">
                <Box display={'flex'} alignItems={'center'} gap={"5px"}>
                  {/* <Avatar alt="Remy Sharp" src={avatarImages[row.imageIndex]} /> */}
                  <Checkbox sx={{ color: "#1976d2" }}
            //   checked={agree}
            //   onChange={(event) => setAgree(event.target.checked)}
            //   inputProps={{ "aria-label": "controlled" }}
            />
                  {row.name}
                </Box>
              </TableCell>
              <TableCell  align="left" sx={{display:"flex",color:"white",alignItems:'',gap:"10px",marginTop:"10px"}}>
                {row.induction}
                <Box >
                <LaboursAttended/>

                </Box>
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.phone}
              </TableCell>
              <TableCell align="left"  style={cellStyle}>
                {row.certificates}
              </TableCell>
              <TableCell align="left"  sx={{color:row.status === 'Pending'?"#EBA92A":"#05FF00"}}>
                {row.status}
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.action}
              </TableCell>
            </TableRow>
    
))}
        
   

     
        </TableBody>
      </Table>
    </TableContainer>
  );
}
