"use client";

import React from "react";
import Image from "next/image";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
];

const Hero = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={HERO_IMAGES[0]}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
      </div>
    </div>
  );
};

export default Hero;
