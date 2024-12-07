import React, { createContext, useState } from 'react'

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    // menu state
    const [isOpen, setIsOpen] = useState(false);

    // function to handle menu close
    const handleMenuClose = () => {
        setIsOpen(false)
    }

    const handleMenuOpen = () => {
        setIsOpen(true)
    }

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, handleMenuClose, handleMenuOpen }}>
        { children }
    </MenuContext.Provider>
  )
}

