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


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const dropdownRef = useRef(null);
    const sidebarRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }

            // Close sidebar when clicked outside of sidebar
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };

        // Add event listener to detect clicks outside of dropdown and sidebar
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8000/auth/logout", {}, { withCredentials: true });
            // Clear session from frontend
            navigate("/signin"); 
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };


    return (
        <nav>
            {/* Sidebar */}
            <div ref={sidebarRef} className={"sidebar" + (showSidebar ? " sidebar-active" : "")}>
                <div className="sidebar-btn">
                    <button onClick={() => setShowSidebar(false)}>
                        <MdCancel color="#05B97D" size="1.5rem" />
                    </button>
                </div>
                <div className="nav-link">
                    <img src={home} alt="Home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className="nav-link">
                    <img src={exam} alt="Exams" />
                    <Link to="/tests">Tests</Link>
                </div>
                <div className="nav-link">
                    <img src={materials} alt="Materials" />
                    <Link to="/materials">Materials</Link>
                </div>
                <div className="nav-link">
                    <LiaUniversitySolid className="onHover"/>
                    <Link to="/entrancexams">Entrance Tests</Link>
                </div>
                <div className="nav-link">
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
                <div className="nav-link">
                    <img src={home} alt="Home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className="nav-link">
                    <img src={exam} alt="Exams" />
                    <Link to="/tests">Tests</Link>
                </div>
                <div className="nav-link">
                    <img src={materials} alt="Materials" />
                    <Link to="/materials">Materials</Link>
                </div>
                <div className="nav-link">
                    <LiaUniversitySolid className="onHover"/>
                    <Link to="/entrancexams">Entrance Tests</Link>
                </div>
                <div className="nav-link">
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
                <div className={"nav-dropdown" + (showDropdown ? " drop-active" : "")}>
                    <a href="/profile">Profile</a>
                    <a onClick={handleLogout} href="/signin">Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;