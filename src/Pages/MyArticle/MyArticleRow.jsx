import PropTypes from 'prop-types'
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
const MyArticleRow = ({articleInfo, refetch, index}) => {
  const [showModal, setShowModal] = useState(false);
  const {headline, status, reason, isPremium, date, author_email, _id } = articleInfo ;
  const axiosPublic = useAxiosPublic();
  const handleDelete = (date, email) => {
    const filter = { date, author_email: email }
    // To deleted news by using post method //
    axiosPublic.post(`/news/remove`, filter)
        .then(res => {
            console.log(res);
            if (res.data.newsResult.deletedCount > 0 || res.data.addedResult.deletedCount > 0) {
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
    
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{headline}</td>
        <td><button className="btn btn-sm">Details</button></td>       
        <td>
            <button className="btn btn-sm">{status}</button> <small className='text-red-500 underline' onClick={() => setShowModal(true)
                }>{status !== 'Pending' && reason ? 'Reason' : ''}</small>
           
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {showModal &&
                <dialog open className="w-[96%] xl:w-[40%] h-3/6 bg-opacity-95 p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-30 overflow-y-auto">
                    <div className='bg-[#c5cce5f1] border shadow-lg h-full rounded-lg p-6 flex flex-col justify-around'>
                        <IoIosCloseCircle onClick={() => setShowModal(false)} className='absolute top-0 right-0 text-5xl text-black hover:text-nexus-primary z-50 hover:opacity-80 transition-all duration-500 cursor-pointer' title='Close' />
                        <h3 className="text-center text-black font-kreonSerif font-bold max-[430px]:text-lg text-2xl mb-4 md:mb-6">Give A Reason</h3>

                        <form className='flex flex-col items-center justify-between h-3/4 p-1'>
                        <p>{reason}</p>
                        </form>
                    </div>
                </dialog>
            }
</td>
        <td><button className="btn btn-sm">{isPremium === true ? 'Yes' : 'No'}</button></td>       
        <td>
            <Link to={`/updateMyArticle/${_id}`}>
            <button className="btn btn-sm"><FaEdit></FaEdit></button>
            </Link>
            </td>       
        <td><button onClick={() => handleDelete(date, author_email)} className="btn btn-error text-white btn-sm">X</button></td>       
    </tr>
    );
};

export default MyArticleRow;
MyArticleRow.propTypes = {
    articleInfo: PropTypes.object,
    index: PropTypes,
    refetch: PropTypes.func
}