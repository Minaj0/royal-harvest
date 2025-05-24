import React, { useState } from 'react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                {/* Desktop Navbar */}
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <div className="logo">
                        <img
                            src="src/assets/rh.svg"
                            height="60px"
                            width="180px"
                            alt="Company Logo"
                            className="h-[60px] w-auto"
                        />
                    </div>

                    {/* Desktop Menu Items */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="links text-sec font-main text-xl gap-8 flex font-extrabold">
                            <a href="#" className='hover:text-main transition-colors'>Home</a>
                            <a href="#" className='hover:text-main transition-colors'>Products</a>
                            <a href="#" className='hover:text-main transition-colors'>About</a>
                            <a href="#" className='hover:text-main transition-colors'>Contact</a>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='input border border-gray-300 text-sec font-main py-1 px-4 text-lg rounded-full outline-none placeholder:font-main bg-transparent w-48'
                                placeholder='Search...'
                            />
                            <FaSearch className="absolute right-3 top-2 text-gray-400" />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-sec focus:outline-none"
                        >
                            {isOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-b-lg">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#"
                                className='hover:text-main text-sec font-main text-xl font-extrabold py-2 px-4'
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className='hover:text-main text-sec font-main text-xl font-extrabold py-2 px-4'
                                onClick={toggleMenu}
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className='hover:text-main text-sec font-main text-xl font-extrabold py-2 px-4'
                                onClick={toggleMenu}
                            >
                                About
                            </a>

                            {/* Search Bar - Mobile */}
                            <div className="relative mt-2">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className='input border border-gray-300 text-sec font-main py-2 px-4 text-lg rounded-full outline-none placeholder:font-main bg-transparent w-full'
                                    placeholder='Search...'
                                />
                                <FaSearch className="absolute right-3 top-3 text-gray-400" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};