import "../css/HomeEventCard.css";
import Navbar from "./Navbar.js";
function Event(){
    return <>
    <Navbar/>
    <div class="container">
  <div class="box">
    <h1>Event Card</h1>
    <p className="text-center">
    <b>Convenient Information Access</b>: Event cards provide a concise and organized summary of essential event details such as date, time, venue, agenda, and contact information.<br/>
<b>Enhanced Communication: </b> Event cards serve as a communication tool between organizers and attendees. Organizers can convey important updates or changes to the event details directly through the card, ensuring that attendees stay informed in real-time..<br/>
<b>Promotional Tool: </b>Event cards can be used as promotional materials to generate interest and attract attendees. By sharing visually appealing and informative cards through various channels such as social media, email, or physical distribution, organizers can effectively market their event to a wider audience.<br/>
<b>Environmentally Friendly:</b> Digital event cards eliminate the need for printing materials, reducing paper waste and environmental impact. They align with sustainability initiatives and demonstrate the commitment of organizers to eco-friendly practices.

    </p>
  </div>
</div>
    </>
}
export default Event;