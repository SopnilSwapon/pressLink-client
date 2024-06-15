import AdimAreaChart from "./AdimAreaChart";
import PublisherPieChart from "./PublisherPieChart";

const AdminHome = () => {
    return (
        <div>
            <h2>admin home pages</h2>
            <PublisherPieChart></PublisherPieChart>
            <AdimAreaChart></AdimAreaChart>
        </div>
    );
};

export default AdminHome;