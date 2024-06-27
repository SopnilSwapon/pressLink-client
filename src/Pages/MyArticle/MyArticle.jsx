import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import MyArticleRow from "./MyArticleRow";
import { Helmet } from "react-helmet-async";

const MyArticle = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {data:myData=[], refetch} = useQuery({
        queryKey: ["myData"],
        queryFn: async () =>{
            const res = await axiosPublic(`/news/some/${user.email}`);
            return res.data
        }
    })
    return (
        <div className="overflow-x-auto pt-24 min-h-[calc(100vh-276px)]">
       {
        myData?.length > 0 ?
        <table className="table text-xl">
        <Helmet>
          <title>PressLink || My Article</title>
        </Helmet>
        <thead>
          <tr className="text-xl">
            <th>Serial</th>
            <th>Headline</th>
            <th>Details</th>
            <th>Status</th>
            <th>IsPremium</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
         <tbody>
         {
           myData.map((news, index) => <MyArticleRow
              key={news._id}
               articleInfo={news}
               refetch={refetch}
               index={index}

               ></MyArticleRow>)
         }
       </tbody>
      </table>
      : 
      <p className="text-4xl text-red-600 md:text-6xl text-center m-14 font-bold">YOU HAVE NOT ADD <br /> NEWS YET <br /> <span className="text-black">Please Add News</span></p>

       }
      </div>
    );
};

export default MyArticle;