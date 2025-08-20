import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'dark:text-white border-b border-cyan-400' : 'text-cyan-900'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 text-semibold text-cyan-900 hover:text-cyan-500 dark:text-white ${buttonClasses}`}>
        {children}

        </p>
    </button>
    
  )
}

export default TabButton