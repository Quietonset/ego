import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

const Menu = () => {
    const {isOpen, handleMenuClose} = useContext(MenuContext);
  return isOpen && (
    <div className='absolute top-0 bg-white'>
      hello test
    </div>
  )
}

export default Menu
