import { useState } from "react"
import "../Styles/Test.css"
const Test = () => {
  const [subject, setSubject] = useState("Maths");
  const [option, setOption] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="testPage">
      <button className={`toggle-sidebar-btn ${sidebarOpen ? " colouring": ""}`} onClick={toggleSidebar}>
        {sidebarOpen ? '\u2715' : '\u2630'}
      </button>
      <div className={`test-sidebar2 ${sidebarOpen ? " test-open" : ""}`}>
        <h2 className="selected-subject">{subject}</h2>
        <div className={`test-sidebar ${sidebarOpen ? "test-sidebartoopen" : ""}`}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((i) => {
              return(
                <button className="herobutton" id="test-nav-btn1" key={i}>{i}</button>
              )
            })
          }
        </div>
      </div>
      <div className = "tag" id="time-tag">
          39: 03
      </div>
      <div className="test-container">
        <div className="test-header">
          <h1>Mock Test</h1>
        </div>
        <div className="test-header2">
          <button className={"herobutton" + (subject !== "Maths" ? " test-disabled" : "")} id="test-nav-btn" onClick={(e) => {setSubject("Maths")}}>Maths</button>
          <button className={"herobutton" + (subject !== "Physics" ? " test-disabled" : "")} id="test-nav-btn" onClick={(e) => {setSubject("Physics")}}>Physics</button>
          <button className={"herobutton" + (subject !== "Chemistry" ? " test-disabled" : "")} id="test-nav-btn" onClick={(e) => {setSubject("Chemistry")}}>Chemistry</button>
        </div>
        <div className="test-body">
          <h1>Question 1.</h1>
          <h2>What is the capital of India?</h2>
          <div className="test-options">
            <div className={"test-option" + (option === 1 ? " test-opt-enabled" : "")} onClick={(e) => {setOption(1)}}>
              <p>A</p>
              <p>New Delhi</p>
            </div>
            <div className={"test-option" + (option === 2 ? " test-opt-enabled" : "")} onClick={(e) => {setOption(2)}}>
              <p>B</p>
              <p>Hyderabad</p>
            </div>
            <div className={"test-option" + (option === 3 ? " test-opt-enabled" : "")} onClick={(e) => {setOption(3)}}>
              <p>C</p>
              <p>Bangalore</p>
            </div>
            <div className={"test-option" + (option === 4 ? " test-opt-enabled" : "")} onClick={(e) => {setOption(4)}}>
              <p>D</p>
              <p>Chennai</p>
            </div>
          </div>
          <div className="test-header" id="test-buttons">
            <button className="herobutton" id="test-nav-btn" onClick={(e) => {setOption(0)}}>Clear</button>
            <button className="herobutton" id="test-nav-btn">Previous</button>
            <button className="herobutton" id="test-nav-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
