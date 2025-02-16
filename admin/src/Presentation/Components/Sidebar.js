import '../Styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-heading">Sidebar</h2>
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