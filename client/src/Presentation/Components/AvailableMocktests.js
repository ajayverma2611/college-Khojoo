import "../Styles/AvailableMocktests.css";
import { useDispatch } from "react-redux";
import { startTime, resetTime } from "../../Application/StateManagement/slices/TimerSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StartTestModal from "./Modals";
import Loading from "../Pages/Loading";

const AvailableMocktests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [id, setId] = useState("");
  const [isloading, setIsloading] = useState(true);
  function confirmationModal(work){
    if(work === "start"){
      setConfirmation(true);
      console.log("reched here 2");
      return;
    }
    setConfirmation(false);
  } 
  
  // Start test function
  const startTest = () => {
    dispatch(startTime(id));
    setShowModal(true);
  };

  const closeModal = () => {
    dispatch(startTime(""));
    setShowModal(false);
  }

  // State to hold the tests data
  const [tests, setTests] = useState([]);

  // Fetch mocktests data from the server
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("http://localhost:8000/mock/mocktests");
        const data = await response.data;
        console.log(data);
        setTests(data.data || []); 
        // Make sure to access 'data' key in the response
        console.log(data.data);
        setIsloading(false);
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      }finally{
        // setIsloading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
    {showModal && <StartTestModal showModal={closeModal} confirmation={confirmationModal} id={id}/>}
    <div className="mocktestmaincontainer">
      {isloading && <Loading />}
      
      <h1 className="mocktestheader">Available Mocktests</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="showtests">
          {
            // If there are no tests available, display a message
            (tests===undefined) ? <h2>No tests available</h2>

            :
            tests.map((test, index) => {
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
                            setId(test._id);
                            startTest();
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
            })
          }
          
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AvailableMocktests;
