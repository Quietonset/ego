import React from 'react';
import { BiError } from "react-icons/bi";

const NotAvailable = () => {
  return (
    <div className='hidden s:flex flex-col justify-center items-center h-screen mx-0.5'>
      <BiError className='text-red-500 text-3xl'/>
      <h1 className='uppercase'>not available!</h1>
      <p className='text-xs text-center'>Please use a bigger device to view this website.</p>
    </div>
  )
}

export default NotAvailable
