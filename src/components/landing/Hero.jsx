import React from 'react';
// import images
import heroImg from '/assets/man.png';
import egoText from '/assets/ego.png';
import overlayLight from '/assets/lightbg-copy2.png';
import greenBill from '/assets/bill.png';
import lightBlueBill from '/assets/bill (1).png';
import pinkBill from '/assets/bill (2).png';
import darkBlueBill from '/assets/bill (3).png';
import croppedBill from '/assets/bill (4).png';

// mobile
import HeroImg2 from '/assets/man-mobile.png';
import all from '/assets/Group 3.png';

// import buttons
import CreateAccountButton from '../../components/extra/CreateAccountButton';
import DownloadButton from '../../components/extra/DownloadButton';
// import modal
import ScanModal from '../extra/ScanModal';

const Hero = () => {
  return (
    <main className='bg-[#3f3fd9] flex sm:flex-col sm:h-full h-screen sm:pt-10' id='hero'>
      {/* text */}
      <div className='flex flex-col justify-center ml-20 sm:ml-5'>
        <div className='flex gap-3.5 items-center'>
            <h1 className='capitalize font-bold sm:text-4xl text-7xl text-white relative leading-tight'>
                manage your <br className='hidden sm:block' />money <span className='sm:mt-10'>with</span>
                <div className='relative'>
                  <img src={ egoText } alt="Ego" className='absolute -right-12 bottom-0 sm:h-12 sm:-right-[75px] sm:-bottom-2'/>
                  <img src={ greenBill } alt="Image of a green bill" className='absolute sm:h-14 sm:-right-24 sm:bottom-7 xl:-top-40 xl:-right-20' />
                </div>
            </h1>
        </div>
        <p className='text-white mt-5 sm:text-sm sm:font-extralight xl:text-lg'>Track your expenses. Spend within your budget</p>
        <div className='flex gap-x-3 sm:flex-col-reverse sm:gap-y-4 sm:my-4 xl:mt-7'>
            <CreateAccountButton/>
            <DownloadButton/>
            <ScanModal/>
        </div>
      </div>
      {/* image */}
      <div className='relative sm:hidden'>
        <img src={ overlayLight } alt="Light" className='sm:h-[450px]'/>
        <img src={ heroImg } alt="An image of a man" className='absolute top-0 z-10 h-screen sm:hidden object-cover'/>
        {/* <img src={ HeroImg2} alt="An Image of a man" className='absolute top-0'  /> */}
        <img src={ lightBlueBill } alt="Image of a light blue bill" className='absolute -top-40 right-52' />
        <img src={ darkBlueBill } alt="Image of a dark blue bill" className='absolute top-16 right-36' />
        <img src={ croppedBill } alt="Image of cropped bill" className='absolute right-0 top-[25%]' />
        <img src={ pinkBill } alt="Image of a pink bill" className='absolute left-60 bottom-44' />
      </div>
    </main>
  )
}

export default Hero
