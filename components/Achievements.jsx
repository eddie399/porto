"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
 () => {
    return import("react-animated-numbers");

 },
  {ssr: false}  
);

const achievementList = [
    {
        metrics: 'Projects',
        value: '100',
        postfix: '+'
    },
    {
        prefix: '~',
        metrics: 'Users',
        value: '100',
    },
    {
        metrics: 'Awards',
        value: '7',
    },
    {
        metrics: 'Years',
        value: '6',
        postfix: '+',
    },

]


const Achievements = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-19 flex flex-row items-center justify-between">
            {
                achievementList.map((achievement, index) => {
                    return (
                        <div 
                        
                        className='flex flex-col items-center justify-center mx-2'
                        key={index}>
                            <h2
                            
                              className='text-white text-4xl font-bold flex flex-row'
                            >
                                {achievement.prefix}
                                <AnimatedNumbers 
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-white text-4xl font-bold"
                                configs={((_, index) => {
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tension: 140 * (index + 1),
                                    }

                                })}
                                />
                                {achievement.postfix}
                            </h2>
                            <p
                            className='text-base text-[#ADB7BE]'
                            >{achievement.metrics}</p>
                        </div>
                    )
                })
            }
        </div>    
    </div>
  )
}

export default Achievements