import "../css/HomeSecond.css";
import  imag from "../Images/HomeSec.png";
// import imag1 from "./Images/pdf.jpg";
function HomeSecond(){
  return <>
  <div className="card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0 mt-3">
   
    <div className="col-md-8 mt-3" id="bgDecorate">
      <div className="card-body" >
      
        <div><p className="text-center h2 fw-bold">Why Digital Card</p></div>
        <div id="TextAnnimation">
        <h5 className="card-title fw-bold " id="heading">Save Time & Money</h5>
        <p className="card-text" id="textArea">In business, time is money. Now, amend and update information on your virtual business card anywhere and everywhere just by logging into your account on Equicard. And bid adieu to the recurrent expense of reprinting business cards.</p>
       </div>
       <div id="TextAnnimation">
        <h5 className="card-title fw-bold " id="heading">Save Environment</h5>
        <p className="card-text" id="textArea">Approximately 2 million trees are cut in a year to make business cards, which is dangerous. By doing your bit for society, you can switch to virtual cards and save the trees and the environment from being harmed.</p>
        </div>
        <div id="TextAnnimation">
        <h5 className="card-title fw-bold " id="heading">Target Leads more efficiently</h5>
        <p className="card-text" id="textArea">Increase your business prospects, by finding your target audience easily through more focused search and connect options. Make sure, you don’t miss out on any vital undertaking, set reminders through calendar integration, and remain up-to-date.</p>
       </div>
       <div id="TextAnnimation">
        <h5 className="card-title fw-bold " id="heading">Savvy Marketing tool</h5>
        <p className="card-text" id="textArea">Digital business cards support building personal brand acknowledgment through comprehensive planning by making optimal use of this digital podium.</p>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <img src={imag} className="img-fluid rounded-start" alt="..." id="TextSideImage"/>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
  

    </div>
    {/* <div className="col-md-6">
  <div className="embed-responsive embed-responsive-16by9" style={{ maxWidth: "100%", height: "100%" }}>
    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen style={{ width: "100%", height: "100%" }}></iframe>
  </div>
</div> */}



  </div>
</div>
  </>
}
export default HomeSecond;