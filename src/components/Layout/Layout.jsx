import React, { useState } from 'react'
import {SlSocialInstagram} from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {

  const [active, setActive] = useState(0);
  const navs = [
    {
      name: "About",
      link: "/"
    },
    {
      name: "Projects",
      link: "/projects"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ];

  return (
    <div className='border mx-auto sm:my-20 my-5 bg-white 
      md:max-w-2xl rounded-2xl sm:max-w-lg max-w-sm shadow-2xl'>
        <div className='p-10 w-full'>
            {/* header */}
              <div className='flex justify-between items-center py-2'>
                <Link to={"/"}><h4 className='sm:text-3xl text-lg'>Mehmet Kaplan</h4></Link>
                <span className='font-extralight sm:text-lg text-xs'>- Software Developer</span>
              </div>
              <div className='border-b mt-4'></div>
              
            {/* navbar */}
            <div className='mt-6'>
              <ul className='flex gap-x-4 items-center'>
              {navs.map((nav, i) => (
                <Link to={nav.link}>
                    <li
                    key={i}
                    className={`rounded-3xl px-2 py-1 cursor-pointer ${
                        active === i && 'bg-black text-white'
                    }`}
                    onClick={() => setActive(i)}
                    >
                    {nav.name}
                    </li>
                </Link>
                ))}
              </ul>
            </div>

            {/* content */}
            <main>
            {children}
            </main>

            <div className='border-b my-10'></div>

            {/* footer */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                  <SlSocialInstagram width={24} />
                  <a href="https://www.instagram.com/mehmetkaplan0/" target='_blank'>
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