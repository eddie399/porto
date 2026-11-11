import React from 'react'
import NavLinks from './NavLinks';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col items-center border-t border-slate-200 bg-white/95 py-4 dark:border-white/10 dark:bg-[#071014]/95'>
       
            {links.map((link, index) =>(
                <li key={index}>
                    <NavLinks href={link.path} title={link.title}/>
                </li>
            ))}
        
    </ul>
  );
};

export default MenuOverlay