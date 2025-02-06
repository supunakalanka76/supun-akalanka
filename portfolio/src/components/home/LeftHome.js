import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {FaReact, FaHtml5, FaCss3, FaFigma, FaFacebook} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
// import {cv} from '../../assets/index.js'

function LeftHome() {

    const [text] = useTypewriter({
        words: ['UI Designer.', 'Web Designer.', 'Software Developer.', 'Professional Coder.', 'Web Developer.'],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 50,
        delay: 1500,
    });

  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5' >

          <h4 className='text-lg font-normal'>Welcome to My Creative Space!</h4>
          
          <h1 className='lgl:text-6xl sm:text-5xl font-bold text-white'>
            Hi, I'm {' '}
            <span className='text-designColor capitalize'> Supun Akalanka</span>
          </h1>

          <h2 className='lgl:text-4xl sm:text-2xl font-bold text-white'>
            a <span>{text}</span>
            <Cursor 
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#00ADB5'
            >
            </Cursor>
          </h2>

            <p className='text-base font-poppins leading-7 tracking-wide text-justify'>
              I am a passionate software and web developer with a keen interest in designing innovative and user-friendly applications. My journey in technology has equipped me with a solid foundation in coding and design principles, allowing me to create solutions that not only meet user needs but also enhance their experience. I thrive on challenges and continually seek opportunities to learn and grow in this dynamic field.
            </p>

            <div>
              <div className='pt-8 sm:pt-4'>
                <a 
                href='https://drive.google.com/file/d/17VI0KKIWnMBVOwDZeruK-bdum9wO0RB2/view?usp=sharing' 
                target='_blank'
                rel='noopener noreferrer'
                className='text-designColor hover:text-blue-600 duration-300'>
                  <button className='lgl:w-[35%] sm:w-[70%] h-12 rounded-3xl bg-gray-200 text-sm font-bold text-designColor tracking-wide uppercase hover:text-black duration-300 hover:bg-designColor'>Resume <span className='text-sm font-bold'> &gt;</span></button>
                </a>
              </div>
            </div>

            <div className='flex flex-col xl:flex-row lgl:gap-8 justify-items-start'>
              <div className='w-[70%]'>
                <h2 className='text-base uppercase font-poppins text-designColor mb-4 pt-10'>
                  Personal Information:
                </h2>
                <div className=' flex flex-col gap-4'>
                  <p>Name: <span>Supun Akalanka</span></p>
                  <p>Birth Day: <span>29<sup>th</sup> March 2003</span></p>
                  <p>Phone: <span>(+94) 785 766 794</span></p>
                  <p>Address: <span>Kurunegala, Sri Lanka</span></p>
                </div>
              </div>

              <div>
                <div className='flex flex-col pt-14 gap-4'>
                  <p>Email: <span>supunakalanka76@gmail.com</span></p>
                  <p>Degree: <span>BEng (Hons) in Software Engineering (TOP UP)</span></p>
                  <p>Experience: <span>2 Years</span></p>
                  <p>Freelance: <span>Available</span></p>
                </div>
              </div>
            </div>
        </div>

        <div className='flex flex-col xl:flex-row gap-6 lgl:gap-8 justify-between pb-6'>
        <div>
          <h2 className='text-base uppercase font-poppins text-designColor mb-4'>
            Connect with Me On:
          </h2>
          <div className='flex gap-4'>
            <span className='homeIcon'>
              <a href='https://www.facebook.com/supunakalanka76' target='_blank' rel='noopener noreferrer'>
                <FaFacebook />
              </a>
            </span>
            <span className='homeIcon'>
              <a href='https://www.linkedin.com/in/supunakalanka76/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
            </span>
            <span className='homeIcon'>
              <a href='https://github.com/supunakalanka76' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </span>
          </div>
        </div>

        <div className='lgl:ml-20 ml-0'>
        <h2 className='text-base uppercase font-poppins text-designColor mb-4'>
        Key Skills:
          </h2>
          <div className='flex gap-4'>
            <span className='homeIcon'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
                <FaReact />
              </a>
            </span>

            <span className='homeIcon'>
              <a href='https://www.w3.org/TR/2011/WD-html5-20110405/index.html' target='_blank' rel='noopener noreferrer'>
                <FaHtml5 />
              </a>
            </span>

            <span className='homeIcon'>
              <a href='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank' rel='noopener noreferrer'>
                <FaCss3 />
              </a>
            </span>

            {/* <span className='homeIcon'>
              <a href='https://laravel.com/' target='_blank' rel='noopener noreferrer'>
                <FaLaravel />
              </a>
            </span> */}

            <span className='homeIcon'>
              <a href='https://www.figma.com/' target='_blank' rel='noopener noreferrer'>
                <FaFigma />
              </a>
            </span>

            <span className='homeIcon'>
              <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
                <RiTailwindCssFill />
              </a>
            </span>
          </div>
        </div>
        </div>

      </div>
  )
}

export default LeftHome
