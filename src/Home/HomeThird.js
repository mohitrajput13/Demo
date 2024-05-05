import "../css/HomeThird.css";
import img1 from "../Images/2.jpg";
import dating from "../Images/Dating1.png";
import teacher from "../Images/Teacher.png";
import event from "../Images/Event.png";
import business from "../Images/Business.jpg";
import custom from "../Images/Custom.png";
import { Link, useNavigate } from "react-router-dom";
// import HomeBusinessCsrd from "../Components/HomeBusinessCard.js";

function HomeThird(){
  const navigate = useNavigate();
    return <>
        <section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_vcFJzJzUlm1_h-BNCTXWDPMIS9PVmJe7IK_Db5GbcYEwmWZ8ww2_Um4zo0ny-YiNk8&usqp=CAU" style={{width:"30rem"}} />
      </figure>
      <div className="article-body">
        <h2>Business Card</h2>
        <p>
        A digital visiting card is a modern alternative to traditional paper-based business cards. Instead of handing out physical cards. Here are some key points about digital visiting cards:
        </p>
        <a onClick={()=>{navigate("static")}} className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwxv-msTzrvhgoUOFZognJkxX5mXoD6DPgQ&usqp=CAU"  style={{width:"30rem"}} alt="" />
      </figure>
      <div className="article-body">
        <h2>Faculty Card</h2>
        <p>
          
A faculty digital card serves as an electronic representation of a faculty member's professional profile and contact information. Here are some key points about faculty digital cards:
        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-management-visiting-card-design-template-0b09de0df379c8e4c7ac50bb17975fc4_screen.jpg?ts=1626783087" alt="" />
      </figure>
      <div className="article-body">
        <h2>Event Card</h2>
        <p>

        A digital event card is a virtual representation of a traditional event invitation or ticket, designed for distribution and management through digital platforms. Here are some key points about digital event cards:
        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fvisiting-card-21-2848950166797.html&psig=AOvVaw3lGQoFIOpOAm0zJekYOHNW&ust=1714844785078000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj33-OE8oUDFQAAAAAdAAAAABAK" style={{width:"30rem"}} alt="" />
      </figure>
      <div className="article-body">
        <h2>Dating Card</h2>
        <p>
A dating visiting card, also known as a dating card or personal card, is a creative and unique way for individuals to share their contact information and express interest in potential romantic connections. Here are some key points about dating visiting cards:
        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAFtZX5KqKA%2F1%2F0%2F1600w%2Fcanva-blue-and-gold-modern-business-consultant-business-card-IMQWCX2CjNk.jpg&tbnid=7kuliVMCttuvGM&vet=10CGMQMyiSAWoXChMIiPff44TyhQMVAAAAAB0AAAAAEAg..i&imgrefurl=https%3A%2F%2Fwww.canva.com%2Fbusiness-cards%2Ftemplates%2F&docid=dK_HQ68Csd-sMM&w=1600&h=941&q=visiting%20card&ved=0CGMQMyiSAWoXChMIiPff44TyhQMVAAAAAB0AAAAAEAg" alt="" />
      </figure>
      <div className="article-body">
        <h2>Proffesional Card</h2>
        <p>
        
A professional digital visiting card is a modern alternative to traditional paper-based business cards designed specifically for networking and professional interactions. Here are some key points about professional digital visiting cards:
        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-management-visiting-card-design-template-0b09de0df379c8e4c7ac50bb17975fc4_screen.jpg?ts=1626783087" alt="" />
      </figure>
      <div className="article-body">
        <h2>Custom Card</h2>
        <p>
        Digital custom cards are personalized electronic cards designed for various purposes, such as invitations, announcements, greetings, or marketing materials. Here's an overview of digital custom cards:
        </p>
        <a  className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
    </>
}
export default HomeThird;