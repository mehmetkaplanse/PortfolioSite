import React from 'react'
import Title from '../../components/ui/Title'

const Blog = () => {

  const projects = [
    {
      name: "Food Ordering",
      link: ""
    },
    {
      name: "Pos Application",
      link: "https://github.com/mehmetkaplanse/FullStackPosApp"
    },
    {
      name: "E-commerce App",
      link: "https://github.com/mehmetkaplanse/ecommerce-app-with-react"
    },
    {
      name: "LensLight",
      link: "https://github.com/mehmetkaplanse/Lenslight-Project-Nodejs-Express.js-"
    }
  ]

  return (
    <div>
      <Title>My Projects</Title>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          {
            projects.map((proje,i) => (
              <a href={proje.link} key={i}>
                <div className='border p-4 cursor-pointer shadow-lg'>
                <h4 className='font-semibold border-b inline-block text-lg mb-2'>{proje.name}</h4>
                <p className='font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sint rerum possimus, maiores illo earum beatae molestiae 
                  nostrum amet iure a, blanditiis ducimus? Minima nisi facilis 
                  fugiat maxime. Fugit, ipsam similique!
                </p>
                </div>
              </a>
            ))
          }
      </div>
    </div>
  )
}

export default Blog