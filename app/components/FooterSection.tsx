import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';

// Remove the empty interface and directly use React.SVGProps<SVGSVGElement>
function EnvelopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#F5F5F4] py-12 border-t border-[#78716C]/30">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center p-1">
                <Image
                  src="/planetspeaks.png"
                  alt="Planet Speaks Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="font-anton text-xl uppercase tracking-tight">Planet Speaks</h3>
            </div>
            <p className="font-aclonica text-[#F5F5F4]/80 text-sm">
              Cutting through the noise since 2023.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-anton uppercase text-lg mb-4 tracking-tight">Navigate</h4>
            <ul className="font-aclonica space-y-2 text-[#F5F5F4]/80">
              <li>
                <Link href="/" className="hover:text-[#F2C395] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F2C395] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F2C395] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#F2C395] transition-colors duration-200">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-anton uppercase text-lg mb-4 tracking-tight">Connect</h4>
            <ul className="font-aclonica space-y-2 text-[#F5F5F4]/80">
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span>hello@planetspeaks.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span>(+233) 53 072 9974</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPinIcon className="w-4 h-4" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-anton uppercase text-lg mb-4 tracking-tight">Stay Updated</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#F5F5F4]/10 border border-[#78716C]/50 rounded px-4 py-2 font-aclonica text-sm focus:outline-none focus:ring-1 focus:ring-[#F2C395]"
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="font-anton uppercase text-sm bg-[#F2C395] hover:bg-purple-800 text-white px-4 py-2 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#78716C]/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-aclonica text-[#F5F5F4]/60 text-sm">
            © {currentYear} Planet Speaks. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#F5F5F4]/60 hover:text-[#F2C395] transition-colors duration-200" aria-label="Twitter">
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#F5F5F4]/60 hover:text-[#F2C395] transition-colors duration-200" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#F5F5F4]/60 hover:text-[#F2C395] transition-colors duration-200" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}