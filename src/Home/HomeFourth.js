import "../css/HomeFourth.css";
import signuo from "../Images/Signup.png";
import Createcard from "../Images/Createcard.png";
import Share from "../Images/Share.png";
import Follow from "../Images/Follow.png";

function HomeFourth(){
    return <>
  <div class="card-container">
  <div className="card-body" >
        <h5 className="card-title fw-bold text-center " id="heading">How it Works</h5>
        <p className="card-text" id="textArea">As per the current scenario, it makes sense to get in place business cards that are virtual,  For any business, a business card is a must for its employees as a visiting card acts as their identity and adds credibility. Get your staff all equipped with fewer digital business cards that they can share safely with their prospective clients during the online meetings on Zoom, Teams, teleconferences etc.</p>
        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
  {/* <div class="card mt-3" >  
  <div class="text-center">
    <img className=" p-3 " src={signuo} alt="Card 1" style={{height:"8rem", width :"8rem"}}/>
    </div>
    <div class="card-content">
      <h3  className=" text-center fw-bold">Sign Up</h3>
      <p className="p-3">Create an account with Equicard just by entering a few basic details.</p>
  </div>
  </div> */}
  <div class="card mt-3" id="card">
  <div class="text-center">
    <img class="p-3" src={signuo} alt="Card 1" style={{height: "8rem", width : "8rem"}} />
  </div>
  <div class="card-content">
    <h3 class="text-center fw-bold">Sign Up</h3>
    <p class="pl-3 " id="TextArea">Create an account with Equicard just by entering a few basic details.</p>
  </div>
</div>
  <div class="card  mt-3" id="card">
  <div class="text-center">
    <img  className=" p-3" src={Createcard} alt="Card 1" style={{height:"8rem", width :"8rem"}}/>
    </div>
    <div class="card-content">
      <h3  className=" text-center fw-bold">Create Card</h3>
      <p className="p-3" id="TextArea">Brush up your creative skills. Customise colours, add catchy videos, and web URL's, links to your social handles, to make a lasting impression on your clients.</p>
    </div>
  </div>

  <div class="card" id="card">
    <div class="text-center">
    <img  className=" p-3 "src={Share} alt="Card 1" style={{height:"8rem", width :"8rem"}}/>
    </div>
    <div class="card-content">
      <h3  className=" text-center fw-bold">Share Your Card</h3>
      <p className="p-3" id="TextArea">The first step towards being a successful impresario is to make your presence felt. Now, the power is in your hand, share your digital v-card with any person, anytime.</p>
    </div>
  </div>

  <div class="card" id="card">
  <div class="text-center">
    <img className=" p-3 " src={Follow} alt="Card 1" style={{height:"8rem", width :"8rem"}}/>
    </div>
    <div class="card-content">
      <h3 className=" text-center fw-bold">Follow Up</h3>
      <p className="p-3" id="TextArea">Stay connected with your contacts and follow up accordingly. Like you can plan for virtual business meets and discuss future prospects.</p>
    </div>
  </div>
</div>

    </>
}
export default HomeFourth;