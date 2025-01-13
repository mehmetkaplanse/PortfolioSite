import React, { useState } from 'react';
import Title from '../../components/ui/Title';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
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
              <a href='https://twitter.com/mehmetkaplanse' target='_blank' rel="noopener noreferrer">
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-cyan-500 to-blue-500
                  hover:scale-105 transition-transform'
                >
                  <BsTwitter className='text-3xl hover:opacity-70 cursor-pointer text-white' />
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