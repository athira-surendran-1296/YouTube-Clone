import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isSideNavOpen = useSelector(store => store.appConfig.isSideNavOpen);

  return (
    <div className='flex flex-col flex-1'>
        <div className='flex justify-center items-center'>
          <div className={isSideNavOpen ? 'w-[62rem]' : 'w-[78rem]'}>
            <ButtonList />
          </div>
        </div>
        <VideoContainer />
    </div>
  )
}

export default MainContainer