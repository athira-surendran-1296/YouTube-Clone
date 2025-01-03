import React from 'react'
import { FaHome, FaUserTag } from "react-icons/fa";
import { GrLike } from 'react-icons/gr';
import { IoMdVideocam } from 'react-icons/io';
import { MdHistory, MdOutlineWatchLater, MdPlaylistPlay, MdSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeSideNav } from '../utils/store/slice/appConfigSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeSideNav());
  };
  const isSideNavOpen = useSelector(store => store.appConfig.isSideNavOpen);
  if (!isSideNavOpen) return null;
  return (
    <div className='flex bg-black bg-opacity-50 w-screen h-screen fixed left-0 z-50' onClick={handleClick}>
      <div className='w-1/2 md:w-52 border border-gray-200 absolute left-0 h-screen bg-white'>
        <div className='p-3 h-full overflow-y-auto'>
          <ul className='border-b border-b-gray-400 pb-3'>
            <Link to={'/'}><li className='py-2 flex items-center'><FaHome className='w-10' /><span>Home</span></li></Link>
            <li className='py-2 flex items-center'><SiYoutubeshorts className='w-10' /><span>Shorts</span></li>
            <li className='py-2 flex items-center'><MdSubscriptions className='w-10' /><span>Subscriptions</span></li>
          </ul>
          <h1 className='text-xl font-bold py-3'>You</h1>
          <ul className='border-b border-b-gray-400 pb-3'>
            <li className='py-2 flex items-center'><MdHistory className='w-10' /><span>History</span></li>
            <li className='py-2 flex items-center'><MdPlaylistPlay className='w-10' /><span>Playlists</span></li>
            <li className='py-2 flex items-center'><IoMdVideocam className='w-10' /><span>Your videos</span></li>
            <li className='py-2 flex items-center'><MdOutlineWatchLater className='w-10' /><span>Watch later</span></li>
            <li className='py-2 flex items-center'><GrLike className='w-10' /><span>Liked videos</span></li>
          </ul>
          <h1 className='text-xl font-bold py-3 pb-3'>Subscriptions</h1>
          <ul className='border-b border-b-gray-400'>
            {['Athira Surendran', 'Alaap Surendran', 'Elon Musk', 'Barack Obama'].map(i => <li key={i} className='py-2 flex items-center'><FaUserTag className='w-10' /><span>{i}</span></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar