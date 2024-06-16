import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import MyArticleRow from "./MyArticleRow";

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
        <div className="overflow-x-auto bg-gray-300 pt-24 min-h-[calc(100vh-276px)]">
        <table className="table text-xl">
          {/* <Helmet>
            <title>Profile||Added</title>
          </Helmet> */}
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
      </div>
    );
};

export default MyArticle;