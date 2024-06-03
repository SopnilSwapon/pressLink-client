import TrendingNews from "./TrendingNews";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-313px)] text-red-500 pt-16">
            <TrendingNews></TrendingNews>
            {/* <h2 className="text-5xl">This is home page</h2> */}
        </div>
    );
};

export default Home;