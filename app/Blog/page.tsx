'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const newsItems = [
  { id: 1, title: "A sculpture of the Laocoön group was vandalized...", img: "/1.webp" },
  { id: 2, title: "Mysterious artifact discovered in the desert...", img: "/2.jpg" },
  { id: 3, title: "Ancient city ruins found beneath the ocean...", img: "/3.jpg" },
  { id: 4, title: "Scientists uncover a new dinosaur species...", img: "/4.jpg" },
];

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 text-black font-sans h-screen md:overflow-hidden overflow-y-auto">
      {/* Navbar */}
      <nav className="shadow-md py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">Planet Speaks</Link>
        <ul className="flex space-x-6">
          <li><Link href="/Blog" className="text-gray-600 hover:text-black">Home</Link></li>
          <li><Link href="/Categories" className="text-gray-600 hover:text-black">Categories</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 md:h-[calc(100vh-120px)] gap-4">
        {/* Left Column */}
        <div className="space-y-2 col-span-1">
          <h5 className="text-xl font-bold">TODAY&apos;S NEWS</h5>
          <h6 className="text-lg font-semibold">60 Classic Cars Found in a Barn Go Up for Auction</h6>
          <p className="text-xs text-gray-700">
            <span className="font-bold">- Categories</span> • By Jenny Preston • 22 May 2022
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-bold">F</span>ortunately for those who want to see these cars...
          </p>
          <div className="relative h-40 w-full">
            <Image
              src="/1.webp"
              alt="Today's News"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-1 border-l pl-4 border-gray-400">
          <h3 className="font-bold text-md mb-5">More News</h3>
          <div className="space-y-2">
            {newsItems.map((news, index) => (
              <Link href={`/BlogRead/${news.id}`} key={index}>
                <div
                  className="flex justify-between items-start pb-2 hover:bg-gray-200 cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-full">
                    <h6 className="text-sm font-bold uppercase leading-tight">{news.title}</h6>
                    <div className="text-xs text-gray-700 mt-2 flex justify-between items-center">
                      <p className="flex space-x-1">
                        <span className="font-bold text-black">- Travel</span>
                        <span className="text-gray-600">• By Kyere</span>
                      </p>
                      <div className="relative w-4 h-4">
                        <Image
                          src="/foward.png"
                          alt="arrow"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 hidden md:flex justify-center items-center">
          <div className="relative w-full h-100 border-2 border-black shadow-lg">
            <Image
              src={hoveredIndex !== null ? newsItems[hoveredIndex].img : newsItems[0].img}
              alt="Hovered image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Breaking News */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-300 p-1 text-center text-xs">
        <Marquee speed={40}>
          🚨 Breaking News: Major tech breakthrough • Stock market sees record highs • New space mission announced
        </Marquee>
      </div>
    </div>
  );
}
