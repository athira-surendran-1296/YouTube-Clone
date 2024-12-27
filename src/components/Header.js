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
    <div className='flex justify-between px-6 py-2 gap-40 shadow-md'>
        <div className='flex gap-5'>
            <FaBars className='w-8 h-8 cursor-pointer' onClick={toggleMenuHandler}/>
            <img className='w-24' src={LOGO} alt='Logo'/>
        </div>
        <Search />
        <div>
            <img
            className="w-10"
            alt="user"
            src={USER_ICON}
            />
        </div>
    </div>
  )
}

export default Header