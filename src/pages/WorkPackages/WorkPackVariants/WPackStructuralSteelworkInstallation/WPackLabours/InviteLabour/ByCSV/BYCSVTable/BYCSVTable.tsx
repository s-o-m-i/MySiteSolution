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
import { Box, Checkbox, Typography } from "@mui/material";
// import '../../WPackSubContractors/WPSubContTable/WPSubContTable.css'
import WorkPackDeleteModal from "pages/WorkPackages/WorkPackVariants/WorkPackDeleteModal/WorkPackDeleteModal";
import WPackLaboursDelete from "../../../WPackLaboursDelete/WPackLaboursDelete";

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
function createData(name: string, calories: string, work: string,status:string, action: React.ReactNode, imageIndex: number) {
  return { name, calories, work,status,action, imageIndex };
}

// Sample data rows
const rows = [
  createData("John", "1241235412", "john@gmail.com","Pending" ,<WPackLaboursDelete/>, 0),
  createData("John", "1241235412", "john@gmail.com","Accepted" ,<WPackLaboursDelete/>, 1),
  createData("John", "1241235412", "john@gmail.com","Pending" ,<WPackLaboursDelete/>, 2),
  createData("John", "1241235412", "john@gmail.com","Accepted" ,<WPackLaboursDelete/>, 3)
];

interface WPSubContTableProps {
    showUsers: boolean;
  }
// MyTable component to render a Material-UI table
export default function BYCSVTable() {
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
            Phone
            </TableCell>
            <TableCell align="left" style={cellStyle}>
            Email
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
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 },borderBottom:"1px solid #FFFFFF1A" }}>
              <TableCell align="left" style={cellStyle} component="th" scope="row">
                <Box display={'flex'} alignItems={'center'} gap={"5px"}>
                  {/* <Avatar alt="Remy Sharp" src={avatarImages[row.imageIndex]} /> */}
                
                  {row.name}
                </Box>
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.calories}
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.work}
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
