import React from 'react';
import Image from 'next/image';

const JourneySection = () => {
  return (
    <section className="bg-[#F5F5F4] py-16 px-4 sm:px-6 lg:px-8 shadow-amber-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/journey.jpeg"
            alt="Our Journey Image"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#F2C395]">
            Our Journey
          </h2>

          <div className="space-y-6 text-base md:text-lg font-medium leading-relaxed">
            <p>
              From late-night debates to breaking news alerts—we started as a handful of fans who
              believed sports deserved better takes, fewer hot air takes.
            </p>
            <p>
              What began as a group chat full of screaming-caps rants evolved into a hub for
              unfiltered analysis, viral moments, and the kind of debates that end friendships.
            </p>
            <p>
              We&apos;ve been wrong, we&apos;ve been right, but we&apos;ve never been boring.
              <br />
              Still growing. Still arguing. Still hitting refresh at{' '}
              <strong className="font-bold">3 AM.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;