import { useQuery} from '@tanstack/react-query'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Article from './Article';

const AllArticle = () => {

    const axiosPublic = useAxiosPublic();
    const {data:news=[]} = useQuery({
      queryKey: ['news'],
      queryFn: async () =>{
        const res = await axiosPublic.get('/news');
        return res.data
      }
    })
    return (
        <div className='min-h-[calc(100vh-313px)] pt-24'>
            <h2>coming soon{news.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                news.map(aNews=><Article
                key={aNews._id}
                aNews={aNews}
                ></Article>)
            }
            </div>
        </div>
    );
};

export default AllArticle;