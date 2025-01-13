import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = ({ isDark, setIsDark }) => {
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

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeIndex = navs.findIndex(nav => nav.link === currentPath);
    setActive(activeIndex >= 0 ? activeIndex : 0);
  }, [window.location.pathname]);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <ul className='flex gap-x-2 sm:gap-x-4 items-center'>
          {navs.map((nav, i) => (
            <Link to={nav.link} key={i}>
              <li
                className={`rounded-3xl px-2 py-1 cursor-pointer ${
                  active === i 
                    ? (isDark ? 'bg-white text-black' : 'bg-black text-white')
                    : (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                }`}
                onClick={() => setActive(i)}
              >
                {nav.name}
              </li>
            </Link>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className={`p-2 ms-4 rounded-full transition-colors ${
            isDark 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <FaSun size={20} className="text-white" /> : <FaMoon size={20} className="text-gray-700" />}
        </button>
      </div>
    </div>
  )
}

export default Navbar