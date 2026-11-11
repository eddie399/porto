"use client"
import React, {useState} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag'
import { AiOutlineGithub } from "react-icons/ai"

const ProjectsData =[
   
    {
        id: 1,
        title: "Venduza Malawi",
        description: "A Malawian E-commerce site. NextJS 15, Typescript, JavaScript, Stripe",
        image: "/images/vend.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        preViewUrl: "https://venduzamw.vercel.app/",
    },

    {
        id: 2,
        title: "ShinySpaces",
        description: "Built with Next.js 19, TypeScript, JavaScript, Stripe ShinySpaces is a modern web app that lets users book and pay for cleaning services inline with ease and secure payment options through Stripe integration.",
        image: "/images/clean.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        preViewUrl: "https://clean-pro-sigma.vercel.app/",
    },

     {
        id: 3,
        title: "My Home",
        description: "A site where you can Buy, Sale, Rent a house or Shop",
        image: "/images/my_home.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        preViewUrl: "https://findmyhomemw.netlify.app/",
    },


    {
      id: 4,
      title: "Vixen_Dashboard",
      description: "A site where you can Buy Electronic Gadgets. Built using Vite, React, TypeScript, JavaScript",
      image: "/images/vixen.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      preViewUrl: "https://vixenshoppers.netlify.app/",
  },
     {
        id: 5,
        title: "Eddy's Cafe",
        description: "A coffee site, order now!. Free delivery",
        image: "/images/coffee.png",
        tag: ["All", "mobile"],
        gitUrl: "/",
        preViewUrl: "https://cafe-marine.netlify.app/",
    },
     {
        id: 6,
        title: "TIMELINE",
        description: "TIMELINE Delivery Service Site. A site built using React, JSX, Vite, TSX",
        image: "/images/timeline.png",
        tag: ["All", "web"],
        gitUrl: "/",
        preViewUrl: "https://deliveryon.netlify.app/",
      },
    {
      id: 7,
      title: "Bliss Foods",
      description: "Typescript, Javascript, Next.Js",
      image: "/images/bliss.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://blissfoods.netlify.app/",
    },

    {
      id: 8,
      title: "MOTORWORLD",
      description: "MotorWorld Site. A site built using React, JSX, Vite, TSX",
      image: "/images/motor.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://motor-chi.vercel.app/",
    },
    {
      id: 9,
      title: "Movie Site",
      description: "A Disney clone. A site built using React, JSX, Vite, and API integration for dynamic movie listing",
      image: "/images/disney.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://dsmoviesiteclone.netlify.app/",
    },
    {
      id: 10,
      title: "Gadget Zone",
      description: "A site for all Electronic gadgets. A site built using React, JSX, Vite, and API integration for dynamic electronics listing",
      image: "/images/gadget.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://gadget-zone-six.vercel.app/",
    },
    {
      id: 11,
      title: "Mini_Weather_Site",
      description: "A site for weather updates. A site built using React, JSX, Vite, and API integration for dynamic weather updates",
      image: "/images/weather.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://splendid-halva-d12440.netlify.app/",
    },
]

const featuredCaseStudies = [
  {
    title: "Venduza Malawi",
    subtitle: "Shop Malawi, wherever you are",
    image: "/images/vend.png",
    overview: "A marketplace for Malawians at home and abroad to browse and purchase items available in Malawi, without spending time searching markets in person.",
    challenge: "Building trust between buyers and sellers, including helping them coordinate delivery with location visibility and a practical delivery time.",
    role: "Designed and built independently",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "JavaScript", "Stripe", "shadcn/ui"],
    link: "https://venduzamw.vercel.app/",
    githubLink: null,
  },
  {
    title: "ShinySpaces",
    subtitle: "Book local cleaning and home services",
    image: "/images/clean.png",
    overview: "A service platform for people in Malawi to find house and car cleaning, fumigation, landscaping, and bin disposal.",
    challenge: "Creating an in-app chat where customers and service providers can discuss and negotiate the price.",
    role: "Designed and built independently",
    stack: ["Next.js", "React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL", "shadcn/ui"],
    link: "https://clean-pro-sigma.vercel.app/",
    githubLink: null,
  },
]



const ProjectsSection = () => {
  const [tag,setTag] = useState("all");

  const handleTagChange = (newTag) => {
    setTag(newTag.toLowerCase());
  };

  const filteredProjects = ProjectsData.filter((project) => project.id > 2).filter((project) =>
    project.tag.some((projectTag) => projectTag.toLowerCase() === tag)
  );
  
  return (
    <section id="projects" className="py-12">
      <h2 data-aos="zoom-out-down" className='text-center text-4xl font-bold mt-4 text-cyan-900 dark:text-white'>MY PROJECTS</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-300">
        A closer look at a couple of projects I designed and built.
      </p>
      <div className="mt-10 space-y-8">
        {featuredCaseStudies.map((project, index) => (
          <article
            key={project.title}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-[#10191d] lg:grid-cols-2"
          >
            <div className={`min-h-64 bg-cover bg-center sm:min-h-80 lg:min-h-full ${index % 2 === 1 ? "lg:order-2" : ""}`} style={{ backgroundImage: `url(${project.image})` }} role="img" aria-label={`${project.title} project preview`} />
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">Featured case study</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-1 text-lg font-medium text-slate-700 dark:text-slate-200">{project.subtitle}</p>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">{project.overview}</p>
              <div className="mt-5 rounded-xl bg-orange-50 p-4 dark:bg-orange-400/10">
                <h4 className="font-semibold text-slate-900 dark:text-white">Challenge & approach</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.challenge}</p>
              </div>
              <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">My role:</span> {project.role}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.stack.map((technology) => (
                  <li key={technology} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/15 dark:text-slate-200">
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-full bg-orange-500 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  View live project
                  <span className="ml-2" aria-hidden="true">↗</span>
                </a>
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 dark:border-white/20 dark:text-white dark:hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    <AiOutlineGithub size={20} aria-hidden="true" />
                    View on GitHub
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    title="GitHub repository link will be added soon"
                    className="inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-400 opacity-70 dark:border-white/10 dark:text-slate-500"
                  >
                    <AiOutlineGithub size={20} aria-hidden="true" />
                    GitHub coming soon
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <h3 className="mt-14 text-center text-2xl font-bold text-cyan-900 dark:text-white">More projects</h3>
      <div className='flex flex-row items-center justify-center gap-2 py-6 text-slate-700 dark:text-white'>
        <ProjectTag 
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "all"}
        />
         <ProjectTag 
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "web"}
        />
         <ProjectTag 
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "mobile"}
        />
      </div>
      <div 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) =>( 
          <ProjectsCard 
            key={project.id}
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tags={project}
            gitUrl={project.gitUrl}
            preViewUrl={project.preViewUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection