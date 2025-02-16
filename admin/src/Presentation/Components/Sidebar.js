import '../Styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>College Khojo</h1>
            </div>
            <div className="sidebar-links">
                <a href="/dashboard" className="sidebar-link">Dashboard</a>
                <a href="/mockTests" className="sidebar-link">Mock Tests</a>
                <a href="/materials" className="sidebar-link">Materials</a>
                <a href="/help" className="sidebar-link">Help</a>

            </div>
        </div>
    );
}



export default Sidebar;