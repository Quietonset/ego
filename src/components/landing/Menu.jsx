import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import DownloadButton from '../extra/DownloadButton';
import { Link } from 'react-scroll';

const Menu = () => {
    const { isOpen, handleMenuClose } = useContext(MenuContext);
  return isOpen && (
    <div className='fixed inset-0 flex justify-center items-center z-20 bg-[#4040d9]'>
      <button 
      onClick={() => handleMenuClose()}
      className='bg-[#6565e0] rounded-full text-white absolute top-[26px] right-5 flex flex-col justify-center items-center gap-[5px] h-8 w-8'
      >
        <div className='h-[3px] w-6 bg-white transition-transform duration-200 rounded-full rotate-45 translate-y-2'></div>
        <div className='h-[3px] w-6 bg-white transition-transform duration-200 rounded-full opacity-0'></div>
        <div className='h-[3px] w-6 bg-white transition-transform duration-200 rounded-full -rotate-45 -translate-y-2'></div>
      </button>
      {/* navlinks */}
      <div>
        <ul className='flex flex-col items-center gap-6 text-base font-medium text-white mb-10'>
          <li className='hover:cursor-pointer hover:text-gray-200'>
            <Link onClick={() => handleMenuClose()} to='about' smooth={ true }>About</Link>
          </li>
          <li className='hover:cursor-pointer hover:text-gray-200'>
            <Link onClick={() => handleMenuClose()} to='faq' smooth={ true }>FAQ</Link>
          </li>
          <li className='hover:cursor-pointer hover:text-gray-200'>
            <Link onClick={() => handleMenuClose()} to='contact' smooth={ true }>Contact</Link>
          </li>
        </ul>
        <DownloadButton/>
      </div>
    </div>
  )
}

export default Menu
