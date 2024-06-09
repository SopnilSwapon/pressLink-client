import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import regPic from '../../assets/Animation - 1717392611042.json'
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase";

const image_hosting_key =  import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const SignUp = () => {
  const {createUser} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{ 
    const {email, password, name} = data;
    console.log(data);
    const imageFile = {image: data.image[0]}
    const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    } );
    console.log(imgRes.data);
    createUser(email, password)
    .then(result =>{
      console.log(result.user);
      updateProfile(result.user , {
        displayName: name,
        email: email,
        photoURL: imgRes.data.data.image.url
      })
      const userInfo = {
        email: email,
        name: name,
        photo: imgRes.data.data.image.url
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
       
        console.log(res.data);
        navigate('/')
      })
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
      {/* <label htmlFor="name" className="block">Photo URL</label>
     <input type="text" className="input input-bordered block" placeholder="type your photo url"  {...register("photo", { required: true })} /> */}
     <div className="block">
                            <label className="font-medium block" htmlFor="tags">Upload Photo</label>
                                <input {...register('image', {required: true})} type="file" className="file-input input-bordered w-full" />
                            </div>
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