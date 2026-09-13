"use client";
import React from 'react'
import pass from '../public/images/pis.png'
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import resume from '../public/Edister_Ndamera_Resume.pdf'

    





const HeroSection = () => {
  return (
    <section id="home" className="py-8 sm:py-12 lg:py-20">
      <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-8'>
        <div className='order-2 col-span-7 place-self-center text-center sm:text-left lg:order-1'>
                <h1 
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                className='mb-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl'>
                  <span className='bg-gradient-to-r from-orange-300 via-orange-500 to-amber-600 bg-clip-text text-transparent'>Hello, I&apos;m Edister{" "}

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
                className='mb-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg'> I believe in continuous growth {" "}
                  <span className="font-bold text-orange-500">
                and strive to expand my skills
              </span>{" "}
              through innovation and learning. As a 
              dedicated Full Stack Developer, I am 
              passionate about building efficient, 
              user-focused digital solutions that 
              drive meaningful impact. I am eager to
               advance my career in technology and 
               remain open to new opportunities that 
               foster professional and technical growth. 
                </p>
                <div className='flex flex-col gap-3 pb-6 sm:flex-row sm:items-center'>
                  <a href="#contact">
                    <button data-aos="flip-left" className='w-full rounded-full bg-orange-500 px-6 py-3 font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-orange-400 sm:w-auto'>Hire Me</button>
                  </a>
                   <a href="/Edister_Ndamera_Resume.pdf" download="Edister_ndamera_CV">
                        <button data-aos="flip-right" className='mt-0 w-full rounded-full border border-orange-400/60 px-6 py-3 font-semibold text-orange-200 hover:-translate-y-0.5 hover:bg-orange-400/10 sm:w-auto'>
                          Download CV
                        
                        </button>
                    </a>
                </div>
            </div>
                <div className="order-1 col-span-5 mx-auto w-full place-self-center lg:order-2">
                  <div data-aos="zoom-in" className='relative mx-auto h-[260px] w-[260px] rounded-full border border-orange-300/20 bg-[radial-gradient(circle_at_50%_35%,rgba(249,115,22,0.32),rgba(7,16,20,0.15)_62%)] shadow-2xl shadow-orange-950/40 sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]'>
                   <Image
                   className='absolute left-1/2 top-1/2 block w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90'
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