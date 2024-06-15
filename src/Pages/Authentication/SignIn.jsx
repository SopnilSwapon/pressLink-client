import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import regPic from '../../assets/Animation - 1717395654354.json'
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const {loginUser, googleLogin} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
        const {email, password} = data;
        loginUser(email, password)
        .then(res =>{
          console.log(res.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign in successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        })
        .catch(error =>{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "You have wrong email & password",
            showConfirmButton: false,
            timer: 1500
          });
          console.error(error.message)
        })
              };
              const handleGoogleLogin = () =>{
                googleLogin()
                .then(res =>{
                  console.log(res.user);
                  const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL,
                    role: 'Admin'
                  }
                  axiosPublic.post('/users', userInfo)
                  .then(res =>{
                    console.log(res.data);
                    navigate('/');
                    if(res.data.insertedId){
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "google login successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    }
                  })                  
                })
                .catch(error =>{
                  console.error(error.message)
                }) 
              }
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
      <input type="password" className="input input-bordered block" placeholder="type your password"  {...register("password", { required: true})} />
      {errors.email || errors.password ? <span>You have wrong email & password</span> : null}
 
      <input value='Sign In' className="btn btn-primary mt-4" type="submit" />
     <div className="text-center text-gray-500">
     <p>Social login links</p>
        <FcGoogle onClick={handleGoogleLogin} className="text-3xl w-10 mt-3 mx-auto"></FcGoogle>
     </div>
     <p className="text-center">New? <Link to='/signUp' className="text-green-600 font-bold">Register</Link></p>
       </div>
     </form>
        </div>
         </div>
    );
};

export default SignIn;