import { siteConfig } from '@/lib/site-config'
import Image from 'next/image'
import React from 'react'

const KblLogo = () => {
    return (
        <Image
            src={siteConfig.miniLogoUrl}
            alt={`${siteConfig.name}'s Logo`}
            width={80}
            height={80}
            className="w-auto h-auto"
        />
    );
}

export default KblLogo;
