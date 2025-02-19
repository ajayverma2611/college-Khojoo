import "../Styles/PrivateUniversity.css";
import {useDispatch, useSelector} from 'react-redux';
import { setPrivateColleges } from '../../Application/StateManagement/slices/PrivateColleges';
import { useEffect, useState } from 'react';
import Loading from "./Loading";
const PrivateUniversity = () => {
  const [isloading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.privateColleges.data);
  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      const response = await fetch('https://khojo-college-server.vercel.app/auth/privateuniversities');
      const collegedata = await response.json();
      if(!data){
        console.log("Data not found");
      }
      console.log(collegedata);
      dispatch(setPrivateColleges(collegedata));
      setIsloading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isloading && <Loading />}
      <div className='private-university-main-container'>
      <div className='private-university-container'>
        <div className='private-university-header'>
          <h1>Entrance Exams after 12th (MPC students)</h1>
        </div>
        <div className="private-university-content">
          <table>
            <thead>
              <tr>
                <th>University</th>
                <th>Location</th>
                <th>Tier</th>
                <th>Course</th>
                <th>NIRF Ranking</th>
                <th>Entrance Exam</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.university}</td>
                  <td>{item.location}</td>
                  <td>{item.tier}</td>
                  <td>{item.course}</td>
                  <td>{item.nirf_ranking}</td>
                  <td>{item.entrance_exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivateUniversity;
