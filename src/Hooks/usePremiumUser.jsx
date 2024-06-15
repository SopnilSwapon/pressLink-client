import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const usePremiumUser = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
     const {data:userInfo={}} = useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            const res = await axiosPublic(`/user/role/${user?.email}`);
            return res.data
        }
    })
    return userInfo.isPremium
};

export default usePremiumUser;