import React from 'react'
import './right.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios'

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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));






class right extends React.Component {
    constructor() {
        super();
        this.state = {
            fetchData: []
        }

    }

    componentDidMount() {
        const URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(URL).then(result => {
            this.setState({ fetchData: result.data })


        })
    }
    deleteData = (id) => {
        const arr = [...this.state.fetchData];
        const newData = arr.splice(id, 1);
        this.setState({ fetchData: arr });
        console.log(id);
    }

    render() {
        console.log(this.state.fetchData)

        return (
            <div className="rightwrap">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Phone no</StyledTableCell>
                                <StyledTableCell align="left">Salary</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.fetchData.map((x, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">
                                        {x.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{x.email}</StyledTableCell>
                                    <StyledTableCell align="left">{x.phone}</StyledTableCell>
                                    <StyledTableCell align="left">{x.username}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <div>
                                            <Button variant="contained" style={{ backgroundColor: "Green", marginRight: "10px" }}>Edit</Button>
                                            <Button variant="outlined" onClick={() => this.deleteData(index)} style={{ backgroundColor: "red", color: "white" }}>Delete</Button>
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        )
    }
}

export default right
