import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setWatchPage } from '../store/slice/videosSlice';
import { getVideoByIdURL } from '../constants';

const useGetVideoById = (id) => {
  const dispatch = useDispatch();

  const getVideoById = async () => {
    const data = await fetch(getVideoByIdURL(id));
    const jsonData = await data.json();
    dispatch(setWatchPage(jsonData));
  }

  useEffect(() => {
    getVideoById(id);
  }, [])
}

export default useGetVideoById;