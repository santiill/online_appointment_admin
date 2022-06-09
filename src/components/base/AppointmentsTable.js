import * as React from "react";
import "../baseStyles.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AppointModal from "./AppointModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, time, protein) {
  return { name, calories, fat, time, protein };
}

const rows = [
  createData("Руслан Алиев", "0559057829", "06.06.2022", "12:00"),
    createData("Алтынай Салтанатова","0998645325","05.06.2022", "15:00"),
    createData("Иван Иванов", "0995213400","05.06.2022", "16:00"),
];

export default function AppointmentsTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>ФИО</StyledTableCell>
            <StyledTableCell /* align="right" */>Номер</StyledTableCell>
            <StyledTableCell /* align="right" */>Дата</StyledTableCell>
            <StyledTableCell /* align="right" */>Время</StyledTableCell>
            {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow onClick={handleOpen} key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell /* align="right" */>
                {row.calories}
              </StyledTableCell><StyledTableCell /* align="right" */>{row.fat}</StyledTableCell>
              <StyledTableCell /* align="right" */>
                {row.time}
              </StyledTableCell>
              
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {open && <AppointModal handleClose={handleClose} open={open}/> }
    </>
    
  );
}
