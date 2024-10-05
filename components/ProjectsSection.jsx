"use client"
import React, {useState} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag'

const ProjectsData =[
    {
        id: 1,
        title: "style Destination website",
        description: "Authentication & CRUDE operation",
        image: "/images/destination.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        preViewUrl: "/",
    },
     {
        id: 2,
        title: "style Destination website",
        description: "Authentication & CRUDE operation",
        image: "/images/destination.png",
        tag: ["All", "mobile"],
        gitUrl: "/",
        preViewUrl: "/",
    },
     {
        id: 3,
        title: "style Destination website",
        description: "Authentication & CRUDE operation",
        image: "/images/pub.jpg",
        tag: ["All", "web"],
        gitUrl: "/",
        preViewUrl: "/",
    },
    {
      id: 4,
      title: "style Destination website",
      description: "Authentication & CRUDE operation",
      image: "/images/pub.jpg",
      tag: ["All", "web"],
      gitUrl: "/",
      preViewUrl: "/",
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