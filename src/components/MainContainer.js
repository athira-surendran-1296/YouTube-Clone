import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';
import useMostPopularVideos from '../utils/hooks/useMostPopularVideos';

const MainContainer = () => {
  const isSideNavOpen = useSelector(store => store.appConfig.isSideNavOpen);

  useMostPopularVideos();

  return (
    <div className='flex flex-col'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer