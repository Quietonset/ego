import React, { createContext, useState } from 'react'

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [isPopupShown, setIsPopupShown] =  useState(false);

    const handlePopupScan =  () => {
      setIsPopupShown(true)
      console.log('popup clicked');
      
    }

  return (
    <ModalContext.Provider value={{ isPopupShown, setIsPopupShown,  handlePopupScan}}>
      { children }
    </ModalContext.Provider>
  )
}

