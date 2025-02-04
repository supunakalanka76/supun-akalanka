import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function FooterBottom() {
  return (
    <div className='w-full py-10 flex flex-col'>
        <div>
            <p className='text-center text-white text-base'>
            © 2025 All rights reserved. | <span className="text-red-500">❤️</span> Supun Akalanka.
            </p>
        </div>
        <div className='flex items-center justify-center gap-4 pt-4'>
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
                <span className='footerIcon'>
                    <a href='https://www.instagram.com/supun_akalanka7/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram />
                    </a>
                </span>
            </div>
    </div>
  )
}

export default FooterBottom
