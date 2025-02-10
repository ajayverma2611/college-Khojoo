import { useState } from "react";
import "../Styles/feedbackModal.css";
import { MdCancel } from "react-icons/md";
const FeedbackModal = ({showModal}) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const submitFeedback = (e) => {
    e.preventDefault();
    console.log("Feedback submitted");
    setUsername("");
    setDescription("");
  }
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleDesc = (e) => {
    setDescription(e.target.value);
  }
  return (
    <div className="feedbackModalmain">
      <div className="feedbackModal">
        <form onSubmit={(e) => submitFeedback(e)}>
          <div className="cancelIcon" onClick={() => showModal(false)}>
            <MdCancel className="cancelIcon" color="#05B97D" size="1.5rem"/>
          </div>
          <div style={{marginBottom: "15px"}}>
            <label className="feedbackmodallabels">Username: </label><br/>
            <input type="text" placeholder="Enter you name..." className="feedbackmodalinputs" value={username} onChange={handleUsername}></input><br/>
          </div>
          <div>
            <label className="feedbackmodallabels">Description: </label><br/>
            <textarea rows="6" placeholder="Give us your valuable feedbacks" className="feedbackmodalinputs" value={description} onChange={handleDesc}></textarea>
          </div>
          <div className="btncontainer">
            <button type="submit" className="feedbackSubmitbtn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedbackModal
