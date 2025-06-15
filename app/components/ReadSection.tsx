import React from 'react';
import Image from 'next/image';

const ReadSection = () => {
  return (
    <section className="bg-[#F5F5F4] py-16 px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Section Titles */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-purple-700">Read Some Stories</h2>
          <h3 className="text-lg md:text-xl font-medium text-gray-700">The untold story of trash talking as a strategy</h3>
        </div>
    
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="card bg-white w-full shadow-md rounded-xl overflow-hidden">
              <figure>
                <Image
                  src="/images/nba.jpg"
                  alt="NBA"
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-lg font-semibold mb-2 text-gray-500">Card Title</h2>
                <p className="text-sm text-gray-700">
                  A card component has a figure, a body part, and inside body there are title and actions parts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadSection;