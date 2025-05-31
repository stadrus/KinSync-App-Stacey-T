import Content from "./Content"
import { useNavigate } from "react-router";

const Dashboard = () => {

    const navigate = useNavigate();
    const handleLogoutClick = () => {
    navigate ('../Home');
    };
    
    return(
        <div className="dashboard">
            <header className="dasboard-header">
                <button type='button' id="Logout" name="Logout" onClick={handleLogoutClick}>Logout</button>
            </header>
            <Content />
        </div>
    )
};

export default Dashboard; 