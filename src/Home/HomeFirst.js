import { Outlet,  useNavigate } from "react-router-dom";
import "../css/HomeFirst.css";
import home1 from "../Images/Home1.png";


function HomeFirst() {
   const navigate = useNavigate();
  return <>
    <div className="Home-First mt-3">
      <div className="responsive-text">
        <p>The Leading Digital <br/>Visiting Card Platform</p>
      </div>
      <div className="responsive-text2">
        <p>Connectify is a Digital 
        Visiting Card<br/> that is smart, elegant & affordable.</p>
          <button onClick={()=>navigate('dashboard')} className="btn btn-light bg-light text-dark" id="Login-btn">Login</button>
        <img src={home1} className="float-end" alt="Home Image" />
      </div>
    </div>
    <Outlet/>
    </>
    
    
}

export default HomeFirst;
