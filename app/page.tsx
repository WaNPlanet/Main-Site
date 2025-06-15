'use client';
import Image from 'next/image';
import VideoCarousel from './components/VideoCarousel';
import ContactSection from './components/ContactSection';
import ReadSection from './components/ReadSection';
import PerformanceSection from './components/PerformanceSection';
import MissionVisionSection from './components/MissionVisionSection';
import JourneySection from './components/JourneySection';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';

export default function PlanetSlideOne() {
  return (
    <>
      {/* Hero Section - Updated earthy palette */}
      <section className="min-h-screen bg-[#F5F5F4] flex flex-col overflow-hidden">
        <HeaderSection />

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-between w-full">
          {/* Headlines - Now in rich black */}
          <div className="text-center mt-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1C1917] mb-2">
              YOU WANT TRUTH?
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1C1917] mb-3">
              WE <span className="text-[#F2C395]">CUT</span> THROUGH THE{' '}
              <span className="text-purple-700">NOISE</span>.
            </h2>
            <p className="text-[#78716C] max-w-2xl mx-auto text-sm md:text-base">
              We don&apos;t just report the news—we unpack it. Bite-sized.
              <br />
              No fluff. Always ahead of the game. Stay locked in.
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full max-w-6xl flex-1 flex items-center">
            <VideoCarousel />
          </div>

          {/* Footer Section */}
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
            {/* Text Block */}
            <div className="p-4 rounded-lg shadow-md max-w-xs flex items-center gap-4 border border-[#78716C] bg-white">
              <div className="flex-1">
                <p className="text-[#1C1917] text-sm md:text-base leading-tight">
                  Words for the
                  <br />
                  overthinkers, the
                  <br />
                  curious, and the
                </p>
              </div>
              <div className="relative h-[4.5rem] w-[4.5rem] flex-shrink-0">
                <Image
                  src="/videos/clip1.jpg"
                  alt="Video preview thumbnail"
                  width={72}
                  height={72}
                  className="rounded-lg object-cover h-full w-full"
                  priority
                />
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center my-8">
              <a
                href="#contact"
                className="text-[#1C1917] text-2xl md:text-3xl cursor-pointer animate-bounce"
                aria-label="Scroll to contact section"
              >
                ↓
              </a>
            </div>

            {/* Logo */}
            <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-md border border-[#78716C]">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/planetspeaks.png"
                  alt="Planet Speaks Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Mission/Vision Section - Updated */}
      <MissionVisionSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Read Section */}
      <ReadSection />

      {/* Performance Section */}
      <PerformanceSection />

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
      
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}