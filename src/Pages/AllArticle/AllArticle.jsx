import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Article from './Article';
import loader from '../../assets/Animation - 1717751158249 (1).json'
import Lottie from 'lottie-react';
import { Box,FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const AllArticle = () => {

  const axiosPublic = useAxiosPublic();
  const { data: news = [], isPending } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const res = await axiosPublic.get('/news');
      return res.data
    }
  });
  const {data: publishers=[]} = useQuery({
    queryKey: ['publisher'],
    queryFn: async () =>{
      const res = await axiosPublic.get('/news/publishers');
      return res.data
    }
  })
  console.log(publishers);

  const [Publisher, setPublisher] = React.useState('');
  const [tags, setTags] = React.useState('');

  const handleChangePublisher = (event) => {
    setPublisher(event.target.value);
  };
  const handleChangeTags = (event) => {
    setTags(event.target.value);
  };

  return (
    <div className='min-h-[calc(100vh-313px)] pt-24'>
      <div className='flex w-[95%] mx-auto gap-4 justify-center'>
        <div className='w-full'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter by Publisher</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Publisher}
                label="Publisher"
                onChange={handleChangePublisher}
              >
                {
                  publishers.map((publisher, idx) =><MenuItem key={idx} value={publisher.publisher}>{publisher.publisher}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className='w-full'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tags}
                label="Tags"
                onChange={handleChangeTags}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* <div className='w-full'>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
          <button className="badge badge-outline badge-accent p-6 ml-2">Search</button>
          </div> */}
        <div className='flex'>
          <label className="input input-bordered h-14 w-full rounded-r-none border-r-0 flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4  h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
            <label htmlFor="" className='btn bg-black h-14 rounded-l-none text-white'>Search</label>
        </div>
      </div>
      {isPending ?
        <Lottie className='w-[20%] mx-auto' animationData={loader}></Lottie>
        :

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {
            news.map(aNews => <Article
              key={aNews._id}
              aNews={aNews}
            ></Article>)
          }
        </div>

      }
    </div>
  );
};

export default AllArticle;