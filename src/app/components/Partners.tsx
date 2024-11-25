"use client";
import React from "react";
import { partners } from "@/lib/constants";
import EmblaCarousel from "./EmblaCarousel";
import Image from "next/image";
import Link from "next/link";

interface PartnerCardProps {
  name: string;
  logoSize: number;
  externalLink: string;
  logoUrl: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  logoSize,
  externalLink,
  logoUrl,
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <Link
        href={externalLink}
        target="_blank"
        className="hover:opacity-75 transition-opacity md:grayscale hover:grayscale-0"
      >
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          width={logoSize}
          height={logoSize}
        />
      </Link>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Valuable Partners
      </h2>
      <div className="hidden md:block">
        <EmblaCarousel CardComponent={PartnerCard} items={partners} />
      </div>

      <div className="md:hidden">
        {partners.map((partner) => (
          <PartnerCard {...partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
