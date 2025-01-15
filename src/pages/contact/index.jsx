import React, { useState } from 'react';
import Title from '../../components/ui/Title';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiTwitterXLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";



import emailjs from 'emailjs-com';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('Environment Variables:', {
      serviceId: process.env.REACT_APP_EMAIL_SERVICE_ID,
      templateId: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY
    });

    try {
      const templateParams = {
        from_name: `${formData.name} ${formData.surname}`,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Mehmet Kaplan',
      };

      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );

      setMessage('Message sent successfully!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title>Contact Me</Title>
      <div className='mt-4'>
        <p className='font-light sm:text-lg text-base'>
          If you have any questions, suggestions, or just want to say hello, feel free to reach out to me. I would
          love to hear from you!
        </p>
        <a
          href='mailto:mehmetkaplanse@gmail.com'
          className='my-4 border p-2 rounded-xl sm:inline-block flex justify-center sm:mx-auto mx-4 shadow-xl'
        >
          <div className='flex gap-1 items-center sm:text-base text-sm '>
            <HiOutlineMail className='text-2xl ' />
            mehmetkaplanse@gmail.com
          </div>
        </a>
        <div>
          <Title addClass={'!text-xl !font-medium text-center'}>Social Media</Title>
          <div className='mt-4 flex flex-col items-center gap-4'>
            <ul className='grid grid-cols-4 gap-4'>
              <a href='https://www.instagram.com/mehmetkaplan0/' target='_blank' rel="noopener noreferrer">
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-yellow-500 to-pink-500
                  hover:scale-105 transition-transform'
                >
                  <FaInstagram className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
              <a href='https://x.com/mehmetkaplanse' target='_blank' rel="noopener noreferrer">
                <li
                  className="flex gap-4 border border-gray-300 px-2 py-2 rounded-lg
                  justify-center items-center cursor-pointer shadow-lg
                  bg-gradient-to-r from-gray-400 via-gray-800 to-gray-900
                  hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
                >

                  {/* Custom SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    className="fill-white hover:fill-gray-200 transition-colors duration-200"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </li>

              </a>
              <a href='https://www.linkedin.com/in/mehmet-kaplan-50583b23a/' target='_blank' rel="noopener noreferrer">
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-blue-500 to-gray-800
                  hover:scale-105 transition-transform'
                >
                  <AiFillLinkedin className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
              <a href='https://github.com/mehmetkaplanse' target='_blank' rel="noopener noreferrer">
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-cyan-950 to-gray-950
                  hover:scale-105 transition-transform'
                >
                  <BsGithub className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
            </ul>
            <div className='border-b border-gray-500 w-1/4 my-4'></div>
          </div>
        </div>
        <Title>Leave a Message</Title>
        <form onSubmit={handleSubmit}>
          <div className='mt-6 flex flex-col'>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <Input 
                placeholder='Your Name' 
                required 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input 
                placeholder='Your Surname' 
                required 
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
            <Input 
              placeholder='Email' 
              type="email"
              required 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className='border p-4 outline-none rounded-xl my-2 dark:text-black'
              placeholder='Your Message...'
              required
            ></textarea>
            <span 
              className={`sm:text-base text-xs text-center my-2 
                ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}
            >
              {message}
            </span>
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;