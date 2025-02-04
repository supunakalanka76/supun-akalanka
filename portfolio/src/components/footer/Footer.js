import React from 'react'
import { Link } from 'react-scroll'
// import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa6'
import {logo} from '../../assets/index.js'

function Footer() {
  return (
    <section id='footer' className='w-full pl-20 pr-10 py-20 h-auto border-b-[1px] border-b-designColor grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>
      <div className='w-full h-full flex flex-col gap-8'>
        <Link to='home' spy={true} smooth={true} offset={-70} duration={500}>
            <img src={logo} alt='logo'className='lgl:mt-28 w-32 cursor-pointer' />
        </Link>
        {/* <div className='flex gap-4'>
            <span className='homeIcon'>
                <a href='https://www.facebook.com/supunakalanka76' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook />
                </a>
            </span>
            <span className='homeIcon'>
                <a href='https://x.com/Supunakalanka76' target='_blank' rel='noopener noreferrer'>
                    <FaSquareXTwitter />
                </a>
            </span>
            <span className='homeIcon'>
                <a href='https://www.linkedin.com/in/supun-akalanka-420203294/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
            </span>
            <span className='homeIcon'>
                <a href='https://github.com/supunakalanka76' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
            </span>
        </div> */}
      </div>

      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>Quick Links:</h3>
        <ul className='flex flex-col gap-4 font-montserrat font-medium overflow-hidden py-6'>
            <li>
                <Link to='home' spy={true} smooth={true} offset={-70} duration={500} className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                    Home
                    <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </Link>
            </li>
            <li>
                <Link to='features' spy={true} smooth={true} offset={-70} duration={500} className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                    Features
                    <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </Link>
            </li>
            <li>
                <Link to='projects' spy={true} smooth={true} offset={-70} duration={500} className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                    Projects
                    <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </Link>
            </li>
            <li>
                <Link to='resume' spy={true} smooth={true} offset={-70} duration={500} className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                    Resume
                    <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </Link>
            </li>
            <li>
                <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                    Contact
                    <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </Link>
            </li>
        </ul>
      </div>
      
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>Resources:</h3>
        <ul className='flex flex-col gap-4 font-montserrat font-medium overflow-hidden py-6'>
            <li>
                <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://status.aws.amazon.com/" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>System Status<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://www.termsfeed.com/" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Terms of Service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Pricing<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://www.copyright.gov/" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Over Right<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
        </ul>
      </div>

      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>Developers:</h3>
        <ul className='flex flex-col gap-4 font-montserrat font-medium overflow-hidden py-6'>
            <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Documentation<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://firebase.google.com/docs/auth" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>API References<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Support<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
            <li>
                <a href="https://github.com/open-source" target="_blank" rel="noopener noreferrer">
                    <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Open Source<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </a>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
