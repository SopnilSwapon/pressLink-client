import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import moment from "moment/moment";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const AllArticleDashCart = ({news, refetch}) => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');

    const handleApprove = async () =>{
        console.log("clicked approved button");
        const newNews = {
        headline: news.headline,
        publisher: news.publisher,
        image: news.image,
        description: news.description,
        tags: news.tags,
        date: date,
        author_email: user?.email,
        author_image: user?.photoURL,
        author_name: user?.displayName
    }
    console.log(newNews);
    axiosPublic.post('/news/approved', newNews)
    .then(res =>{

        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Approved successful`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
        }
    })
    .catch(error=>{
        console.log(error.message);
    })
    }
    
    return (
        <div className="flex flex-col justify-center bg-gray-400 w-full  mx-3 mt-10 text-center rounded-md md:w-96 lg:w-80 xl:w-64">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={news.author_image} />
            <div className="flex-1 my-4">
                <p className="text-center uppercase">{news.headline}</p>

                {/* <p>Visual Designer</p> */}
            </div>
            <div className="flex items-center justify-center p-3 space-x-1 border-t-2 ">
                <button onClick={handleApprove} className="btn btn-success text-white btn-sm">Approve</button>
                <button className="btn btn-outline btn-secondary btn-sm">Premium</button>

                <button className="btn btn-error text-white btn-sm">Decline</button>
            </div>
        </div>
    );
};

export default AllArticleDashCart;
AllArticleDashCart.propTypes = {
    news: PropTypes.object
}
