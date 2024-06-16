import React from 'react';
import { TbUsersGroup } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import CountUp from "react-countup";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UsersStatictics = () => {
    const [loading, setLoading] = React.useState(false);
    const onStart = () => {setLoading(true)};
    const onEnd = () => {setLoading(false)};
    const containerProps = {
      'aria-busy': loading
    };
	const axiosPublic = useAxiosPublic();
    const {data:allUsers=[]} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () =>{
            const res = await axiosPublic('/users');
            return res.data;
        }
    })
    const {data:premiumUsers=[]} = useQuery({
        queryKey: ['premiumUsers'],
        queryFn: async () =>{
            const res = await axiosPublic('/users/premium');
            return res.data;
        }
    })
    const {data:normalUsers=[]} = useQuery({
        queryKey: ['normalUsers'],
        queryFn: async () =>{
            const res = await axiosPublic('/users/normal');
            return res.data;
        }
    })
    return (
        
        <section className="p-6 pt-0 w-[90%] mx-auto dark:bg-gray-100 dark:text-gray-800">
            <h2></h2>
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
				<TbUsersGroup className='text-2xl'></TbUsersGroup>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <CountUp end={allUsers?.length} duration="7" onStart={onStart} onEnd={onEnd} containerProps={containerProps} />
				<p className="capitalize">OUR ALL USERS</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<LiaUsersSolid className='text-2xl'></LiaUsersSolid>
			</div>
			<div className="flex flex-col justify-center align-middle">
			<CountUp end={normalUsers?.length} duration="3" onStart={onStart} onEnd={onEnd} containerProps={containerProps} />
				<p className="capitalize">NORMAL USERS</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
				<FaUsersGear className='text-2xl text-pink-400'></FaUsersGear>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <CountUp end={premiumUsers?.length} duration="7" onStart={onStart} onEnd={onEnd} containerProps={containerProps} />
				<p className="capitalize">Premium users</p>
			</div>
		</div>
		{/* <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-100">
					<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div> */}
	</div>
</section>
    );
};

export default UsersStatictics;