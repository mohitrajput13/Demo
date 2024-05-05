import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function CreateCards() {
    const navigate = useNavigate();
    return (
        <div className="row">
        
        <div onClick={()=>{navigate("registration")}} className="col-md-6 mb-3">
            <div className="card">
                <h3>BUSINESS CARDS</h3>
                <a href="#" className="card-link">Tap here to create your own <span className="bi bi-arrow-right-circle card-link-icon"></span></a>
            </div>
        </div>
        
        
        <div className="col-md-6 mb-3">
            <div className="card">
                <h3>DATING CARDS</h3>
                <a href="#" className="card-link">Tap here to create your own <span className="bi bi-arrow-right-circle card-link-icon"></span></a>
            </div>
        </div>
        
        <div className="col-md-6 mb-3">
            <div className="card">
                <h3>EVENTS CARDS</h3>
                <a href="#" className="card-link">Tap here to create your own <span className="bi bi-arrow-right-circle card-link-icon"></span></a>
            </div>
        </div>
        
       
        <div className="col-md-6 mb-3">
            <div className="card">
                <h3>APPOINTMENT CARDS</h3>
                <a href="#" className="card-link">Tap here to create your own <span className="bi bi-arrow-right-circle card-link-icon"></span></a>
            </div>
        </div>
        
        <div className="col-md-6 mb-3">
            <div className="card">
                <h3>TEACHER CARDS</h3>
                <a href="#" className="card-link">Tap here to create your own <span className="bi bi-arrow-right-circle card-link-icon"></span></a>
            </div>
        </div>
        
       
        <div className="col-md-6 mb-3">
            <div className="card">
                <h3>CUSTOM CARDS</h3>
                <a href="#" className="card-link">Tap here to create your own <span className="bi bi-arrow-right-circle card-link-icon"></span></a>
            </div>
        </div>
        </div>
    );
}

export default CreateCards;