import React from "react";
import "./ForgetPassword.css";

function ForgetPassword() {
    return <>
        
  <div className="row justify-content-center mt-5">
    <div className="col-md-4">
      <form className="password-form">
        <div className="mb-3">
          <label for="oldPassword" className="form-label visually-hidden">Old Password</label>
          <input type="password" className="form-control" id="oldPassword" name="oldPassword" placeholder="Old Password" required/>
        </div>
        <div className="mb-3">
          <label for="newPassword" className="form-label visually-hidden">New Password</label>
          <input type="password" className="form-control" id="newPassword" name="newPassword" placeholder="New Password" required/>
        </div>
        <div className="mb-3">
          <label for="confirmPassword" className="form-label visually-hidden">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required/>
        </div>
        <button type="submit" className="btn">Save Password</button>
      </form>
    </div>
  </div>

    </>
}
export default ForgetPassword;