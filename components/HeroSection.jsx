"use client";
import React from 'react'
import pass from '../public/images/pis.png'
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import resume from '../public/Edister_Ndamera_Resume.pdf'

    





const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center justify-self-start sm:text-left'>
                <h1 
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                className='text-white text-2xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold mb-4'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800'>Hello, I&apos;m Edister{" "}

                    </span>
                    <br/>
                    <TypeAnimation
                    
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            
                            1000, // wait 1s before replacing "Mice" with "edister"
                            'Web Developer',
                            1000,
                            'UI/UX Designer',
                            1000,
                            'Web Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                </h1>
                <p 
                data-aos="zoom-in-right"
                className='text-gray-400 text-base sm:text-lg mb-6 lg:text-xl'> I believe that you should{" "}
              <span className="font-bold text-orange-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 
                </p>
                <div className='pb-6'>
                  <a href="#contact">
                    <button data-aos="flip-left" className='px-6 py-2 rounded-full mr-3 text-white width-full sm:w-fit bg-gradient-to-br from-blue-400 via-green-400 to-purple-800 hover:bg-slate-800'>Hire Me</button>
                  </a>
                   <a href="/Edister_Ndamera_Resume.pdf" download="resume">
                        <button data-aos="flip-right" className='px-1 py-1 rounded-full mr-3 width-full sm:w-fit bg-gradient-to-br from-orange-500 via-purple-400 to-orange-800  hover:bg-slate-800 text-white mt-3'>
                        
                            <span className='block bg-slate-400 hover:bg-slate-800 rounded-full px-5 py-1'>Download CV</span>
                        
                        </button>
                    </a>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                 <div data-aos="zoom-in"className='rounded-lg relative bg-[#181818] w-[200px] h-[200px] lg:h-[300px] lg:w-[300px] mix-blend-lighten'>
                   <Image
                   className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-80'
                   src={pass}
                   alt='pick'
                   width={200}
                   height={200}
                   />
                </div>
                {/*backdrop-brightness-900 bg-white/10 */}

            </div>
        </div>
    </section>
  )
}

export default HeroSection