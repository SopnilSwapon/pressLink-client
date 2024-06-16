import { useState } from 'react';
import banner from '../../../src/assets/subscribe.jpg'
import Select from 'react-select';
import { FaSackDollar } from "react-icons/fa6";
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SubcripPrice from './SubcripPrice';


const subscriptionOptions = [
    { value: 1, label: '1 Minute Category' },
    { value: 5, label: '5 Minute Category' },
    { value: 10, label: '10 Minute Category' },
]
const Subscription = () => {
  const navigate = useNavigate();
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
    if(res.data.insertedId || res.data.modifiedCount > 0 || res.data.matchedCount > 0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `This ${paymentInfo.plan}' plan has subscribed`,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/payment')
    }
    }
    return (
        <div className="pt-24">
            <div className='w-full'>
                <img width='100%' className='h-[500px] rounded-lg' src={banner} alt="" />
            </div>
            <SubcripPrice></SubcripPrice>
            <form className="flex flex-col mt-4 gap-3 items-center" onSubmit={handleSubscription}>
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
            </form >
      </div>
        // </div>
    );
};

export default Subscription;