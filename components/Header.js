"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-20 bg-white text-black shadow-md transition-all duration-300 ease-in-out">
            <nav className="container mx-auto px-4 lg:px-8 py-4 flex justify-around items-center">
                {/* Logo */}
                <Link href="/" scroll={true}>
                    <Image
                        src="/c.png"
                        alt="Logo"
                        width={128}
                        height={128}
                        className="w-28 sm:w-32 md:w-36 lg:w-40" // Responsive width
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                    id="menu-toggle"
                    onClick={handleMenuToggle}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Menu */}
                <ul
                    className={`${menuOpen
                            ? 'flex flex-col absolute top-full left-0 right-0 bg-white shadow-lg p-4 space-y-4 lg:hidden'
                            : 'hidden'
                        } lg:flex lg:flex-row lg:space-x-6 lg:items-center text-xl font-bold`}
                    id="menu"
                >
                    <li className="relative text-green-500 hover:text-green-700 transition-colors duration-300 group">
                        <Link href="/">
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative text-green-500 hover:text-green-700 transition-colors duration-300 group">
                        <Link href="#about">
                            About
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative text-green-500 hover:text-green-700 transition-colors duration-300 group">
                        <Link href="#services">
                            Services
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative text-green-500 hover:text-green-700 transition-colors duration-300 group">
                        <Link href="#contact">
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative text-green-500 hover:text-green-700 transition-colors duration-300 group">
                        <Link href="#faq">
                            FAQ
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Fade-in animation for menu items */}
            <style jsx>{`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            #menu li {
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
            }

            #menu li:nth-child(1) {
            animation-delay: 0.3s;
            }
            #menu li:nth-child(2) {
            animation-delay: 0.4s;
            }
            #menu li:nth-child(3) {
            animation-delay: 0.5s;
            }
            #menu li:nth-child(4) {
            animation-delay: 0.6s;
            }
            #menu li:nth-child(5) {
            animation-delay: 0.7s;
            }
            `}</style>
        </header>
    );
};

export default Header;
