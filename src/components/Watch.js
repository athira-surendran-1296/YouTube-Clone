import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideNav } from '../utils/store/slice/appConfigSlice';
import WatchVideo from './WatchVideo';
import CommentsContainer from './CommentsContainer';
import { useSearchParams } from 'react-router-dom';
import useGetVideoById from '../utils/hooks/useGetVideoById';
import { clearWatchPage } from '../utils/store/slice/videosSlice';
import LiveChatContainer from './LiveChatContainer';

const Watch = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  useGetVideoById(videoId);

  useEffect(() => {
    dispatch(closeSideNav());
    return () => {
      dispatch(clearWatchPage());
    }
  }, []);

  return (
    <div className='flex p-5'>
      <div className='flex flex-col'>
        <WatchVideo id={videoId}/>
        <CommentsContainer />
      </div>
      <LiveChatContainer />
    </div>
  )
}

export default Watch