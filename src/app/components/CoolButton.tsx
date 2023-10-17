import React from 'react'
type CoolButtonTypes = {
    children: string, 
    Icon?: any,
}


export const CoolButton = ({children, Icon}:CoolButtonTypes) => {

  return (    
    <a href="#_" className="relative inline-block w-full sm:w-fit group">
        <span className="relative z-10 block overflow-hidden text-white transition-colors duration-500 ease-out border border-white px-6 py-3 rounded-full group-hover:text-black">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full"></span>
            <span className="absolute left-0 sm:w-48 w-[100vw] sm:h-48 h-[100vw] -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
            <span className="relative">
                {Icon && (
                    <Icon className="w-6 h-6 text-white inline-block mr-2 -mt-1 duration-500 transition-colors group-hover:text-black" />
                )}
                {children}
            </span>
        </span>
    </a>
  )
}