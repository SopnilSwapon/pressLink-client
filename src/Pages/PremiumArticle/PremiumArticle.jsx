import { useQuery } from '@tanstack/react-query';
import premiumSign from '../../../src/assets/star.jpg'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import usePremiumUser from '../../Hooks/usePremiumUser';
const PremiumArticle = () => {
    const axiosPublic = useAxiosPublic();

    const {data: premiumArticle=[]} = useQuery({
        queryKey: ['premiumArticle'], 
        queryFn: async () =>{
            const res = await axiosPublic('/news/premium');
            return res.data
        }
    });
    const isPremiumUser = usePremiumUser();

    return (
       <div>
        <h2 className="pt-24 text-3xl text-center font-bold pb-10">Our Premium Articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            premiumArticle.map(art => <div key={art._id} className="glass md:w-96 relative opacity-90 bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300 ">
                <img className='w-12 -mt-3 rounded-full -right-4 bg-neutral absolute' src={premiumSign} alt="" />
                <figure><img className='md:h-[290px] rounded-lg' src={art.image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{art.headline}</h2>
                    <p>{art.description?.length > 70 ? art.description.slice(0, 70) + '...' : art.description}</p>
                    <p>Publisher: {art.publisher}</p>
                    <div className="card-actions py-4 justify-normal">
                    {
                isPremiumUser && art.isPremium ?
                <>
                <Link to={`/newsDetails/${art._id}`}><button className='btn btn-primary absolute bottom-2'>Details</button></Link></> 
                :
                <Link to={`/newsDetails/${art._id}`}><button disabled={art.isPremium} className='btn btn-primary absolute bottom-2'>Details</button></Link>

            }
                    </div>
                </div>
            </div>)
        }
        </div>
       </div>
    );
};

export default PremiumArticle;