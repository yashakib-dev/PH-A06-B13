import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className='shadow-md'>
            <nav className='flex container items-center mx-auto justify-between py-6 '>
                <h2 className='text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold'>DigiTools</h2>
                <ul className='flex gap-6 text-[#101727] font-semibold'>
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
                <div className='flex gap-6 items-center'>
                    <FiShoppingCart />
                    <a className='text-[#101727] font-semibold' href="">Login</a>
                    <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold text-[#FFFFFF]'>Get Started</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;