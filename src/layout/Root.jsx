import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/landing/Menu'

const Root = () => {
  return (
    <div>
      <div className='font-spaceGrotesk'>
        <Outlet/>
        <Menu/>
      </div>
      {/* <h1 className='uppercase font-bold hidden md:flex justify-center items-center h-screen' >not available on mobile yet</h1> */}
    </div>
  )
}

export default Root
