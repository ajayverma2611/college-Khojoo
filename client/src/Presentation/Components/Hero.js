import heroimg from '../Assests/hero.png';
import '../Styles/Hero.css';

const Hero = () =>{
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Your future starts with the right choice. Let us guide you to the path that fits you best.</h1>
                <button className="herobutton">Find you Path</button>
            </div>
            <div className="hero-right">
                <img src={heroimg} at="hero"/>
            </div>
        </div>
    )
}



export default Hero;