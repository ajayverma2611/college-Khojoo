import "../Styles/AvailableMocktests.css";
import { tests } from "../../Application/Services";
import { Link } from "react-router-dom";
const AvailableMocktests = () => {
  return (
    <div className="mocktestmaincontainer">
      <h1 className="mocktestHeading">Available Mocktests</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          
            <div className="showtests">
            {tests.map((test, index) => {
              return (
                <div key={index} className="testContainer">
                  <div style={{ display: "flex", flexWrap:"wrap",gap:"20px" }}>
                    <h2 className="testName">{test}</h2>
                    <div className="test-tag-cont">
                      <p id="test-tag" className="tag">3 hours</p>
                      <p id="test-tag" className="tag">300 Marks</p>
                      <p id="test-tag2" className="startbtn">Start Test</p>
                    </div>
                  </div>
                  <p className = "noofques">No of Questions: 75 | Maths: 25 | Physics: 25 | Chemistry: 25</p>
                </div>
              )
            })}
          </div>
        
      </div>
    </div>
  )
}

export default AvailableMocktests
