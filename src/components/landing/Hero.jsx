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

// import buttons
import CreateAccountButton from '../CreateAccountButton';
import DownloadButton from '../DownloadButton';

const Hero = () => {
  return (
    <main className='bg-[#3f3fd9] flex h-screen' id='hero'>
      {/* text */}
      <div className='flex flex-col justify-center ml-20'>
        <div className='flex gap-3.5 items-center'>
            <h1 className='capitalize font-bold text-7xl text-white relative leading-tight'>
                manage your money with
                <div className='relative'>
                  <img src={ egoText } alt="Ego" className='absolute -right-12 bottom-0'/>
                  <img src={ greenBill } alt="Image of a green bill" className='absolute -top-40 -right-20' />
                </div>
            </h1>
        </div>
        <p className='text-white mt-5 text-lg'>Track your expenses. Spend within your budget</p>
        <div className='flex gap-x-3 mt-7'>
            <CreateAccountButton/>
            <DownloadButton/>
        </div>
      </div>
      {/* image */}
      <div className='relative'>
        <img src={ overlayLight } alt="Light" className=''/>
        <img src={ heroImg } alt="An image of a man" className='absolute top-0 z-10 h-screen object-cover'/>
        <img src={ lightBlueBill } alt="Image of a light blue bill" className='absolute -top-40 right-52' />
        <img src={ darkBlueBill } alt="Image of a dark blue bill" className='absolute top-16 right-36' />
        <img src={ croppedBill } alt="Image of cropped bill" className='absolute right-0 top-[25%]' />
        <img src={ pinkBill } alt="Image of a pink bill" className='absolute left-60 bottom-44' />
      </div>
    </main>
  )
}

export default Hero
