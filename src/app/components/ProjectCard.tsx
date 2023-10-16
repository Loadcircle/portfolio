import React from 'react'
import { projectTypes } from '../helpers/types'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import styles from './styles/ProjectSection.module.css';

export const ProjectCard = ({title, description, imgUrl, gitUrl, previewUrl}:projectTypes) => {
  return (
    <div className={`${styles['light-border-card']} rounded-xl`}>
        <div 
            className='h-52 md:h-72 relative group bg-cover bg-center'
            style={{
                backgroundImage: `url(${imgUrl})`,
            }}
        >
            <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 overflow-hidden flex justify-center items-center'>
                <Link 
                    className='mr-2 flex items-center justify-center h-14 w-14 border-2 relative rounded-full border-base hover:border-white translate-y-10 opacity-0 transition-all transition-duration-600 group-hover:translate-y-0 group-hover:opacity-100 group/link' 
                    href={gitUrl}>
                    <CodeBracketIcon className='h-10 w-10 cursor-pointer text-base group-hover/link:text-white'/>
                </Link>
                <Link 
                    className='flex items-center justify-center h-14 w-14 border-2 relative rounded-full border-base hover:border-white translate-y-10 opacity-0 transition-all transition-duration-600 group-hover:translate-y-0 group-hover:opacity-100 group/link' 
                    href={previewUrl}>
                    <EyeIcon className='h-10 w-10 cursor-pointer text-base group-hover/link:text-white'/>
                </Link>
            </div>
        </div>   
        <div className='text-white bg-[#181818] py-6 px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-base'>{description}</p>
        </div>
    </div>         
  )
}