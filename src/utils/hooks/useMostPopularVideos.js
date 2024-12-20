import { useEffect } from 'react'
import { GET_MOST_POPULAR_VIDEOS } from '../constants'
import { useDispatch } from 'react-redux'
import { setPopularVideos } from '../store/slice/videosSlice';
import MOCK_DATA from "../mocks/popularVideos.json";

const useMostPopularVideos = () => {
  const dispatch = useDispatch();
  const getMostPopularVideos = async () => {
    const data = await fetch(GET_MOST_POPULAR_VIDEOS);
    const jsonData = data.json();
    dispatch(setPopularVideos(jsonData));
  }
  useEffect(() => {
    // getMostPopularVideos();
    dispatch(setPopularVideos(MOCK_DATA));
  }, [])
}

export default useMostPopularVideos