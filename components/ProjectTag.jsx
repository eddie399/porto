import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-white bg-cyan-400 dark:bg-orange-500" : "text-[#ADB7BE] border-slate-700 hover:border-white" 
    
  return (
    <button type="text" className={`${buttonStyles} rounded-full border-1 px-2 py-2 cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>

  )
}

export default ProjectTag