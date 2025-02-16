import heroimg from '../Assests/hero.png';
import '../Styles/Hero.css';
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
                    <img data-aos="fade-right" data-aos-delay="" className="pic1" src="https://res.cloudinary.com/duyuxtpau/image/upload/v1739687194/znqgjrasxxjncrxwfsxr.webp"  alt="hero" />
                    <img data-aos="fade-up" data-aos-delay="200"  className="pic2" src="https://res.cloudinary.com/duyuxtpau/image/upload/v1739687196/sgsjaipl6jfu1znpyj5r.webp" alt="hero" />
                </div>
                <div className="hero-img">
                    <img data-aos="fade-down" data-aos-delay="400" className="pic3" src="https://res.cloudinary.com/duyuxtpau/image/upload/v1739687194/tqxe56tpx4hqxaumimod.webp" alt="hero" />
                    <img data-aos="fade-left" data-aos-delay="600" className="pic4" src="https://res.cloudinary.com/duyuxtpau/image/upload/v1739687194/qt4bdidydegwjfpfttov.webp" alt="hero" />
                </div>
            </div>
        </div>
    )
}



export default Hero;