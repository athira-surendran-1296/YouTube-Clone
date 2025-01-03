import React from 'react'

const VideoCard = ({snippet, statistics}) => {

  const formatTitle = (title) => {
    if(title.length > 45)
      return title.slice(0,44) + ' ...'
    else
      return title;
  }

  function formatNumberToUnit(number) {
    if (number < 1000) {
        return `${number}`;
    } else if (number >= 1000 && number < 100000) {
        return `${(number / 1000).toFixed(1)}K`; // Thousands
    } else if (number >= 100000 && number < 10000000) {
        return `${(number / 100000).toFixed(1)}L`; // Lakhs
    } else {
        return `${(number / 10000000).toFixed(1)}M`; // Millions
    }
  }

  const thumbnailUrl = snippet?.thumbnails?.standard?.url;
  const title = snippet?.title;
  const channelTitle = snippet?.channelTitle;
  const views = statistics?.viewCount;
  
  return (
    <div className='bg-white rounded-lg p-3 flex flex-col gap-8 mb-2'>
        <div className='md:h-36 md:w-56'>
            <img className='rounded-md' src={thumbnailUrl} />
        </div>
        <div className='flex flex-col md:w-56'>
            <p className='font-bold p-1 pt-3'>{formatTitle(title)}</p>
            <p className='text-sm text-gray-500 p-1 pt-3 pb-1'>
              { channelTitle + ' • ' + formatNumberToUnit(views) + ' Views'}
            </p>
        </div>
    </div>
  )
}

export default VideoCard