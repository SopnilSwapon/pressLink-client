import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'
import AllArticleDashCart from "./AllArticleDashCart";

const AllArticleDash = () => {
    const axiosPublic = useAxiosPublic();
    const {data:addedNews=[], refetch} = useQuery({
        queryKey: ['addedNews'],
        queryFn: async () =>{
            const res = await axiosPublic('/added/news')
            return res.data
        }
    });
    return (
        <section className="py-6">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-center uppercase">Development team</p>
                <h1 className="text-3xl font-bold text-center">The talented people behind the scenes</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                {
                    addedNews.map(news =><AllArticleDashCart
                        key={news._id}
                        news={news}
                        refetch={refetch}
                        ></AllArticleDashCart>)
                }

                </div>
            </div>
        </section>
    );
};

export default AllArticleDash;