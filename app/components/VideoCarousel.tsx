'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const videos: VideoItem[] = [
  { id: 1, src: '/videos/clip1.mp4', title: 'Truth Unveiled' },
  { id: 2, src: '/videos/clip2.mp4', title: 'Beyond Headlines' },
  { id: 3, src: '/videos/clip3.mp4', title: 'Raw Perspective' },
  { id: 4, src: '/videos/clip4.mp4', title: 'Unfiltered Lens' },
];

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
    },
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = () => {
      emblaApi.scrollNext();
    };

    const interval = setInterval(autoplay, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]); // Removed the duplicate dependency array

  return (
    <div className="embla relative w-full py-8">
      <div className="embla__viewport overflow-visible" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {videos.map((video) => (
            <div
              key={video.id}
              className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] min-w-0 px-2"
            >
              <div className="relative group h-34 md:h-40 rounded-2xl overflow-hidden shadow-2xl">
                {isMounted && (
                  <>
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover brightness-75"
                      aria-label={`Video: ${video.title}`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                        {video.title}
                      </h3>
                      <div className="w-12 h-1 bg-white mb-4 group-hover:translate-y-0 translate-y-2 transition-transform duration-300 delay-75" />
                      <p className="text-white/80 text-sm group-hover:translate-y-0 translate-y-2 transition-transform duration-300 delay-100">
                        Watch the full story
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}