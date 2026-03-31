import React from 'react';

const TransparentPricing = () => {
    return (
      <div className=' container md:w-full w-[90%] mx-auto mt-30 '>
        <div className='text-center space-y-5 '>
                <h2 className="md:text-5xl text-4xl text-[#101727] font-bold">Simple, Transparent Pricing</h2>
                <p className="text-[#627382] md:text-lg text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
          <div className='md:w-full  mt-15 grid justify-items-center w-[80%]  mx-auto lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1'>

            <div className="card w-90 bg-base-100 rounded-2xl shadow-sm ">
                <div className="card-body gap-5 border  border-gray-300 rounded-2xl">
        <h2 className="text-3xl font-bold ">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <span className="text-3xl font-bold">$0/<span className='text-sm font-medium text-[#627382]'>Month</span></span>
    <ul className="flex flex-col text-[#627382] gap-2 ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn bg-linear-to-r from-[#4F39F6] rounded-full h-12 to-[#9514FA] text-[white] btn-block">Get Started Free</button>
    </div>
                 </div>
            </div>
                    
    <div className="relative card w-90 border  border-gray-300 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[white] rounded-2xl shadow-sm ">
               <span className='absolute -top-2.5 right-30 badge badge-warning badge-soft rounded-2xl bg-amber-100 text-[#BB4D00]'>Most Popular</span>
                 <div className="card-body  rounded-2xl">
        <h2 className="text-3xl font-bold">Pro</h2>
      <p className='text-[white]'>Best for professionals</p>
      <span className="text-3xl font-bold">$29/<span className='text-sm font-medium text-[white]'>Month</span></span>
    <ul className="flex flex-col text-[white] gap-2 ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn rounded-full h-12 btn-block"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
    </div>
              </div>
            </div>

            <div className="card w-90 bg-base-100 rounded-2xl shadow-sm ">
                 <div className="card-body border  border-gray-300 rounded-2xl">
        <h2 className="text-3xl font-bold">Enterprise</h2>
      <p className='text-[#627382]'>For teams and businesses</p>
      <span className="text-3xl font-bold">$99/<span className='text-sm font-medium text-[#627382]'>Month</span></span>
    <ul className=" flex flex-col text-[#627382] gap-2 ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn bg-linear-to-r from-[#4F39F6] rounded-full h-12 to-[#9514FA] text-[white] btn-block">Contact Sales</button>
    </div>
                </div>
            </div>
            
        </div>
      
      
      
      </div>
    );
};

export default TransparentPricing;