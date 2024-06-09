import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAdminRole = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
     const {data:userInfo={}} = useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            const res = await axiosPublic(`/user/role/${user?.email}`);
            return res.data
        }
    })
    return userInfo.role
};

export default useAdminRole;