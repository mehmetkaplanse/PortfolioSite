import React from 'react'
import myphoto from '../../assets/images/myphoto.jpg';
import mycv from '../../assets/cv/mycv.pdf';
import Title from '../../components/ui/Title';
import {HiDownload} from 'react-icons/hi'



const Index = () => {


  const skills = ["Html","Css","Javascript","Tailwind","React.js",
          "Node.js","Java","C#",".Net Core","MongoDB","MsSql"];

  return (
    <div>
        <Title>About Me</Title>
        <div className='flex flex-wrap-reverse mt-4 gap-6'>
          <div className='md:flex-1'>
            <p className='font-light text-lg'>Hey! I am Mehmet, a software engineering student, 
            and also full stack developer.
            I currently live in Mersin, TURKEY.
            </p>
            <div className='mt-4 p-1 border bg-gray-100 inline-block text-blue-400 sm:text-base text-sm'>
              <a href={mycv} download>
                  <div className='flex gap-2 items-center'>
                    <HiDownload />
                    Download CV
                  </div>
              </a>
            </div>
            <div>
                <Title>Skills</Title>
                <div className='mt-4 grid grid-cols-3 gap-2'>
                    {
                      skills.map((skill,i) => (
                        <span className='border text-sm border-black text-center
                        py-1 px-2 rounded-md hover:bg-gray-800 hover:text-white'
                        key={i}>{skill}</span>
                      ))
                    }
                </div>
            </div>
          </div>
          <div className='md:flex-1 p-2 border shadow-xl mb-auto rounded-full'>
            <img src={myphoto} alt="" 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className='rounded-full' />
          </div>
        </div>
    </div>
  )
}

export default Index