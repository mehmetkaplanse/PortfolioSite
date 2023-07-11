import React from 'react'
import myphoto from '../../assets/images/myphoto.jpg';
import Title from '../../components/ui/Title';


const Index = () => {
  return (
    <div>
        <Title>About Me</Title>
        <div className='flex flex-wrap-reverse mt-4 gap-4'>
          <div className='md:flex-1'>
            <p className='font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Esse quod, aut iste tempore excepturi cupiditate quae odio 
              blanditiis laborum reprehenderit soluta ex! Ex distinctio 
              placeat dolorum! Dolorem praesentium quaerat ipsum!
            </p>
            <br />
            <p className='font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Esse quod, aut iste tempore excepturi cupiditate quae odio 
              blanditiis laborum reprehenderit soluta ex! Ex distinctio 
              placeat dolorum! Dolorem praesentium quaerat ipsum!
            </p>
          </div>
          <div className='md:flex-1 p-2 border shadow-xl mb-auto'>
            <img src={myphoto} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
        </div>
    </div>
  )
}

export default Index