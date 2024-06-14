import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const NewsDetails = () => {
    const _id = useParams();
    const axiosPublic = useAxiosPublic();
    const {data:news={}} = useQuery({
        queryKey: ['news'],
        queryFn: async () =>{
            const res = await axiosPublic(`/news/one/${_id?.id}`);
            return res.data
        }
    })
    console.log(news);
    return (
        <div className={`${news.isPremium ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-24 min-h-[calc(100vh-290px)]' : 'pt-24 min-h-[calc(100vh-290px)]'}`}>
        <div>
             {/* <Helmet>
            <title>VenueHub || details </title>
          </Helmet> */}
            <h2 className="text-3xl font-bold text-center">{news.headline}</h2>
        <div className="flex flex-col mt-5 md:flex-row lg:flex-row w-full mx-auto">
                <figure><img  className="flex-1 ml-4 w-full !rounded-lg md:w-[600px] h-full" src={news.image} alt="" /></figure>
                <div className="card-body md:w-1/2">
                                        <p>{news.description}</p>
                    <div>
                    <h2 className="card-title  text-xl font-bold">
                       Publisher : {news.publisher}
                    </h2>
                        <div className='font-bold'>
                        </div>
                        <div className="flex">
                        {
                            news?.tags?.map((tag, idx) => <p className="border-none underline" key={idx}>#{tag}</p>)
                        }
                        </div>
                    </div>
                    <div className='lg:flex'>
                    <p className='font-bold'><span>Author : </span> {news.author_name}</p>
                    <p className='font-bold'><span>Email : </span> {news.author_email}</p>
                    </div>
                    <p className='font-bold'><span>Date : </span> {news.date}</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default NewsDetails;