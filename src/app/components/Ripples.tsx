"use client"

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import "../ripples.css"


const Ripples = () => {
    
    const [ripples, setRipples] = useState<{ x: number; y: number; key: number }[]>([]);

    const handleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { x, y, key: Date.now() };
        setRipples((prev) => [...prev, newRipple]);
        // setIsVisible(true); // Show the div
        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.key !== newRipple.key));
        }, 3000);


    };



    return (
        <section onClick={handleClick} id='rippleContainer' className='select-none relative  h-96 gap-2 overflow-hidden flex flex-col items-center py-96 justify-center text-white bg-blue-gradient md:px-48 text-center mt-20'>
            <p className='z-40 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold w-4/5 mx-auto'>We&apos;re creating a ripple effect that&apos;s changing families, communities, and futures.</p>
            <Button asChild className='bg-orange-dark z-40 hover:bg-orange-primary w-fit'>
                <Link href={`${siteConfig.links.contact}`}>
                    <div className='flex gap-3 items-center text-base md:text-xl py-2 justify-center'>
                        <span>Let&apos;s create change together</span> <ArrowRight />
                    </div>
                </Link>
            </Button>
            
            {ripples.map((ripple) => (

                <div
                    className="ripple "
                    style={{
                        width: '25px',
                        height: '25px',
                        position: 'absolute',
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -50%)',
                        top: `${ripple.y}px`,
                        left: `${ripple.x}px`,
                    }}
                    key={ripple.key}
                >
                </div>
                ))}
            
        </section>
    )
}

export default Ripples
