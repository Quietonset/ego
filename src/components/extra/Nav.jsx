import React, { useContext, useEffect, useState } from 'react'
import DownloadButton from './DownloadButton'
import logo from '/assets/Group.png'
import { Link } from 'react-scroll'
import { MenuContext } from '../../context/MenuContext'

const Nav = () => {
  const {handleMenuOpen} = useContext(MenuContext);
  return (
    <div className='flex justify-center sticky top-0 z-20'>
        <nav className='rounded-full bg-[#4040d9] border border-gray-400 border-opacity-50 h-[72px] w-[880px] py-4 px-10 flex items-center justify-between gap-x-36 absolute top-10 sm:hidden'>
            <Link to='hero' smooth={ true }>
              <img src={ logo } alt="Ego 2024" className='hover:cursor-pointer' />
            </Link>
            <ul className='flex text-white gap-x-10'>
                <li className='hover:cursor-pointer hover:text-gray-200'><Link to='about' smooth={ true }>About</Link></li>
                <li className='hover:cursor-pointer hover:text-gray-200'><Link to='faq' smooth={ true }>FAQ</Link></li>
                <li className='hover:cursor-pointer hover:text-gray-200'><Link to='contact' smooth={ true }>Contact</Link></li>
            </ul>
            <DownloadButton/>
        </nav>
        <div onClick={() => handleMenuOpen()} className='bg-[#4040d9] hidden sm:flex justify-between items-center w-full p-5'>
          <img src={ logo } alt="Ego 2024" />
          <div className='flex flex-col justify-center items-center gap-[5px]'>
            <div className='h-[3px] w-7 bg-white transition-transform duration-200 rounded-full'></div>
            <div className='h-[3px] w-7 bg-white transition-transform duration-200 rounded-full'></div>
            <div className='h-[3px] w-7 bg-white transition-transform duration-200 rounded-full'></div>
          </div>
        </div>
    </div>
  )
}

export default Nav
