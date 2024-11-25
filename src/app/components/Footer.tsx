import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';


const Footer = () => {
    return (
        <>
            <div className="bg-white h-auto flex flex-col items-center text-center lg:text-start justify-center w:h-dvh lg:flex-row gap-16 lg:justify-around lg:items-start p-8 md:p-16 border-t">

                {/* Logo and Description */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0 border-b py-4 flex items-center justify-center flex-col lg:block lg:border-r">
                    <Image
                        src="/logo-no-backg.png"
                        alt="KBL Logo"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Kids Beyond Limits is committed to empowering children through sports and education. 
                        We believe in fostering growth and creating sustainable change for future generations. 
                        Join us in making an impact!
                    </p>
                </div>


                    {/* Quick Links */}
                    <div className=''>
                        <h3 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h3>
                        <ul className="flex flex-col space-y-2">
                            <li><Link href={siteConfig.links.home} className="text-gray-600 hover:text-orange-600 hover:underline">Home</Link></li>
                            <li><Link href={siteConfig.links.whoWeAre} className="text-gray-600 hover:text-orange-600 hover:underline">Who We Are</Link></li>
                            <li><Link href={siteConfig.links.missionVision} className="text-gray-600 hover:text-orange-600 hover:underline">Mission & Vision</Link></li>
                            <li><Link href={siteConfig.links.partners} className="text-gray-600 hover:text-orange-600 hover:underline">Our Partners</Link></li>
                            <li><Link href={siteConfig.links.contact} className="text-gray-600 hover:text-orange-600 hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-900">About Us</h3>
                        <ul className="flex flex-col space-y-2">
                            <li><Link href={siteConfig.links.team} className="text-gray-600 hover:text-orange-600 hover:underline">Our Team</Link></li>
                            <li><Link href={siteConfig.links.whatWedo} className="text-gray-600 hover:text-orange-600 hover:underline">What We Do</Link></li>
                            <li><Link href={siteConfig.links.pillars} className="text-gray-600 hover:text-orange-600 hover:underline">Our Pillars</Link></li>
                            <li><Link href={siteConfig.links.gallery} className="text-gray-600 hover:text-orange-600 hover:underline">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Social Media and Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-900">Follow Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <Link href="https://www.facebook.com" className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition hover:text-blue-600 duration-300">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="https://www.instagram.com" className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition hover:text-pink-600 duration-300">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </div>

                        <h3 className="font-semibold text-lg mb-4 text-gray-900">Get In Touch</h3>
                        <div className="flex space-x-4">
                            <Link href="mailto:info@kidsbeyondlimit.com" className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition">
                                <Mail className="w-6 h-6 hover:text-green-600" />
                            </Link>
                            <Link href="tel:+0724984502" className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition">
                                <Phone className="w-6 h-6 hover:text-green-600" />
                            </Link>
                        </div>
                    </div>
                </div>

            {/* Copyright Section */}
            <div className="w-full bg-gray-900 text-center text-white py-4">
                <p>&copy; {new Date().getFullYear()} Kids Beyond Limits. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;
