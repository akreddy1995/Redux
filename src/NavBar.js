import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item m-1">
                        <NavLink className="navbar-brand" to="/Home" style={{color:"#fff"}} activeStyle={{color:"#ff6347"}}> Home</NavLink>
                    </li>                    
                    <li className="nav-item  m-1">
                        <NavLink className="navbar-brand" to="/AddCustomer" style={{color:"#fff"}} activeStyle={{color:"#ff6347"}}>Add Customer</NavLink>
                    </li>
                    <li className="nav-item  m-1">
                        <NavLink className="navbar-brand" to="/CustomerDetails" style={{color:"#fff"}} activeStyle={{color:"#ff6347"}}>Customer Details</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;