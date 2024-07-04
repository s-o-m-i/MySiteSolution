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
import "./MyTable.css"; // Import local styles
import { Box } from "@mui/material";

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
function createData(name: string, calories: string, work: string, imageIndex: number) {
  return { name, calories, work, imageIndex };
}

// Sample data rows
const rows = [
  createData("Sam Coe", "Package 1", "CSCS", 0),
  createData("John Luke", "Package 2", "CSCS", 1),
  createData("Ashley Cole", "Package 3", "CSCS", 2),
  createData("Natasha Khan", "Package 4", "CSCS", 3)
];

// MyTable component to render a Material-UI table
export default function MyTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", backgroundColor: "#131313", color: "white", height: "100%", borderRadius: "5px" }}
        aria-label="simple table"
      >
        <TableHead sx={{ backgroundColor: "#1E1E1E", borderRadius: "5px" }}>
          <TableRow>
            <TableCell align="left" style={cellStyle}>Name</TableCell>
            <TableCell align="left" style={cellStyle}>
              Work Package
            </TableCell>
            <TableCell align="left" style={cellStyle}>
              Certificate
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left" style={cellStyle} component="th" scope="row">
                <Box display={'flex'} alignItems={'center'} gap={"5px"}>
                  <Avatar alt="Remy Sharp" src={avatarImages[row.imageIndex]} />
                  {row.name}
                </Box>
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.calories}
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.work}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
