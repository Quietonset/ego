import React from 'react';
import logo from "/assets/biggerLogo.png";
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";
import DownloadButton from './DownloadButton';
import CreateAccountButton from './CreateAccountButton';

const Footer = () => {
  return (
    <div className='bg-[#171A21] w-full flex gap-x-44 px-36 py-2.5' id='contact'>
      {/* IMAGE */}
      <img src={logo} alt="Image of Logo" className='w-[600px]' />
      {/* LINKS, COPYRIGHT AND BUTTONS */}
      <div className='mt-28 flex flex-col justify-between'>
        <div className='flex flex-col gap-y-5'>
          <DownloadButton/>
          <CreateAccountButton/>
        </div>
        <div className='mt-10 text-white flex flex-col gap-y-5'>
          <div className='flex items-center gap-x-3 hover:cursor-pointer hover:text-gray-300'>
            <FaInstagram className='text-xl'/>
            <span>Instagram</span>
          </div>
          <div className='flex items-center gap-x-3 hover:cursor-pointer hover:text-gray-300'>
            <FaFacebook className='text-xl'/>
            <span>Facebook</span>
          </div>
          <div className='flex items-center gap-x-3 hover:cursor-pointer hover:text-gray-300'>
            <FaXTwitter className='text-xl'/>
            <span>X (Formerly Twitter)</span>
          </div>
          <div className='flex items-center gap-x-3 hover:cursor-pointer hover:text-gray-300'>
            <FaLinkedin className='text-xl'/>
            <span>LinkedIn</span>
          </div>
        </div>
        <p className='text-white whitespace-nowrap text-sm'>
          <span className='mr-4'>contact@ego.com</span>
           | 
          <span className='ml-4'>&copy; 2024 Ego. All Rights Reserved.</span></p>
      </div>
    </div>
  )
}

export default Footer
