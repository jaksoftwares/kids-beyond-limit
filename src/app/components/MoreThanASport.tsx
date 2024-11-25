import React from 'react';
import RoundedImageCard from './RoundedImageCard';
import { benefits } from '@/lib/constants';
import { CheckCheck } from 'lucide-react';


const MoreThanASport = () => {
    return (
        <div className="bg-orange-gradient text-white flex flex-col lg:flex-row py-20 px-2 lg:px-32 xl:px-64 justify-between">
            <div className="mx-auto">
                <RoundedImageCard
                    imageUrl='/more-than-a-sport-bg-img.png'
                    alt='Girl throwing ball'
                    size={400}
                />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left">
                    More than a sport: Handball for hope.
                </h2>
                <p className="my-5 px-2 md:px-0 text-center lg:text-left">
                    We believe that sports is a school that allows learning in a playful and fun manner, and gain fundamental skills.
                </p>
                <ul className="flex flex-col gap-3 lg:gap-5 px-5">
                    {benefits.map(benefit => (
                        <li key={benefit} className="flex gap-3 items-start">
                            <CheckCheck className="min-w-[24px]" />
                            <span className="text-sm sm:text-base">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default MoreThanASport;
