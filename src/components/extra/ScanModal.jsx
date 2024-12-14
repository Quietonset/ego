import React, { useContext } from 'react';
// import  modal context
import { ModalContext } from '../../context/ModalContext';
// import images
import apple from '/assets/Social icon.png';
import google from '/assets/Social icon (1).png';
import qrCode from '/assets/image 1.png'


const ScanModal = () => {
    const { isPopupShown, setIsPopupShown } = useContext(ModalContext);

    return isPopupShown && (
        <section onClick={() => setIsPopupShown(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='rounded-[36px] bg-[#fffbff] flex justify-center py-4 md:w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[650px] relative'>
                {/* WHOLE BODY */}
                <div className='flex flex-col items-center sm:gap-y-1 xl:gap-y-2'>
                    {/* ICONS/IMAGES */}
                    <div className='h-12 w-24 rounded-lg shadow-lg p-3 gap-6 flex items-center justify-between'>
                        <img src={ apple } alt="Apple Store" />
                        <img src={ google } alt="Play Store" />
                    </div>
                    <div className='w-[350px] mt-8'>
                        <h1 className='font-semibold sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-[#2e2e2e] mb-2 text-center'>Scan to download</h1>
                        <p className='font-normal text-sm text-center text-[#6e6e6e]'>Place your phone camera within the frame and click the link to start the download.</p>
                    </div>
                    {/* QR CODE */}
                    <div>
                        <img src={ qrCode } alt="Qr Code" className='' />
                    </div>
                    <p className='font-normal text-center text-[#6e6e6e]'>Track your expenses. <br />Spend within your budget</p>
                </div>
            </div>
        </section>
    )
}

export default ScanModal