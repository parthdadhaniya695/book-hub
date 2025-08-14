import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='relative bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 md:p-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white'>
        
        {/* Brand Section */}
        <div>
          <h2 className='text-xl font-bold mb-3 tracking-wide'>BOOKHUB</h2>
          <p className='text-gray-400 text-sm leading-relaxed'>
            Your gateway to knowledge. Explore, read, and learn with ease.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='space-y-4'>
          <h3 className='font-semibold text-lg'>Quick Links</h3>
          <div className='flex flex-col gap-2 text-sm md:text-base'>
            {["Home", "About Us", "Contact Us", "Catalog"].map((link, i) => (
              <Link 
                key={i} 
                href="#" 
                className='relative group w-fit'
              >
                <span className='hover:text-yellow-400 transition-colors'>{link}</span>
                <span className='absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className='space-y-4'>
          <h3 className='font-semibold text-lg'>Resources</h3>
          <div className='flex flex-col gap-2 text-sm md:text-base'>
            {["Privacy Policy", "Terms of Service", "Accessibility", "FAQs"].map((link, i) => (
              <Link 
                key={i} 
                href="#" 
                className='relative group w-fit'
              >
                <span className='hover:text-yellow-400 transition-colors'>{link}</span>
                <span className='absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className='font-semibold text-lg mb-4'>Follow Us</h3>
          <div className='flex gap-4 text-gray-400'>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className='p-2 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors'
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className='mt-8'>
        <Separator className='bg-gray-700' />
      </div>

      {/* Bottom small text */}
      <div className='mt-4 text-center text-gray-500 text-xs'>
        © {new Date().getFullYear()} BOOKHUB. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
