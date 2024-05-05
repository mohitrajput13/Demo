import React from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';

function Profile(){
    const navigate = useNavigate();
  return <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="profile-card text-center">
            <label className="profile-image">
              <input type="file" /> 
            </label>
            <h5 className="mb-0">John Doe</h5>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> johndoe@example.com</li>
              <li><strong>Phone:</strong> +1234567890</li>
              <li><strong>Password:</strong> ********</li>
            </ul>
            <div className="social-links">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-github"></i></a>
            </div>
            <button className="btn custom-btn btn-update">Update Information</button>
            <button onClick={()=>{navigate("forget")}}  className="btn custom-btn btn-change-password">Change Password</button>
          </div>
        </div>
      </div>
    </>
  
}

export default Profile;