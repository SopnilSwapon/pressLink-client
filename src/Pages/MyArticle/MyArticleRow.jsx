import PropTypes from 'prop-types'
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
const MyArticleRow = ({articleInfo, refetch, index}) => {
  const [showModal, setShowModal] = useState(false);
  const {headline, status, reason, isPremium } = articleInfo ;
    const handleDeleteNews = () =>{
        refetch();
    }
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{headline}</td>
        <td><button className="btn btn-sm">Details</button></td>       
        <td>
            <button className="btn btn-sm">{status}</button> <small className='text-red-500 underline' onClick={() => setShowModal(true)
                }>{reason ? 'Reason' : ''}</small>
           
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
        <td><button className="btn btn-sm"><FaEdit></FaEdit></button></td>       
        <td><button onClick={handleDeleteNews} className="btn btn-sm">X</button></td>       
    </tr>
    );
};

export default MyArticleRow;
MyArticleRow.propTypes = {
    articleInfo: PropTypes.object,
    index: PropTypes,
    refetch: PropTypes.func
}