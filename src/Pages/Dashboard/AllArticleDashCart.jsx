import PropTypes from 'prop-types'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const AllArticleDashCart = ({ news, refetch }) => {
    const axiosPublic = useAxiosPublic();
    const handleApprove = async () => {
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
                        .then(res => {
                            console.log(res.data);
                        })
                        .catch(error => {
                            console.log(error.message);
                        })

                }
                refetch();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleDelete = () => {
        const filter = { date: news.date, author_email: news.author_email }
        axiosPublic.delete(`/news/remove`, filter)
            .then(res => {
                console.log(res);
                if(res.data.newsResult.deletedCount>0 && res.data.addedResult.deletedCount>0){

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Deleted successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch();
            })
            .catch(error => {
                console.log(error.message);
            })
    };
    const handleDecline = (e) =>{
        e.preventDefault();
        const reason = e.target.reason.value;
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
            status: 'Decline',
            reason: reason,

        }
        axiosPublic.put(`/added/news/${news._id}`, updateNews)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleReload = () =>{
        window.location.reload();
    }
return (
    <div className="flex flex-col p-2 bg-gray-300 w-full mt-10 rounded-md">
        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src={news.author_image} />
        <div className="flex-1 my-4">
            <p className='text-xl font-semibold pb-1'>{news.headline}</p>
            <p>Author : {news.author_name}</p>
            <p>Email : {news.author_email}</p>
            <p>Publisher : {news.publisher}</p>
            <p>Date : {news.date}</p>
            <p>Status : {news.status}</p>
        </div>
        <div className="grid grid-cols-2  opacity-70 p-3 gap-3 border-t-2 ">
            <button disabled={news.status === 'Approved'} onClick={handleApprove} className="btn btn-success text-white btn-sm">Approve</button>
            <button className="btn btn-outline btn-secondary btn-sm">Premium</button>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} disabled={news.status === 'Approved' || news.status === "Decline"} className="btn btn-warning text-white btn-sm">Decline</button>
            <button onClick={handleDelete} className="btn btn-error text-white btn-sm">Delete</button>
        </div>
<dialog id="my_modal_1" className="modal">
<form onSubmit={handleDecline} method="dialog">
  <div className="modal-box">
    <div className="modal-action">
      <div>
      <button onClick={handleReload} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <textarea name='reason' placeholder="Reason" className="textarea block textarea-bordered textarea-md w-full pr-20"></textarea>
      <button className="btn mt-2">Submit</button>
      </div>
    </div>
  </div>
  </form>
</dialog>
    </div>
);
};

export default AllArticleDashCart;
AllArticleDashCart.propTypes = {
    news: PropTypes.object,
    refetch: PropTypes.func
}
