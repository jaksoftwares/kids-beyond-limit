import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'


type LearnMoreProps = {
    url: string,
}

const LearnMore: React.FC<LearnMoreProps> = ({ url }) => {
    return (
        <Button className='bg-blue-light hover:bg-blue-pale font-extrabold px-4 w-fit' asChild>
            <Link href={url}>
                Learn More
            </Link>
        </Button>
    );
}


export default LearnMore;
