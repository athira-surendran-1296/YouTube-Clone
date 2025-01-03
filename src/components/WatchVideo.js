import React from 'react'
import { useSelector } from 'react-redux';

const WatchVideo = () => {
  const watchPageCurrentVideo = useSelector(store => store.videos.watchPageCurrentVideo);
  if(!watchPageCurrentVideo) return;
  const {items} = watchPageCurrentVideo;
  return (
    <div className='flex flex-col gap-3 justify-center items-center flex-1'>
      <div className='flex-1 w-full h-96'>
        <iframe className='flex-1 w-full h-full'
          src={"https://www.youtube.com/embed/"+items?.[0]?.id+"?si="+items?.[0]?.etag} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
          </iframe>
      </div>
      <div className='font-bold text-xl pt-3'>{items?.[0]?.snippet?.title}</div>
    </div>
  )
} 

export default WatchVideo;