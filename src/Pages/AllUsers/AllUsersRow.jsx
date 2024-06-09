import PropTypes from 'prop-types'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
const AllUsersRow = ({ userInfo, refetch }) => {
    const { email, name, photo, role } = userInfo;

    const axiosPublic = useAxiosPublic();
    const handleAdmin = () => {
        const updateUserInfo = {
            email: email, name: name, photo: photo, role: 'Admin'
        }
        console.log('clicked');
        axiosPublic.put(`user/role/${email}`, updateUserInfo )
            .then(res => {
                console.log(res.data);
                refetch();
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className=" rounded-lg w-24 h-24">
                            <img src={photo} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <th>
                <button onClick={handleAdmin} className="btn btn-sm">{role}</button>
            </th>
        </tr>
    );
};

export default AllUsersRow;
AllUsersRow.propTypes = {
    userInfo: PropTypes.object,
    refetch: PropTypes.func
}