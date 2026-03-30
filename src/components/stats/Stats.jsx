import React from 'react';

const Stats = () => {
    return (
        <>
         <div className='md:flex  justify-evenly my-8 py-12 space-y-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            
            <div className=' text-center'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>50K+</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Active Users</p>
            </div>
            <div className=' text-center'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>200+</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Premium Tools</p>
            </div>
            <div className=' text-center'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>4.9</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Rating</p>
            </div>
        
        
        </div>   
        </>
    );
};

export default Stats;