import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {logo} from '../../assets/index.js'
import {navLinksdata} from '../../constants/index.js'

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)
  console.log(showMenu)

  return (
    <div className='w-[100%] pl-10 pr-10 py-12 h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[3px] border-b-gray-600'> 
      <div>
        <Link to='home' spy={true} smooth={true} offset={-70} duration={500}>
          <img src={logo} alt='logo'
          className='cursor-pointer' />
        </Link>
        {/* <img 
        src={logo} 
        alt="logo"
        onClick={() => {
          window.location.href = '';
          window.location.reload();
        }} 
        className='cursor-pointer' /> */}
      </div>
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-20'>
            {
                navLinksdata.map(({_id, title, link})=>(
                    <li className='text-md font-bold text-gray-400 tracking-wide cursor-pointer relative group font-poppins' key={_id}>
                        <Link
                        activeClass='active'
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                          {title}</Link>
                        <span className='absolute left-0 top-6 w-0 h-[4px] bg-designColor transition-all duration-500 group-hover:w-full'></span>
                    </li>
                ))
            }
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className='text-3xl mdl:hidden w-20 h-20 inline-flex items-center justify-center text-designColor cursor-pointer -mr-10'>
          <FiMenu />
        </span>
        {
          showMenu && (
            <div className='w-[80%] h-screen overflow-scroll absolute top-0 -right-3 bg-gray-900 p-4 scrollbar-hide transition-transform'>
              <div className='flex flex-col gap-8 py-2 relative'>
                <div>
                  <img className='w-32' src={logo} alt="logo" />
                  <p className='text-sm text-gray-400 mt-2'>I am a passionate software and web developer with a keen interest in designing innovative and user-friendly applications. My journey in technology has equipped me with a solid foundation in coding and design principles, allowing me to create solutions that not only meet user needs but also enhance their experience.</p>
                </div>
                <ul className='flex flex-col gap-4'>
                  {
                    navLinksdata.map((item) => (
                      <li key={item._id} className='text-md font-bold text-gray-400 tracking-wide cursor-pointer font-poppins hover:text-designColor'>
                        <Link 
                        onClick={() => setShowMenu(false)}
                        activeClass='active'
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-base uppercase font-poppins'>
                    Find Me in:
                  </h2>
                  <div className='flex gap-4'>
                      <span className='footerIcon'>
                        <a href='https://www.facebook.com/supunakalanka76' target='_blank' rel='noopener noreferrer'>
                          <FaFacebook />
                        </a>
                      </span>
                      <span className='footerIcon'>
                        <a href='https://x.com/Supunakalanka76' target='_blank' rel='noopener noreferrer'>
                          <FaSquareXTwitter />
                        </a>
                      </span>
                      <span className='footerIcon'>
                        <a href='https://www.linkedin.com/in/supun-akalanka-420203294/' target='_blank' rel='noopener noreferrer'>
                          <FaLinkedin />
                        </a>
                      </span>
                      <span className='footerIcon'>
                        <a href='https://github.com/supunakalanka76' target='_blank' rel='noopener noreferrer'>
                          <FaGithub />
                        </a>
                      </span>
                    </div>
                  </div>
                <span onClick={() => setShowMenu(false)} className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer'>
                  <MdClose />
                </span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
