"use client"
import { statistics } from '@/lib/constants';
import React from 'react'
import CountUp from 'react-countup'


const ReachingLives = () => {
    return (
    <div className='bg-orange-gradient text-white relative h-[500px]' id='reaching-lives'>
            <div className='py-32 md:py-32  px-10 md:px-20  flex gap-4 flex-col'>
                <p className='font-medium text-xl md:text-4xl md:w-4/5 lg:text-6xl'>
                    We use sports to inspire young people to reach their full potential and access education opportunities through sports scholarships.
                </p>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="bg-white shadow-lg text-center md:text-left rounded-xl w-3/4 md:px-28 py-5 md:py-10 z-10 absolute top-20 left-1/2 md:top-20 lg:top-20 xl:top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="font-bold italic md:text-xl lg:text-2xl text-black text-center">Reaching Lives</h2>
                    <ul className="text-orange-primary flex flex-col lg:flex-row items-center justify-center text-center">
                        {statistics.map(({ name, value }) => {
                            return (
                                <li key={name} className="flex flex-col h-fit w-full">
                                    <div className='text-3xl md:text-4xl lg:text-7xl font-bold'>
                                        <CountUp
                                            end={value}
                                            duration={5}
                                            enableScrollSpy={true}
                                        />+
                                    </div>
                                    <span className="text-sm md:text-lg lg:text-xl font-semibold ">{name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReachingLives;
