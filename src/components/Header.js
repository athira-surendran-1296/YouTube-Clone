import React from 'react'
import { LOGO, USER_ICON } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleSideNav } from '../utils/store/slice/appConfigSlice';
import Search from './Search';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleSideNav());
  }

  return (
    <div className='flex justify-between items-center px-3 md:px-6 py-2 shadow-md gap-3 md:gap-6'>
        <div className='flex gap-2'>
            <FaBars className='md:w-6 md:h-6 cursor-pointer' onClick={toggleMenuHandler}/>
            <img className='w-12 md:w-20' src={LOGO} alt='Logo'/>
        </div>
        <Search />
        <div>
            <img
            className="w-4 md:w-8"
            alt="user"
            src={USER_ICON}
            />
        </div>
    </div>
  )
}

export default Header