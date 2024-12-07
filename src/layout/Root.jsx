import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/landing/Menu'

const Root = () => {
  return (
    <div className='font-spaceGrotesk'>
      <Outlet/>
      <Menu/>
    </div>
  )
}

export default Root
