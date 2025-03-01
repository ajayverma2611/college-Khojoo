import '../Styles/Navbar.css';
import profile from '../Assests/profile.svg';
import home from '../Assests/navbar-icons/home.svg';
import exam from '../Assests/navbar-icons/exams.svg';
import materials from '../Assests/navbar-icons/materials.svg';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LiaUniversitySolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { persistor } from '../../Application/StateManagement/store';
import { resetUserData } from '../../Application/StateManagement/slices/UserSlice';
import { resetPrivateColleges } from '../../Application/StateManagement/slices/PrivateColleges';
import { resetTestData } from '../../Application/StateManagement/slices/MocktestSlice';
import { resetTimer } from '../../Application/StateManagement/slices/TimerSlice';
import { clearBooks } from '../../Application/StateManagement/slices/BookSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const dropdownRef = useRef(null);
    const [navbarActive, setNavbarActive] = useState("");
    const sidebarRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }

            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const path = window.location.pathname;

        if (path.includes("/home")) {
            setNavbarActive("home");
        } else if (path === "/tests") {
            setNavbarActive("tests");
        } else if (path === "/materials") {
            setNavbarActive("materials");
        } else if (path === "/entrancexams") {
            setNavbarActive("entrancexams");
        } else if (path === "/helpandfeedback") {
            setNavbarActive("helpandfeedback");
        }
        console.log(path);
    }, [window.location.pathname]); // Add path as a dependency

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8000/auth/logout", {}, { withCredentials: true });
            
            // Clear session from frontend
            dispatch(resetUserData());
            dispatch(resetPrivateColleges());
            dispatch(resetTestData());
            dispatch(resetTimer());
            dispatch(clearBooks());

            persistor.purge().then(() => {
                navigate("/signin");
            });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const getLinkClass = (route) => navbarActive === route ? "nav-link nav-active" : "nav-link";

    return (
        <nav>
            {/* Sidebar */}
            <div ref={sidebarRef} className={`sidebar${showSidebar ? " sidebar-active" : ""}`}>
                <div className="sidebar-btn">
                    <button onClick={() => setShowSidebar(false)}>
                        <MdCancel color="#05B97D" size="1.5rem" />
                    </button>
                </div>
                <div className={getLinkClass("home")}>
                    <img src={home} alt="Home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className={getLinkClass("tests")}>
                    <img src={exam} alt="Exams" />
                    <Link to="/tests">Tests</Link>
                </div>
                <div className={getLinkClass("materials")}>
                    <img src={materials} alt="Materials" />
                    <Link to="/materials">Materials</Link>
                </div>
                <div className={getLinkClass("entrancexams")}>
                    <LiaUniversitySolid className={"onHover"+(navbarActive==="entrancexams"? " hovered-on-hover":"")} />
                    <Link to="/entrancexams">Entrance Tests</Link>
                </div>
                <div className={getLinkClass("helpandfeedback")}>
                    <Link to="/helpandfeedback">? Help</Link>
                </div>
            </div>

            {/* Menu Button (for mobile view) */}
            <div className="menu-btn">
                <h1 onClick={() => setShowSidebar(true)}>☰</h1>
            </div>

            {/* Logo */}
            <div className="logo">
                <h1>Khojo College</h1>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <div className={getLinkClass("home")}>
                    <img src={home} alt="Home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className={getLinkClass("tests")}>
                    <img src={exam} alt="Exams" />
                    <Link to="/tests">Tests</Link>
                </div>
                <div className={getLinkClass("materials")}>
                    <img src={materials} alt="Materials" />
                    <Link to="/materials">Materials</Link>
                </div>
                <div className={getLinkClass("entrancexams")}>
                    <LiaUniversitySolid className="onHover" />
                    <Link to="/entrancexams">Entrance Tests</Link>
                </div>
                <div className={getLinkClass("helpandfeedback")}>
                    <Link to="/helpandfeedback">? Help</Link>
                </div>
            </div>

            {/* Profile Dropdown */}
            <div className="prof-btn" ref={dropdownRef}>
                <img
                    onClick={() => setShowDropdown(!showDropdown)}
                    src={profile}
                    alt="Profile"
                />
                <div className={`nav-dropdown${showDropdown ? " drop-active" : ""}`}>
                    <a href="/profile">Profile</a>
                    <a onClick={handleLogout} href="/signin">Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
