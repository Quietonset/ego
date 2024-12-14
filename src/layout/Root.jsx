import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../components/landing/Menu';
import NotAvailable from '../pages/NotAvailable';

const Root = () => {
  return (
    <div>
      <div className='font-spaceGrotesk s:hidden'>
        <Outlet/>
        <Menu/>
      </div>
        <NotAvailable/>
    </div>
  )
}

export default Root
