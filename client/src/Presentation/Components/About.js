import '../Styles/About.css';
import about from '../Assests/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'   
        })
    },[])

    return (
        <div className="about">
            <img data-aos="fade-right" src={about} alt="about"/>
            <div className="about-right">
                <h1 data-aos="zoom-in" data-aos-delay="200" className="heading">About Us</h1>
                <p data-aos="zoom-in" data-aos-delay="200" className="explanation">We help students navigate college admissions by offering personalized recommendations based on their JEE Mains and other competitive exam scores. Our platform also provides mock tests with detailed explanations to help students prepare effectively. Whether you're aiming for top colleges or improving your scores, we're here to support your journey.</p>
            </div>
        </div>
    );
}

export default About;