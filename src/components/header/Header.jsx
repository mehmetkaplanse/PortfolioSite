import React from 'react'
import {SlSocialInstagram} from 'react-icons/sl';

const Header = () => {

  return (
    <div className='border mx-auto my-20 bg-white 
      md:max-w-2xl rounded-2xl sm:max-w-lg max-w-md shadow-2xl'>
        <div className='p-10 w-full'>
            {/* header */}
              <div className='flex justify-between items-center py-2'>
                <a href="/"><h4 className='text-2xl'>Mehmet Kaplan</h4></a>
                <span className='font-extralight md:text-lg text-sm'>- Software Developer</span>
              </div>
              <div className='border-b mt-4'></div>

            {/* navbar */}
            <div className='mt-6'>
              <ul className='flex gap-x-4 items-center'>
                <li className='rounded-3xl px-2 py-1 cursor-pointer bg-black text-white'>About</li>
                <li className='rounded-3xl px-2 py-1 cursor-pointer'>Blog</li>
                <li className='rounded-3xl px-2 py-1 cursor-pointer'>Contact</li>
              </ul>
            </div>

            {/* content */}
          

            <div className='border-b my-10'></div>

            {/* footer */}
            <div className='flex gap-2 items-center'>
                <SlSocialInstagram width={24} />
                <a href="https://www.instagram.com/mehmetkaplan0/" target='_blank'>
                <span className='font-semibold text-sm'>@mehmetkaplan0</span>
                </a>
                
                <span className='font-light'>
                  Follow me on Instagram
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header