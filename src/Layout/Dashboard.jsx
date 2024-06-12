import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa6";
import { SiAffinitypublisher } from "react-icons/si";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="min-h-screen w-64 bg-gray-200">
                <ul className="menu p-4 flex-col gap-y-3">
                    <li><NavLink to='allUsers'><FaUsers></FaUsers> All Users</NavLink></li>
                    <li><NavLink to='allArticleDash'><FaBook></FaBook>All Articles</NavLink></li>
                    <li><NavLink to='addPublisher'><SiAffinitypublisher></SiAffinitypublisher> Add Publisher</NavLink></li>
                    <li><NavLink to='/'><FaHome></FaHome> to Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;