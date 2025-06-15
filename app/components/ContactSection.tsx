 'use client';

import React from 'react';

export default function ContactSection() {
  return (
 
 <section className="bg-[#F5F5F4] px-6 py-16 flex flex-col items-center">
  {/* Header */}
  <h2 className="text-5xl font-extrabold text-purple-700 mb-16 text-center">
    Have Questions?
  </h2>

  {/* Content Grid */}
  <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12">
    
    {/* Left Contact Info */}
    <div className="text-left max-w-md w-full space-y-6 text-lg text-gray-800">
      <div>
        <h4 className="font-bold text-xl">Contact Us</h4>
      </div>
      <div>
        <p className="font-semibold">Mail</p>
        <p>koy.affiliate001@gmail.com</p>
      </div>
      <div>
        <p className="font-semibold">Availability</p>
        <p>Always available 24/7</p>
      </div>
    </div>

    {/* Right Contact Form */}
    <form className="bg-[#1C1917] rounded-xl p-8 w-full max-w-xl space-y-6 shadow-2xl">
      <div>
        <label className="block font-medium text-[#F5F5F4]">Name</label>
        <input
          type="text"
          className="w-full mt-1 p-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div>
        <label className="block font-medium text-[#F5F5F4]">Mail</label>
        <input
          type="email"
          className="w-full mt-1 p-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div>
        <label className="block font-medium text-[#F5F5F4]">Subject</label>
        <input
          type="text"
          className="w-full mt-1 p-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div>
        <label className="block font-medium text-[#F5F5F4]">Message</label>
        <textarea
          rows={4}
          className="w-full mt-1 p-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>

  );
}