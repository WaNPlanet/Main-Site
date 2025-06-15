import React from 'react'
import Image from 'next/image'

const AudienceSection = () => {
  return (
    <div>
<section className="bg-[#F2C395] h-screen py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Our Audience */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Audience <span>💡</span></h2>
          <p className="text-sm text-gray-800">
            Everyone’s here—except those still using the internet like a fax machine.
          </p>

          {/* Avatar Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-center items-center py-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow">
                <Image 
                  src={`/images/audience${i}.jpg`} 
                  alt={`Audience ${i}`} 
                  width={96} 
                  height={96} 
                  className="object-cover w-full h-full" 
                />
              </div>
            ))}
          </div>

          {/* Tagline + CTA */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
            <p className="text-sm font-semibold">Fueling smarter fandom, one hot take at a time.</p>
            <a href="#" className="flex items-center gap-2 text-black font-semibold hover:underline">
              Check The News <span className="text-xl">➜</span>
            </a>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default AudienceSection