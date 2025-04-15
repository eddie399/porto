"use client"
import React, {useState} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag'

const ProjectsData =[
    {
        id: 1,
        title: "My Home",
        description: "A site where you can Buy, Sale, Rent a house or Shop",
        image: "/images/my_home.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        preViewUrl: "https://findmyhomemw.netlify.app/",
    },

    {
      id: 2,
      title: "Vixen_Dashboard",
      description: "A site where you can Buy Electronic Gadgets. Built using Vite, React, TypeScript, JavaScript",
      image: "/images/vixen.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      preViewUrl: "https://vixenshoppers.netlify.app/",
  },
     {
        id: 3,
        title: "Eddy's Cafe",
        description: "A coffee site, order now!. Free delivery",
        image: "/images/coffee.png",
        tag: ["All", "mobile"],
        gitUrl: "/",
        preViewUrl: "https://cafe-marine.netlify.app/",
    },
     {
        id: 4,
        title: "TIMELINE",
        description: "TIMELINE Delivery Service Site. A site built using React, JSX, Vite, TSX",
        image: "/images/timeline.png",
        tag: ["All", "web"],
        gitUrl: "/",
        preViewUrl: "https://deliveryon.netlify.app/",
      },
    {
      id: 5,
      title: "Bliss Foods",
      description: "Typescript, Javascript, Next.Js",
      image: "/images/bliss.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://blissfoods.netlify.app/",
    },

    {
      id: 6,
      title: "MOTORWORLD",
      description: "MotorWorld Site. A site built using React, JSX, Vite, TSX",
      image: "/images/motor.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://motor-chi.vercel.app/",
    },
    {
      id: 7,
      title: "Movie Site",
      description: "A Disney clone. A site built using React, JSX, Vite, and API integration for dynamic movie listing",
      image: "/images/disney.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://dsmoviesiteclone.netlify.app/",
    },
    {
      id: 8,
      title: "Gadget Zone",
      description: "A site for all Electronic gadgets. A site built using React, JSX, Vite, and API integration for dynamic electronics listing",
      image: "/images/gadget.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://gadget-zone-six.vercel.app/",
    },
    {
      id: 9,
      title: "Mini_Weather_Site",
      description: "A site for weather updates. A site built using React, JSX, Vite, and API integration for dynamic weather updates",
      image: "/images/weather.png",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "https://splendid-halva-d12440.netlify.app/",
    },
]




const ProjectsSection = () => {
  const [tag,setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );
  
  return (
    <>
      <h2 data-aos="zoom-out-down" className='text-center text-4xl font-bold mt-4 text-white'>MY PROJECTS</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
         <ProjectTag 
          onClick={handleTagChange}
          name="web"
          isSelected={tag === "web"}
        />
         <ProjectTag 
          onClick={handleTagChange}
          name="mobile"
          isSelected={tag === "Mobile"}
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
    </>
  )
}

export default ProjectsSection