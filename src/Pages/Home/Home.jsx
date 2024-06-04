import Plans from "./Plans";
import TrendingNews from "./TrendingNews";
import UsersStatictics from "./UsersStatictics";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-313px)] text-red-500 pt-16">
            <TrendingNews></TrendingNews>
            <UsersStatictics></UsersStatictics>
            <Plans></Plans>
        </div>
    );
};

export default Home;