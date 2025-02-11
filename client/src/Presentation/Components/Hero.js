import heroimg from '../Assests/hero.png';
import '../Styles/Hero.css';
import pic1 from '../Assests/hero/pic1.jpg';
import pic2 from '../Assests/hero/pic2.jpg';
import pic3 from '../Assests/hero/pic3.jpg';
import pic4 from '../Assests/hero/pic4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () =>{

    useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    },[])
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 data-aos="fade-up">“Your future starts with the right choice. Let us guide you to the path that fits you best.”</h1>
                <button data-aos="fade-up"  data-aos-delay="400" className="herobutton">Find you Path</button>
            </div>
            <div className="hero-right">
                <div className="hero-img">
                    <img data-aos="fade-right" data-aos-delay="" className="pic1" src={pic1}  alt="hero" />
                    <img data-aos="fade-up" data-aos-delay="200"  className="pic2" src={pic2} alt="hero" />
                </div>
                <div className="hero-img">
                    <img data-aos="fade-down" data-aos-delay="400" className="pic3" src={pic3} alt="hero" />
                    <img data-aos="fade-left" data-aos-delay="600" className="pic4" src={pic4} alt="hero" />
                </div>
            </div>
        </div>
    )
}



export default Hero;