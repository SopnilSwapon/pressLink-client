import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import regPic from '../../../public/Animation - 1717395654354.json'
const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className="pt-24 min-h-[calc(100vh-312px)]">
        <div className="md:flex justify-center gap-10 items-center border border-r-red-600">
        <Lottie className="w-full h-[150px] lg:h-full md:h-full" animationData={regPic}></Lottie>
        <form className="w-full flex justify-center md:justify-normal lg:justify-normal" onSubmit={handleSubmit(onSubmit)}>
       <div className="flex-col flex gap-2 w-[90%]">
       <h2 className="text-4xl font-bold text-center mb-5">Sign In</h2>
       <label htmlFor="name" className="block">Email</label>
      <input type="email" className="input input-bordered block w-full" placeholder="type your email"  {...register("email", { required: true })} />
       <label htmlFor="name" className="block">Password</label>
      <input type="password" className="input input-bordered block" placeholder="type your password"  {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} />
      {errors.exampleRequired && <span>This field is required</span>}
 
      <input value='Sign In' className="btn btn-primary mt-4" type="submit" />
       </div>
     </form>
        {/* </div> */}
        </div>
         </div>
    );
};

export default SignIn;