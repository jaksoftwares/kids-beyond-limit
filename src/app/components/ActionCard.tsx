import { T_Action } from '@/lib/types'
import Image from 'next/image';
import React from 'react'


type ActionCardProps = {
    action: T_Action,
}

const ActionCard: React.FC<ActionCardProps> = ({ action }) => {
    const {
        title,
        imageUrl,
        description,
    } = action;


    return (
        <div className='flex flex-1 flex-col gap-2'>
            <div className='min-h-32 h-2/3 overflow-hidden'>
                <Image
                    src={imageUrl}
                    alt={`${title}`}
                    width={300}
                    height={300}
                />
            </div>
            <h2 className='font-bold'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ActionCard
