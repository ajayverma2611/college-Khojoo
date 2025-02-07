import '../Styles/FindCollege.css';
import { useEffect, useState } from 'react';

const College = ({key,index,college}) =>{
    return (
        <div key={key} className="college">
            <div style={{display:"flex",flexDirection:"column"}}>
                <h1 className="college-course">{college["Academic Program Name"]}</h1>
                <div style={{display:"flex",alignItems:"center",gap:"30px",flexWrap:"wrap",paddingTop:"20px"}}>
                    <h1 className="college-name">{college.Institute}</h1>
                    <div className="college-info">
                        <h1 className="tag">{college.State}</h1>
                        <h1 className={"tag"+ (college.Tier=="2" ? " tag-sad" : (college.Tier=="3" ? " tag-poor":"" ))}>Tier {college.Tier}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}



const FindCollege = () =>{
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCat, setSelectedCat] = useState("");
    const [collegs, setCollegs] = useState([]);
    const handleChangeOption = (e) => {
        setSelectedOption(e.target.value);
    };

    const colleges = [
        {"Institute":"Assam University, Silchar","Academic Program Name":"Electronics and Communication Engineering (4 Years, Bachelor of Technology)","Quota":"AI","Seat Type":"SC","Gender":"Gender-Neutral","Opening Rank":7537,"Closing Rank":8263,"Tier":"3","State":"Assam","Exam Type":"JEE Mains","Percentile":96.04,"Marks":258.68},{"Institute":"Assam University, Silchar","Academic Program Name":"Agricultural Engineering (4 Years, Bachelor of Technology)","Quota":"AI","Seat Type":"EWS","Gender":"Gender-Neutral","Opening Rank":9696,"Closing Rank":10211,"Tier":"3","State":"Assam","Exam Type":"JEE Mains","Percentile":94.89,"Marks":249.47},{"Institute":"Assam University, Silchar","Academic Program Name":"Electronics and Communication Engineering (4 Years, Bachelor of Technology)","Quota":"HS","Seat Type":"EWS","Gender":"Gender-Neutral","Opening Rank":13132,"Closing Rank":13527,"Tier":"3","State":"Assam","Exam Type":"JEE Mains","Percentile":93.24,"Marks":241.18},{"Institute":"Assam University, Silchar","Academic Program Name":"Agricultural Engineering (4 Years, Bachelor of Technology)","Quota":"AI","Seat Type":"OPEN","Gender":"Gender-Neutral","Opening Rank":49868,"Closing Rank":58067,"Tier":"3","State":"Assam","Exam Type":"JEE Mains","Percentile":61.93,"Marks":163.87},{"Institute":"Assam University, Silchar","Academic Program Name":"Computer Science and Engineering (4 Years, Bachelor of Technology)","Quota":"AI","Seat Type":"OPEN","Gender":"Gender-Neutral","Opening Rank":27106,"Closing Rank":37990,"Tier":"3","State":"Assam","Exam Type":"JEE Mains","Percentile":81,"Marks":198.01},{"Institute":"Assam University, Silchar","Academic Program Name":"Electronics and Communication Engineering (4 Years, Bachelor of Technology)","Quota":"HS","Seat Type":"OPEN","Gender":"Gender-Neutral","Opening Rank":73085,"Closing Rank":80526,"Tier":"3","State":"Assam","Exam Type":"JEE Mains","Percentile":49.74,"Marks":139.47},
    ]
    useEffect(()=>{
        setCollegs(colleges);
    },[])
    

    return (
        <div className="find-college">
            <h1 id="find-heading" className="heading">Find Your Best College</h1>
            <form id="find-form">
                <select
                    id="dropdown"
                    name="exam"
                    value={selectedOption}
                    onChange={handleChangeOption}
                >
                    <option value="" disabled>Select Exam</option>
                    <option value="JEE Mains">JEE Mains</option>
                    <option value="Boards">Boards</option>
                </select>
                <select
                    id="dropdown"
                    name="location"
                    value={selectedLocation}
                    onChange={(e) => { setSelectedLocation(e.target.value) }}
                >
                    <option value="" disabled>Select Location</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                </select>

                {
                    selectedOption=="JEE Mains" ?
                        <>
                            <select
                                id="dropdown"
                                name="basedon"
                                value={selectedLocation}
                                onChange={(e)=>{setSelectedLocation(e.target.value)}}
                            >
                                <option value="Marks" disabled>Marks</option>
                                <option value="Percentile">Percentile</option>
                                <option value="Ranking">Ranking</option>
                            </select>
                            <input id="dropdown" type="text" name="value" placeholder="Enter the value" />
                        </>
                    : null
                }
                
            </form>
            <div className="college-cont">
                {collegs.map((college,index)=>{
                    return (
                        <College key={index} college={college} index={index}/>
                    )
                })}
            </div>
        </div>
    )
}



export default FindCollege;