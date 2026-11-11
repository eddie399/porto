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
    setDarkMode((isDarkMode) => {
      const nextDarkMode = !isDarkMode;
      document.documentElement.classList.toggle("dark", nextDarkMode);
      return nextDarkMode;
    });
  };
  return (
    <nav className='fixed left-0 right-0 top-0 z-10 border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#071014]/85 dark:shadow-black/10'>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:py-5 lg:px-8">
        <Link
          href={"/"}
          data-aos="zoom-in"
          className="text-xl font-black tracking-[0.18em] text-slate-900 dark:text-white sm:text-2xl"
        >
          EDISTER<span className='text-5xl text-orange-500'>.</span>
        </Link>

        {/* Move button to right on md/lg screens */}
        <div className="flex items-center flex-1 justify-end">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className='order-1 mr-1 rounded-full px-0 py-0 text-orange-700 dark:text-orange-300 md:order-0 lg:mr-8'
          >
            {darkMode ? <SunIcon className='w-5 h-5 inline-block' /> : <MoonIcon className='h-5 w-5 inline-block' />}
          </button>
        </div>

        <div className='mobile-menu block md:hidden relative'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} aria-label="Open navigation menu" className='flex items-center rounded border-orange-400 px-3 py-2 text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-white'>
                <Bars3Icon className='h-6 w-5' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} aria-label="Close navigation menu" className='flex items-center border-orange-400 px-3 py-2 text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-white'>
                <XMarkIcon className='h-6 w-5' />
              </button>
            )
          }

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