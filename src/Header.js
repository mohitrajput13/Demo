import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    return (
        <>
            <div className="header">
            <div className="logo">
                    <img src="./img/logo2.png" alt="logo" />
                </div>
                <h2>Dashboard</h2>
                <div onClick={()=>{navigate("profile")}} className="profile-photo">
                    <img src="./img/pp.jpeg" alt="Profile Photo" />
                    <div className="active-indicator"></div>
                </div>

            </div>
            </>
    );
}

export default Header;