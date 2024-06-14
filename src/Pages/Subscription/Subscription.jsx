import { useState } from 'react';
import banner from '../../../src/assets/subscribe.jpg'
import Select from 'react-select';
import { FaSackDollar } from "react-icons/fa6";
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const subscriptionOptions = [
    { value: 1, label: '1 Minute Category' },
    { value: 5, label: '5 Minute Category' },
    { value: 10, label: '10 Minute Category' },
]
const Subscription = () => {
  const axiosPublic = useAxiosPublic();
  const [plan, setPlan] =  useState()
  const {user} = useAuth();
  const handleSubscription = async (e) => {
    e.preventDefault();
    let paymentInfo = {user: user?.email, validation: plan.value, status: 'pending', plan: plan.label
    }
    if(plan.value === 1){
      paymentInfo.price = 4;
    }
    else if(plan.value === 5){
      paymentInfo.price = 50
    }
    else if(plan.value === 10){
      paymentInfo.price = 80
    }
   const res = await axiosPublic.post('/payment', paymentInfo)
    console.log(res.data);
    if(res.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `This ${paymentInfo.plan}' plan has subscribed`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    }
    return (
        <div className="pt-24">
            <div className='w-full'>
                <img width='100%' className='h-[500px] rounded-lg' src={banner} alt="" />
            </div>
            <form className="flex flex-col gap-3 items-center" onSubmit={handleSubscription}>
                <div className="w-[240px] flex flex-col gap-3">
                    <div className="flex items-center gap-2 pl-2 bg-transparent rounded-lg border border-nexus-secondary">
                        <label className="font-medium" htmlFor="subscription"><FaSackDollar /></label>
                        <Select isClearable
                            onChange={setPlan}
                            options={subscriptionOptions}
                            required
                            placeholder="Select Plan"
                            className="px-2 rounded-r-lg py-1 bg-transparent w-full border-l border-nexus-secondary focus:outline-0" id='subscription' name='subscription'
                        />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Subscribe</button>
                <Link to='/payment'><button>Payment</button></Link>
            </form >
      </div>
        // </div>
    );
};

export default Subscription;