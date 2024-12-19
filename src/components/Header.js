import React from 'react'
import { HAMBERGER_ICON, LOGO, SEARCH_ICON } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleSideNav } from '../utils/store/slice/appConfigSlice';

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleSideNav());
  }
  return (
    <div className='flex justify-between px-6 py-2 gap-40 shadow-md'>
        <div className='flex gap-5'>
            <img className='w-8 h-8 cursor-pointer' src={HAMBERGER_ICON} alt='Icon' onClick={toggleMenuHandler}/>
            <img className='w-24' src={LOGO} alt='Logo'/>
        </div>
        <div className='flex flex-1'>
            <input className='border border-gray-400 flex-1 rounded-l-full p-1 px-3' />
           <button className='border border-gray-400 border-l-0 px-4 rounded-r-full bg-gray-100'>
                <img className='w-7' src={SEARCH_ICON} />
           </button>
        </div>
        <div>
            <img
            className="w-10"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
        </div>
    </div>
  )
}

export default Header