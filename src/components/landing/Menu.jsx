import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

const Menu = () => {
    const {isOpen, handleMenuClose} = useContext(MenuContext);
  return isOpen && (
    <div className='fixed top-0'>
      hello
    </div>
  )
}

export default Menu
