import { T_NavLink as NavLinkProps } from '@/lib/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const NavLink: React.FC<NavLinkProps> = ({ name, link }) => {
    const path = usePathname();


    const pathStartIndex = link.indexOf('/', link.indexOf('//') + 2);
    const isActive = path === link.slice(pathStartIndex);


    return (
        <Link
            href={link}
            className={`hover:text-orange-primary hover:-translate-y-1 transition duration-300 lg:text-xl ${isActive ? 'text-orange-primary' : ''}`}
        >
            <span>{name}</span>
        </Link>
    );
};

export default NavLink;
