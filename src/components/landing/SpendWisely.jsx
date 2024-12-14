import React from 'react';
import bill from '/assets/bill.png';
import thumbsUp from '/assets/fluent-emoji_thumbs-up-dark.png'
import DownloadButton from '../extra/DownloadButton';

const SpendWisely = () => {
  return (
    <div className='flex sm:flex-col-reverse justify-center items-center relative sm:mr-0 sm:gap-y-10 sm:my-32 md:my-52 lg:my-48 xl:my-48 2xl:my-56 md:mr-40 lg:mr-44 xl:mr-48 2xl:mr-48 gap-x-5'>
        <img src={ thumbsUp } alt="Thumbs up" className='-rotate-12'/>
        <div className='flex flex-col items-center gap-y-10'>
            <div className='relative font-bold sm:text-4xl md:text-6xl xl:text-7xl text-center capitalize flex flex-col'>
                <span>don't go broke! </span>
                <span>spend wisely</span>
            </div>
            <DownloadButton/>
        </div>
        <img src={ bill } alt="An image of a bill" className='absolute sm:-top-6 sm:right-32 sm:h-12 md:-top-14 md:right-28 xl:-top-14 xl:right-[22rem]' />
    </div>
  )
}

export default SpendWisely
