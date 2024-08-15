import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const cart = useSelector((state) => state.cart.items || []); // Adjust based on your actual state structure

    return (
        <div className='sticky top-0 z-50 bg-gray-800'>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
                <NavLink to="/">
                    <div className='ml-5 p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg'>
                        <h1 className='text-3xl font-bold text-white tracking-wide'>
                            e-commerce
                        </h1>
                    </div>
                </NavLink>
                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? 'text-blue-500 text-lg' : 'text-slate-100 text-lg'}>
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? 'text-blue-500 text-lg' : 'text-slate-100 text-lg'}>
                        About Us
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? 'text-blue-500 text-lg' : 'text-slate-100 text-lg'}>
                        Contact Us
                    </NavLink>
                    <NavLink 
                        to="/cart" 
                        className={({ isActive }) => isActive ? 'text-blue-500 text-lg' : 'text-slate-100 text-lg'}>
                        <div className='relative'>
                            <FaCartPlus className='text-2xl' />
                            {cart.length > 0 && (
                                <span
                                    className="absolute top-0 right-0 bg-green-600 text-xs w-5 h-5 flex 
                                    justify-center items-center animate-bounce rounded-full text-white"
                                    // Adjust position as needed
                                >{cart.length}</span>
                            )}
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
