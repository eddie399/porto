import React from 'react'
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineDribbble,
  AiOutlineFacebook,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='footer border border-t-cyan-900 border-l-transparent border-r-transparent text-cyan-900 dark:text-white'>
        
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 relative lg:top-20 top-3">
          <a href="https://github.com/eddie399" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-cyan-900 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/Gradueddie"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-cyan-900 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/EDDIENDAMERA/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-cyan-900 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.dribbble.com/Edister"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineDribbble
              className="hover:-translate-y-1 transition-transform cursor-pointer text-cyan-900 dark:text-neutral-100"
              size={30}
            />
          </a>
          
          <a
          href="https://web.facebook.com/profile.php?id=61556559491590"
          rel="noreferrer"
          target="_blank"
          >
            <AiOutlineFacebook 
            className="hover:-translate-y-1 transition-transform cursor-pointer text-cyan-900 dark:text-neutral-100"
            size={30}
          />


          </a>
        </div>
      
        
        <div className="container p-12 flex justify-between">
            <h2 className='text-cyan-900 dark:text-white text-2xl font-bold'>EDISTER<span className='text-orange-600 text-2xl font-bold'>.</span></h2>
            <p className='mt-2'>© 2025 EJ PIXELS</p>
        </div>
    </footer>
  )
}

export default Footer