import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import useMostPopularVideos from '../utils/hooks/useMostPopularVideos';

const MainContainer = () => {

  useMostPopularVideos();

  return (
    <div className='flex flex-col'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer