import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-white border-b border-blue-400' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 tet-semibold hover:text-white ${buttonClasses}`}>
        {children}

        </p>
    </button>
    
  )
}

export default TabButton