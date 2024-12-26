import React from 'react'
import VideoCardsShimmer from './VideoCardsShimmer';
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const popularVideos = useSelector(store => store.videos.popularVideos);

  return (
    <div className='flex-1 border border-t-gray-200 p-3'>
      {popularVideos ?
      <div className='flex flex-wrap gap-2'>
        {popularVideos?.items.map(video => 
            <Link key={video?.id} to={'watch?v='+video?.id}>
                <VideoCard {...video}/>
            </Link>)
        }
      </div>
      :<VideoCardsShimmer />}
    </div>
  )
  
}

export default VideoContainer