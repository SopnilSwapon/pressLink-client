import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import AllUsersRow from './AllUsersRow';

const AllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const {data:allUsers=[], refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () =>{
            const res = await axiosPublic('/users');
            return res.data;
        }
    })
    // console.log(allUsers);
    return (
        <div className="overflow-x-auto bg-gray-300 pt-24 min-h-[calc(100vh-276px)]">
        <table className="table text-xl">
          {/* <Helmet>
            <title>Profile||Added</title>
          </Helmet> */}
          <thead>
            <tr className="text-xl">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.map(user => <AllUsersRow
                 key={user._id}
                  userInfo={user}
                  refetch={refetch}
                  ></AllUsersRow
              >)
            }
          </tbody>

        </table>
      </div>
    );
};

export default AllUsers;