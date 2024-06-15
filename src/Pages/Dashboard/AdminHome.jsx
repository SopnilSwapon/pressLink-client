import AdimAreaChart from "./AdimAreaChart";
import LineChart from "./LineChart";
import PublisherPieChart from "./PublisherPieChart";

const AdminHome = () => {
    return (
        <div>
            <h2>admin home pages</h2>
            <PublisherPieChart></PublisherPieChart>
            <AdimAreaChart></AdimAreaChart>
            <LineChart></LineChart>
        </div>
    );
};

export default AdminHome;