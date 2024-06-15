import Faq from "./Faq";
import PermanentPremiumUsers from "./PermanentPremiumUsers";
import Plans from "./Plans";
import TrendingNews from "./TrendingNews";
import UsersStatictics from "./UsersStatictics";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-313px)] pt-16">
            <TrendingNews></TrendingNews>
            <UsersStatictics></UsersStatictics>
            <Plans></Plans>
            <PermanentPremiumUsers></PermanentPremiumUsers>
            <Faq></Faq>
        </div>
    );
};

export default Home;