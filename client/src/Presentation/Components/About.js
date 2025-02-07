import '../Styles/About.css';
import about from '../Assests/about.png';



const About = () => {
    return (
        <div className="about">
            <img src={about} alt="about"/>
            <div className="about-right">
                <h1 className="heading">About Us</h1>
                <p className="explanation">We help students navigate college admissions by offering personalized recommendations based on their JEE Mains and other competitive exam scores. Our platform also provides mock tests with detailed explanations to help students prepare effectively. Whether you're aiming for top colleges or improving your scores, we're here to support your journey.</p>
            </div>
        </div>
    );
}

export default About;