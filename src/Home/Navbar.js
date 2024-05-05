import "../css/Navbar.css";
import logo from "../Images/Slogo.png";
import {Link,Outlet, useNavigate} from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();
    return <>

<header className="header">
  <img src={logo} alt="" style={{height :"60px", width :"80px", marginLeft :"20px", marginTop :"10px"}}/>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li>Home {()=>{navigate("/")}}</li>
    <li onClick={()=>{navigate("about")}}>About US</li>
    <li>Contact</li>
    <li>LogOut</li>
   </ul>
</header>
<Outlet/>
    </>
}
export default Navbar;