import React, { useRef } from 'react';
import "./Registration.css";

const Registration = () => {
    const name =useRef();
    const designation= useRef();
    const esyear= useRef();
    const businessType = useRef();
    const email =useRef();
    const contact =useRef();
    const gstno=useRef();
    const websiteurl=useRef();
    const landline=useRef();
    const about=useRef();
    const address=useRef();
    const instagram=useRef();
    const facebook =useRef();
    const LinkedIn =useRef();
    const otherLink=useRef();
    const photo=useRef();
    const logo=useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        const data = {
            userId:"662a26d1f868a42c5363609b",
            businessName: name.current.value,
            businessEmail: email.current.value,
            businessType: businessType.current.value,
            businessAddress: address.current.value,
            businessContact: contact.current.value,
            businesslandlineNumber: landline.current.value,
            businessEstablishYear: esyear.current.value,
            businessWebsiteUrl: websiteurl.current.value,
            businessGstNo: gstno.current.value,
            businessAbout: about.current.value,
            businessInstagramLink: instagram.current.value,
            businessFacebookLink: facebook.current.value,
            businessLinkedInLink: LinkedIn.current.value,
            businessLogo: logo.current.value, 
            businessPhoto: photo.current.value 
            
        };
        // try {
        //     // Send form data to backend
        //     const response = await axios.post('http://localhost:8000/business/save', data);
        //     return response.data
        //     toast.success('Form submitted successfully!');
        //     console.log(response.data); // Log the response from the server
        //     // Handle success (redirect, show success message, etc.)
        // } catch (error) {
        //     toast.error('Failed to submit form. Please try again later.');
        //     console.error('Error submitting form:', error);
        //     // Handle error (show error message, retry logic, etc.)
        // }
        // console.log(data);
    };
    
  

  return <>
  
  <form onSubmit={handleSubmit}>
    <div className="container1">
      <div className="left-section">
        <h2 className="title">Business Card</h2>
        
          <div className="input-div">
            <input ref={name} type="text" id="businessName"  required placeholder="Enter business or company name" />
          </div>
          <div className="input-div">
            <input ref={designation} type="text" id="designation" required placeholder="Enter designation" />
          </div>
          <div className="input-div">
            <input ref={esyear}type="text" id="establishYear"  required placeholder="Enter establish year" />
          </div>
          <div className="input-div">
            <input ref={businessType} type="text" id="natureOfBusiness" name="natureOfBusiness" required placeholder="Enter nature of business" />
          </div>
          <div className="input-div">
            <input ref={websiteurl} type="text" id="websiteURL"  required placeholder="Enter website URL" />
          </div>
          <div className="input-div">
            <input ref={about} type="text" id="aboutCompany"  placeholder="Enter about company" />
          </div>
          <div className="input-div">
            <input ref={gstno} type="text" id="GST"  placeholder="Enter GST Number" />
          </div>
          <div className="input-div">
            <div className="file-input-container">
              <label htmlFor="logo">Upload Company Logo:</label>
              <input ref={logo} type="file" id="logo"  accept="image/*" />
              <span className="file-selector" onClick={() => document.getElementById('logo').click()} style={{color :"black"}}>+</span>
            </div>
          </div>
          <div className="input-div">
            <div className="file-input-container">
              <label htmlFor="coverPhoto">Upload Cover Photo:</label>
              <input ref={photo} type="file" id="coverPhoto" accept="image/*" />
              <span className="file-selector" onClick={() => document.getElementById('coverPhoto').click()} style={{color :"black"}}>+</span>
            </div>
          </div>
      </div>
      <div className="right-section">
        <h2 className="title"style={{color :"white"}}>Personal Details</h2>
          <div className="input-div">
            <input type="text" id="fullName"   placeholder="Enter your full name" />
          </div>
          <div className="input-div">
            <input ref={email} type="email" id="email"   placeholder="Enter your email" />
          </div>
          <div className="input-div">
            <input ref={contact} type="tel" id="contactNumber"  placeholder="Enter your contact number" pattern="[0-9]{10}" />
          </div>
          <div className="input-div">
            <input ref={landline} type="tel" id="landlineNumber"   placeholder="Enter your landline number" pattern="[0-9]{10}" />
          </div>
          <div className="input-div">
            <input ref={address} type="text" id="address"   placeholder="Enter your address" />
          </div>
          <div className="input-div">
            <input ref={LinkedIn}  type="text" id="whatsappNumber" placeholder="Enter your LinkedIn number" pattern="[0-9]{10}" />
          </div>
          <div className="input-div">
            <input ref={facebook} type="text" id="facebookLink"  placeholder="Enter your Facebook link" />
          </div>
          <div className="input-div">
            <input ref={instagram} type="text" id="instagramLink"  placeholder="Enter your Instagram link" />
          </div>
          <div className="input-div">
            <input ref={otherLink} type="text" id="otherLink"  placeholder="Enter other link" />
          </div>
          <button type="submit" className="btn">Create Card</button> 
      </div>
    </div>
    </form> 
    </>
  
};

export default Registration;