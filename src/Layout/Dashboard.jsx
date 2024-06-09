import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa6";
import { SiAffinitypublisher } from "react-icons/si";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="min-h-screen w-64 bg-gray-200">
                <ul className="menu p-4 flex-col gap-y-3">
                    <li><NavLink to='allUsers'><FaUsers></FaUsers> All Users</NavLink></li>
                    <li><NavLink><FaBook></FaBook>Add Articles</NavLink></li>
                    <li><NavLink><SiAffinitypublisher></SiAffinitypublisher> Add Publisher</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;