import PropTypes from 'prop-types'
const Article = ({aNews}) => {
  const highlightDescription = aNews?.description?.length > 70 ? aNews.description.slice(0, 70) + '...' : aNews?.description;
    return (
        <div className="p-6 rounded-md shadow-md">
	<img src={aNews.image} alt="" className=" w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibol">{aNews.headline}</h2>
	</div>
	<p>{highlightDescription} </p>
</div>
    );
};

export default Article;
Article.propTypes = {
    aNews: PropTypes.object
}