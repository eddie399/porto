import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-white bg-orange-700 dark:bg-orange-500" : "text-slate-700 border-slate-300 hover:border-slate-500 dark:text-[#ADB7BE] dark:border-slate-700 dark:hover:border-white" 
    
  return (
    <button type="text" className={`${buttonStyles} rounded-full border-1 px-2 py-2 cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>

  )
}

export default ProjectTag