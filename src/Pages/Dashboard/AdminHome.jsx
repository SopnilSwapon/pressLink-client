import AdimAreaChart from "./AdimAreaChart";
import LineChart from "./LineChart";
import PublisherPieChart from "./PublisherPieChart";

const AdminHome = () => {
    return (
        <div>
            <h2 className="text-3xl text-center mb-0 pb-0 font-bold mt-10">Comprehensive Analysis of Newspaper Publishers Market Share, Revenue Trends, and Earnings Comparison</h2>
           <div className="flex flex-col md:flex-row lg:flex-row max-w-6xl justify-center">
           <PublisherPieChart></PublisherPieChart>
           <AdimAreaChart></AdimAreaChart>
           </div>
            <div className="w-[90%] mx-auto mt-0 pt-0">
            <LineChart></LineChart>
            </div>
        </div>
    );
};

export default AdminHome;