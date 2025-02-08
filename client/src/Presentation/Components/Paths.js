import '../Styles/Paths.css';
import { useEffect, useState } from 'react';

const Path= ({key,path}) =>{
    return (
        <div className="path">
            <h2>{path.name}</h2>
            <div className="path-infor">
                <h2>Duration</h2>
                <p className="tag">{path.duration}</p>
            </div>
            <div className="path-infor">
                <h2>Months</h2>
                {path.months.map((month,index)=>{
                    return <p key={index} className="tag">{month}</p>
                })}
            </div>
            <h1 className="path-explanation">{path.description}</h1>
        </div>
    )
}

const Paths = () =>{
    const paths = [
        {
            name: "JEE Mains",
            duration: "3 hours",
            months: ["January", "April"],
            description: "JEE Main is conducted by the National Testing Agency (NTA) for admission to undergraduate engineering programs at NITs, IIITs, and other centrally funded technical institutions. It is also the qualifying exam for JEE Advanced, which is required for admission to IITs.",
            subjects: [
                { name: "Physics", questions: 25 },
                { name: "Chemistry", questions: 25 },
                { name: "Mathematics", questions: 25 }
            ],
            marks: 300,
            correctOne: "+4",
            wrongOne: "-1",
            preparationTime: "6-12 months"
        },
        {
            name: "NEET UG",
            duration: "3 hours 20 minutes",
            months: ["May"],
            description: "The National Eligibility cum Entrance Test (NEET) is the entrance exam for admission to undergraduate medical courses such as MBBS and BDS in government and private medical colleges across India.",
            subjects: [
                { name: "Physics", questions: 45 },
                { name: "Chemistry", questions: 45 },
                { name: "Biology", questions: 90 }
            ],
            marks: 720,
            correctOne: "+4",
            wrongOne: "-1",
            preparationTime: "8-12 months"
        },
        {
            name: "CLAT",
            duration: "2 hours",
            months: ["May"],
            description: "The Common Law Admission Test (CLAT) is an entrance exam for admission to undergraduate and postgraduate law programs in various National Law Universities (NLUs) across India.",
            subjects: [
                { name: "English", questions: 28 },
                { name: "Current Affairs & General Knowledge", questions: 35 },
                { name: "Logical Reasoning", questions: 30 },
                { name: "Legal Aptitude", questions: 35 },
                { name: "Quantitative Techniques", questions: 22 }
            ],
            marks: 200,
            correctOne: "+1",
            wrongOne: "-0.25",
            preparationTime: "6-9 months"
        },
        {
            name: "CUCET",
            duration: "2 hours",
            months: ["May-June"],
            description: "The Central Universities Common Entrance Test (CUCET) is conducted for admission to various undergraduate and postgraduate programs in participating central universities across India.",
            subjects: [
                { name: "General Knowledge", questions: 25 },
                { name: "English", questions: 25 },
                { name: "Mathematics", questions: 25 },
                { name: "Logical Reasoning", questions: 25 },
                { name: "Subject-Specific Topics", questions: 25 }
            ],
            marks: 200-300,
            correctOne: "+1",
            wrongOne: "-0.25",
            preparationTime: "3-6 months"
        },
        {
            name: "UPSC Civil Services Exam",
            duration: "6 hours (Prelims) + Mains + Interview",
            months: ["June (Prelims)", "September (Mains)"],
            description: "The Union Public Service Commission (UPSC) Civil Services Exam is one of the toughest competitive exams in India. It is conducted for recruitment to various civil services posts like IAS, IPS, and IFS in the Indian government.",
            subjects: [
                { name: "General Studies (Prelims)", questions: 100 },
                { name: "CSAT (Prelims)", questions: 80 },
                { name: "General Studies (Mains)", questions: 20 },
                { name: "Optional Subject (Mains)", questions: "2 papers" }
            ],
            marks:["400 (Prelims)", "1750 (Mains)","Interview marks vary"],
            correctOne: "+2",
            wrongOne: "-0.66",
            preparationTime: "1-2 years"
        }
    ];
    

    const[pathdata, setPathData] = useState(paths);

    useEffect(() => {
        const handleResize = () => {
            // Check the current window width
            if (window.innerWidth <= 600) {
                setPathData(paths.slice(0, 2));  // Adjust the paths based on the screen size
            } else {
        setPathData((paths.length>4) ? paths.slice(0,4) : paths)
            }
        };

        // Run handleResize initially
        handleResize();

        // Add event listener for window resizing
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);  // The empty dependency array ensures this effect runs once when the component mounts


    useEffect(()=>{
        if(window.innerWidth>600){
        setPathData((paths.length>4) ? paths.slice(0,4) : paths)
        }
    },[])

    const showMorePaths = () => {
        if(pathdata.length!=paths.length){
            setPathData(paths.slice(0,pathdata.length+1));
        }
    }

    
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
                <div className="paths-cont">
                    {pathdata.map((pat,index)=>{
                        return (
                            <Path key={index} path={pat}/>
                        )
                    })}
                </div>
            </div>
            {
                (pathdata.length===paths.length) ? null : <button id="path-show-btn" onClick={showMorePaths} className="herobutton">Show more</button>
            }
        </div>
    )

}



export default Paths;