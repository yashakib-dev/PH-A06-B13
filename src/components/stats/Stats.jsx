import React from 'react';

const Stats = () => {
    return (
        <>
         <div className='md:flex  justify-center my-8 py-12 space-y-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            
            <div className=' text-center lg:mr-30'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>50K+</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Active Users</p>
            </div>
            <div className=' text-center md:mr-2 md:ml-2 md:border-r-2 md:border-l-2 text-[white]/50 md:px-40'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>200+</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Premium Tools</p>
            </div>
            <div className=' text-center lg:ml-30 '>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>4.9</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Rating</p>
            </div>
        
        
        </div>   
        </>
    );
};

export default Stats;