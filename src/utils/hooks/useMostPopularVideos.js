import { useEffect } from 'react'
import { GET_MOST_POPULAR_VIDEOS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setPopularVideos } from '../store/slice/videosSlice';

const useMostPopularVideos = () => {
   const isContent = useSelector(store => store.videos.popularVideos);

  const dispatch = useDispatch();

  const getMostPopularVideos = async () => {
    if(!!isContent) return;
    const data = await fetch(GET_MOST_POPULAR_VIDEOS);
    const jsonData = await data.json();
    dispatch(setPopularVideos(jsonData));
  }

  useEffect(() => {
    getMostPopularVideos();
  }, [])
}

export default useMostPopularVideos