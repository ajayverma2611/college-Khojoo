import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Paths from "../Components/Paths";
import FindCollege from "../Components/FindCollege";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Home = () =>{
    useEffect(()=>{
        const data = localStorage.getItem("user");
        console.log(data);
    },[]);
    return (
    <div >
        <Hero/>
        <About/>
        <div className="paths">
            <div className="heading-cont">
                <h1 className="heading">Paths after +12</h1>
                <Paths/>
            </div>
        </div>
        <FindCollege/>
        <Footer/>
    </div>
    )
}

export default Home;