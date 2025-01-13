import React, { useEffect, useState } from 'react'
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import mycv from '../../assets/cv/mycv.pdf';
import Title from '../../components/ui/Title';
import {HiDownload} from 'react-icons/hi'



const Index = () => {

  const photos = [photo1, photo2, photo3];
  const [currentPhoto, setCurrentPhoto] = useState(0);


  const skills = ["Html","Css","Javascript","Tailwind","React-Vue","Typescript",
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
            <div className='mt-4 p-1 border bg-gray-100 inline-block text-blue-400 dark:text-black sm:text-sm text-sm rounded-lg shadow-md'>
              <a href={'https://drive.google.com/drive/u/0/folders/1tvvVXZhr7EBYJpoUCj1n71RxCxVGpmHX'} target='_blank'>
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
                        <span className='border md:text-xs text-sm border-black dark:border-white text-center
                        py-1 px-2 rounded-md hover:bg-gray-800 hover:text-white'
                        key={i}>{skill}</span>
                      ))
                    }
                </div>
            </div>
          </div>
          <div className='md:flex-1 p-2 border shadow-xl mb-auto rounded-full'>
            <div className='rounded-full overflow-hidden'>
              <img
                src={photos[currentPhoto]}
                alt=""
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index