import React from 'react'

const ACHIEVEMENTS_DATA = [
    {
        metric: 'Projects',
        value: '100+',
    },
    {
        metric: 'Users',
        value: '~100',
    },    
    {
        metric: 'Awards',
        value: '7',
    },
    {
        metric: 'Years',
        value: '5',
    },   

];

export const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353f] sm:border rounded-md py-8 px-17 flex flex-col gap-5 sm:flex-row items-center justify-between px-4'>
            {ACHIEVEMENTS_DATA.map((achievement, index) => (
                <div key={index} className="flex flex-col items-center justify-center mx-4">
                    <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
                    <p className="text-base text-base">{achievement.metric}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
