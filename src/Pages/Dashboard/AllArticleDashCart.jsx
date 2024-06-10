import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import moment from "moment/moment";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const AllArticleDashCart = ({ news, refetch }) => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const handleApprove = async () => {
        console.log("clicked approved button");
        const newNews = {
            headline: news.headline,
            publisher: news.publisher,
            image: news.image,
            description: news.description,
            tags: news.tags,
            date: news.date,
            author_email: news.author_email,
            author_image: news.author_imag,
            author_name: news.author_name
        }
        console.log(newNews);
        axiosPublic.post('/news/approved', newNews)
            .then(res => {

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Approved successful`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const updateNews = {
                        headline: news.headline,
                        publisher: news.publisher,
                        image: news.image,
                        description: news.description,
                        tags: news.tags,
                        date: news.date,
                        author_email: news.author_email,
                        author_image: news.author_imag,
                        author_name: news.author_name,
                        status: 'Approved'
                    }
                    axiosPublic.put(`/added/news/${news._id}`, updateNews)
                    .then(res =>{
                        console.log(res.data);
                    })
                    .catch(error =>{
                        console.log(error.message);
                    })

                }
                refetch();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleDeclineNews = () => {
        axiosPublic.delete(`/added/news/${news._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount) {
                    console.log('deleted successful');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `declined successful`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex flex-col justify-center bg-gray-300 w-full  mx-3 mt-10 text-center rounded-md md:w-96 lg:w-80 xl:w-64">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src={news.author_image} />
            <div className="flex-1 my-4">
                <p className="text-center uppercase">{news.headline}</p>

                {/* <p>Visual Designer</p> */}
            </div>
            <div className="flex items-center justify-center p-3 space-x-1 border-t-2 ">
                <button disabled={news.status === 'Approved'} onClick={handleApprove} className="btn btn-success text-white btn-sm">{news.status}</button>
                <button  className="btn btn-outline btn-secondary btn-sm">Premium</button>

                <button onClick={handleDeclineNews} className="btn btn-error text-white btn-sm">Decline</button>
            </div>
        </div>
    );
};

export default AllArticleDashCart;
AllArticleDashCart.propTypes = {
    news: PropTypes.object
}
