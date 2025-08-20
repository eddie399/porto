"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import NavLinks from './NavLinks';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };
  return (
    <nav className='fixed bg-white/100 mx-auto shadow-md top-0 left-0 right-0 z-10 dark:bg-[#212121] dark:bg-opacity-96 backdrop-blur-md dark:shadow-lg dark:border-b dark:border-orange-800'>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-6 ">
        <Link
          href={"/"}
          data-aos="zoom-in"
          className="text-2xl md:text-5xl text-cyan-900 font-semibold dark:text-white"
        >
          EDISTER<span className='text-5xl text-orange-500'>.</span>
        </Link>

        {/* Move button to right on md/lg screens */}
        <div className="flex items-center flex-1 justify-end">
          <button
            onClick={toggleDarkMode}
            className='text-cyan-900 focus:ring-2 focus:ring-cyan-400 font-medium rounded-xl text-sm px-0 py-0 mt-4 mr-1 lg:ml-8 dark:text-orange-700 focus:outline-none dark:focus:ring-orange-700 order-1 md:order-0'
          >
            {darkMode ? <MoonIcon className='w-5 h-5 inline-block' /> : <SunIcon className='h-5 w-5 inline-block' />}
          </button>
        </div>

        <div className='mobile-menu block md:hidden relative top-2'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 rounded border-orange-400 text-cyan-900 dark:text-orange-700'>
                <Bars3Icon className='h-6 w-5' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 rounded border-orange-400 text-white hover:text-cyan-400 hover:border-white'>
                <XMarkIcon className='h-6 w-5' />
              </button>
            )
          }

          <button
            onClick={toggleDarkMode}
            className='hidden md:block text-white bg-black/50 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm bg-gray-300 px-4 py-2 dark:bg-white dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800'
          >
            {darkMode ? <MoonIcon className='w-5 h-5 inline-block ml-2' /> : <SunIcon className='h-5 w-5 inline-block ml-2' />}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul data-aos="zoom-out-down" className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLinks href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar