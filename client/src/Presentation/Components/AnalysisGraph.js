import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import axios from "axios";


const mockTestData = [
  { test: 1, scoredMarks: 150 },
  { test: 2, scoredMarks: 200 },
  { test: 3, scoredMarks: 187 },
  { test: 4, scoredMarks: 220 },
  { test: 5, scoredMarks: 180 },
  { test: 6, scoredMarks: 250 },
  { test: 7, scoredMarks: 230 },
  { test: 8, scoredMarks: 275 },
  { test: 9, scoredMarks: 260 },
  { test: 10, scoredMarks: 300 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#fff",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <p style={{ fontWeight: "bold", margin: 0 }}>Test {payload[0].payload.test}</p>
        <p style={{ color: "#333", margin: 0 }}>scoredMarks: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

// Function to return a color based on previous data
const getStrokeColor = (data, index) => {
  if (index === 0) return "#00C49F"; // First point, default to green
  return data[index].scoredMarks > data[index - 1].scoredMarks ? "#00C49F" : "#FF4D4D";
};

const PerformanceChart = () => {
  const id_data = useSelector((state) => state.user.data._id);

  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("http://localhost:8000/mock/attemptedmocktests",
            {id : id_data}
        );
        const data = await response.data;
        console.log(data);
        if(data.error!=true){
            setdata(data); // Make sure to access 'data' key in the response
        }
    } catch (error) {
        console.error("Error fetching mock tests:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto", textAlign: "center", padding: "20px", background: "#fff", borderRadius: "12px", boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Mock Test Performance</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="test" 
            tickCount={mockTestData.length} 
            label={{ value: "Test Number", position: "insideBottom", offset: -5 }} 
            stroke="#666"
          />
          <YAxis 
            domain={[0, 300]} 
            ticks={[0, 50, 100, 150, 200, 250, 300]} 
            label={{ value: "Marks", angle: -90, position: "insideLeft" }} 
            stroke="#666"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />

          {/* Single Line with dynamic stroke */}
          <Line
            type="monotone"
            dataKey="scoredMarks"
            strokeWidth={3}
            stroke="#00C49F"
            dot={{ r: 6, strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 8 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Analysis Box */}
      {/* <div style={{
        marginTop: 20,
        padding: "15px",
        borderRadius: "10px",
        background: "white",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        textAlign: "left",
        display: "inline-block",
        minWidth: "200px"
      }}>
        <h4 style={{ color: "#00C49F", marginBottom: "10px" }}>Analysis</h4>
        <p><strong>Attempted:</strong> {mockTestData.length}</p>
        <p><strong>Max scoredMarks:</strong> {Math.max(...mockTestData.map(d => d.score))}</p>
      </div> */}
    </div>
  );
};

export default PerformanceChart;
