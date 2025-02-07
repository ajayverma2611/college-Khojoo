import "../Styles/HelpAndFeedBack.css";
import helpAndFeedbackImage from "../Assests/helpandfeedback.png";
const HelpAndFeedBack = () => {
  return (
    <>
    <div className='helpandfeedbackMainContainer'>
      <div className="hfContent">
        <h1 className="feedbackHeading">Help And FeedBack</h1>
        <div>
        <h3 className="valuefeedback">We value your Feedback</h3>
        <p className="hfContentPara">Your feedback is essential for us to improve our platform and provide you with the best possible experience. We want to hear from you—whether you have suggestions, encountered problems, or simply want to share your thoughts.</p>
        </div>
        <div className="hfBtnContainer">
          <button className="hfBtn">FeedBack</button>
          <button className="hfBtn">Contact Us</button>
        </div>
      </div>
      <div>
        <img src={helpAndFeedbackImage} alt="helpandfeedback" className="hfImage"/>
      </div>
    </div>
    </>
  )
}

export default HelpAndFeedBack
