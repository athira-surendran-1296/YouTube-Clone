import React from 'react'

const CardShimmer = () => {
    return(
        <div className='bg-white rounded-lg p-1 flex flex-col gap-3 mb-10'>
            <div className='bg-gray-100 rounded-lg h-36 w-60'></div>
            <div className='bg-gray-100 rounded-lg h-14 w-60'></div>
        </div>
    )
}

const VideoCardsShimmer = () => {
  return (
    <div className='flex flex-wrap p-2'>
        {[1,2,3,4,5,6,7,8].map(c => <CardShimmer key={c} />)}
    </div>
  )
}

export default VideoCardsShimmer