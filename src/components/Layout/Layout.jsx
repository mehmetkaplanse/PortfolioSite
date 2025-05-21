import React, { useState, useEffect } from 'react'
import { SlSocialInstagram } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Layout = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`border mx-auto sm:my-20 my-5 rounded-2xl shadow-2xl 
      md:max-w-2xl sm:max-w-lg max-w-sm ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black'}`}>
        <div className='p-10 w-full'>
            {/* header */}
            <div className='flex justify-between items-center py-2'>
              <div><h4 className='sm:text-3xl text-lg select-none drop-shadow-lg'>Mehmet Kaplan</h4></div>
              <span className='font-extralight sm:text-lg text-xs'>- Software Engineer</span>
            </div>
            <div className={`border-b mt-4 ${isDark ? 'border-gray-700' : ''}`}></div>
              
            {/* navbar */}
            <Navbar isDark={isDark} setIsDark={setIsDark} />

            {/* content */}
            <main>
              {children}
            </main>

            <div className={`border-b my-10 ${isDark ? 'border-gray-700' : ''}`}></div>

            {/* footer */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                  <SlSocialInstagram size={24} />
                  <a 
                    href="https://www.instagram.com/mehmetkaplan0/" 
                    target='_blank'
                    rel="noopener noreferrer"
                    className={isDark ? 'text-white' : 'text-black'}
                  >
                    <span className='font-semibold text-sm'>@mehmetkaplan0</span>
                  </a>
                </div>
                <span className='font-light'>
                  Follow Me
                </span>
            </div>
        </div>
    </div>
  )
}

export default Layout