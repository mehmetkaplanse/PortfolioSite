import React from 'react'
import Title from '../../components/ui/Title'

const Project = () => {
  // Gradient renk kombinasyonları
  const gradients = [
    'from-orange-500 to-red-500',       // Turuncu -> Kırmızı
    'from-emerald-400 to-cyan-500',     // Zümrüt -> Camgöbeği
    'from-indigo-500 to-purple-500',    // İndigo -> Mor
    'from-yellow-400 to-amber-500',     // Sarı -> Kehribar
    'from-teal-400 to-blue-600',        // Turkuaz -> Koyu Mavi
    'from-rose-400 to-pink-600',        // Gül -> Pembe
    'from-lime-400 to-green-600',       // Açık Yeşil -> Koyu Yeşil
    'from-violet-500 to-fuchsia-500',   // Menekşe -> Fuşya
    'from-sky-400 to-indigo-600',       // Gök Mavisi -> Lacivert
    'from-amber-400 to-orange-600'      // Kehribar -> Koyu Turuncu
];
  // Her proje için random gradient seçme fonksiyonu
  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
  };

  const projects = [
    {
      name: "ShopMe",
      link: "https://shopme-brown.vercel.app/",
      gradient: getRandomGradient()
    },
    {
      name: "Food Ordering",
      link: "https://food-ordering-eta.vercel.app/",
      gradient: getRandomGradient()
    },
    {
      name: "Pos Application",
      link: "https://github.com/mehmetkaplanse/FullStackPosApp",
      gradient: getRandomGradient()
    },
    {
      name: "E-commerce App",
      link: "https://github.com/mehmetkaplanse/ecommerce-app-with-react",
      gradient: getRandomGradient()
    },
    {
      name: "LensLight",
      link: "https://github.com/mehmetkaplanse/Lenslight-Project-Nodejs-Express.js-",
      gradient: getRandomGradient()
    }
  ];

  return (
    <div>
      <Title>My Projects</Title>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          {
            projects.map((project, i) => (
              <a href={project.link} key={i} target="_blank" rel="noopener noreferrer">
                <div className={`border p-4 cursor-pointer shadow-lg 
                  bg-gradient-to-r ${project.gradient}
                  dark:bg-gradient-to-r dark:border-gray-700 dark:opacity-90
                  rounded-xl hover:scale-105 transition-all h-[100px]
                  group`}>
                  <h4 className='font-semibold border-b border-white/20 
                    inline-block mb-2 sm:text-xl text-lg text-white'>{project.name}</h4>
                  <p className='text-white font-semibold flex justify-end 
                    group-hover:translate-x-2 transition-transform'>
                    View
                  </p>
                </div>
              </a>
            ))
          }
      </div>
    </div>
  )
}

export default Project