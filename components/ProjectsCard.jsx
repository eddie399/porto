import React from 'react'
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
 import Link from 'next/link'


const ProjectsCard = ({imgUrl, title, description, gitUrl, preViewUrl}) => {
  return (
    <div>
        <div 
        className='h-52 md:h-72 relative group rounded-t-xl'
        style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-xl border-[#ADBD7E] hover:border-white group/link'>
              <CodeBracketIcon className='h-10 w-10 text-[#ADBD7E] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center group-hover/link:text-white' />
            </Link>
            <Link href={preViewUrl} className='h-14 w-14 ml-2 border-2 relative rounded-xl border-[#ADBD7E] hover:border-white group/link'>
              <EyeIcon className='h-10 w-10 text-[#ADBD7E] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center group-hover/link:text-white' />
            </Link>
          </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectsCard