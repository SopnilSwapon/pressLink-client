import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Article = ({ aNews }) => {
    const highlightDescription = aNews?.description?.length > 70 ? aNews.description.slice(0, 70) + '...' : aNews?.description;
    return (
        <div className="p-6 h-[650px] rounded-md relative shadow-md">
            <img src={aNews.image} alt="" className=" w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold">{aNews.headline}</h2>
            </div>
            <p>{highlightDescription} </p>
            <Link to={`/newsDetails/${aNews._id}`}><button className='btn btn-primary absolute bottom-1'>Details</button></Link>
        </div>
    );
};

export default Article;
Article.propTypes = {
    aNews: PropTypes.object
}