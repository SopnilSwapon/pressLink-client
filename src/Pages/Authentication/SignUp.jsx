import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import regPic from '../../../public/Animation - 1717392611042.json'
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const {createUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{ 
    const {email, password} = data;
    createUser(email, password)
    .then(res =>{
      console.log(res.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
    
  }
    return (
        <div className="pt-24 min-h-[calc(100vh-312px)]">
       <div className="md:flex justify-center items-center border border-r-red-600">
       <Lottie className="w-full h-[150px] lg:h-full md:h-full" animationData={regPic}></Lottie>
       <form className="w-full flex justify-center md:justify-normal lg:justify-normal" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-col flex gap-2 w-[90%]">
      <h2 className="text-4xl font-bold text-center mb-5">Sign Up</h2>
      <label htmlFor="name" className="block">Name</label>
      <input type="text" className="input input-bordered" placeholder="type your name" {...register("name")} />
      <label htmlFor="name" className="block">Photo URL</label>
     <input type="text" className="input input-bordered block" placeholder="type your photo url"  {...register("photo", { required: true })} />
      <label htmlFor="name" className="block">Email</label>
     <input type="email" className="input input-bordered block" placeholder="type your email"  {...register("email", { required: true })} />
      <label htmlFor="name" className="block">Password</label>
     <input name="password" type="password" className="input input-bordered block" placeholder="type your password"  {...register("password", { required: true, minLength: 6, pattern:  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/})} />
     {errors.password && <span className="text-red-700">Password should have at least six character & one uppercase,lowercase, digit & special character.</span>}
     <input value='Sign Up' className="btn btn-primary mt-5" type="submit" />
      </div>
    </form>
       {/* </div> */}
       </div>
        </div>
    );
};

export default SignUp;