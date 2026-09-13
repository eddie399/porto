"use client"
import React, {useEffect} from 'react';
import Image from "next/image";
import AOS from "aos";
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
    <main className='min-h-screen overflow-x-hidden bg-[#071014] text-white'>
      <Navbar />
      <div className="mx-auto mt-20 w-full max-w-7xl px-4 py-4 sm:px-6 lg:mt-24 lg:px-8">
        
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
