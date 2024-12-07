import React, { useContext } from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { ModalContext } from '../../context/ModalContext';

const DownloadButton = () => {
  const { handlePopupScan } = useContext(ModalContext);
  return (
    <button onClick={() => handlePopupScan()} className='bg-[#90f56c] hover:bg-[#90e56c] border border-[#f2f4f7] text-[#4040d9] rounded-full h-11 w-64 px-6 gap-2 flex items-center justify-between'>
      {/* ICONS */}
      <div className='flex text-xl items-center'>
        <div className='p-0.5 border-r border-[#4040d9]'>
            <FaGooglePlay/>
        </div>
        <div className='p-0.5 border-l border-[#4040d9]'>
            <FaApple/>
        </div>
      </div>
      {/* TEXT */}
      <p className='font-semibold'>Download the app</p>
    </button>
  )
}

export default DownloadButton
