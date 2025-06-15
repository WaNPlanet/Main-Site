import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderSection = () => {
  return (
    <header className="bg-[#1C1917] text-[#F5F5F4] shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h3 className="text-2xl font-bold">
              Planet <span className="text-purple-700">Speaks</span>
            </h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-5 items-center mx-auto">
            {/* Services Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="hover:text-[#B45309] transition-colors duration-200 flex items-center"
              >
                Services
                <svg
                  className="w-4 h-4 inline ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-md shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#78716C]">
                <div className="flex">
                  <div className="w-1/2">
                    <Image
                      src="/images/nav.jpg"
                      alt="Services"
                      width={250}
                      height={200}
                      className="w-full h-full object-cover rounded-l-md"
                      priority
                    />
                  </div>
                  <div className="w-1/2 p-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Consulting</h4>
                      <p className="text-xs text-[#78716C]">
                        Tailored strategies to grow your brand fast.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Editing</h4>
                      <p className="text-xs text-[#78716C]">
                        We craft clean, powerful messages from your raw ideas.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Workshops</h4>
                      <p className="text-xs text-[#78716C]">
                        Learn storytelling, branding, and content strategy hands-on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="hover:text-[#B45309] transition-colors duration-200 flex items-center"
              >
                About
                <svg
                  className="w-4 h-4 inline ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-md shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#78716C]">
                <div className="flex">
                  <div className="w-1/2">
                    <Image
                      src="/images/nav.jpg"
                      alt="About Us"
                      width={250}
                      height={200}
                      className="w-full h-full object-cover rounded-l-md"
                      priority
                    />
                  </div>
                  <div className="w-1/2 p-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Our Story</h4>
                      <p className="text-xs text-[#78716C]">
                        How we became truth-seekers in a noisy world.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">The Team</h4>
                      <p className="text-xs text-[#78716C]">
                        Meet the analysts and editors behind the insights.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Methodology</h4>
                      <p className="text-xs text-[#78716C]">
                        Our rigorous approach to cutting through misinformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Chat Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="hover:text-[#B45309] transition-colors duration-200 flex items-center"
              >
                Let&apos;s Chat
                <svg
                  className="w-4 h-4 inline ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-md shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#78716C]">
                <div className="flex">
                  <div className="w-1/2">
                    <Image
                      src="/images/nav.jpg"
                      alt="Contact Us"
                      width={250}
                      height={200}
                      className="w-full h-full object-cover rounded-l-md"
                      priority
                    />
                  </div>
                  <div className="w-1/2 p-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Get in Touch</h4>
                      <p className="text-xs text-[#78716C]">
                        Send us your questions and feedback.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Book a Call</h4>
                      <p className="text-xs text-[#78716C]">
                        Schedule a consultation with our experts.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917]">Join the Team</h4>
                      <p className="text-xs text-[#78716C]">
                        We&apos;re always looking for sharp minds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <Link
            href="/Blog"
            className="relative text-[#1C1917] text-lg px-4 py-3 bg-[#F2C395] hover:bg-[#E5B887] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-[#B45309]/30 overflow-hidden"
          >
            <span className="relative z-10 cursor-pointer">EXPLORE</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;