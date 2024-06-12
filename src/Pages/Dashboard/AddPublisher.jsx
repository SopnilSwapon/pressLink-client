import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY2;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit , reset} = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', data.logo[0]);

      const res = await axios.post(imageHostingApi, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const publisherData = {publisherName: data.publisher, logo: res.data.data.image.url}
      if(res.data.success){
        axiosPublic.post('/publisher', publisherData )
        .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: 'Publisher added successful',
              showConfirmButton: false,
              timer: 1500
            });
            reset()
          }
        })
        .catch(error =>{
          console.log(error.message);
        })
      }
      
  };

  return (
    <div className="w-[95%] md:w-4/6 md:mt-28 lg:w-6/12 mx-auto">
      <h2 className="text-3xl font-bold text-center pt-10">Add New Publisher</h2>
      <form className="shadow-lg p-16 bg-gray-400 mt-5 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <label className="font-bold" htmlFor="">Publisher Name</label>
        <input required className="input input-bordered block mt-2 w-full" placeholder="Type publisher Name" {...register("publisher")} />
        <label className="font-bold" htmlFor="">Logo</label>
        <input {...register('logo', { required: true })} type="file" className="file-input input-bordered w-full" />
        <input className="btn bg-white w-full mt-3" type="submit" />
      </form>
    </div>
  );
};

export default AddPublisher;
