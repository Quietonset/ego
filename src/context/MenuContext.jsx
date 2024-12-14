import React, { createContext, useState } from 'react'

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    // menu state
    const [isOpen, setIsOpen] = useState(false);

    // function to toggle menu and handle menu close
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuClose = () => {
      setIsOpen(false);
    }
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, toggleMenu, handleMenuClose }}>
        { children }
    </MenuContext.Provider>
  )
}

