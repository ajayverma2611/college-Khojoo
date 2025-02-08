import '../Styles/Navbar.css';
import profile from '../Assests/profile.svg';
import home from '../Assests/navbar-icons/home.svg';
import exam from '../Assests/navbar-icons/exams.svg';
import materials from '../Assests/navbar-icons/materials.svg';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const dropdownRef = useRef(null);
    const sidebarRef = useRef(null);

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

    return (
        <nav>
            {/* Sidebar */}
            <div ref={sidebarRef} className={"sidebar" + (showSidebar ? " sidebar-active" : "")}>
                <div className="sidebar-btn">
                    <button onClick={() => setShowSidebar(false)}>X</button>
                </div>
                <div className="nav-link">
                    <img src={home} alt="Home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className="nav-link">
                    <img src={exam} alt="Exams" />
                    <Link to="/tests">Exams</Link>
                </div>
                <div className="nav-link">
                    <img src={materials} alt="Materials" />
                    <Link to="/#">Materials</Link>
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
                <h1>College Khojo</h1>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <div className="nav-link">
                    <img src={home} alt="Home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className="nav-link">
                    <img src={exam} alt="Exams" />
                    <Link to="/tests">Exams</Link>
                </div>
                <div className="nav-link">
                    <img src={materials} alt="Materials" />
                    <Link to="/#">Materials</Link>
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
                    <a href="/#">Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;