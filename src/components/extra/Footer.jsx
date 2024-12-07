import React from 'react';
import logo from "/assets/biggerLogo.png";
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";
import DownloadButton from '../extra/DownloadButton';
import CreateAccountButton from '../extra/CreateAccountButton';

const Footer = () => {
  return (
    <div className='bg-[#171A21] w-full flex sm:flex-col-reverse gap-x-44 sm:px-3 px-36 py-2.5' id='contact'>
      {/* IMAGE */}
      <img src={logo} alt="Image of Logo" className='w-[600px] sm:my-10' />
      {/* LINKS, COPYRIGHT AND BUTTONS */}
      <div className='sm:mt-12 mt-28 flex flex-col justify-between'>
        <div className='flex flex-col gap-y-5'>
          <DownloadButton/>
          <CreateAccountButton/>
        </div>
        <div className='mt-10 text-white flex flex-col sm:gap-y-9 gap-y-5'>
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
        <p className='text-white whitespace-nowrap text-sm sm:mt-5'>
          <span className='mr-4 sm:block sm:mb-5'>contact@ego.com</span>
          <span className='sm:hidden'> |</span>
          <span className='ml-4 sm:ml-0'>&copy; 2024 Ego. All Rights Reserved.</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
