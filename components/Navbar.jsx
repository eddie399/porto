"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import NavLinks from './NavLinks';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks =[
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-6 ">
            <Link href={"/"} 
            data-aos="zoom-in"
            className="text-2xl md:text-5xl text-white font-semibold">
            EDISTER<span className='text-5xl text-orange-700'>.</span>
            
            </Link>
            <div className='mobile-menu block md:hidden'>
              {
                !navbarOpen ? (
                  <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 rounded border-blue-400 text-blue-400 hover:text-white hover:border-white'>
                  <Bars3Icon className='h-7 w-7'/>
                  </button>
                ) : (
                  <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 rounded border-blue-400 text-blue-400 hover:text-white hover:border-white'>
                   <XMarkIcon className='h-7 w-7'/>
                  </button>
                )
              }  
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
              <ul data-aos="zoom-out-down" className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLinks href={link.path} title={link.title}/>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/>: null }
    </nav>
  )
}

export default Navbar