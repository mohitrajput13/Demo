import "../css/Footer2.css";

function Footer2(){
    return <>
    <div className="pg-footer">
    <footer className="footer">
        <div className="wave"></div>
        <div className="footer-content">
            <div className="footer-content-column">
                <div className="footer-menu">
                    <h2 className="footer-menu-name">Digital Cards</h2>
                    <ul id="menu-products" className="footer-menu-list">
                        <li className="menu-item menu-item-type-post_type menu-item-object-product">
                            <a href="#">Business Cards</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-product">
                            <a href="#"> Proffesional Cards</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-product">
                            <a href="#">Dating Cards</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-product">
                            <a href="#">Events Cards</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-product">
                            <a href="#">Faculty Cards</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-product">
                            <a href="#">Custom Cards</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-content-column">
                <div className="footer-menu">
                    <h2 className="footer-menu-name">Connectify</h2>
                    <ul id="menu-company" className="footer-menu-list">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="#">About Us</a>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                            <a href="#">Contact US</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="#">My Profile</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    {/* <h2 className="footer-menu-name">Contact</h2> */}
                    <ul id="menu-contact" className="footer-menu-list">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                            <a href="#">Notification</a>
                        </li>
                        {/* <li className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="#">Sales</a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="footer-content-column">
                <div className="footer-call-to-action">
                    <h2 className="footer-call-to-action-title">About Our Website</h2>
                    <p className="footer-call-to-action-description"><b>Eco-Friendly</b>: Digital visiting cards are paperless, reducing the use of paper and contributing to environmental sustainability.They can be accessed anytime, anywhere, as long as there is an internet connection, making it convenient for people to retrieve your contact information when needed.</p>
                    <form className="footer-call-to-action-form">
                        {/* <!-- <input type="email" name="email" placeholder="Enter your email" required/>  */}
                        {/* <button type="submit" className="footer-call-to-action-button">Subscribe</button> */}
                    </form>
                </div>
            </div>
        </div>
        <div className="footer-social-links">
            <img src="https://img.icons8.com/color/48/000000/facebook-circled--v2.png" alt="Facebook" className="footer-social-link"/>
            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v2.png" alt="Twitter" className="footer-social-link"/>
           <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v2.png" alt="LinkedIn" className="footer-social-link"/>
            <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" alt="Instagram" className="footer-social-link"/>
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright-text">© 2024 Connectify. All Rights Reserved.</p>
        </div>
    </footer>
</div>
    </>
}
export default Footer2;