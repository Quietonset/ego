import React from 'react';
import bill from '/assets/bill.png';
import thumbsUp from '/assets/fluent-emoji_thumbs-up-dark.png'
import DownloadButton from '../extra/DownloadButton';

const SpendWisely = () => {
  return (
    <div className='flex justify-center items-center relative my-48 mr-48 gap-x-5'>
        <img src={ thumbsUp } alt="Thumbs up" className='-rotate-12'/>
        <div className='flex flex-col items-center gap-y-10'>
            <div className='relative font-bold text-7xl text-center capitalize flex flex-col'>
                <span>don't go broke! </span>
                <span>spend wisely</span>
            </div>
            <DownloadButton/>
        </div>
        <img src={ bill } alt="An image of a bill" className='absolute -top-14 right-[22rem]' />
    </div>
  )
}

export default SpendWisely
