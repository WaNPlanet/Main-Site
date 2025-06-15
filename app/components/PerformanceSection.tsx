import React, { useState } from 'react';
import Image from 'next/image';

interface PerformanceData {
  [key: string]: string;
}

const Performance = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const imageMap: PerformanceData = {
    '2023': '/images/performance1.jpg',
    '2024': '/images/performance1.jpg',
    '2025': '/images/performance2.jpeg',
  };

  return (
    <section className="bg-[#F5F5F4] py-16 px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F2C395]">
            Our Performance Data
          </h2>
          <p className="text-lg max-w-3xl">
            We started as a scrappy blog with a single mission: cut through the noise. Now,
            we&apos;re the go-to source for fans who crave real analysis, not recycled takes.
            Here&apos;s how far you&apos;ve taken us:
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex flex-col gap-6 font-bold text-4xl md:text-5xl text-center lg:text-left">
            {['2023', '2024', '2025'].map((year) => (
              <button
                key={year}
                type="button"
                onMouseEnter={() => setActiveYear(year)}
                onClick={() => setActiveYear(year)}
                className={`relative py-2 cursor-pointer transition-all duration-300 ${
                  activeYear === year
                    ? 'text-[#F2C395] scale-105'
                    : 'text-[#1C1917] opacity-70 hover:opacity-90 hover:text-[#78716C]'
                }`}
                aria-label={`Show ${year} performance data`}
              >
                {year}
                {/* Animated underline for active year */}
                {activeYear === year && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#F2C395] rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-[40%] h-[450px] relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageMap[activeYear]}
              alt={`Performance data for ${activeYear}`}
              fill
              priority={activeYear === '2024'}
              className="object-cover transition-all duration-700 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;