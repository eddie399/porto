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
        value: '2',
        postfix: '+',
    },
    {
        metrics: 'Years',
        value: '6',
        postfix: '+',
    },

]


const Achievements = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-12'>
        <div className="sm:border-cyan-900 shadow-sm sm:border rounded-md py-8 px-19 flex flex-row items-center justify-between">
            {
                achievementList.map((achievement, index) => {
                    return (
                        <div 
                        
                        className='hidden lg:block flex-col items-center justify-center mx-1'
                        key={index}>
                            <h2
                            
                              className='text-orange-500 text-4xl font-bold flex flex-row'
                            >
                                {achievement.prefix}
                                <AnimatedNumbers 
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-cyan-900 dark:text-white text-4xl font-bold"
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
                            className='text-base text-[#ADB7BE] '
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