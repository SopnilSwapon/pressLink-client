import PropTypes from 'prop-types'
import { FaEdit } from 'react-icons/fa';
const MyArticleRow = ({articleInfo, refetch, index}) => {
    const handleDeleteNews = () =>{
        refetch();
    }
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{articleInfo.headline}</td>
        <td><button className="btn btn-sm">Details</button></td>       
        <td>
            <button className="btn btn-sm">{articleInfo.status}</button> <small className='text-red-500 underline' onClick={()=>document.getElementById('my_modal_1').showModal()}>{articleInfo.reason ? 'Reason' : ''}</small>
           
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <p className="py-4">{articleInfo.reason}</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>   
</td>
        <td><button className="btn btn-sm">working</button></td>       
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