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
    <nav className='fixed left-0 right-0 top-0 z-10 border-b border-white/10 bg-[#071014]/85 shadow-lg shadow-black/10 backdrop-blur-xl'>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:py-5 lg:px-8">
        <Link
          href={"/"}
          data-aos="zoom-in"
          className="text-xl font-black tracking-[0.18em] text-white sm:text-2xl"
        >
          EDISTER<span className='text-5xl text-orange-500'>.</span>
        </Link>

        {/* Move button to right on md/lg screens */}
        <div className="flex items-center flex-1 justify-end">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle color theme"
            className='order-1 mr-1 rounded-xl px-0 py-0 text-orange-300 focus:ring-2 focus:ring-orange-400 md:order-0 lg:mr-8'
          >
            {darkMode ? <MoonIcon className='w-5 h-5 inline-block' /> : <SunIcon className='h-5 w-5 inline-block' />}
          </button>
        </div>

        <div className='mobile-menu block md:hidden relative top-2'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} aria-label="Open navigation menu" className='flex items-center rounded border-orange-400 px-3 py-2 text-orange-300 hover:text-white'>
                <Bars3Icon className='h-6 w-5' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} aria-label="Close navigation menu" className='flex items-center border-orange-400 px-3 py-2 text-orange-300 hover:text-white'>
                <XMarkIcon className='h-6 w-5' />
              </button>
            )
          }

          <button
            onClick={toggleDarkMode}
            className='hidden md:block text-white lg:ml-4 lg:mt-2 bg-black/50 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm bg-gray-300 px-4 py-2 dark:bg-white dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800'
          >
            {darkMode ? <MoonIcon className='w-5 h-5 inline-block' /> : <SunIcon className='h-5 w-5 inline-block ml-2 ' />}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul data-aos="zoom-out-down" className="flex p-4 md:gap-8 md:p-0">
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