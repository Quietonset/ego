import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const CreateAccountButton = () => {
  const navigate = useNavigate();

  return (
    <Link to={'/signup'}>
      <button className='bg-[#ececfb] hover:bg-[#ecdcfb] text-[#2d2d9a] rounded-full h-11 w-64 px-6 gap-2 flex items-center justify-center font-semibold'>Create an account</button>
    </Link>
  )
}

export default CreateAccountButton
