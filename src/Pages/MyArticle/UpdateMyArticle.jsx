import { useForm } from "react-hook-form";
import Select from 'react-select';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import moment from "moment/moment";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const newsFeedTags = [
    { value: '#breakingnews', label: '#Breaking News' },
    { value: '#latestupdates', label: '#Latest Updates' },
    { value: '#topstory', label: '#Top Story' },
    { value: '#trending', label: '#Trending' },
    { value: '#exclusive', label: '#Exclusive' },
    { value: '#indepth', label: '#In-Depth' },
    { value: '#editorial', label: '#Editorial' },
    { value: '#feature', label: '#Feature' },
    { value: '#analysis', label: '#Analysis' },
    { value: '#specialreport', label: '#Special Report' },
    { value: '#livecoverage', label: '#Live Coverage' },
    { value: '#justin', label: '#Just In' },
    { value: '#highlights', label: '#Highlights' },
    { value: '#mustread', label: '#Must Read' },
    { value: '#insight', label: '#Insight' },
];
const UpdateMyArticle = () => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        setValue, 
    } = useForm();
    const _id = useParams();
    const {data:news={}} = useQuery({
        queryKey: ['news'],
        queryFn: async () =>{
            const res = await axiosPublic(`/added/oneNews/${_id?.id}`);
            return res.data
        }
    })
    console.log(news);
    const { data: publishers = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: async () => {
          const res = await axiosPublic.get('/news/publishers');
          return res.data;
        }
      });


    const onSubmit =async (data) => {
        console.log(data);
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if(res.data.success){
            const updateNews = {
                headline: data.headline,
                publisher: data.publisher,
                image: res.data.data.image.url,
                description: data.description,
                tags: data.tags,
                date: date,
                author_email: user?.email,
                author_image: user?.photoURL,
                author_name: user?.displayName,
                status: 'Pending', 
            }
            axiosPublic.put(`/added/news/${_id?.id}`, updateNews)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Declined successful`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
            .catch(error => {
                console.log(error.message);
            })
        }

    }
    const handleTags = (tags) => {
        const selectedTags = tags.map(tag => tag.value);
        setValue('tags', selectedTags)
    }
    return (
        <div className="pt-24 min-h-[calc(100vh-312px)]">
        <h2 className="text-4xl font-bold text-center mb-10">Update the Article</h2>
        <div className="md:flex justify-center gap-10 items-center bg-gray-400 pb-5">
            <form className="w-full flex justify-center md:justify-normal lg:justify-normal" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-col flex gap-2 w-[90%] mx-auto">
                    <div>
                        <label htmlFor="name" className="block mt-5">Leading Headline</label>
                        <input defaultValue={news?.headline} type="text" className="input input-bordered block w-full" placeholder="type the headline"  {...register("headline", { required: true })} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div>
                            <label className="font-medium block" htmlFor="tags">Select Publisher</label>
                            <select defaultValue={news?.publisher} {...register('publisher', {required: true})} className="select select-bordered w-full">
                                <option disabled value='default'>news desk</option>
                                
                                {
                                    publishers.map(publisher => 
                                    <option key={publisher._id}>{publisher.publisherName}</option>)
                                }
                            </select>
                            
                        </div>
                        <div className="block">
                        <label className="font-medium block" htmlFor="tags">Upload Photo</label>
                            <input {...register('image', {required: true})} type="file" className="file-input input-bordered w-full" />
                        </div>
                        
                        
                    </div>
                    <div className="items-center col-span-2 gap-2 pl-2 rounded-lg">
                            <label className="font-medium block" htmlFor="tags">Tags</label>
                            <Select

                                defaultValue={[newsFeedTags[2], newsFeedTags[3]]}
                                isMulti
                                options={newsFeedTags}
                                className="w-full font-light text-[22px]"
                                onChange={handleTags}
                            />
                        </div>
                    <div>
                            <label className="form-control">
                                <div className="label">
                                    <span>News Description</span>
                                </div>
                                <textarea defaultValue={news?.description} {...register('description', {required: true})} className="textarea textarea-bordered h-36" placeholder="description"></textarea>
                                
                            </label>
                        </div>
                        
                       

                    <input value='Submit' className="btn btn-primary mt-4" type="submit" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateMyArticle;