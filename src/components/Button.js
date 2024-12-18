import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex-shrink-0 flex-grow-0 basis-auto bg-gray-200 p-2 px-4 rounded-md'>
      {name}
    </div>
  )
}

export default Button;