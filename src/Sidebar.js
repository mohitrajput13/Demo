import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    return (
              <ul>
                    <li onClick={()=>{navigate("profile")}}><a href="#"><span className="bi bi-person-circle"></span> Profile</a></li>
                    <li><a href="#"><span className="bi bi-credit-card-2-front"></span> My Card</a></li>
                    <li onClick={()=>{navigate("create")}}><a ><span className="bi bi-journal-plus"></span> Create Card</a></li>
                    <li onClick={()=>{navigate("home")}}><a href="#"><span className="bi bi-chat-dots"></span> Messages</a></li>
                    <li onClick={()=>{navigate("create")}}><a href="#"><span className="bi bi-gear-wide-connected"></span> Settings</a></li>
                    <li><a href="#"><span className="bi bi-box-arrow-right"></span> Logout</a></li>
                </ul>
    );
}

export default Sidebar;