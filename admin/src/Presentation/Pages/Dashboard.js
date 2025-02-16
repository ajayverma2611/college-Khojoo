import Sidebar from '../Components/Sidebar';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h2 className="dashboard-heading">Dashboard</h2>
                <p>Welcome to the dashboard</p>
            </div>
        </div>
    )
}

export default Dashboard