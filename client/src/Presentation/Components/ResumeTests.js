import "../Styles/AvailableMocktests.css";
import { useDispatch } from "react-redux";
import { startTime, resetTime } from "../../Application/StateManagement/slices/TimerSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ResumeTests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data.attempting_mocks)
  // Start test function
  const startTest = (id) => {
    dispatch(startTime(id));
    dispatch(resetTime());
    navigate("/instructionpage");
  };

  // State to hold the tests data
  const [tests, setTests] = useState([]);

  // Fetch mocktests data from the server
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await axios.post("https://khojo-college-server.vercel.app/mock/mocktests");
        // const data = await response.data;
        // console.log(data);
        console.log(data)
        setTests(data); // Make sure to access 'data' key in the response
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mocktestmaincontainer">
      <div className="mocktestheader">
        <h1>Resume your test</h1>
      </div>
      <h1 className="mocktestresumeHeading">{tests?.length === 0 ? "No Attempting Tests" : ""}</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="showtests">
          {tests ? tests.map((test, index) => {
              return (
                <div key={index} className="testContainer">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    <h2 className="testName">{test.title}</h2> {/* Using 'test.title' */}
                    <div className="test-tag-cont">
                      <p id="test-tag" className="tag">3 hours</p>
                      <p id="test-tag" className="tag">300 Marks</p>
                      <p id="test-tag2" className="startbtn">
                        <a
                          style={{ color: "white", textDecoration: "none" }}
                          onClick={() => {
                            startTest(test._id); // Using 'test._id'
                          }}
                        >
                          Start Test
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="noofques">
                    No of Questions: 75 | Maths: 25 | Physics: 25 | Chemistry: 25
                  </p>
                </div>
              );
            }) : null}
        </div>
      </div>
    </div>
  );
};

export default ResumeTests;
