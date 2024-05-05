import React from 'react';
import '../css/contact.css';

const ContactUs = () => {
    return (
        <div>
            <div className="header">
                <h1>Contact Us</h1>
            </div>
            <div className="container">
                <div>
                    <p><span className="connectify">Connectify</span> – We are here to assist you with any inquiries or questions you may have. Whether you want to learn more about our services, discuss partnership opportunities, or provide feedback, feel free to get in touch with us.</p>
                    <h2>Our Contact Information:</h2>
                    <h4><i className="fas fa-envelope"></i> Email: contact@connectify.com</h4>
                    <h4><i className="fas fa-phone"></i> Phone: +1 (123) 456-7890</h4>
                    <h4><i className="fas fa-map-marker-alt"></i> Address: 123 Main Street, Indore, Madhya Pradesh</h4>
                    <h4><i className="fas fa-globe"></i> Website: www.connectify.com</h4>
                </div>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.765527757957!2d75.83379161446815!3d22.719568885105986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630e343d505555%3A0x51b39b5abeda1eb0!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1649032269153!5m2!1sen!2sus" title="Google Map" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;