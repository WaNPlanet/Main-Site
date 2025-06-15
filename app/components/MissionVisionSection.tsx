import React from 'react'
import Image from 'next/image';

const MissionVisionSection = () => {
  return (
    <>
   <section className="h-screen bg-[#F5F5F4] text-[#404040] flex items-center justify-center px-4 shadow-2xl">
  <div className="max-w-6xl w-full h-full overflow-hidden py-8 flex flex-col justify-center space-y-12">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-purple-900">What We Believe</h2>

    {/* VISION Block */}
    <div className="flex flex-col md:flex-row items-center gap-6">
      <Image
        src="/images/vision.jpg"
        alt="Vision"
        width={240}
        height={160}
        className="rounded-xl shadow-md object-cover w-full md:w-1/2 max-h-[200px]"
      />
      <div className="md:w-1/2 space-y-2 text-center md:text-left">
        <h3 className="text-xl font-bold text-purple-800">VISION</h3>
        <p className="text-sm leading-relaxed">
          A world where every fan gets the truth, not the hype. Where passion meets perspective,
          and debates never die.
        </p>
        <p className="text-sm font-medium">Basketball isn’t just a game—it’s a war of wits. We’re your generals.</p>
      </div>
    </div>

    {/* MISSION Block */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
      <Image
        src="/images/mission.jpeg"
        alt="Mission"
        width={240}
        height={160}
        className="rounded-xl shadow-md object-cover w-full md:w-1/2 max-h-[200px]"
      />
      <div className="md:w-1/2 space-y-2 text-center md:text-left">
        <h3 className="text-xl font-bold text-purple-800">MISSION</h3>
        <p className="text-sm leading-relaxed">
          To deliver the stories that matter—fast, fearless, and unfiltered.
          We cut through the noise so you don’t have to.
        </p>
        <p className="text-sm font-medium">We don’t do clickbait—we drop truth bombs.</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default MissionVisionSection