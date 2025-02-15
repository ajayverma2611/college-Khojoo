import { useState, useEffect } from "react"
import "../Styles/Test.css"
import { useDispatch, useSelector } from "react-redux";
import { decrementTime, autoSubmit, submitTest, startTime } from "../../Application/StateManagement/slices/TimerSlice";
import { selectOption, clearOption, setQuestionindex, setSubindex } from "../../Application/StateManagement/slices/MocktestSlice";
import { useNavigate } from "react-router-dom";
import { setMockTestData } from "../../Application/StateManagement/slices/MocktestSlice";

import axios from "axios";
const Test = () => {
  const [subject, setSubject] = useState("Physics");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(useSelector((state) => state.mocktest.data));
  const [subIndex, setSubIndex] = useState(useSelector(state => state.mocktest.subjectIndex)); // subject index
  const [questionIndex, setQuestionIndex] = useState(useSelector(state => state.mocktest.questionIndex)); // question index
  const [ghost, setGhost] = useState(false);
  const [selectedoption, setSelectedoption] = useState("");

  const dispatch = useDispatch();
  const id = useSelector((state) => state.timer.id);
  const user_id = useSelector((state) => state.user.id);
  const testData = useSelector((state) => state.mocktest.data);
  const time = useSelector((state) => state.timer.time);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const testSubmitted = useSelector((state) => state.timer.testSubmitted);

  const userid = useSelector((state) => state.user.id);

  const navigate = useNavigate();

  const formatTime = (seconds) => { // gives format as HH:MM:SS
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  useEffect(() => {
    if(testSubmitted) return;
    if(time <= 0){
      dispatch(autoSubmit());
      return;
    }
    const timer = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [testSubmitted, time, dispatch]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  async function fetchData(){
    await axios.post('http://localhost:8000/mock/addMocktoUser', {
      userId: user_id,
      data: testData,
      change: true,
    });

    navigate("/tests");
  }

  useEffect(() => {
    dispatch(startTime());

    console.log("test data "+testData);
  }, []);

  return (
    <div className="testPage">
      <button className={`toggle-sidebar-btn ${sidebarOpen ? " colouring": ""}`} onClick={toggleSidebar}>
        {sidebarOpen ? '\u2715' : '\u2630'}
      </button>
      <div className={`test-sidebar2 ${sidebarOpen ? " test-open" : ""}`}>
        <h2 className="selected-subject">{subject}</h2>
        <div className={`test-sidebar ${sidebarOpen ? "test-sidebartoopen" : ""}`}>
          {[...Array(25)].map((_, index) => {
            const isAnswered = data.sections[subIndex].questions[index].selectedOption !== "";
            const isActive = questionIndex === index; // Check if this button represents the currently selected question

            return (
              <button
                className={`herobutton ${isAnswered ? " answered-btn2" : "not-hero-btn"} ${isActive ? "active-btn2" : ""}`}
                id="test-nav-btn1"
                key={index}
                onClick={() => {dispatch(setQuestionindex({questionIndex: index})); window.location.reload()}}
              >
                {index + 1}
              </button>
            );
          })}

        </div>
      </div>
      <div className = "tag" id="time-tag">
      {formatTime(time)}
      </div>
      <div className="test-container">
        <div className="test-header">
          <h1>Mock Test</h1>
        </div>
        <div className="test-header2">
          <button className={"herobutton" + (subIndex !== 2 ? " test-disabled" : "")} id="test-nav-btn" onClick={(e) => {setSubject("Maths"); dispatch(setSubindex({subIndex: 2})); dispatch(setQuestionindex({questionIndex: 0})); window.location.reload()}}>Maths</button>
          <button className={"herobutton" + (subIndex !== 0 ? " test-disabled" : "")} id="test-nav-btn" onClick={(e) => {setSubject("Physics"); dispatch(setSubindex({subIndex:0})); dispatch(setQuestionindex({questionIndex:0})); window.location.reload()}}>Physics</button>
          <button className={"herobutton" + (subIndex !== 1 ? " test-disabled" : "")} id="test-nav-btn" onClick={(e) => {setSubject("Chemistry"); dispatch(setSubindex({subIndex:1})); dispatch(setQuestionindex({questionIndex:0})); window.location.reload()}}>Chemistry</button>
        </div>
        
            
              <div className="test-body">
              <h1>Question {questionIndex+1}.</h1>
              <h2>{data.sections[subIndex].questions[questionIndex].question}</h2>
              {data.sections[subIndex].questions[questionIndex].question_image !== "" && <img src={data.sections[subIndex].questions[questionIndex].question_image} className="test-question-image"/>}
              <div className="test-options">
                <div className={"test-option" + (ghost === true ? (selectedoption === "a" ? " test-opt-enabled" : "") : ("a" === data.sections[subIndex].questions[questionIndex].selectedOption ? " test-opt-enabled" : ""))} onClick={(e) => {dispatch(selectOption({subIndex, questionIndex, option: "a"})); setGhost(true); setSelectedoption("a")}}>
                  <p>A</p>
                  <p>{data.sections[subIndex].questions[questionIndex].options.a}</p>
                  {data.sections[subIndex].questions[questionIndex].options.a_image_link !== "" && <img src={data.sections[subIndex].questions[questionIndex].options.a_image_link}/>}
                </div>
                <div className={"test-option" + (ghost === true ? (selectedoption === "b" ? " test-opt-enabled" : "") : ("b" === data.sections[subIndex].questions[questionIndex].selectedOption ? " test-opt-enabled" : ""))} onClick={(e) => {dispatch(selectOption({subIndex, questionIndex, option: "b"})); setGhost(true); setSelectedoption("b")}}>
                  <p>B</p>
                  <p>{data.sections[subIndex].questions[questionIndex].options.b}</p>
                  {data.sections[subIndex].questions[questionIndex].options.b_image_link !== "" && <img src={data.sections[subIndex].questions[questionIndex].options.b_image_link}/>}
                </div>
                <div className={"test-option" + (ghost === true ? (selectedoption === "c" ? " test-opt-enabled" : "") : ("c" === data.sections[subIndex].questions[questionIndex].selectedOption ? " test-opt-enabled" : ""))} onClick={(e) => {dispatch(selectOption({subIndex, questionIndex, option: "c"})); setGhost(true); setSelectedoption("c")}}>
                  <p>C</p>
                  <p>{data.sections[subIndex].questions[questionIndex].options.c}</p>
                  {data.sections[subIndex].questions[questionIndex].options.c_image_link !== "" && <img src={data.sections[subIndex].questions[questionIndex].options.c_image_link}/>}
                </div>
                <div className={"test-option" + (ghost === true ? (selectedoption === "d" ? " test-opt-enabled" : "") : ("d" === data.sections[subIndex].questions[questionIndex].selectedOption ? " test-opt-enabled" : ""))} onClick={(e) => {dispatch(selectOption({subIndex, questionIndex, option: "d"})); setGhost(true); setSelectedoption("d")}}>
                  <p>D</p>
                  <p>{data.sections[subIndex].questions[questionIndex].options.d}</p>
                  {data.sections[subIndex].questions[questionIndex].options.d_image_link !== "" && <img src={data.sections[subIndex].questions[questionIndex].options.d_image_link}/>}
                </div>
              </div>
              <div className="test-header" id="test-buttons">
                <button className="herobutton" id="test-nav-btn">Previous</button>
                <button className="herobutton" id="test-nav-btn">Next</button>
              </div>
              <div className="submit-container">
                <button className="herobutton" id="submit-nav-btn" onClick={navigate("/tests")}>Go to performance page</button>
              </div>
            </div>
            
      </div>
    </div>
  )
}

export default Test
