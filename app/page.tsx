"use client"
import React, {useEffect} from 'react';
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectsSection"
import EmailSextion from "../components/EmailSextion"
import Footer from "../components/Footer"
import Achievements from "../components/Achievements"



export default function Home() {

  useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,

    });  
  });
  
  return (
    <main className='flex min-h-screen flex-col bg-[#ffffff] dark:bg-[#1c1d22] overflow-x-hidden'>
      <Navbar />
      <div className="container  mt-24 mx-auto py-4 px-12"> 
        
        <HeroSection />
        <Achievements />
        <AboutSection />
        <ProjectSection />
        <EmailSextion />
      </div>
      <Footer />
     
    </main>
  );
}
