import React from 'react';

import "./style.scss";

import logo from "../../assets/image/logo-1366.svg";
import avatar from "../../assets/image/avatar.jpg";

import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <div className="header">

            <div className="container-wrapper">
                <div className="image">
                    <MenuIcon />
                    <img src={logo} alt=""/>
                </div>

                <div className="avatar">

                    <Avatar alt="Cindy Baker" src={avatar}/>
                    <ArrowDropDownIcon/>


                </div>
            </div>


        </div>
    );
};

export default Header;