import PropTypes from 'prop-types'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
const AllArticleDashCart = ({ news, refetch }) => {
    const [showModal, setShowModal] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { headline, publisher, date, isPremium, author_email, author_name, author_image, status, _id } = news;
    const handleApprove = async () => {
        let newNews = { ...news }
        console.log(newNews);
        delete newNews._id;
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
                        status: 'Approved'
                    }
                    axiosPublic.put(`/added/news/${_id}`, updateNews)
                        .then(res => {
                            console.log(res.data);
                            refetch();
                        })
                        .catch(error => {
                            console.log(error.message);
                        })


                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleDelete = (date, email) => {
        const filter = { date, author_email: email }
        console.log(date, headline);
        // To deleted news by using post method //
        axiosPublic.post(`/news/remove`, filter)
            .then(res => {
                console.log(res);
                if (res.data.newsResult.deletedCount > 0 && res.data.addedResult.deletedCount > 0) {
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
    const handleDecline = (e, id) => {
        e.preventDefault();
        console.log(id);
        const reason = e.target.reason.value;
        const updateNews = {
            status: 'Decline',
            reason: reason,

        }
        axiosPublic.put(`/added/news/${id}`, updateNews)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Declined successful`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch();
                setShowModal(false)

            })
            .catch(error => {
                console.log(error.message);
            })
    };
    const handlePremium = () =>{
        console.log("cliked");
        const premiumArticle = {
            isPremium: true
        }
        axiosPublic.put(`/added/news/${_id}`, premiumArticle)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `This News has taken premium`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(res.data);
                refetch();
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex flex-col p-2 bg-gray-300 w-full mt-10 rounded-md">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src={author_image} />
            <div className="flex-1 my-4">
                <p className='text-xl font-semibold pb-1'>{headline}</p>
                <p>Author : {author_name}</p>
                <p>Email : {author_email}</p>
                <p>Publisher : {publisher}</p>
                <p>Date : {date}</p>
                <p>Status : {status}</p>
            </div>
            <div className="grid grid-cols-2  opacity-70 p-3 gap-3 border-t-2 ">
                <button disabled={status === 'Approved'} onClick={handleApprove} className="btn btn-success text-white btn-sm">Approve</button>
                <button disabled={isPremium === true} onClick={handlePremium} className="btn btn-outline btn-secondary btn-sm">Premium</button>
                <button onClick={() => setShowModal(true)
                } disabled={status === 'Approved' || status === "Decline"} className="btn btn-warning text-white btn-sm">Decline</button>
                <button onClick={() => handleDelete(date, author_email)} className="btn btn-error text-white btn-sm">Delete</button>
            </div>

            {showModal &&
                <dialog open className="w-[96%] xl:w-auto h-3/4 bg-opacity-95 p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-lg z-30 overflow-y-auto">
                    <div className='bg-[#c5cce5f1] border shadow-lg h-full rounded-lg p-6 flex flex-col justify-around'>
                        <IoIosCloseCircle onClick={() => setShowModal(false)} className='absolute top-0 right-0 text-5xl text-red-700 hover:text-nexus-primary z-50 hover:opacity-80 transition-all duration-500 cursor-pointer' title='Close' />
                        <h3 className="text-center text-red-700 font-kreonSerif font-bold max-[430px]:text-lg text-2xl mb-4 md:mb-6">Give A Reason</h3>

                        <form onSubmit={(e) => handleDecline(e, _id)} className='flex flex-col items-center justify-between h-3/4 p-1'>
                            <textarea className='text-sm bg-transparent outline-0 border  w-4/5 h-3/4 p-2 rounded-lg' name="reason" />
                            <button className='btn btn-warning' type='submit'>Decline</button>
                        </form>
                    </div>
                </dialog>
            }
            {/* <dialog id="my_modal_1" className="modal">
                <form onSubmit={(e) =>handleDecline(e, _id)} method="dialog">
                    <div className="modal-box">
                        <div className="modal-action">
                            <div>
                                <span onClick={handleReload} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</span>
                                <textarea name='reason' placeholder="Reason" className="textarea block textarea-bordered textarea-md w-full pr-20"></textarea>
                                <button type='submit' className="btn mt-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </dialog> */}
        </div>
    );
};

export default AllArticleDashCart;
AllArticleDashCart.propTypes = {
    news: PropTypes.object,
    refetch: PropTypes.func
}
