import React, { Component } from 'react';
import './new_products.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import {
    BiSearchAlt as Search
} from 'react-icons/all'
import Insertproducts from './insertproducts/insertproducts';
import { Link } from "react-router-dom";


class new_product extends Component {

    render() {
        return (
            <div className="np_container">
                <div className="np_header">
                    <div className="np_left">
                        <h1> Products</h1>
                    </div>
                    <div className="np_right">
                        <div className="np_right_search">
                            <Search size={20} />
                            <Input placeholder="search" />
                        </div>
                        <div>
                            Sort
                        </div>

                        <Link to="/Admin/new_products/addnew">
                            <Button variant="contained" style={{ backgroundColor: "blue", fontSize: '13px' }} > Add Product</Button>
                        </Link>

                    </div>
                </div>
            </div >


        )
    }
}

export default new_product
