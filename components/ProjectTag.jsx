import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-white bg-orange-500" : "text-[#ADB7BE] border-slate-700 hover:border-white" 
    
  return (
    <button type="text" className={`${buttonStyles} rounded-full border-2 px-4 py-4 cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>

  )
}

export default ProjectTag