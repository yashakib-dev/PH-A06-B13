import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({buyNow}) => {
    return (
<div className='shadow-md bg-base-100 sticky top-0 z-50 '>
    <div className="flex container items-center mx-auto py-6">
        <div className="navbar-start flex-1">
            <div className="dropdown">
             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
             </ul>
            </div>
            <h2 className="text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold">DigiTools</h2>
     </div>
        <div className="navbar-center hidden lg:flex flex-1 justify-center ">
                <ul className='flex gap-6 text-[#101727] font-semibold'>
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
        </div>
            <div className='flex-1 flex justify-end gap-4 items-center'>
                <div className="relative">
                    <FiShoppingCart className="text-2xl cursor-pointer" />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                     {buyNow.length}
                    </span>
                 </div>
                    <a className='text-[#101727] pr-3 font-semibold' href="">Login</a>
                    <button className='btn rounded-full hidden md:block bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold text-[#FFFFFF]'>Get Started</button>
            </div>
    </div>
</div>
    );
};

export default Navbar;