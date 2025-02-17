import { useNavigate } from "react-router-dom";
import "../Styles/Modals.css"
import "../Styles/feedbackModal.css";
const StartTestModal = ({showModal, confirmation, initializeTest}) => {
  const navigate = useNavigate();
  const cancelTest= () => {
    showModal()
  }
  function handleStart(){
    console.log("initialising test");
    confirmation("start");
    initializeTest();
    showModal();
  }
  return (
    <div className="feedbackModalmain" id="Modal-background">
      <div className="feedbackModal" id="startModal">
        <div>
          <p className="confirmation-text">Are you ready to start the test?</p>
          <div className="start-modal-button-container">
            <button className="start-modal-btns" id="cancel-btn" onClick={() => {cancelTest()}}>Cancel</button>
            <button className="start-modal-btns" id="start-btn" onClick={() => {handleStart()}}>Start Test</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartTestModal