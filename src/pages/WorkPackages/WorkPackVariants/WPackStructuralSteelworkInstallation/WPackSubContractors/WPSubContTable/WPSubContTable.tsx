// Import necessary dependencies from Material-UI
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import "../../../../../../components/shared/MyTable/MyTable.css"; // Import local styles
import { Box, Checkbox, Typography } from "@mui/material";
import "./WPSubContTable.css";
import WorkPackDeleteModal from "pages/WorkPackages/WorkPackVariants/WorkPackDeleteModal/WorkPackDeleteModal";
import WPSubContTableDelete from "./WPSubContTableDelete/WPSubContTableDelete";

// Define the cell style for table cells
const cellStyle = {
  color: "white"
};

// Define avatar images for each row
const avatarImages = [
  "./images/general/ft-samcoe.png",
  "./images/general/ft-jhon.svg",
  "./images/general/ft-ashley.svg",
  "./images/general/ft-natasha.svg"
];

// Function to create a data row
function createData(name: string, calories: string, work: string, status: string, action: React.ReactNode, imageIndex: number) {
  return { name, calories, work, status, action, imageIndex };
}

// Sample data rows
// const rows = [
//   createData("John", "1241235412", "john@gmail.com", "Pending", <WorkPackDeleteModal />, 0),
//   createData("John", "1241235412", "john@gmail.com", "Accepted", <WorkPackDeleteModal />, 1),
//   createData("John", "1241235412", "john@gmail.com", "Pending", <WorkPackDeleteModal />, 2),
//   createData("John", "1241235412", "john@gmail.com", "Accepted", <WorkPackDeleteModal />, 3)
// ];

export interface WPSubContTableProps {
  showUsers: boolean;
  data: {
    id:number;
    name: string;
    calories: string;
    work: string;
    status: string;
    action: React.ReactNode;
    imageIndex: number;
  }[];
  setdata: React.Dispatch<React.SetStateAction<{
    id:number;
    name: string;
    calories: string;
    work: string;
    status: string;
    action: React.ReactNode;
    imageIndex: number;
  }[]>>;
}

export default function WPSubContTable({ showUsers, data,setdata }: WPSubContTableProps) {
  const handleDelete = (id: number) => {
    const updatedData = data.filter((row) => row.id !== id);
    setdata(updatedData);
    console.log("delete");
  };
  // Return the table with the data rows

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", backgroundColor: "#131313", color: "white", height: "", borderRadius: "5px" }}
        aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#2E2E2EED", borderRadius: "5px" }}>
          <TableRow>
            <TableCell align="left" style={cellStyle}>
              Name
            </TableCell>
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
          {data.length <= 0 && (
            <TableRow>
              <TableCell colSpan={6} style={{ textAlign: "center" }}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{minHeight:"407.77px"}}>

                <img src="/images/general/wp-subcon-table.png" alt="" />
                <Typography>
                  There are currently no subcontractors
                  <br />
                  To add subcontractors, click on the
                  <br />
                  "Invite Subcontractor" button.
                </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}

          {/* {showUsers &&
    
        } */}

          {data.length >= 1 &&
            data.map((row,i) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 },borderBottom:"1px solid #FFFFFF1A" }}>
                <TableCell align="left" style={cellStyle} component="th" scope="row">
                  <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                    <Checkbox sx={{ color: "#1976d2" }} />
                    John
                  </Box>
                </TableCell>
                <TableCell align="left" style={cellStyle}>
                  1241235412
                </TableCell>
                <TableCell align="left" style={cellStyle}>
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{ color: row.status === "Pending" ? "#EBA92A" : "#05FF00" }}>
                  Accepted
                </TableCell>
                <TableCell align="left" style={cellStyle}>
                <Box>
              <WPSubContTableDelete onDelete={() => handleDelete(row.id)} />
            </Box>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
