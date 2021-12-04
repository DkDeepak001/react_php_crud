import React, { Component } from 'react';
import './Admin.css';
import Logo from '../resource/gananathanan.png'
import {
    IoIosSettings as Setting,
    IoIosNotifications as Notification,
    MdOutlineDashboard as Dashboard,
    IoAnalyticsSharp as Analyticsicon,
    GrUpdate as Updateicon,
    IoIosAddCircle as Addicon
} from 'react-icons/all'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Admin_home from './components/admin_home'
import Analytics from './components/analytics';
import New_product from './components/new_product';
import Update_price from './components/update_price';
import Insertproducts from './components/insertproducts/insertproducts';


export default class admin_home extends Component {
    render() {
        return (
            <Router>
                <div className="admin_home">
                    <div className="admin_nav">
                        <div className="admin_leftwrap">
                            <img className="nav_logo" src={Logo} alt=''></img>
                            <div className="nav_logo_name">
                                <h4><span>G</span>ananathan</h4>
                                <h6>Imports &#38; Exports</h6>
                            </div>
                        </div>
                        <div className="admin_rightwrap">
                            <div className="rightwrap_pos">
                                <Setting />
                                <Notification />
                                <h4>Admin</h4>
                            </div>
                        </div>
                    </div>
                    <div className="admin_container">
                        <div className="admin_sidewrap">
                            <div className="sidewrap_pos">
                                <ul>

                                    <Link to="/Admin/admin_home">
                                        <li>
                                            <div className="sidewrap_group">
                                                <Dashboard size={25} />
                                                <p>Dashboard</p>
                                            </div>
                                        </li>
                                    </Link>


                                    <Link to="/Admin/analytics">
                                        <li>
                                            <div className="sidewrap_group">
                                                <Analyticsicon size={25} />
                                                <p>Analytics</p>
                                            </div>
                                        </li>
                                    </Link>


                                    <Link to="/Admin/Update_price">
                                        <li>
                                            <div className="sidewrap_group">
                                                <Updateicon size={25} />
                                                <p>Update price</p>
                                            </div>
                                        </li>
                                    </Link>

                                    <Link to="/Admin/new_products">
                                        <li>
                                            <div className="sidewrap_group">
                                                <Addicon size={25} />
                                                <p>New Product</p>
                                            </div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="admin_mainwrap">
                            <Switch>
                                <Route exact path="/Admin/admin_home" component={Admin_home}>
                                </Route>
                                <Route exact path="/Admin/analytics" component={Analytics}>
                                </Route>
                                <Route exact path="/Admin/update_price" component={Update_price}>
                                </Route>
                                <Switch>
                                    <Route exact path="/Admin/new_products" component={New_product}>
                                    </Route>
                                    <Route exact path="/Admin/new_products/addnew" component={Insertproducts}>
                                    </Route>
                                </Switch>

                            </Switch>
                        </div>
                    </div>
                </div >
            </Router >
        )
    }
}
