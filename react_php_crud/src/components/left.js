import React from 'react'
import './left.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



class left extends React.Component {

    render() {
        return (
            <div className="leftwrap">
                <h2>Insert Data to into Database</h2>
                <div className="form_box">
                    <div className="left_container">
                        <TextField id="outlined-search" label="Name" type="search" />
                        <TextField id="outlined-search" label="Email" type="search" />
                        <TextField id="outlined-search" label="Phone no" type="search" />
                        <TextField id="outlined-search" label="Salary" type="search" />
                        <div className="button_container">
                            <Button variant="contained">Insert</Button>
                            <Button variant="outlined">Reset</Button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default left
