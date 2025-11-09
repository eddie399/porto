"use client"
import Image from 'next/image'
import React, {useState,useTransition} from 'react'
import TabButton from './TabButton'

const TAB_DATA =[
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2 text-cyan-900 dark:text-gray-200'>
                <li>Node.js</li>
                <li>Django</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>WIX</li>

            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disc pl-2 text-cyan-900 dark:text-gray-200'>
                <li>
                    MUBAS <br/>
                    Advanced Diploma in Telecommunications Engineering

                </li>
                <br/>
                <li>
                    DMI-St John The Baptist University
                    Bachelor&apos;s degree in Computer Science
                    Upper First Class
                </li>
                

            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2 text-cyan-900 dark:text-gray-200'>
                <li>
                    IBM <br/>
                    CyberSecurity
                </li>
                <li>
                    IBM <br/>
                    Cloud Computing
                </li>
                <li>
                    DMI-St John The Baptist University<br/>
                    PC Hardware Workshop
                </li>
                

            </ul>
        )
    },
    
]






const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id)=> {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
  
    <section className='text-white' id='about'> 
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src="/images/pub.jpg" alt='picture' width={500} height={500} className='rounded-xl' />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 data-aos="zoom-in-down" className='text-cyan-900 dark:text-white font-bold text-4xl mb-4'>About Me</h2>
                <p 
                data-aos="slide-left" 
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="text-cyan-900 dark:text-gray-200 text-base lg:text-lg">
                   I am a dedicated Full Stack Developer with a Bachelor 
                   of Science in Computer Science from DMI-St. John The
                    Baptist University, Blantyre, class of 2024. I have 
                    gained hands-on experience in software development, 
                    focusing on building robust, scalable, and efficient 
                    web applications. Proficient in both front-end and back-end 
                    technologies, I am committed to continuously advancing my skills
                     in modern frameworks and development best practices. <span className='text-green-400 font-medium'> My goal is
                      to contribute to innovative projects that leverage technology to
                       solve complex problems and drive business success</span>
              
                </p>
                <div data-aos="fade-up"
                 data-aos-duration="1000" 
                className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {""}
                        Skills {""}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}>
                        {""}
                        Education {""}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {""}
                        certifications {""}
                    </TabButton>
                    
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div> 
    </section>
  )
}

export default AboutSection