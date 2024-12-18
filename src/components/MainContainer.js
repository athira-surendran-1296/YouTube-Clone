import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col flex-1'>
        <div className='flex justify-center items-center'>
          <div className='w-[63rem]'>
            <ButtonList />
          </div>
        </div>
        <VideoContainer />
    </div>
  )
}

export default MainContainer