import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import premiumSign from '../../../src/assets/star.jpg'
import usePremiumUser from '../../Hooks/usePremiumUser';
const Article = ({ aNews }) => {
    const highlightDescription = aNews?.description?.length > 70 ? aNews.description.slice(0, 70) + '...' : aNews?.description;
    const isPremiumUser = usePremiumUser();
    return (
        <div className={`${aNews.isPremium ? 'bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300 h-[650px] p-6 rounded-md relative shadow-md' : 'p-6 h-[650px] rounded-md bg-gray-400 relative shadow-md'}`}>
            {
                aNews.isPremium && <img className='w-8 -mt-3 rounded-full right-4 bg-neutral absolute' src={premiumSign} alt="" />
            }
            <img src={aNews.image} alt="" className=" w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold">{aNews.headline}</h2>
            </div>
            <p>{highlightDescription} </p>
            <p><span className='font-bold'>Publisher Name : </span>{aNews.publisher}</p>
            {
                isPremiumUser && aNews.isPremium ?
                <>
                <Link to={`/newsDetails/${aNews._id}`}><button className='btn btn-primary absolute bottom-1'>Details</button></Link></> 
                :
                <Link to={`/newsDetails/${aNews._id}`}><button disabled={aNews.isPremium} className='btn btn-primary absolute bottom-1'>Details</button></Link>

            }
        </div>
    );
};

export default Article;
Article.propTypes = {
    aNews: PropTypes.object
}