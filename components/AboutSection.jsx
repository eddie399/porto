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
                <li>Java</li>

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
                    Diploma in Telecommunications Engineering

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
                className="text-cyan-900 dark:text-gray-200 text-base lg:text-lg justify-start">
                   I am a dedicated Full Stack Developer with a Bachelor 
                   of Science in Computer Science from DMI-St. John The
                    Baptist University, Blantyre, class of 2024. I have 
                    gained hands-on experience in software development, 
                    focusing on building robust, scalable, and efficient 
                    web applications. Proficient in both front-end and back-end 
                    technologies, I am committed to continuously advancing my skills
                     in modern frameworks and development best practices. <span className='text-green-400 dark:text-orange-700 font-medium'> My goal is
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

                <div className='mt-12 border-l border-orange-500/40 pl-6'>
                    <h3 className='mb-6 text-xl font-semibold text-white'>Career timeline</h3>
                    <div className='space-y-7'>
                        <article className='relative'>
                            <span className='absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#071014] bg-orange-500' />
                            <p className='text-sm font-semibold uppercase tracking-[0.14em] text-orange-400'>2024 - Present</p>
                            <h4 className='mt-1 text-lg font-semibold text-white'>Full-stack development</h4>
                            <p className='mt-1 text-sm leading-6 text-slate-300'>Building practical, user-focused web applications while growing through hands-on projects and modern development tools.</p>
                        </article>
                        <article className='relative'>
                            <span className='absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#071014] bg-orange-500' />
                            <p className='text-sm font-semibold uppercase tracking-[0.14em] text-orange-400'>2024</p>
                            <h4 className='mt-1 text-lg font-semibold text-white'>B.Sc. Computer Science</h4>
                            <p className='mt-1 text-sm leading-6 text-slate-300'>DMI-St. John The Baptist University, Blantyre. Upper First Class.</p>
                        </article>
                        <article className='relative'>
                            <span className='absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#071014] bg-orange-500' />
                            <p className='text-sm font-semibold uppercase tracking-[0.14em] text-orange-400'>Earlier studies</p>
                            <h4 className='mt-1 text-lg font-semibold text-white'>Telecommunications Engineering</h4>
                            <p className='mt-1 text-sm leading-6 text-slate-300'>Advanced Diploma from MUBAS, providing a foundation in technology, systems, and problem solving.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default AboutSection