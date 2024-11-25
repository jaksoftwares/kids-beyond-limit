import { T_Pillar } from '@/lib/types'
import React from 'react'


type PillarCardProps = {
    pillar: T_Pillar,
}

const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => {
    const { title, description, imageUrl } = pillar;

    return (
        <div
            className="relative bg-no-repeat bg-cover p-4 h-64 sm:h-72 md:h-80 lg:h-96 flex rounded-xl shadow-xl"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 p-2 sm:p-4 w-full bg-gradient-to-t from-black via-transparent to-transparent rounded-b-2xl">
                <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">{title}</h2>
                <p className="text-white text-base sm:text-lg md:text-xl">{description}</p>
            </div>
        </div>
    );
}


export default PillarCard;
