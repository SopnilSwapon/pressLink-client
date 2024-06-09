import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Article from './Article';
import loader from '../../assets/Animation - 1717751158249 (1).json'
import Lottie from 'lottie-react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import  { useState } from 'react';

const AllArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [publisherName, setPublisherName] = useState(' ');
  const [searchText, setSearchText] = useState(' ');
  const [newsTag, setNewsTag] = useState(' ');

  const { data: news = [], isPending } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const res = await axiosPublic.get('/news');
      return res.data;
    }
  });

  const { data: publishers = [] } = useQuery({
    queryKey: ['publishers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/news/publishers');
      return res.data;
    }
  });

  const { data: publish = [], isPending: isPublishPending } = useQuery({
    queryKey: ['publish', publisherName],
    queryFn: async () => {
      const res = await axiosPublic.get(`/news/${publisherName}`);
      return res.data;
    },
  });
  const handleChangePublisher = (event) => {
    setPublisherName(event.target.value);
  };

  const handleChangeTags = (event) => {
    setNewsTag(event.target.value);
    setPublisherName('');
    setSearchText('')
  };

  console.log(publisherName);
  const handleSearch = e =>{
    e.preventDefault();
    const search = e.target.elements.searchField.value;
      setSearchText(search);
      e.target.reset();
      setPublisherName('');
      setNewsTag('')
  };
  const {data:searchData=[], isPending:searchPending} = useQuery({
    queryKey: ['searchData', searchText],
    queryFn: async () =>{
      const res = axiosPublic(`/news/search/${searchText}`);
      return (await res).data
    }
  });
  const {data:tags=[]} = useQuery({
    queryKey: ['tags'],
    queryFn: async () =>{
      const result = await axiosPublic('/news-tags')
      return result.data
    }
  }) 
  const {data:tagsData=[], isPending:tagDataPending} = useQuery({
    queryKey: ['tagsData'],
    queryFn: async() =>{
      const result = await axiosPublic(`/newsTags/${newsTag}`);
      return result.data
    }
  })
console.log('tags', tagsData, newsTag);
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
                value={publisherName}
                label="Filter by Publisher"
                onChange={handleChangePublisher}
              >
                {publishers.map((publisher, idx) => (
                  <MenuItem
                    key={idx}
                    value={publisher.publisher}
                  >
                    {publisher.publisher}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className='w-full'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tags</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tags}
                label="Tags"
                onChange={handleChangeTags}
              >
                {
                  tags.map((tag, index) =><MenuItem
                  key={index}
                   value={tag.tag}

                   >{tag.tag}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Box>
        </div>
        <form onSubmit={handleSearch} className='flex'>
          <label className="input input-bordered h-14 w-full rounded-r-none border-r-0 flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" name='searchField' className="grow" placeholder="Search" />
          </label>
          <button type='submit' className='btn bg-black h-14 rounded-l-none text-white'>Search</button>
        </form>
      </div>
      { isPending || isPublishPending || searchPending || tagDataPending? (
        <Lottie className='w-[20%] mx-auto' animationData={loader}></Lottie>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {publisherName || searchText || newsTag ?
           <>
            {
              publisherName ?
              publish.map(aNews =><Article key={aNews._id} aNews={aNews}></Article>)
              :
              <>
              { searchText ?
                searchData.map(aNews =><Article key={aNews._id} aNews={aNews}></Article>)
                :
                tagsData.map(aNews =><Article key={aNews._id} aNews={aNews}></Article>)
              }
              </>

            }
          </>
            : news.map(aNews =><Article key={aNews._id} aNews={aNews}></Article>)
          }
        </div>
      )}
    </div>
  );
};

export default AllArticle;