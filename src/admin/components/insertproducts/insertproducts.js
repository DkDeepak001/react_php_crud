
import React, { Component } from 'react'
import './insertproduct.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { IoIosAddCircle as Addicon } from 'react-icons/all'


const Input = styled('input')({
    display: 'none',
});

export class insertproducts extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            productPrice: '',
            gst: '',
            units: '',
            image: '',
            desc: ''
        }
    }


    uservalue = (event) => {
        this.setState({

        })
    }


    render() {
        return (
            <div className="ip_containner">
                <h1>Insert New Product</h1>
                <form className="ip_form">
                    <div className='ip_form_gap'>
                        <TextField id="outlined-basic" type='text' label="Product Name" variant="outlined" size='small' name="productName" onChange={this.uservalue} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" type='number' label="Product Price" variant="outlined" size='small' name="productPrice" onChange={this.uservalue} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" type='number' label="Gst %" variant="outlined" size='small' style={{ width: "20%" }} name="gst" onChange={this.uservalue} />
                    </div>
                    <div>
                        <label className='selectlabel'>Units</label>
                        <Select size='small' name="gst" onChange={this.uservalue} >
                            <MenuItem value={10} >Kg</MenuItem>
                            <MenuItem value={20}>Liter</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Upload image
                            </Button>
                        </label>
                    </div>
                    <div>
                        <TextField
                            id="outlined-textarea"
                            label="Description"
                            multiline
                        />
                    </div>

                    <Button type='submit' variant="contained" color='success' startIcon={<Addicon />}>
                        Add Product
                    </Button>

                </form>
            </div>
        )
    }
}

export default insertproducts
